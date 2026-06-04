// ─── Extended species database ────────────────────────────────
// Additional species for Pantanal, Bonito & Rio de Janeiro.
// Loaded after data.js — appends to `animals` and extends RARITY + CONSERVATION.

(function () {
const extra = [

  // ════════════════════════════════════════════════════════════
  // FISH
  // ════════════════════════════════════════════════════════════

  // — Gamefish —
  { id:"golden-dorado", commonName:"Golden Dorado", scientificName:"Salminus brasiliensis",
    mainCategory:"Fish", subCategory:"Gamefish",
    description:"The 'River Tiger'; a fearsome predator whose leaping fights make it the Pantanal's most prized sport fish.",
    stats:{weight:"10–30 kg",length:"0.6–1.0 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Golden dorado jumping from river, gleaming gold and silver scales, powerful muscular body"}},

  { id:"pacu", commonName:"Pacu", scientificName:"Piaractus mesopotamicus",
    mainCategory:"Fish", subCategory:"Gamefish",
    description:"A large herbivore with startlingly human-like molar teeth, used to crush palm seeds and fruit.",
    stats:{weight:"5–20 kg",length:"0.4–0.7 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Pacu fish with distinctive flat human-like teeth, silver body with orange-red underside"}},

  { id:"piraputanga", commonName:"Piraputanga", scientificName:"Brycon hilarii",
    mainCategory:"Fish", subCategory:"Gamefish",
    description:"Bonito's iconic crystal-water fish; jumps for fruit dangling from riverside trees.",
    stats:{weight:"1–3 kg",length:"0.3–0.5 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Piraputanga with scarlet fins leaping in clear turquoise Bonito river water"}},

  { id:"corvina", commonName:"Corvina", scientificName:"Plagioscion squamosissimus",
    mainCategory:"Fish", subCategory:"Gamefish",
    description:"A silvery croaker abundant throughout Pantanal lagoons; highly valued as table fish.",
    stats:{weight:"0.5–4 kg",length:"0.3–0.6 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Silvery corvina fish with lateral line visible, held by hands above Pantanal water"}},

  // — Catfish —
  { id:"pintado", commonName:"Spotted Sorubim", scientificName:"Pseudoplatystoma corruscans",
    mainCategory:"Fish", subCategory:"Catfish",
    description:"The 'king of Pantanal catfish'; spotted like a jaguar, hunts in fast currents at night.",
    stats:{weight:"10–40 kg",length:"0.8–1.5 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Spotted sorubim catfish with jaguar-like dark spots on pale body, long flat head"}},

  { id:"cachara", commonName:"Tiger Sorubim", scientificName:"Pseudoplatystoma tigrinum",
    mainCategory:"Fish", subCategory:"Catfish",
    description:"A large striped catfish; an ambush predator that lurks among submerged roots in flood season.",
    stats:{weight:"5–20 kg",length:"0.6–1.1 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Tiger sorubim with vertical dark tiger stripes on grey body, massive flat head"}},

  { id:"piraiba", commonName:"Piraíba Giant Catfish", scientificName:"Brachyplatystoma filamentosum",
    mainCategory:"Fish", subCategory:"Catfish",
    description:"One of the largest freshwater fish on Earth; migrates thousands of km between Pantanal and the Amazon.",
    stats:{weight:"100–200 kg",length:"2.0–3.6 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Massive piraíba catfish being held by multiple fishermen, enormous body and long thread-like barbels"}},

  { id:"barbado", commonName:"Flatwhiskered Catfish", scientificName:"Pinirampus pirinampu",
    mainCategory:"Fish", subCategory:"Catfish",
    description:"A broad, flat-headed catfish with distinctive flattened barbels; a common Pantanal bottom-dweller.",
    stats:{weight:"2–8 kg",length:"0.4–0.7 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Barbado catfish with wide flat head and distinctive flattened whiskers, olive-grey body"}},

  { id:"mandi", commonName:"Mandi Catfish", scientificName:"Pimelodus maculatus",
    mainCategory:"Fish", subCategory:"Catfish",
    description:"A spotted schooling catfish frequently observed in clear Bonito rivers and Pantanal shallows.",
    stats:{weight:"0.2–1.5 kg",length:"0.2–0.35 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Mandi catfish with dark spots on silver body, long barbels, swimming in clear water"}},

  { id:"armored-catfish", commonName:"Amazon Pleco", scientificName:"Hypostomus plecostomus",
    mainCategory:"Fish", subCategory:"Catfish",
    description:"A bottom-grazing catfish fully encased in bony scutes; rasps algae from rocks with its sucker mouth.",
    stats:{weight:"0.5–3 kg",length:"0.3–0.6 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Armored pleco clinging to rock with sucker mouth, fully plated in bony scutes, patterned brown"}},

  // — Piranhas —
  { id:"red-bellied-piranha", commonName:"Red-bellied Piranha", scientificName:"Pygocentrus nattereri",
    mainCategory:"Fish", subCategory:"Piranhas",
    description:"The iconic piranha; shoals of hundreds patrol Pantanal flood pools, feared but rarely dangerous to humans.",
    stats:{weight:"0.5–2 kg",length:"0.2–0.35 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Red-bellied piranha with vivid scarlet underside and serrated teeth, close-up underwater"}},

  { id:"black-piranha", commonName:"Black Piranha", scientificName:"Serrasalmus rhombeus",
    mainCategory:"Fish", subCategory:"Piranhas",
    description:"The largest and most powerful piranha; a solitary hunter with the strongest bite of any fish its size.",
    stats:{weight:"1–3.5 kg",length:"0.25–0.45 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Menacing dark grey black piranha showing razor teeth, powerful rhombus-shaped body"}},

  // — Characins —
  { id:"matrinxa", commonName:"Matrinxã", scientificName:"Brycon cephalus",
    mainCategory:"Fish", subCategory:"Characins",
    description:"A sleek, fast-swimming characin; leaps waterfalls and is a favourite target for fly fishing in Bonito.",
    stats:{weight:"0.5–3 kg",length:"0.3–0.5 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Matrinxã fish leaping from clear river, silver body with golden sheen"}},

  { id:"wolf-fish", commonName:"Giant Traíra", scientificName:"Hoplias aimara",
    mainCategory:"Fish", subCategory:"Characins",
    description:"A heavily built ambush predator; lurks motionless among vegetation before striking with lightning speed.",
    stats:{weight:"3–10 kg",length:"0.4–0.8 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Giant traíra wolf fish with massive jaws and dark mottled pattern hiding in vegetation"}},

  // — Electric Fish —
  { id:"electric-eel", commonName:"Electric Eel", scientificName:"Electrophorus electricus",
    mainCategory:"Fish", subCategory:"Electric Fish",
    description:"Not a true eel; generates 600-volt discharges to stun prey and navigate murky Pantanal waters.",
    stats:{weight:"10–25 kg",length:"1.5–2.5 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Electric eel in shallow murky water, olive-grey elongated body, surfacing to breathe"}},

  { id:"banded-knifefish", commonName:"Banded Knifefish", scientificName:"Gymnotus carapo",
    mainCategory:"Fish", subCategory:"Electric Fish",
    description:"Uses weak electric pulses to communicate and navigate; moves backwards as easily as forwards.",
    stats:{weight:"0.05–0.3 kg",length:"0.2–0.4 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Banded knifefish with alternating dark and pale bands, knife-like shape, no tail fin"}},

  // — Lungfish —
  { id:"south-american-lungfish", commonName:"South American Lungfish", scientificName:"Lepidosiren paradoxa",
    mainCategory:"Fish", subCategory:"Lungfish",
    description:"A living fossil that breathes air; survives droughts by burrowing into mud and secreting a moisture cocoon.",
    stats:{weight:"1–4 kg",length:"0.7–1.25 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"South American lungfish with eel-like body, tiny fin-limbs, surfacing to breathe in swamp"}},

  // — Cichlids —
  { id:"peacock-bass", commonName:"Speckled Peacock Bass", scientificName:"Cichla temensis",
    mainCategory:"Fish", subCategory:"Cichlids",
    description:"A spectacularly marked predatory cichlid — the biggest and most aggressive bass in South America.",
    stats:{weight:"3–12 kg",length:"0.5–0.9 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Peacock bass with three dark vertical bars and golden-green body, held above clear water"}},

  { id:"geophagus-cichlid", commonName:"Geophagus Cichlid", scientificName:"Geophagus brasiliensis",
    mainCategory:"Fish", subCategory:"Cichlids",
    description:"A mouthbrooding cichlid that sifts sandy riverbeds for food; displays vivid colours during breeding.",
    stats:{weight:"0.1–0.5 kg",length:"0.15–0.28 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Geophagus cichlid with iridescent blue-green scales and red markings, shallow sandy river"}},

  // — Marine Fish (Rio de Janeiro) —
  { id:"dusky-grouper", commonName:"Dusky Grouper", scientificName:"Epinephelus marginatus",
    mainCategory:"Fish", subCategory:"Marine Fish",
    description:"A large, inquisitive grouper of coastal reefs; heavily overfished and now endangered off Rio.",
    stats:{weight:"10–50 kg",length:"0.5–1.4 m"}, regions:["Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Dusky grouper with dark mottled pattern hovering near coral, large mouth, inquisitive expression"}},

  { id:"common-snook", commonName:"Common Snook", scientificName:"Centropomus undecimalis",
    mainCategory:"Fish", subCategory:"Marine Fish",
    description:"A sleek, fast-striking predator of estuaries and river mouths around Guanabara Bay.",
    stats:{weight:"1–15 kg",length:"0.4–1.1 m"}, regions:["Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Common snook with prominent lateral line and protruding lower jaw, mangrove root backdrop"}},

  { id:"atlantic-tarpon", commonName:"Atlantic Tarpon", scientificName:"Megalops atlanticus",
    mainCategory:"Fish", subCategory:"Marine Fish",
    description:"A prehistoric giant covered in massive silver scales; leaps spectacularly when hooked on a line.",
    stats:{weight:"40–130 kg",length:"1.2–2.5 m"}, regions:["Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Atlantic tarpon leaping from ocean, enormous silver scales gleaming in sunlight"}},

  { id:"longsnout-seahorse", commonName:"Longsnout Seahorse", scientificName:"Hippocampus reidi",
    mainCategory:"Fish", subCategory:"Marine Fish",
    description:"A graceful seahorse of seagrass beds along Rio's coast; males carry the young in a brood pouch.",
    stats:{weight:"<0.01 kg",length:"0.10–0.17 m"}, regions:["Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Longsnout seahorse in orange and yellow colour form, clinging to seagrass with prehensile tail"}},

  // ════════════════════════════════════════════════════════════
  // ARACHNIDS
  // ════════════════════════════════════════════════════════════

  { id:"brazilian-wandering-spider", commonName:"Brazilian Wandering Spider", scientificName:"Phoneutria nigriventer",
    mainCategory:"Arachnids", subCategory:"Wandering Spiders",
    description:"Among the world's most venomous spiders; wanders the forest floor at night hunting insects and frogs.",
    stats:{weight:"<0.01 kg",length:"0.04–0.05 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Brazilian wandering spider in defensive posture with front legs raised, showing reddish fangs"}},

  { id:"pink-toe-tarantula", commonName:"Pink Toe Tarantula", scientificName:"Avicularia avicularia",
    mainCategory:"Arachnids", subCategory:"Tarantulas",
    description:"An arboreal tarantula with velvet-black body and vivid pink toe tips; builds silk retreats in bromeliads.",
    stats:{weight:"<0.01 kg",length:"0.04–0.06 m"}, regions:["Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Pink toe tarantula on bromeliad leaf, black velvet body with distinctive pink-tipped legs"}},

  { id:"salmon-pink-tarantula", commonName:"Salmon Pink Bird-eating Tarantula", scientificName:"Lasiodora parahybana",
    mainCategory:"Arachnids", subCategory:"Tarantulas",
    description:"One of the world's largest tarantulas; females can reach 28 cm leg span and live over 20 years.",
    stats:{weight:"0.05–0.1 kg",length:"0.1–0.28 m"}, regions:["Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Enormous salmon pink tarantula on forest floor showing massive hairy legs, leg span visible"}},

  { id:"chaco-golden-knee", commonName:"Chaco Golden Knee Tarantula", scientificName:"Grammostola pulchripes",
    mainCategory:"Arachnids", subCategory:"Tarantulas",
    description:"A docile, slow-growing giant tarantula with vivid gold knee patches on velvety dark legs.",
    stats:{weight:"0.03–0.07 kg",length:"0.07–0.20 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Chaco golden knee tarantula showing golden yellow patches on dark knees, fluffy dark body"}},

  { id:"brazilian-yellow-scorpion", commonName:"Brazilian Yellow Scorpion", scientificName:"Tityus serrulatus",
    mainCategory:"Arachnids", subCategory:"Scorpions",
    description:"Brazil's most dangerous scorpion; reproduces by parthenogenesis and thrives in urban environments.",
    stats:{weight:"<0.005 kg",length:"0.06–0.07 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Yellow scorpion with slender yellow body and raised stinging tail, on sandy ground"}},

  { id:"black-scorpion", commonName:"Black Scorpion", scientificName:"Tityus bahiensis",
    mainCategory:"Arachnids", subCategory:"Scorpions",
    description:"A common but medically significant dark scorpion found under rocks and bark throughout Brazil.",
    stats:{weight:"<0.005 kg",length:"0.05–0.07 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Black scorpion with dark chocolate-brown body and lighter legs fluorescing under UV light"}},

  { id:"golden-silk-orb-weaver", commonName:"Golden Silk Orb-Weaver", scientificName:"Trichonephila clavipes",
    mainCategory:"Arachnids", subCategory:"Orb Weavers",
    description:"Spins metre-wide golden webs strong enough to trap small birds; females are 4× the size of males.",
    stats:{weight:"<0.005 kg",length:"0.025–0.04 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Golden silk orb-weaver on enormous golden spiral web, yellow banded legs, distinctive body"}},

  { id:"spiny-orb-weaver", commonName:"Spiny Orb Weaver", scientificName:"Micrathena gracilis",
    mainCategory:"Arachnids", subCategory:"Orb Weavers",
    description:"A tiny but striking spider with a spiky white, black, and red abdomen; builds perfectly geometric webs.",
    stats:{weight:"<0.001 kg",length:"0.005–0.009 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Spiny orb weaver with white spiky abdomen edged in black and red at centre of perfect web"}},

  { id:"tailless-whip-scorpion", commonName:"Tailless Whip Scorpion", scientificName:"Heterophrynus longicornis",
    mainCategory:"Arachnids", subCategory:"Whip Spiders",
    description:"An alien-looking arachnid with whip-like antennae several times its body length; completely harmless.",
    stats:{weight:"<0.005 kg",length:"0.03–0.05 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Tailless whip scorpion flat against bark at night, impossibly long antennae-like front legs spread wide"}},

  { id:"giant-wolf-spider", commonName:"Giant Wolf Spider", scientificName:"Pamphobeteus platyomma",
    mainCategory:"Arachnids", subCategory:"Wandering Spiders",
    description:"A powerful ground-hunting spider that stalks prey through the leaf litter of Atlantic Forest floors.",
    stats:{weight:"0.01–0.05 kg",length:"0.05–0.09 m"}, regions:["Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Giant wolf spider with large forward-facing eyes, carrying egg sac underneath, on forest floor"}},

  // ════════════════════════════════════════════════════════════
  // INSECTS
  // ════════════════════════════════════════════════════════════

  { id:"blue-morpho", commonName:"Blue Morpho Butterfly", scientificName:"Morpho menelaus",
    mainCategory:"Insects", subCategory:"Butterflies",
    description:"An iridescent flash of electric blue; the colour is structural, not pigment — microscopic scales scatter light.",
    stats:{weight:"<0.001 kg",length:"0.14–0.20 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Blue morpho butterfly with open wings showing dazzling iridescent blue, perched on leaf"}},

  { id:"postman-butterfly", commonName:"Postman Butterfly", scientificName:"Heliconius melpomene",
    mainCategory:"Insects", subCategory:"Butterflies",
    description:"A slow-flying, chemically defended butterfly; its vivid red bands warn predators of accumulated toxins.",
    stats:{weight:"<0.001 kg",length:"0.065–0.09 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Postman butterfly with long black wings crossed by vivid scarlet red band, on a flower"}},

  { id:"owl-butterfly", commonName:"Owl Butterfly", scientificName:"Caligo eurilochus",
    mainCategory:"Insects", subCategory:"Butterflies",
    description:"Giant underwing eyespots mimic an owl's face to startle predators when the butterfly suddenly opens its wings.",
    stats:{weight:"<0.001 kg",length:"0.13–0.20 m"}, regions:["Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Owl butterfly with massive realistic owl-eye pattern on underwing, dark brown upper surface"}},

  { id:"malachite-butterfly", commonName:"Malachite Butterfly", scientificName:"Siproeta stelenes",
    mainCategory:"Insects", subCategory:"Butterflies",
    description:"A striking butterfly with translucent emerald-green windows in its dark wings; fast and unpredictable in flight.",
    stats:{weight:"<0.001 kg",length:"0.085–0.10 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Malachite butterfly with vivid green and black patterned wings, wings open on forest flower"}},

  { id:"hercules-beetle", commonName:"Hercules Beetle", scientificName:"Dynastes hercules",
    mainCategory:"Insects", subCategory:"Beetles",
    description:"The world's longest beetle; males wield enormous curved horns for combat over females and sap sites.",
    stats:{weight:"0.01–0.05 kg",length:"0.05–0.17 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Hercules beetle with enormous curved horn grasping a branch, mottled olive-green and black elytra"}},

  { id:"titan-beetle", commonName:"Titan Beetle", scientificName:"Titanus giganteus",
    mainCategory:"Insects", subCategory:"Beetles",
    description:"The world's largest beetle by body size; adults do not eat, living off fat reserves from their larval years.",
    stats:{weight:"0.02–0.05 kg",length:"0.10–0.167 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Titan beetle, enormous longhorn beetle held in human hand showing its massive body and mandibles"}},

  { id:"rhinoceros-beetle", commonName:"Rhinoceros Beetle", scientificName:"Strategus aloeus",
    mainCategory:"Insects", subCategory:"Beetles",
    description:"A stout beetle with three impressive horns used in wrestling matches for access to buried food resources.",
    stats:{weight:"0.005–0.02 kg",length:"0.04–0.07 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Rhinoceros beetle with three curved horns, shiny dark brown shell, climbing tree bark at night"}},

  { id:"bullet-ant", commonName:"Bullet Ant", scientificName:"Paraponera clavata",
    mainCategory:"Insects", subCategory:"Ants",
    description:"Delivers the most painful insect sting in the world — rated 4+ on the Schmidt Pain Index, lasting 24 hours.",
    stats:{weight:"<0.001 kg",length:"0.018–0.025 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Bullet ant on forest floor, massive for an ant, reddish-black, powerful mandibles visible"}},

  { id:"leafcutter-ant", commonName:"Leafcutter Ant", scientificName:"Atta sexdens",
    mainCategory:"Insects", subCategory:"Ants",
    description:"Master fungus farmers; soldier ants guard columns of workers carrying leaf fragments to underground gardens.",
    stats:{weight:"<0.001 kg",length:"0.003–0.016 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Leafcutter ant column carrying bright green leaf fragments above their bodies along forest path"}},

  { id:"army-ant", commonName:"Army Ant", scientificName:"Eciton burchellii",
    mainCategory:"Insects", subCategory:"Ants",
    description:"A nomadic hunting swarm of 700,000 individuals that overwhelms any invertebrate in its path.",
    stats:{weight:"<0.001 kg",length:"0.003–0.012 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Army ant swarm moving as a unified mass across forest floor, worker ants interlocked in living bridge"}},

  { id:"giant-water-bug", commonName:"Giant Water Bug", scientificName:"Lethocerus americanus",
    mainCategory:"Insects", subCategory:"Bugs",
    description:"An aquatic apex predator that kills tadpoles, fish, and even small snakes with a dissolving enzyme bite.",
    stats:{weight:"<0.005 kg",length:"0.06–0.12 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Giant water bug swimming in murky water, powerful grasping front legs, flat oval dark body"}},

  { id:"giant-stick-insect", commonName:"Giant Stick Insect", scientificName:"Phasma gigas",
    mainCategory:"Insects", subCategory:"Walkingsticks",
    description:"One of the longest insects in the world; perfectly mimics a stick or twig, invisible in plain sight.",
    stats:{weight:"<0.01 kg",length:"0.15–0.35 m"}, regions:["Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Giant stick insect indistinguishable from thin branch, impossibly long thin green body"}},

  // ════════════════════════════════════════════════════════════
  // OTHERS  (crustaceans, myriapods)
  // ════════════════════════════════════════════════════════════

  { id:"freshwater-crab", commonName:"South American Freshwater Crab", scientificName:"Trichodactylus fluviatilis",
    mainCategory:"Others", subCategory:"Crustaceans",
    description:"A small, fully aquatic freshwater crab that scavenges organic matter on Pantanal river bottoms.",
    stats:{weight:"<0.05 kg",length:"0.03–0.06 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Freshwater crab on river stones, brown mottled shell, claws raised in defensive posture"}},

  { id:"amazon-river-prawn", commonName:"Amazon River Prawn", scientificName:"Macrobrachium amazonicum",
    mainCategory:"Others", subCategory:"Crustaceans",
    description:"A large freshwater prawn with outsized blue claws; commercially fished throughout Pantanal waterways.",
    stats:{weight:"0.01–0.05 kg",length:"0.06–0.14 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Amazon river prawn with striking blue elongated claws, translucent body, underwater on sand"}},

  { id:"giant-millipede", commonName:"Giant Flat-backed Millipede", scientificName:"Rhinocricus sp.",
    mainCategory:"Others", subCategory:"Myriapods",
    description:"A slow-moving, cylindrical detritivore that coils into a tight spiral and releases repellent chemicals when threatened.",
    stats:{weight:"0.005–0.02 kg",length:"0.08–0.22 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Giant millipede coiled in defensive spiral on forest floor, dark brown segmented body"}},

  { id:"amazon-giant-centipede", commonName:"Amazon Giant Centipede", scientificName:"Scolopendra gigantea",
    mainCategory:"Others", subCategory:"Myriapods",
    description:"The world's largest centipede; an active predator that hunts bats, lizards, and even tarantulas.",
    stats:{weight:"0.01–0.04 kg",length:"0.25–0.35 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Massive dark centipede with yellow-orange legs flowing across rock surface, intimidating size"}},

  { id:"freshwater-mussel", commonName:"Pantanal Freshwater Mussel", scientificName:"Diplodon charruanus",
    mainCategory:"Others", subCategory:"Mollusks",
    description:"A filter-feeding bivalve that cleanses Pantanal waterways; host to larvae of native freshwater fish.",
    stats:{weight:"0.1–0.5 kg",length:"0.05–0.15 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Freshwater mussel with green-brown shell half-open in clear shallow river water"}},

  // ════════════════════════════════════════════════════════════
  // ADDITIONAL BIRDS
  // ════════════════════════════════════════════════════════════

  { id:"southern-lapwing", commonName:"Southern Lapwing", scientificName:"Vanellus chilensis",
    mainCategory:"Birds", subCategory:"Wading Birds",
    description:"South America's noisiest sentinel; screams alarm calls at any intruder, day or night.",
    stats:{weight:"0.25–0.35 kg",length:"0.32–0.38 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Southern lapwing with black chest, grey back and vivid red facial wattle, standing in grass"}},

  { id:"limpkin", commonName:"Limpkin", scientificName:"Aramus guarauna",
    mainCategory:"Birds", subCategory:"Wading Birds",
    description:"A marsh bird with a mournful, haunting wail; uses its curved bill to extract apple snails.",
    stats:{weight:"0.9–1.3 kg",length:"0.56–0.71 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Limpkin with streaked brown plumage wading in marsh, curved bill, slightly drooping wingtips"}},

  { id:"maguari-stork", commonName:"Maguari Stork", scientificName:"Ciconia maguari",
    mainCategory:"Birds", subCategory:"Wading Birds",
    description:"A large white stork with vivid red facial skin; gathers in flocks ahead of bush fires to snatch prey.",
    stats:{weight:"3.0–4.5 kg",length:"0.97–1.02 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Maguari stork with white body, black flight feathers and red facial skin, in flooded field"}},

  { id:"capped-heron", commonName:"Capped Heron", scientificName:"Pilherodias pileatus",
    mainCategory:"Birds", subCategory:"Wading Birds",
    description:"An elegantly coloured heron with a blue face, white plumes, and a striking black crown.",
    stats:{weight:"0.6–0.85 kg",length:"0.48–0.56 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Capped heron with electric blue facial skin, black cap, and long white plumes at gallery forest edge"}},

  { id:"guira-cuckoo", commonName:"Guira Cuckoo", scientificName:"Guira guira",
    mainCategory:"Birds", subCategory:"Cuckoos",
    description:"A scruffy, sociable cuckoo with a spiky orange crest; groups chase lizards and frogs together.",
    stats:{weight:"0.14–0.17 kg",length:"0.34–0.42 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Guira cuckoo with messy spiky orange crest, streaked brown-white body, long tail, perched on wire"}},

  { id:"smooth-billed-ani", commonName:"Smooth-billed Ani", scientificName:"Crotophaga ani",
    mainCategory:"Birds", subCategory:"Cuckoos",
    description:"A sociable, all-black cuckoo with a distinctive high-ridged bill; breeds cooperatively in shared nests.",
    stats:{weight:"0.07–0.12 kg",length:"0.30–0.36 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Smooth-billed ani with glossy iridescent black plumage and high-ridged bill, perched on stick"}},

  { id:"great-kiskadee", commonName:"Great Kiskadee", scientificName:"Pitangus sulphuratus",
    mainCategory:"Birds", subCategory:"Flycatchers",
    description:"Brazil's most recognisable flycatcher; screams 'kis-ka-dee!' constantly from any prominent perch.",
    stats:{weight:"0.06–0.07 kg",length:"0.22–0.25 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Great kiskadee with bold yellow underparts, black-and-white head pattern, perched on fence post"}},

  { id:"fork-tailed-flycatcher", commonName:"Fork-tailed Flycatcher", scientificName:"Tyrannus savana",
    mainCategory:"Birds", subCategory:"Flycatchers",
    description:"Its tail feathers are longer than its entire body; migrates in huge roosts through open Pantanal country.",
    stats:{weight:"0.025–0.03 kg",length:"0.28–0.41 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Fork-tailed flycatcher with enormously long scissor-like tail streaming behind, grey and white body"}},

  { id:"tropical-kingbird", commonName:"Tropical Kingbird", scientificName:"Tyrannus melancholicus",
    mainCategory:"Birds", subCategory:"Flycatchers",
    description:"An aggressive flycatcher that attacks hawks and vultures many times its size near its nest.",
    stats:{weight:"0.037–0.043 kg",length:"0.22–0.23 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Tropical kingbird with grey head, bright yellow belly and slightly notched tail on telephone wire"}},

  { id:"plush-crested-jay", commonName:"Plush-crested Jay", scientificName:"Cyanocorax chrysops",
    mainCategory:"Birds", subCategory:"Jays",
    description:"A spectacularly coloured jay with a velvety blue-and-black plush crest; travels in noisy family parties.",
    stats:{weight:"0.11–0.14 kg",length:"0.34–0.37 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Plush-crested jay with deep blue plush crest, yellow eye, black face and white underparts in cerrado"}},

  { id:"yellow-billed-cardinal", commonName:"Yellow-billed Cardinal", scientificName:"Paroaria capitata",
    mainCategory:"Birds", subCategory:"Tanagers & Songbirds",
    description:"A dapper bird with a scarlet head and crisp white chest; perches prominently on Pantanal fences and wires.",
    stats:{weight:"0.025–0.035 kg",length:"0.16–0.17 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Yellow-billed cardinal with vivid red head, white chest and yellow bill, perched on branch"}},

  { id:"spectacled-owl", commonName:"Spectacled Owl", scientificName:"Pulsatrix perspicillata",
    mainCategory:"Birds", subCategory:"Owls",
    description:"A large, striking owl with bold white spectacle markings; its deep booming call carries far through forest.",
    stats:{weight:"0.45–1.05 kg",length:"0.43–0.52 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Spectacled owl with chocolate-brown back, creamy-white spectacles and breast, yellow eyes in forest"}},

  { id:"tropical-screech-owl", commonName:"Tropical Screech-Owl", scientificName:"Megascops choliba",
    mainCategory:"Birds", subCategory:"Owls",
    description:"A small, cryptic owl that freezes vertically against tree bark when alarmed, becoming invisible.",
    stats:{weight:"0.09–0.15 kg",length:"0.20–0.23 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Tropical screech-owl pressed flat against bark in perfect camouflage, ear tufts raised, yellow eyes"}},

  { id:"bat-falcon", commonName:"Bat Falcon", scientificName:"Falco rufigularis",
    mainCategory:"Birds", subCategory:"Raptors",
    description:"A swift, agile falcon that hunts at dusk; captures bats, swifts, and large insects in mid-air.",
    stats:{weight:"0.09–0.18 kg",length:"0.23–0.30 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Bat falcon with dark slate back, white throat, rufous underparts, perched on dead snag at dusk"}},

  { id:"ornate-hawk-eagle", commonName:"Ornate Hawk-Eagle", scientificName:"Spizaetus ornatus",
    mainCategory:"Birds", subCategory:"Raptors",
    description:"A powerful forest raptor with a spectacular black-and-white crest; hunts monkeys and large birds.",
    stats:{weight:"0.9–1.6 kg",length:"0.56–0.67 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Ornate hawk-eagle with dramatic black-and-white crest raised, fierce orange eye, barred underparts"}},

  { id:"channel-billed-toucan", commonName:"Channel-billed Toucan", scientificName:"Ramphastos vitellinus",
    mainCategory:"Birds", subCategory:"Toucans",
    description:"A bold and noisy Mata Atlântica toucan with a blue-black bill and vivid yellow bib.",
    stats:{weight:"0.3–0.5 kg",length:"0.48–0.56 m"}, regions:["Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Channel-billed toucan with blue-ridged black bill and golden-yellow chest bib in Atlantic Forest"}},

  { id:"red-breasted-toucan", commonName:"Red-breasted Toucan", scientificName:"Ramphastos dicolorus",
    mainCategory:"Birds", subCategory:"Toucans",
    description:"A Mata Atlântica endemic toucan with a flame-red lower breast; a flagship species of coastal Atlantic Forest.",
    stats:{weight:"0.27–0.38 kg",length:"0.40–0.46 m"}, regions:["Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Red-breasted toucan with vivid red-orange lower breast and green-yellow bill in Atlantic Forest"}},

  { id:"white-woodpecker", commonName:"White Woodpecker", scientificName:"Melanerpes candidus",
    mainCategory:"Birds", subCategory:"Woodpeckers",
    description:"An eye-catching social woodpecker of open woodland; groups of up to 10 forage together in Pantanal cerrado.",
    stats:{weight:"0.09–0.12 kg",length:"0.24–0.28 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"White woodpecker with bold black-and-white plumage and yellow eye-ring on cerrado palm trunk"}},

  { id:"nacunda-nighthawk", commonName:"Nacunda Nighthawk", scientificName:"Chordeiles nacunda",
    mainCategory:"Birds", subCategory:"Nightbirds",
    description:"The largest nighthawk; roosts in massive flocks on Pantanal grasslands, flushing at dusk in huge columns.",
    stats:{weight:"0.15–0.22 kg",length:"0.30–0.33 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Nacunda nighthawk flock rising at dusk from Pantanal grassland, mottled brown and white birds"}},

  // ════════════════════════════════════════════════════════════
  // ADDITIONAL REPTILES
  // ════════════════════════════════════════════════════════════

  { id:"spectacled-caiman", commonName:"Spectacled Caiman", scientificName:"Caiman crocodilus",
    mainCategory:"Reptiles", subCategory:"Crocodilians",
    description:"Named for the bony ridge between its eyes resembling spectacles; the most widespread crocodilian in the Americas.",
    stats:{weight:"6–30 kg",length:"1.2–2.5 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Spectacled caiman with distinctive bony ridge between eyes, olive-green body at water's edge"}},

  { id:"amazon-tree-boa", commonName:"Amazon Tree Boa", scientificName:"Corallus hortulanus",
    mainCategory:"Reptiles", subCategory:"Anacondas & Boas",
    description:"An extraordinarily variable tree boa; colours range from yellow to orange to silver-grey in the same population.",
    stats:{weight:"0.3–1.5 kg",length:"1.0–2.0 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Amazon tree boa in vivid orange-and-black morph coiled on a branch, head raised, prehensile tail"}},

  { id:"jararacucu", commonName:"Jararacuçu", scientificName:"Bothrops jararacussu",
    mainCategory:"Reptiles", subCategory:"Vipers",
    description:"A large, beautifully patterned lancehead; responsible for many snakebite cases in Rio de Janeiro state.",
    stats:{weight:"0.5–2.5 kg",length:"1.0–1.8 m"}, regions:["Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Jararacuçu pitviper with striking dark zigzag pattern on olive-brown scales, triangular head"}},

  { id:"urutu", commonName:"Urutu", scientificName:"Bothrops alternatus",
    mainCategory:"Reptiles", subCategory:"Vipers",
    description:"Named for its distinctive horseshoe-shaped markings; a large Pantanal pitviper often found near water.",
    stats:{weight:"0.5–2.0 kg",length:"0.9–1.6 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Urutu pitviper with distinctive C-shaped horseshoe markings on brown body, near water's edge"}},

  { id:"giant-whiptail", commonName:"Giant Whiptail Lizard", scientificName:"Salvator duseni",
    mainCategory:"Reptiles", subCategory:"Lizards",
    description:"A large, fast-running lizard that forages for eggs, invertebrates, and fruit across Pantanal scrubland.",
    stats:{weight:"0.3–1.2 kg",length:"0.5–0.9 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Giant whiptail lizard with long elegant tail, olive-brown patterned body, alert posture in savanna"}},

  { id:"swamp-turtle", commonName:"South American Swamp Turtle", scientificName:"Acanthochelys macrocephala",
    mainCategory:"Reptiles", subCategory:"Turtles & Tortoises",
    description:"A large-headed side-necked turtle that aestivates buried in mud when Pantanal ponds dry up.",
    stats:{weight:"1.0–4.0 kg",length:"0.25–0.35 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Swamp turtle with disproportionately large head and dark domed shell, on dried mudflat"}},

  { id:"emerald-tree-boa", commonName:"Emerald Tree Boa", scientificName:"Corallus batesii",
    mainCategory:"Reptiles", subCategory:"Anacondas & Boas",
    description:"A vivid green arboreal boa that drapes itself over branches like a coiled gem; hunts birds and bats at night.",
    stats:{weight:"1.0–3.0 kg",length:"1.5–2.2 m"}, regions:["Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Emerald tree boa in radiant green coiled on dark branch, white dorsal markings, heat-sensing pits"}},

  { id:"striped-whipsnake", commonName:"Striped Whipsnake", scientificName:"Mastigodryas bifossatus",
    mainCategory:"Reptiles", subCategory:"Colubrids",
    description:"A slender, lightning-fast diurnal hunter; chases frogs and lizards across Pantanal grassland at full sprint.",
    stats:{weight:"0.1–0.5 kg",length:"0.8–1.5 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Striped whipsnake with cream lateral stripe on olive body, mid-sprint across dry ground"}},

  // ════════════════════════════════════════════════════════════
  // ADDITIONAL AMPHIBIANS
  // ════════════════════════════════════════════════════════════

  { id:"neotropical-bullfrog", commonName:"Neotropical Bullfrog", scientificName:"Leptodactylus pentadactylus",
    mainCategory:"Amphibians", subCategory:"True Frogs",
    description:"The largest frog in Brazil; builds foam nests and lets out a blood-curdling scream when grabbed.",
    stats:{weight:"0.15–0.6 kg",length:"0.10–0.185 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Massive neotropical bullfrog with dark mottled brown-grey skin and muscular body in mud at night"}},

  { id:"surinam-horned-frog", commonName:"Surinam Horned Frog", scientificName:"Ceratophrys cornuta",
    mainCategory:"Amphibians", subCategory:"True Frogs",
    description:"A perfectly camouflaged leaf-mimic that bites anything that moves past it, including hands.",
    stats:{weight:"0.05–0.25 kg",length:"0.08–0.15 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Surinam horned frog indistinguishable from leaf litter, horns above eyes, gaping mouth"}},

  { id:"giant-gladiator-frog", commonName:"Giant Gladiator Frog", scientificName:"Boana boans",
    mainCategory:"Amphibians", subCategory:"Tree Frogs",
    description:"Males build mud basins on riverbanks and fight violently with clawed thumbs to defend their arena.",
    stats:{weight:"0.04–0.12 kg",length:"0.08–0.12 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Giant gladiator frog at edge of self-built mud pool, large yellow tympanum, calling at night"}},

  { id:"striped-treefrog", commonName:"Striped Tree Frog", scientificName:"Hypsiboas calcaratus",
    mainCategory:"Amphibians", subCategory:"Tree Frogs",
    description:"A slender tree frog with a pale lateral stripe; forms large choruses around Pantanal temporary pools.",
    stats:{weight:"0.005–0.015 kg",length:"0.04–0.06 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Striped treefrog with pale lateral stripe on brown back, large toe pads, on reed at night"}},

  { id:"spot-legged-treefrog", commonName:"Spot-legged Tree Frog", scientificName:"Boana punctata",
    mainCategory:"Amphibians", subCategory:"Tree Frogs",
    description:"A delicately spotted tree frog whose skin glows vivid green under UV light due to biofluorescence.",
    stats:{weight:"0.003–0.008 kg",length:"0.03–0.04 m"}, regions:["Pantanal","Rio de Janeiro"],
    uiElements:{thumbnailImagePrompt:"Spot-legged treefrog with small dark spots on pale green back, fluorescent under ultraviolet light"}},

  { id:"painted-belly-monkey-frog", commonName:"Painted-belly Monkey Frog", scientificName:"Phyllomedusa sauvagii",
    mainCategory:"Amphibians", subCategory:"Tree Frogs",
    description:"Rubs waxy oil from a gland over its body to waterproof itself — the only frog known to do so.",
    stats:{weight:"0.02–0.06 kg",length:"0.06–0.09 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Painted-belly monkey frog with green back and cream-orange barred flanks, walking on a branch"}},

  { id:"surinam-toad", commonName:"Surinam Toad", scientificName:"Pipa pipa",
    mainCategory:"Amphibians", subCategory:"True Frogs",
    description:"Gives birth through holes in the mother's back; young burst through the skin as fully-formed toadlets.",
    stats:{weight:"0.05–0.12 kg",length:"0.10–0.17 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Surinam toad lying flat underwater, leaf-like shape, with young emerging from skin on its back"}},

  { id:"yellow-treefrog", commonName:"Yellow Treefrog", scientificName:"Dendropsophus nanus",
    mainCategory:"Amphibians", subCategory:"Tree Frogs",
    description:"A tiny, vivid-yellow tree frog that emerges in massed choruses after Pantanal rains.",
    stats:{weight:"<0.002 kg",length:"0.025–0.032 m"}, regions:["Pantanal"],
    uiElements:{thumbnailImagePrompt:"Tiny yellow treefrog with golden-yellow skin clinging to reed, calling with inflated vocal sac"}},

]; // end extra array

// ─── Merge into main array ────────────────────────────────────
extra.forEach(a => animals.push(a));

// ─── Rarity for new species ───────────────────────────────────
Object.assign(RARITY, {
  // Fish
  "golden-dorado":"Common","pacu":"Common","piraputanga":"Common",
  "pintado":"Uncommon","cachara":"Uncommon","piraiba":"Rare",
  "barbado":"Common","mandi":"Common","armored-catfish":"Common",
  "red-bellied-piranha":"Common","black-piranha":"Uncommon",
  "matrinxa":"Common","wolf-fish":"Uncommon",
  "electric-eel":"Uncommon","banded-knifefish":"Common",
  "south-american-lungfish":"Rare","peacock-bass":"Common",
  "geophagus-cichlid":"Common","corvina":"Common",
  "dusky-grouper":"Rare","common-snook":"Uncommon",
  "atlantic-tarpon":"Uncommon","longsnout-seahorse":"Uncommon",
  // Arachnids
  "brazilian-wandering-spider":"Common","pink-toe-tarantula":"Uncommon",
  "salmon-pink-tarantula":"Uncommon","chaco-golden-knee":"Uncommon",
  "brazilian-yellow-scorpion":"Common","black-scorpion":"Common",
  "golden-silk-orb-weaver":"Common","spiny-orb-weaver":"Common",
  "tailless-whip-scorpion":"Uncommon","giant-wolf-spider":"Uncommon",
  // Insects
  "blue-morpho":"Common","postman-butterfly":"Common",
  "owl-butterfly":"Common","malachite-butterfly":"Common",
  "hercules-beetle":"Uncommon","titan-beetle":"Rare",
  "rhinoceros-beetle":"Uncommon","bullet-ant":"Common",
  "leafcutter-ant":"Common","army-ant":"Common",
  "giant-water-bug":"Uncommon","giant-stick-insect":"Rare",
  // Others
  "freshwater-crab":"Common","amazon-river-prawn":"Common",
  "giant-millipede":"Common","amazon-giant-centipede":"Uncommon",
  "freshwater-mussel":"Common",
  // Additional birds
  "southern-lapwing":"Common","limpkin":"Common","maguari-stork":"Common",
  "capped-heron":"Uncommon","guira-cuckoo":"Common","smooth-billed-ani":"Common",
  "great-kiskadee":"Common","fork-tailed-flycatcher":"Common",
  "tropical-kingbird":"Common","plush-crested-jay":"Common",
  "yellow-billed-cardinal":"Common","spectacled-owl":"Uncommon",
  "tropical-screech-owl":"Common","bat-falcon":"Uncommon",
  "ornate-hawk-eagle":"Rare","channel-billed-toucan":"Common",
  "red-breasted-toucan":"Uncommon","white-woodpecker":"Common",
  "nacunda-nighthawk":"Common",
  // Additional reptiles
  "spectacled-caiman":"Common","amazon-tree-boa":"Uncommon",
  "jararacucu":"Uncommon","urutu":"Uncommon",
  "giant-whiptail":"Common","swamp-turtle":"Uncommon",
  "emerald-tree-boa":"Rare","striped-whipsnake":"Common",
  // Additional amphibians
  "neotropical-bullfrog":"Common","surinam-horned-frog":"Uncommon",
  "giant-gladiator-frog":"Uncommon","striped-treefrog":"Common",
  "spot-legged-treefrog":"Common","painted-belly-monkey-frog":"Uncommon",
  "surinam-toad":"Uncommon","yellow-treefrog":"Common"
});

// ─── Conservation status for new species ─────────────────────
Object.assign(CONSERVATION, {
  // Fish
  "golden-dorado":"VU","pacu":"EN","piraputanga":"LC",
  "pintado":"VU","cachara":"LC","piraiba":"VU",
  "barbado":"LC","mandi":"LC","armored-catfish":"LC",
  "red-bellied-piranha":"LC","black-piranha":"LC",
  "matrinxa":"LC","wolf-fish":"LC",
  "electric-eel":"LC","banded-knifefish":"LC",
  "south-american-lungfish":"LC","peacock-bass":"LC",
  "geophagus-cichlid":"LC","corvina":"LC",
  "dusky-grouper":"EN","common-snook":"LC",
  "atlantic-tarpon":"VU","longsnout-seahorse":"VU",
  // Arachnids
  "brazilian-wandering-spider":"LC","pink-toe-tarantula":"LC",
  "salmon-pink-tarantula":"LC","chaco-golden-knee":"LC",
  "brazilian-yellow-scorpion":"LC","black-scorpion":"LC",
  "golden-silk-orb-weaver":"LC","spiny-orb-weaver":"LC",
  "tailless-whip-scorpion":"LC","giant-wolf-spider":"LC",
  // Insects
  "blue-morpho":"LC","postman-butterfly":"LC",
  "owl-butterfly":"LC","malachite-butterfly":"LC",
  "hercules-beetle":"LC","titan-beetle":"VU",
  "rhinoceros-beetle":"LC","bullet-ant":"LC",
  "leafcutter-ant":"LC","army-ant":"LC",
  "giant-water-bug":"LC","giant-stick-insect":"LC",
  // Others
  "freshwater-crab":"LC","amazon-river-prawn":"LC",
  "giant-millipede":"LC","amazon-giant-centipede":"LC",
  "freshwater-mussel":"LC",
  // Additional birds
  "southern-lapwing":"LC","limpkin":"LC","maguari-stork":"LC",
  "capped-heron":"LC","guira-cuckoo":"LC","smooth-billed-ani":"LC",
  "great-kiskadee":"LC","fork-tailed-flycatcher":"LC",
  "tropical-kingbird":"LC","plush-crested-jay":"LC",
  "yellow-billed-cardinal":"LC","spectacled-owl":"LC",
  "tropical-screech-owl":"LC","bat-falcon":"LC",
  "ornate-hawk-eagle":"NT","channel-billed-toucan":"LC",
  "red-breasted-toucan":"NT","white-woodpecker":"LC",
  "nacunda-nighthawk":"LC",
  // Additional reptiles
  "spectacled-caiman":"LC","amazon-tree-boa":"LC",
  "jararacucu":"LC","urutu":"LC",
  "giant-whiptail":"LC","swamp-turtle":"NT",
  "emerald-tree-boa":"LC","striped-whipsnake":"LC",
  // Additional amphibians
  "neotropical-bullfrog":"LC","surinam-horned-frog":"LC",
  "giant-gladiator-frog":"LC","striped-treefrog":"LC",
  "spot-legged-treefrog":"LC","painted-belly-monkey-frog":"LC",
  "surinam-toad":"LC","yellow-treefrog":"LC"
});

})();
