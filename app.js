// ─── State ────────────────────────────────────────────────────
let seenList        = JSON.parse(localStorage.getItem('seenAnimals')) || [];
let currentCategory = 'All';
let activeAnimalId  = null;

const CATEGORIES = ['All', 'Mammals', 'Birds', 'Reptiles', 'Amphibians'];

// ─── Image cache ──────────────────────────────────────────────
// Keys are animal IDs. Values:
//   undefined  → never fetched yet
//   null       → fetched, but Wikipedia had no image
//   <string>   → the Wikipedia thumbnail URL (thumbnail size)
//
// A separate map holds the large (800px) modal URL, since Wikipedia
// returns a different crop at that size.
const thumbCache = {}; // { [id]: null | url }
const largeCache = {}; // { [id]: null | url }

// ─── Wikipedia image fetcher ──────────────────────────────────
async function fetchWikiImage(animal, elementId, isBackground = false) {
  const cache = isBackground ? largeCache : thumbCache;
  const size  = isBackground ? 800 : 200;
  const id    = animal.id;

  // Cache hit — apply immediately, no network call
  if (id in cache) {
    applyImage(cache[id], elementId, isBackground);
    return;
  }

  const buildUrl = (title) =>
    `https://en.wikipedia.org/w/api.php?action=query` +
    `&titles=${encodeURIComponent(title)}` +
    `&prop=pageimages&format=json&pithumbsize=${size}&origin=*&redirects=1`;

  const tryFetch = async (title) => {
    const res   = await fetch(buildUrl(title));
    const data  = await res.json();
    const pages = data.query.pages;
    const pid   = Object.keys(pages)[0];
    return (pid !== '-1' && pages[pid].thumbnail) ? pages[pid].thumbnail.source : null;
  };

  try {
    const url = (await tryFetch(animal.scientificName)) ||
                (await tryFetch(animal.commonName));
    cache[id] = url; // store result (null if nothing found)
    applyImage(url, elementId, isBackground);
  } catch {
    cache[id] = null; // don't retry on network error either
  }
}

function applyImage(url, elementId, isBackground) {
  if (!url) return;
  const el = document.getElementById(elementId);
  if (!el) return;
  if (isBackground) {
    el.style.backgroundImage = `url('${url}')`;
  } else {
    el.src = url;
  }
}

// ─── Rendering helpers ────────────────────────────────────────
function placeholderSvg(letter) {
  return (
    `data:image/svg+xml;utf8,` +
    `<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'>` +
    `<rect width='50' height='50' fill='%23E0E0E0'/>` +
    `<text x='50%25' y='50%25' dominant-baseline='middle' ` +
    `text-anchor='middle' font-family='sans-serif' font-size='20' fill='%23999'>` +
    `${letter}</text></svg>`
  );
}

function createCardHTML(animal) {
  const isSeen  = seenList.includes(animal.id);
  // Use cached thumb immediately if available, otherwise show placeholder
  const cached  = thumbCache[animal.id];
  const imgSrc  = cached ? cached : placeholderSvg(animal.commonName.charAt(0));

  return `
    <div class="animal-card" data-id="${animal.id}">
      <img class="animal-img"
           id="img-${animal.id}"
           src="${imgSrc}"
           alt="${animal.commonName}" />
      <div class="animal-info">
        <div class="animal-name">${animal.commonName}</div>
        <div class="animal-sub">${animal.subCategory} · ${animal.regions.join(', ')}</div>
      </div>
      <button class="check-icon ${isSeen ? 'seen' : ''}"
              data-toggle="${animal.id}"
              aria-label="${isSeen ? 'Mark unseen' : 'Mark as seen'}">
        ${isSeen ? '✓' : ''}
      </button>
    </div>`;
}

// Load images for a list of animals — skips anything already cached
function loadImages(animalList) {
  animalList.forEach(a => {
    // Only fire a network request if we don't have a cached result yet
    if (!(a.id in thumbCache)) {
      fetchWikiImage(a, `img-${a.id}`, false);
    }
  });
}

function renderFilters() {
  document.getElementById('category-filters').innerHTML = CATEGORIES
    .map(cat =>
      `<button class="filter-btn ${cat === currentCategory ? 'active' : ''}"
               data-filter="${cat}">${cat}</button>`)
    .join('');
}

