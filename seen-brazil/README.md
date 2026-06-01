# Seen — Brazil Wildlife Tracker

A mobile-first field guide and spotter's log for wildlife in the **Pantanal** and **Rio de Janeiro (Mata Atlântica)**. Built as a static web app — no framework, no build step, no dependencies.

## Features

- 133 species across Mammals, Birds, Reptiles, and Amphibians
- Filter by main category (chip tabs) or region
- Mark animals as seen — saved to `localStorage`
- Auto-fetches Wikipedia photos for every species and the detail modal
- Fully offline-capable after first load (photos aside)

## Project structure

```
seen-brazil/
├── index.html    — markup only, no inline JS or CSS
├── styles.css    — all styles with CSS custom properties
├── data.js       — the 133-animal database (plain JS array)
├── app.js        — all app logic, event-delegated, no inline handlers
├── vercel.json   — static hosting config + security headers
└── .gitignore
```

## Local development

No build step needed — just open `index.html` in a browser, or run any static server:

```bash
# Python
python3 -m http.server 8080

# Node (npx)
npx serve .
```

## Deploy to Vercel

### Option A — Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option B — GitHub import
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import the repo — Vercel detects it as a static site automatically
4. Click **Deploy** — done

## Extending the database

All species live in `data.js` as a plain JSON array. Add a new entry:

```js
{
  "id":             "giant-river-otter",       // URL-safe slug
  "commonName":     "Giant Otter",
  "scientificName": "Pteronura brasiliensis",
  "mainCategory":   "Mammals",                 // Mammals | Birds | Reptiles | Amphibians
  "subCategory":    "Mustelids",               // used for filter chips
  "description":    "Max 25-word punchy fact.",
  "stats": { "weight": "22–34 kg", "length": "1.5–1.8 m" },
  "regions":        ["Pantanal"]               // Pantanal | Rio de Janeiro | both
}
```

Wikipedia photos are fetched automatically using `scientificName` (with fallback to `commonName`).
