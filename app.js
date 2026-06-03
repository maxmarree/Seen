// ─── State ────────────────────────────────────────────────────
let seenList        = JSON.parse(localStorage.getItem('seenAnimals')) || [];
let currentCategory = 'All';
let activeAnimalId  = null;
let searchQuery     = '';

const CATEGORIES = ['All', 'Mammals', 'Birds', 'Reptiles', 'Amphibians'];

// ─── Image cache ──────────────────────────────────────────────
const thumbCache = {};
const largeCache = {};

async function fetchWikiImage(animal, elementId, isBackground = false) {
  const cache = isBackground ? largeCache : thumbCache;
  const size  = isBackground ? 800 : 200;
  const id    = animal.id;

  if (id in cache) { applyImage(cache[id], elementId, isBackground); return; }

  const buildUrl = (title) =>
    `https://en.wikipedia.org/w/api.php?action=query` +
    `&titles=${encodeURIComponent(title)}` +
    `&prop=pageimages&format=json&pithumbsize=${size}&origin=*&redirects=1`;

  const tryFetch = async (title) => {
    const res = await fetch(buildUrl(title));
    const d   = await res.json();
    const pages = d.query.pages;
    const pid   = Object.keys(pages)[0];
    return (pid !== '-1' && pages[pid].thumbnail) ? pages[pid].thumbnail.source : null;
  };

  try {
    const url = (await tryFetch(animal.scientificName)) || (await tryFetch(animal.commonName));
    cache[id] = url;
    applyImage(url, elementId, isBackground);
  } catch { cache[id] = null; }
}

function applyImage(url, elementId, isBackground) {
  if (!url) return;
  const el = document.getElementById(elementId);
  if (!el) return;
  isBackground ? (el.style.backgroundImage = `url('${url}')`) : (el.src = url);
}

// ─── Rendering helpers ────────────────────────────────────────
function placeholderSvg(letter) {
  return `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><rect width='50' height='50' fill='%23E0E0E0'/><text x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%23999'>${letter}</text></svg>`;
}

function createCardHTML(animal) {
  const isSeen  = seenList.includes(animal.id);
  const rarity  = RARITY[animal.id] || 'Common';
  const cached  = thumbCache[animal.id];
  const imgSrc  = cached ? cached : placeholderSvg(animal.commonName.charAt(0));

  return `
    <div class="animal-card" data-id="${animal.id}">
      <img class="animal-img" id="img-${animal.id}" src="${imgSrc}" alt="${animal.commonName}" />
      <div class="animal-info">
        <div class="animal-name">${animal.commonName}</div>
        <div class="animal-meta">
          <span>${animal.subCategory}</span>
          <span class="rarity-badge rarity-${rarity}">${rarity}</span>
        </div>
      </div>
      <button class="check-icon ${isSeen ? 'seen' : ''}" data-toggle="${animal.id}" aria-label="${isSeen ? 'Mark unseen' : 'Mark as seen'}">${isSeen ? '✓' : ''}</button>
    </div>`;
}

function loadImages(list) {
  list.forEach(a => { if (!(a.id in thumbCache)) fetchWikiImage(a, `img-${a.id}`, false); });
}

function renderFilters() {
  document.getElementById('category-filters').innerHTML = CATEGORIES
    .map(c => `<button class="filter-btn ${c === currentCategory ? 'active' : ''}" data-filter="${c}">${c}</button>`)
    .join('');
}

function getFilteredAnimals() {
  let list = currentCategory === 'All' ? animals : animals.filter(a => a.mainCategory === currentCategory);
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    list = list.filter(a =>
      a.commonName.toLowerCase().includes(q) ||
      a.scientificName.toLowerCase().includes(q)
    );
  }
  return list;
}

function renderList() {
  const filtered = getFilteredAnimals();
  const container = document.getElementById('animal-list');

  if (filtered.length === 0) {
    container.innerHTML = `<div class="empty-state">No animals match "${searchQuery}"</div>`;
    return;
  }

  container.innerHTML = filtered.map(createCardHTML).join('');
  loadImages(filtered);
}