function renderList() {
  const filtered = currentCategory === 'All'
    ? animals
    : animals.filter(a => a.mainCategory === currentCategory);

  document.getElementById('animal-list').innerHTML =
    filtered.map(createCardHTML).join('');

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
  document.getElementById('seen-count').textContent =
    `${seenList.length} / ${animals.length}`;
}

// ─── Seen toggle — patches the card in place, no full re-render ──
function toggleSeen(id) {
  if (seenList.includes(id)) {
    seenList = seenList.filter(i => i !== id);
  } else {
    seenList.push(id);
  }
  localStorage.setItem('seenAnimals', JSON.stringify(seenList));

  const isSeen = seenList.includes(id);

  // Update ONLY the check-icon button on the card that was tapped
  const btn = document.querySelector(`[data-toggle="${id}"]`);
  if (btn) {
    btn.classList.toggle('seen', isSeen);
    btn.textContent  = isSeen ? '✓' : '';
    btn.ariaLabel    = isSeen ? 'Mark unseen' : 'Mark as seen';
  }

  // If we're on the Seen tab a card may need to be added or removed
  if (document.getElementById('seen-view') && !document.getElementById('seen-view').hidden) {
    renderSeenList();
  }

  updateSeenCount();
  if (activeAnimalId === id) updateModalBtn();
}

// ─── Detail modal ─────────────────────────────────────────────
function openDetail(id) {
  activeAnimalId = id;
  const animal   = animals.find(a => a.id === id);

  document.getElementById('modal-name').textContent       = animal.commonName;
  document.getElementById('modal-scientific').textContent = animal.scientificName;
  document.getElementById('modal-weight').textContent     = animal.stats.weight;
  document.getElementById('modal-length').textContent     = animal.stats.length;
  document.getElementById('modal-desc').textContent       = animal.description;
  document.getElementById('modal-regions').textContent    = animal.regions.join(' & ');

  // Reset header — show cached large image instantly, or grey while loading
  const imgEl    = document.getElementById('modal-img');
  const cachedLg = largeCache[id];
  if (cachedLg) {
    imgEl.style.backgroundImage = `url('${cachedLg}')`;
  } else {
    imgEl.style.backgroundImage = 'none';
    imgEl.style.backgroundColor = '#DDD';
    fetchWikiImage(animal, 'modal-img', true);
  }

  updateModalBtn();
  const modal = document.getElementById('detail-modal');
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  activeAnimalId = null;
  const modal    = document.getElementById('detail-modal');
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function updateModalBtn() {
  const btn    = document.getElementById('modal-seen-btn');
  const isSeen = seenList.includes(activeAnimalId);
  btn.classList.toggle('is-seen', isSeen);
  btn.textContent = isSeen ? '✓ Seen' : 'Mark as Seen';
}

// ─── Tab switching ────────────────────────────────────────────
function switchTab(tab) {
  document.querySelectorAll('.tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tab);
  });

  const isSearch = tab === 'search';
  document.getElementById('search-view').hidden =  !isSearch;
  document.getElementById('seen-view').hidden   =   isSearch;

  isSearch ? renderList() : renderSeenList();
}

// ─── Event delegation ─────────────────────────────────────────
document.addEventListener('click', (e) => {
  const tab = e.target.closest('.tab');
  if (tab?.dataset.tab) { switchTab(tab.dataset.tab); return; }

  const filter = e.target.closest('.filter-btn');
  if (filter) { currentCategory = filter.dataset.filter; renderFilters(); renderList(); return; }

  const toggle = e.target.closest('[data-toggle]');
  if (toggle) { e.stopPropagation(); toggleSeen(toggle.dataset.toggle); return; }

  const card = e.target.closest('.animal-card');
  if (card?.dataset.id) { openDetail(card.dataset.id); return; }

  if (e.target.closest('#close-modal-btn')) { closeModal(); return; }
  if (e.target.closest('#modal-seen-btn') && activeAnimalId) { toggleSeen(activeAnimalId); return; }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && activeAnimalId) closeModal();
});

// ─── Boot ─────────────────────────────────────────────────────
function init() {
  renderFilters();
  renderList();
  updateSeenCount();
}

init();
