// ─── State ────────────────────────────────────────────────────
let seenList        = JSON.parse(localStorage.getItem('seenAnimals')) || [];
let activeAnimalId  = null;
let searchQuery     = '';
let navScrollHandler = null;

// Animals-view navigation state
const animalsNav = {
  level:       'landing',   // 'landing' | 'category' | 'search'
  category:    null,        // e.g. 'Mammals'
  subCategory: 'All'
};

// ─── Category definitions ─────────────────────────────────────
const CATEGORY_META = [
  { id:'Mammals',    emoji:'🦁', label:'Mammals'    },
  { id:'Fish',       emoji:'🐟', label:'Fish'       },
  { id:'Reptiles',   emoji:'🦎', label:'Reptiles'   },
  { id:'Birds',      emoji:'🐦', label:'Birds'      },
  { id:'Amphibians', emoji:'🐸', label:'Amphibians' },
  { id:'Insects',    emoji:'🦋', label:'Insects'    },
  { id:'Arachnids',  emoji:'🕷', label:'Arachnids'  },
  { id:'Others',     emoji:'🦀', label:'Others'     },
];

// ─── Habitat & places data ────────────────────────────────────
const HABITAT_DESC = {
  "Pantanal":       "The vast Pantanal floodplains of Mato Grosso and Mato Grosso do Sul, including surrounding cerrado savanna and gallery forests.",
  "Rio de Janeiro": "The Atlantic Forest fragments of the Serra do Mar mountain range and coastal lowlands of Rio de Janeiro state.",
  "both":           "Both the Pantanal wetlands and the Atlantic Forest of Rio de Janeiro — two of Brazil's most biodiverse ecosystems."
};
const HABITAT_CHIPS = {
  "Pantanal":       ["Wetlands","Cerrado Savanna","Gallery Forest","Riverside"],
  "Rio de Janeiro": ["Atlantic Forest","Cloud Forest","Restinga","Serra do Mar"]
};
const PLACES = {
  "Pantanal":       [
    { name:"Pantanal National Park",    country:"Brazil", difficulty:"Easy",        km:8  },
    { name:"Caiman Ecological Refuge",  country:"Brazil", difficulty:"Moderate",    km:23 },
    { name:"Serra do Bodoquena / Bonito",country:"Brazil", difficulty:"Challenging", km:45 }
  ],
  "Rio de Janeiro": [
    { name:"Tijuca National Park",      country:"Brazil", difficulty:"Moderate",    km:12 },
    { name:"Serra dos Órgãos",          country:"Brazil", difficulty:"Challenging", km:34 },
    { name:"Itatiaia National Park",    country:"Brazil", difficulty:"Moderate",    km:67 }
  ]
};
const CON_LABELS = { NT:"Near Threatened",VU:"Vulnerable",EN:"Endangered",CR:"Critically Endangered" };

// ─── Image cache ──────────────────────────────────────────────
const thumbCache = {};
const largeCache = {};