function renderSeenList() {
  const container   = document.getElementById('seen-list');
  const seenAnimals = animals.filter(a => seenList.includes(a.id));
  if (seenAnimals.length === 0) {
    container.innerHTML = '<div class="empty-state">No animals seen yet. Go explore!</div>';
    return;
  }
  container.innerHTML = seenAnimals.map(createCardHTML).join('');
  loadImages(seenAnimals);
}

function updateSeenCount() {
  document.getElementById('seen-count').textContent = `${seenList.length} / ${animals.length}`;
}

// ─── Seen toggle — surgical card update ──────────────────────
function toggleSeen(id) {
  seenList = seenList.includes(id) ? seenList.filter(i => i !== id) : [...seenList, id];
  localStorage.setItem('seenAnimals', JSON.stringify(seenList));

  const isSeen = seenList.includes(id);
  const btn    = document.querySelector(`[data-toggle="${id}"]`);
  if (btn) { btn.classList.toggle('seen', isSeen); btn.textContent = isSeen ? '✓' : ''; btn.ariaLabel = isSeen ? 'Mark unseen' : 'Mark as seen'; }

  if (!document.getElementById('seen-view').hidden) renderSeenList();
  updateSeenCount();
  if (activeAnimalId === id) updateModalBtn();
}

// ─── Tab switching ────────────────────────────────────────────
const ALL_VIEWS = ['animals-view', 'seen-view', 'today-view', 'places-view', 'add-view'];

function switchTab(tab) {
  ALL_VIEWS.forEach(v => {
    const el = document.getElementById(v);
    if (el) el.hidden = (v !== `${tab}-view`);
  });

  document.querySelectorAll('.tab-item').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));

  if (tab === 'animals') renderList();
  if (tab === 'seen')    renderSeenList();
}

// ─── Detail modal ─────────────────────────────────────────────
function openDetail(id) {
  activeAnimalId = id;
  const animal   = animals.find(a => a.id === id);
  const rarity   = RARITY[id] || 'Common';

  document.getElementById('modal-name').textContent       = animal.commonName;
  document.getElementById('modal-scientific').textContent = animal.scientificName;
  document.getElementById('modal-weight').textContent     = animal.stats.weight;
  document.getElementById('modal-length').textContent     = animal.stats.length;
  document.getElementById('modal-desc').textContent       = animal.description;
  document.getElementById('modal-regions').textContent    = animal.regions.join(' & ');

  const rarityEl = document.getElementById('modal-rarity');
  rarityEl.textContent  = rarity;
  rarityEl.className    = `rarity-badge rarity-${rarity}`;

  const imgEl = document.getElementById('modal-img');
  const cached = largeCache[id];
  if (cached) {
    imgEl.style.backgroundImage = `url('${cached}')`;
  } else {
    imgEl.style.backgroundImage = 'none';
    imgEl.style.backgroundColor = '#DDD';
    fetchWikiImage(animal, 'modal-img', true);
  }

  updateModalBtn();
  document.getElementById('detail-modal').classList.add('active');
  document.getElementById('detail-modal').setAttribute('aria-hidden', 'false');
  document.getElementById('modal-backdrop').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  activeAnimalId = null;
  const modal = document.getElementById('detail-modal');
  modal.style.transition = 'transform 0.28s ease';
  modal.style.transform  = '';
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.getElementById('modal-backdrop').classList.remove('active');
  document.body.style.overflow = '';
}

function updateModalBtn() {
  const btn    = document.getElementById('modal-seen-btn');
  const isSeen = seenList.includes(activeAnimalId);
  btn.classList.toggle('is-seen', isSeen);
  btn.textContent = isSeen ? '✓ Seen' : 'Mark as Seen';
}

