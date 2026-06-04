// ─── Gap-fill species ─────────────────────────────────────────
// Iconic, commonly-encountered species of the Pantanal, Bonito
// and Rio de Janeiro Atlantic Forest that complete the core set.
// Loaded after data-extra.js.

(function () {
const extra2 = [

  // ── BIRDS — the unmissable ones ──────────────────────────────
  { id:"southern-crested-caracara", commonName:"Southern Crested Caracara", scientificName:"Caracara plancus",
    mainCategory:"Birds", subCategory:"Raptors",
    description:"The Pantanal's ubiquitous scavenger-raptor; strides boldly on the ground and dominates roadside carrion.",
    stats:{weight:"0.8–1.6 kg",length:"0.50–0.65 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Southern crested caracara with black cap, orange face and pale neck standing on the ground"}},

  { id:"yellow-headed-caracara", commonName:"Yellow-headed Caracara", scientificName:"Milvago chimachima",
    mainCategory:"Birds", subCategory:"Raptors",
    description:"A small, buff-coloured caracara often seen riding on capybaras and cattle, picking off ticks.",
    stats:{weight:"0.30–0.35 kg",length:"0.40–0.46 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Yellow-headed caracara with creamy-buff head and body perched on a capybara's back"}},

  { id:"red-legged-seriema", commonName:"Red-legged Seriema", scientificName:"Cariama cristata",
    mainCategory:"Birds", subCategory:"Ground Birds",
    description:"A tall, long-legged ground bird with a loud yelping call; sprints across open cerrado rather than flying.",
    stats:{weight:"1.2–1.5 kg",length:"0.75–0.90 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Red-legged seriema standing tall on long red legs with spiky forehead crest in open grassland"}},

  { id:"rufescent-tiger-heron", commonName:"Rufescent Tiger-Heron", scientificName:"Tigrisoma lineatum",
    mainCategory:"Birds", subCategory:"Wading Birds",
    description:"A stocky heron with a chestnut head and finely barred neck; stalks fish patiently at the water's edge.",
    stats:{weight:"0.6–0.9 kg",length:"0.66–0.76 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Rufescent tiger-heron with rich chestnut head and finely barred rufous neck beside still water"}},

  { id:"boat-billed-heron", commonName:"Boat-billed Heron", scientificName:"Cochlearius cochlearius",
    mainCategory:"Birds", subCategory:"Wading Birds",
    description:"A nocturnal heron with enormous dark eyes and a broad, scoop-shaped bill for catching prey in the dark.",
    stats:{weight:"0.5–0.7 kg",length:"0.44–0.51 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Boat-billed heron with huge black eyes and broad scoop-shaped bill roosting in riverside tree"}},

  { id:"sungrebe", commonName:"Sungrebe", scientificName:"Heliornis fulica",
    mainCategory:"Birds", subCategory:"Wading Birds",
    description:"A secretive waterbird that males carry their chicks in pouches under the wings, even in flight.",
    stats:{weight:"0.12–0.15 kg",length:"0.26–0.30 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Sungrebe swimming low in calm water with striped head pattern along shaded river bank"}},

  { id:"agami-heron", commonName:"Agami Heron", scientificName:"Agamia agami",
    mainCategory:"Birds", subCategory:"Wading Birds",
    description:"Considered one of the world's most beautiful herons; an elusive, dagger-billed jewel of shaded forest streams.",
    stats:{weight:"0.5–0.6 kg",length:"0.60–0.76 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Agami heron with iridescent green back, chestnut underparts and very long thin bill in dark forest stream"}},

  { id:"scarlet-headed-blackbird", commonName:"Scarlet-headed Blackbird", scientificName:"Amblyramphus holosericeus",
    mainCategory:"Birds", subCategory:"Tanagers & Songbirds",
    description:"A jet-black marsh bird with a blazing scarlet head and breast; clings to reeds in Pantanal wetlands.",
    stats:{weight:"0.07–0.09 kg",length:"0.23–0.24 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Scarlet-headed blackbird with vivid red head and breast on glossy black body clinging to marsh reed"}},

  { id:"red-crested-cardinal", commonName:"Red-crested Cardinal", scientificName:"Paroaria coronata",
    mainCategory:"Birds", subCategory:"Tanagers & Songbirds",
    description:"A smart grey-and-white songbird crowned with a pointed scarlet crest; forages confidently around lodges.",
    stats:{weight:"0.03–0.045 kg",length:"0.17–0.19 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Red-crested cardinal with bright red head and pointed crest, grey back and white underparts on branch"}},

  { id:"burrowing-owl", commonName:"Burrowing Owl", scientificName:"Athene cunicularia",
    mainCategory:"Birds", subCategory:"Owls",
    description:"A long-legged owl active by day; stands sentinel at the mouth of its ground burrow across open country.",
    stats:{weight:"0.13–0.25 kg",length:"0.19–0.25 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Burrowing owl with long legs and bright yellow eyes standing at entrance of ground burrow in daylight"}},

  { id:"saw-billed-hermit", commonName:"Saw-billed Hermit", scientificName:"Ramphodon naevius",
    mainCategory:"Birds", subCategory:"Hummingbirds",
    description:"A large Atlantic Forest hummingbird with a hooked, serrated bill; an endemic of Rio's coastal forests.",
    stats:{weight:"0.006–0.009 kg",length:"0.13–0.15 m"}, regions:["Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Saw-billed hermit hummingbird with long hooked serrated bill and streaked underparts at forest flower"}},

  { id:"green-headed-tanager", commonName:"Green-headed Tanager", scientificName:"Tangara seledon",
    mainCategory:"Birds", subCategory:"Tanagers & Songbirds",
    description:"A living kaleidoscope of turquoise, green, orange, and black; a flagship beauty of the Atlantic Forest.",
    stats:{weight:"0.015–0.02 kg",length:"0.13–0.14 m"}, regions:["Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Green-headed tanager with turquoise head, lime-green body and orange rump in lush Atlantic Forest"}},

  // ── MAMMALS ──────────────────────────────────────────────────
  { id:"geoffroys-cat", commonName:"Geoffroy's Cat", scientificName:"Leopardus geoffroyi",
    mainCategory:"Mammals", subCategory:"Felines",
    description:"A small, heavily spotted wild cat the size of a domestic cat; a nocturnal hunter of the Pantanal fringe.",
    stats:{weight:"2–5 kg",length:"0.4–0.7 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Geoffroy's cat, small spotted wild cat with black rosettes on tan fur, alert in grassland at dusk"}},

  { id:"water-opossum", commonName:"Water Opossum", scientificName:"Chironectes minimus",
    mainCategory:"Mammals", subCategory:"Opossums",
    description:"The world's only aquatic marsupial; webbed hind feet and a water-tight pouch let it dive for fish and crabs.",
    stats:{weight:"0.5–0.8 kg",length:"0.27–0.40 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Water opossum (yapok) with marbled grey-and-black coat and webbed hind feet swimming in a stream"}},

  { id:"hoary-fox", commonName:"Hoary Fox", scientificName:"Lycalopex vetulus",
    mainCategory:"Mammals", subCategory:"Canines",
    description:"A small, slender fox of the cerrado; unusually for a canid, it feeds mainly on termites and insects.",
    stats:{weight:"3–4 kg",length:"0.55–0.72 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Hoary fox, small slender grey fox with short muzzle and dark tail tip in open cerrado at dusk"}},

  // ── REPTILES ─────────────────────────────────────────────────
  { id:"banded-cat-eyed-snake", commonName:"Banded Cat-eyed Snake", scientificName:"Leptodeira annulata",
    mainCategory:"Reptiles", subCategory:"Colubrids",
    description:"A slender nocturnal snake with vertical cat-like pupils; a specialist hunter of tree-frog eggs and frogs.",
    stats:{weight:"0.05–0.2 kg",length:"0.5–0.9 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Banded cat-eyed snake with tan body, dark saddle blotches and vertical cat-like pupils on a branch at night"}},

  // ── AMPHIBIANS ───────────────────────────────────────────────
  { id:"casque-headed-treefrog", commonName:"Casque-headed Tree Frog", scientificName:"Itapotihyla langsdorffii",
    mainCategory:"Amphibians", subCategory:"Tree Frogs",
    description:"A large, bony-headed Atlantic Forest tree frog with cryptic lichen-like camouflage and a casqued skull.",
    stats:{weight:"0.02–0.05 kg",length:"0.06–0.10 m"}, regions:["Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Casque-headed treefrog with bony ridged head and lichen-grey camouflage pattern on tree bark at night"}},

  // ── FISH ─────────────────────────────────────────────────────
  { id:"tambaqui", commonName:"Tambaqui", scientificName:"Colossoma macropomum",
    mainCategory:"Fish", subCategory:"Gamefish",
    description:"A massive fruit-and-seed-eating relative of the pacu; one of the largest scaled fish in South America.",
    stats:{weight:"10–30 kg",length:"0.6–1.1 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Tambaqui, large deep-bodied dark fish with powerful jaws, held above Pantanal river water"}},

  { id:"ocellate-river-stingray", commonName:"Ocellate River Stingray", scientificName:"Potamotrygon motoro",
    mainCategory:"Fish", subCategory:"Stingrays",
    description:"A freshwater stingray patterned with orange eye-spots; rests on sandy river bottoms with a venomous tail spine.",
    stats:{weight:"1–10 kg",length:"0.3–0.5 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Ocellate river stingray with orange-ringed eyespots on disc, resting on sandy clear river bottom"}},

];

extra2.forEach(a => animals.push(a));

Object.assign(RARITY, {
  "southern-crested-caracara":"Common","yellow-headed-caracara":"Common",
  "red-legged-seriema":"Common","rufescent-tiger-heron":"Common",
  "boat-billed-heron":"Uncommon","sungrebe":"Uncommon","agami-heron":"Rare",
  "scarlet-headed-blackbird":"Uncommon","red-crested-cardinal":"Common",
  "burrowing-owl":"Common","saw-billed-hermit":"Uncommon","green-headed-tanager":"Common",
  "geoffroys-cat":"Rare","water-opossum":"Uncommon","hoary-fox":"Uncommon",
  "banded-cat-eyed-snake":"Common","casque-headed-treefrog":"Uncommon",
  "tambaqui":"Common","ocellate-river-stingray":"Common"
});

Object.assign(CONSERVATION, {
  "southern-crested-caracara":"LC","yellow-headed-caracara":"LC",
  "red-legged-seriema":"LC","rufescent-tiger-heron":"LC",
  "boat-billed-heron":"LC","sungrebe":"LC","agami-heron":"VU",
  "scarlet-headed-blackbird":"LC","red-crested-cardinal":"LC",
  "burrowing-owl":"LC","saw-billed-hermit":"NT","green-headed-tanager":"LC",
  "geoffroys-cat":"LC","water-opossum":"LC","hoary-fox":"NT",
  "banded-cat-eyed-snake":"LC","casque-headed-treefrog":"LC",
  "tambaqui":"LC","ocellate-river-stingray":"LC"
});

})();