async function fetchWikiImage(animal, elementId, isBackground = false) {
  const cache = isBackground ? largeCache : thumbCache;
  const size  = isBackground ? 800 : 200;
  const id    = animal.id;

  if (id in cache) { applyImage(cache[id], elementId, isBackground); return; }

  const buildUrl = t =>
    `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(t)}&prop=pageimages&format=json&pithumbsize=${size}&origin=*&redirects=1`;

  const tryFetch = async t => {
    const r = await fetch(buildUrl(t));
    const d = await r.json();
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

// ─── Card rendering ───────────────────────────────────────────
function placeholderSvg(letter) {
  return `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><rect width='50' height='50' fill='%23E0E0E0'/><text x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%23999'>${letter}</text></svg>`;
}

function createCardHTML(animal) {
  const isSeen = seenList.includes(animal.id);
  const rarity = RARITY[animal.id] || 'Common';
  const cached = thumbCache[animal.id];
  const imgSrc = cached ? cached : placeholderSvg(animal.commonName.charAt(0));
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

// ─── Category grid (landing page) ────────────────────────────
function renderCategoryGrid() {
  const grid = document.getElementById('category-grid');
  grid.innerHTML = CATEGORY_META.map(cat => {
    const count = animals.filter(a => a.mainCategory === cat.id).length;
    if (count === 0) return '';
    return `
      <button class="category-card" data-category="${cat.id}">
        <span class="category-card-emoji">${cat.emoji}</span>
        <div>
          <div class="category-card-label">${cat.label}</div>
          <div class="category-card-count">${count} species</div>
        </div>
      </button>`;
  }).join('');
}

// ─── Sub-category chips ───────────────────────────────────────
function renderSubcategoryFilters(category) {
  const subs = ['All', ...new Set(
    animals.filter(a => a.mainCategory === category).map(a => a.subCategory)
  )];
  document.getElementById('subcategory-filters').innerHTML = subs
    .map(s => `<button class="filter-btn ${s === animalsNav.subCategory ? 'active' : ''}" data-subcat="${s}">${s}</button>`)
    .join('');
}

// ─── Animal list (category view) ─────────────────────────────
function renderAnimalList() {
  const { category, subCategory } = animalsNav;
  const list = animals.filter(a =>
    a.mainCategory === category &&
    (subCategory === 'All' || a.subCategory === subCategory)
  );
  const container = document.getElementById('animal-list');
  container.innerHTML = list.map(createCardHTML).join('');
  loadImages(list);
}

// ─── Search results ───────────────────────────────────────────
function renderSearchResults() {
  const q    = searchQuery.toLowerCase();
  const list = animals.filter(a =>
    a.commonName.toLowerCase().includes(q) ||
    a.scientificName.toLowerCase().includes(q) ||
    a.mainCategory.toLowerCase().includes(q) ||
    a.subCategory.toLowerCase().includes(q)
  );
  document.getElementById('search-results-header').textContent =
    `${list.length} result${list.length !== 1 ? 's' : ''} for "${searchQuery}"`;
  const container = document.getElementById('search-results-list');
  container.innerHTML = list.length
    ? list.map(createCardHTML).join('')
    : `<div class="empty-state">No animals match "${searchQuery}"</div>`;
  loadImages(list);
}

// ─── Animals-view navigation ──────────────────────────────────
function showAnimalsLanding() {
  animalsNav.level = 'landing';
  animalsNav.category = null;
  animalsNav.subCategory = 'All';
  searchQuery = '';
  document.getElementById('search-input').value = '';

  document.getElementById('animals-landing').hidden  = false;
  document.getElementById('animals-category').hidden = true;
  document.getElementById('animals-search').hidden   = true;

  document.getElementById('header-brand').hidden = false;
  document.getElementById('header-nav').hidden   = true;

  renderCategoryGrid();
}

function showAnimalsCategory(category) {
  animalsNav.level = 'category';
  animalsNav.category = category;
  animalsNav.subCategory = 'All';

  document.getElementById('animals-landing').hidden  = true;
  document.getElementById('animals-category').hidden = false;
  document.getElementById('animals-search').hidden   = true;

  document.getElementById('header-brand').hidden       = true;
  document.getElementById('header-nav').hidden         = false;
  document.getElementById('header-nav-title').textContent = category;

  renderSubcategoryFilters(category);
  renderAnimalList();
}

function showAnimalsSearch() {
  animalsNav.level = 'search';

  document.getElementById('animals-landing').hidden  = true;
  document.getElementById('animals-category').hidden = true;
  document.getElementById('animals-search').hidden   = false;

  document.getElementById('header-brand').hidden = false;
  document.getElementById('header-nav').hidden   = true;

  renderSearchResults();
}

// ─── Seen toggle ──────────────────────────────────────────────
function toggleSeen(id) {
  seenList = seenList.includes(id) ? seenList.filter(i => i !== id) : [...seenList, id];
  localStorage.setItem('seenAnimals', JSON.stringify(seenList));
  const isSeen = seenList.includes(id);
  const btn = document.querySelector(`[data-toggle="${id}"]`);
  if (btn) { btn.classList.toggle('seen', isSeen); btn.textContent = isSeen ? '✓' : ''; btn.ariaLabel = isSeen ? 'Mark unseen' : 'Mark as seen'; }
  if (!document.getElementById('seen-view').hidden) renderSeenList();
  updateSeenCount();
  if (activeAnimalId === id) updateSeenChip();
}

// ─── Seen list view ───────────────────────────────────────────
function renderSeenList() {
  const container   = document.getElementById('seen-list');
  const seenAnimals = animals.filter(a => seenList.includes(a.id));
  if (!seenAnimals.length) { container.innerHTML = '<div class="empty-state">No animals seen yet. Go explore!</div>'; return; }
  container.innerHTML = seenAnimals.map(createCardHTML).join('');
  loadImages(seenAnimals);
}

function updateSeenCount() {
  document.getElementById('seen-count').textContent = `${seenList.length} / ${animals.length}`;
}

// ─── Tab switching ────────────────────────────────────────────
const ALL_VIEWS = ['animals-view','seen-view','today-view','places-view','add-view'];

function switchTab(tab) {
  ALL_VIEWS.forEach(v => { const el = document.getElementById(v); if (el) el.hidden = (v !== `${tab}-view`); });
  document.querySelectorAll('.tab-item').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  if (tab === 'animals') {
    // Return to landing when switching back to Animals tab
    showAnimalsLanding();
  }
  if (tab === 'seen') renderSeenList();
}

// ─── Detail modal ─────────────────────────────────────────────
function openDetail(id) {
  activeAnimalId = id;
  const animal = animals.find(a => a.id === id);
  const modal  = document.getElementById('detail-modal');
  modal.scrollTop = 0;

  document.getElementById('detail-nav-title').textContent = animal.commonName;
  document.getElementById('modal-hero-name').textContent  = animal.commonName;

  const heroEl = document.getElementById('modal-img');
  heroEl.style.backgroundImage = 'none';
  heroEl.style.backgroundColor = '#BBBBBB';
  if (largeCache[id]) { heroEl.style.backgroundImage = `url('${largeCache[id]}')`; }
  else { fetchWikiImage(animal, 'modal-img', true); }

  updateSeenChip();

  const rarity = RARITY[id] || 'Common';
  document.getElementById('modal-rarity-chip').textContent = rarity;

  const conCode  = CONSERVATION[id] || 'LC';
  const conLabel = CON_LABELS[conCode];
  const conChip  = document.getElementById('modal-conservation-chip');
  if (conLabel) { conChip.textContent = conLabel; conChip.className = `chip chip-con-${conCode}`; conChip.hidden = false; }
  else { conChip.hidden = true; }

  document.getElementById('modal-desc').textContent          = animal.description;
  document.getElementById('modal-length').textContent        = animal.stats.length;
  document.getElementById('modal-weight').textContent        = animal.stats.weight;
  document.getElementById('modal-regions-stat').textContent  = animal.regions.join(', ');
  document.getElementById('modal-group-stat').textContent    = animal.subCategory;

  const regionKey = animal.regions.length === 2 ? 'both' : animal.regions[0];
  document.getElementById('modal-habitat').textContent = HABITAT_DESC[regionKey] || '';

  const chips = [...new Set(animal.regions.flatMap(r => HABITAT_CHIPS[r] || []))];
  document.getElementById('modal-habitat-chips').innerHTML = chips.map(c => `<span class="habitat-chip">${c}</span>`).join('');

  const places = animal.regions.flatMap(r => PLACES[r] || []);
  const unique  = places.filter((p,i,a) => a.findIndex(x => x.name===p.name)===i).slice(0,3);
  document.getElementById('modal-places').innerHTML = unique.map(p => `
    <div class="place-item">
      <div class="place-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
      <div class="place-info">
        <div class="place-name-row"><span class="place-name">${p.name}, ${p.country}</span></div>
        <div class="place-detail">${p.difficulty}, ${p.km} km</div>
      </div>
    </div>`).join('');

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.getElementById('modal-backdrop').classList.add('active');
  document.body.style.overflow = 'hidden';
  setupNavScroll(modal);
}

function closeModal() {
  const modal = document.getElementById('detail-modal');
  const nav   = document.getElementById('detail-nav');
  if (navScrollHandler) { modal.removeEventListener('scroll', navScrollHandler); navScrollHandler = null; }
  nav.classList.remove('scrolled');
  modal.style.transition = 'transform 0.28s ease';
  modal.style.transform  = '';
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.getElementById('modal-backdrop').classList.remove('active');
  document.body.style.overflow = '';
  activeAnimalId = null;
}

function updateSeenChip() {
  if (!activeAnimalId) return;
  const isSeen = seenList.includes(activeAnimalId);
  const btn    = document.getElementById('modal-seen-btn');
  const label  = document.getElementById('modal-seen-label');
  btn.classList.toggle('is-seen', isSeen);
  label.textContent = isSeen ? 'Seen' : 'Mark as Seen';
  btn.querySelector('svg').style.display = isSeen ? 'block' : 'none';
}

function setupNavScroll(modal) {
  if (navScrollHandler) modal.removeEventListener('scroll', navScrollHandler);
  const nav = document.getElementById('detail-nav');
  navScrollHandler = () => nav.classList.toggle('scrolled', modal.scrollTop > window.innerHeight * 0.42);
  modal.addEventListener('scroll', navScrollHandler, { passive: true });
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
function closeLightbox() { document.getElementById('lightbox').hidden = true; }

// ─── Swipe right to close modal ───────────────────────────────
let swipeStartX = 0, swipeStartY = 0, isSwiping = false;
const modal = document.getElementById('detail-modal');

modal.addEventListener('touchstart', e => {
  swipeStartX = e.touches[0].clientX; swipeStartY = e.touches[0].clientY;
  isSwiping = false; modal.style.transition = 'none';
}, { passive: true });

modal.addEventListener('touchmove', e => {
  const dx = e.touches[0].clientX - swipeStartX;
  const dy = e.touches[0].clientY - swipeStartY;
  if (!isSwiping && Math.abs(dx) > Math.abs(dy) && dx > 8) isSwiping = true;
  if (!isSwiping) return;
  const clamped = Math.max(0, dx);
  modal.style.transform = `translateX(${clamped}px)`;
  document.getElementById('modal-backdrop').style.opacity = 1 - Math.min(clamped/200,1)*0.8;
}, { passive: true });

modal.addEventListener('touchend', e => {
  if (!isSwiping) return;
  const dx = e.changedTouches[0].clientX - swipeStartX;
  if (dx > 100) {
    modal.style.transition = 'transform 0.22s ease';
    modal.style.transform  = 'translateX(100%)';
    setTimeout(closeModal, 220);
  } else {
    modal.style.transition = 'transform 0.25s ease';
    modal.style.transform  = 'translateX(0)';
    document.getElementById('modal-backdrop').style.opacity = '';
  }
  isSwiping = false;
}, { passive: true });

// ─── Event delegation ─────────────────────────────────────────
document.addEventListener('click', e => {
  // Tab bar
  const tabItem = e.target.closest('.tab-item');
  if (tabItem?.dataset.tab) { switchTab(tabItem.dataset.tab); return; }

  // Category card (landing page)
  const catCard = e.target.closest('.category-card');
  if (catCard?.dataset.category) { showAnimalsCategory(catCard.dataset.category); return; }

  // Sub-category chip
  const subcat = e.target.closest('[data-subcat]');
  if (subcat) { animalsNav.subCategory = subcat.dataset.subcat; renderSubcategoryFilters(animalsNav.category); renderAnimalList(); return; }

  // Back button in animals header
  if (e.target.closest('#animals-back-btn')) { showAnimalsLanding(); return; }

  // Seen toggle on card
  const toggle = e.target.closest('[data-toggle]');
  if (toggle) { e.stopPropagation(); toggleSeen(toggle.dataset.toggle); return; }

  // Animal card → open detail
  const card = e.target.closest('.animal-card');
  if (card?.dataset.id) { openDetail(card.dataset.id); return; }

  // Modal controls
  if (e.target.closest('#close-modal-btn')) { closeModal(); return; }
  if (e.target.closest('#modal-seen-btn') && activeAnimalId) { toggleSeen(activeAnimalId); return; }
  if (e.target.closest('#modal-img') && !e.target.closest('#close-modal-btn')) { openLightbox(); return; }
  if (e.target.closest('.lightbox')) { closeLightbox(); return; }
});

// Search input
document.getElementById('search-input').addEventListener('input', e => {
  searchQuery = e.target.value.trim();
  if (searchQuery) { showAnimalsSearch(); }
  else { showAnimalsLanding(); }
});

// Keyboard
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (!document.getElementById('lightbox').hidden) { closeLightbox(); return; }
    if (activeAnimalId) closeModal();
  }
});

// ─── Boot ─────────────────────────────────────────────────────
function init() {
  const backdrop = document.createElement('div');
  backdrop.id = 'modal-backdrop'; backdrop.className = 'modal-backdrop';
  document.body.appendChild(backdrop);

  const seenIcon = document.querySelector('#modal-seen-btn svg');
  if (seenIcon) seenIcon.style.display = 'none';

  showAnimalsLanding();
  updateSeenCount();
}

init();