// ─── Lightbox ─────────────────────────────────────────────────
function openLightbox() {
  const url = activeAnimalId && largeCache[activeAnimalId];
  if (!url) return;
  const animal = animals.find(a => a.id === activeAnimalId);
  document.getElementById('lightbox-img').src = url;
  document.getElementById('lightbox-img').alt = animal?.commonName || '';
  document.getElementById('lightbox').hidden  = false;
}

function closeLightbox() {
  document.getElementById('lightbox').hidden = true;
}

// ─── Swipe right to go back (iOS pattern) ────────────────────
let swipeStartX = 0;
let swipeStartY = 0;
let isSwiping   = false;

const modal = document.getElementById('detail-modal');

modal.addEventListener('touchstart', (e) => {
  swipeStartX = e.touches[0].clientX;
  swipeStartY = e.touches[0].clientY;
  isSwiping   = false;
  modal.style.transition = 'none'; // disable transition during drag
}, { passive: true });

modal.addEventListener('touchmove', (e) => {
  const dx = e.touches[0].clientX - swipeStartX;
  const dy = e.touches[0].clientY - swipeStartY;

  // Only track horizontal-dominant swipes to the right
  if (!isSwiping && Math.abs(dx) > Math.abs(dy) && dx > 8) isSwiping = true;
  if (!isSwiping) return;

  const clamped = Math.max(0, dx); // don't let it go left
  modal.style.transform = `translateX(${clamped}px)`;

  // Fade backdrop with drag
  const progress = Math.min(clamped / 200, 1);
  document.getElementById('modal-backdrop').style.opacity = 1 - progress * 0.8;
}, { passive: true });

modal.addEventListener('touchend', (e) => {
  if (!isSwiping) return;
  const dx = e.changedTouches[0].clientX - swipeStartX;
  if (dx > 100) {
    // commit — animate the rest of the way off screen
    modal.style.transition = 'transform 0.22s ease';
    modal.style.transform  = 'translateX(100%)';
    setTimeout(closeModal, 220);
  } else {
    // snap back
    modal.style.transition = 'transform 0.25s ease';
    modal.style.transform  = 'translateX(0)';
    document.getElementById('modal-backdrop').style.opacity = '';
  }
  isSwiping = false;
}, { passive: true });

// ─── Event delegation ─────────────────────────────────────────
document.addEventListener('click', (e) => {
  // Bottom tab bar
  const tabItem = e.target.closest('.tab-item');
  if (tabItem?.dataset.tab) { switchTab(tabItem.dataset.tab); return; }

  // Category filter chips
  const filter = e.target.closest('.filter-btn');
  if (filter) { currentCategory = filter.dataset.filter; renderFilters(); renderList(); return; }

  // Check-icon toggle
  const toggle = e.target.closest('[data-toggle]');
  if (toggle) { e.stopPropagation(); toggleSeen(toggle.dataset.toggle); return; }

  // Animal card → open detail
  const card = e.target.closest('.animal-card');
  if (card?.dataset.id) { openDetail(card.dataset.id); return; }

  // Back button
  if (e.target.closest('#close-modal-btn')) { closeModal(); return; }

  // Modal seen button
  if (e.target.closest('#modal-seen-btn') && activeAnimalId) { toggleSeen(activeAnimalId); return; }

  // Tap header image → lightbox
  if (e.target.closest('#modal-img')) { openLightbox(); return; }

  // Lightbox close
  if (e.target.closest('.lightbox')) { closeLightbox(); return; }
});

// Keyboard
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (!document.getElementById('lightbox').hidden) { closeLightbox(); return; }
    if (activeAnimalId) closeModal();
  }
});

// Real-time search
document.getElementById('search-input').addEventListener('input', (e) => {
  searchQuery = e.target.value.trim();
  renderList();
});

// ─── Boot ─────────────────────────────────────────────────────
function init() {
  // Inject backdrop element
  const backdrop = document.createElement('div');
  backdrop.id        = 'modal-backdrop';
  backdrop.className = 'modal-backdrop';
  document.body.appendChild(backdrop);

  renderFilters();
  renderList();
  updateSeenCount();
}

init();
