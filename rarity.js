// ─── Rarity lookup ────────────────────────────────────────────
// Common    → reliably spotted on most outings
// Uncommon  → seen with some patience or luck
// Rare      → dedicated effort or fortune required
//
// Based on field guide data for the Pantanal & Mata Atlântica.
// To update an entry just change the value here — no other file needs touching.

const RARITY = {
  // Felines
  "jaguar":                          "Rare",
  "puma":                            "Uncommon",
  "ocelot":                          "Uncommon",
  "margay":                          "Rare",
  "oncilla":                         "Rare",
  "jaguarundi":                      "Uncommon",
  // Canines
  "maned-wolf":                      "Uncommon",
  "crab-eating-fox":                 "Common",
  "bush-dog":                        "Rare",
  // Mustelids
  "giant-otter":                     "Uncommon",
  "neotropical-river-otter":         "Uncommon",
  "greater-grison":                  "Rare",
  "tayra":                           "Uncommon",
  // Procyonids
  "south-american-coati":            "Common",
  "crab-eating-raccoon":             "Uncommon",
  "kinkajou":                        "Rare",
  // Primates
  "black-howler-monkey":             "Common",
  "azaras-night-monkey":             "Rare",
  "black-tailed-marmoset":           "Common",
  "golden-lion-tamarin":             "Rare",
  "brown-howler-monkey":             "Uncommon",
  "brown-capuchin":                  "Common",
  "southern-muriqui":                "Rare",
  "common-marmoset":                 "Common",
  "buffy-tufted-ear-marmoset":       "Rare",
  "masked-titi":                     "Uncommon",
  // Anteaters
  "giant-anteater":                  "Uncommon",
  "southern-tamandua":               "Uncommon",
  "silky-anteater":                  "Rare",
  // Armadillos
  "giant-armadillo":                 "Rare",
  "nine-banded-armadillo":           "Common",
  "six-banded-armadillo":            "Common",
  "southern-three-banded-armadillo": "Uncommon",
  "southern-naked-tailed-armadillo": "Rare",
  // Ungulates
  "south-american-tapir":            "Uncommon",
  "white-lipped-peccary":            "Uncommon",
  "collared-peccary":                "Common",
  "marsh-deer":                      "Uncommon",
  "pampas-deer":                     "Uncommon",
  "red-brocket-deer":                "Uncommon",
  "small-red-brocket-deer":          "Rare",
  // Cetaceans
  "amazon-river-dolphin":            "Common",
  "tucuxi":                          "Common",
  // Rodents
  "capybara":                        "Common",
  "spotted-paca":                    "Uncommon",
  "azaras-agouti":                   "Common",
  "red-rumped-agouti":               "Common",
  "coypu":                           "Common",
  "brazilian-porcupine":             "Uncommon",
  "guianan-squirrel":                "Common",
  "marsh-rice-rat":                  "Uncommon",
  // Opossums
  "white-eared-opossum":             "Common",
  "big-eared-opossum":               "Common",
  "lutrine-opossum":                 "Uncommon",
  "southeastern-four-eyed-opossum":  "Uncommon",
  "gracile-mouse-opossum":           "Rare",
  // Bats
  "greater-bulldog-bat":             "Uncommon",
  "common-vampire-bat":              "Common",
  "pallass-long-tongued-bat":        "Common",
  "great-fruit-eating-bat":          "Common",
  "lesser-spear-nosed-bat":          "Uncommon",
  // Birds — Macaws & Parrots
  "hyacinth-macaw":                  "Uncommon",
  "red-and-green-macaw":             "Uncommon",
  "blue-fronted-amazon":             "Common",
  "red-browed-amazon":               "Rare",
  "peach-fronted-parakeet":          "Common",
  // Birds — Toucans
  "toco-toucan":                     "Common",
  "saffron-toucanet":                "Uncommon",
  "chestnut-eared-aracari":          "Common",
  // Birds — Raptors
  "snail-kite":                      "Common",
  "savanna-hawk":                    "Common",
  "black-collared-hawk":             "Common",
  "harpy-eagle":                     "Rare",
  // Birds — Wading Birds
  "jabiru-stork":                    "Common",
  "roseate-spoonbill":               "Common",
  "cocoi-heron":                     "Common",
  "wattled-jacana":                  "Common",
  "sunbittern":                      "Uncommon",
  // Birds — Hummingbirds
  "swallow-tailed-hummingbird":      "Common",
  "black-jacobin":                   "Common",
  "violet-capped-woodnymph":         "Common",
  // Birds — Cracids
  "bare-faced-curassow":             "Uncommon",
  "chestnut-bellied-guan":           "Uncommon",
  "black-fronted-piping-guan":       "Rare",
  // Birds — Waterfowl & Screamers
  "southern-screamer":               "Common",
  "anhinga":                         "Common",
  "greater-rhea":                    "Common",
  // Birds — Kingfishers
  "ringed-kingfisher":               "Common",
  "amazon-kingfisher":               "Common",
  // Birds — Tanagers & Songbirds
  "brazilian-tanager":               "Common",
  "red-necked-tanager":              "Common",
  "blue-dacnis":                     "Common",
  "bare-throated-bellbird":          "Uncommon",
  // Birds — Nightbirds
  "great-potoo":                     "Uncommon",
  // Birds — Manakins
  "white-bearded-manakin":           "Common",
  // Reptiles — Crocodilians
  "yacare-caiman":                   "Common",
  "broad-snouted-caiman":            "Uncommon",
  // Reptiles — Anacondas & Boas
  "green-anaconda":                  "Uncommon",
  "yellow-anaconda":                 "Uncommon",
  "boa-constrictor":                 "Uncommon",
  "brazilian-rainbow-boa":           "Uncommon",
  // Reptiles — Colubrids
  "vine-snake":                      "Uncommon",
  "false-water-cobra":               "Uncommon",
  "mussurana":                       "Rare",
  // Reptiles — Vipers
  "fer-de-lance":                    "Uncommon",
  "pantanal-lancehead":              "Uncommon",
  "south-american-rattlesnake":      "Uncommon",
  // Reptiles — Lizards
  "black-and-white-tegu":            "Common",
  "caiman-lizard":                   "Uncommon",
  "green-iguana":                    "Common",
  "south-american-racerunner":       "Common",
  "tropical-gecko":                  "Common",
  // Reptiles — Turtles & Tortoises
  "red-footed-tortoise":             "Uncommon",
  "giant-south-american-river-turtle":"Uncommon",
  "matamata-turtle":                 "Rare",
  // Amphibians — Toads
  "rococo-toad":                     "Common",
  "cane-toad":                       "Common",
  "pumpkin-toadlet":                 "Rare",
  // Amphibians — Tree Frogs
  "giant-monkey-frog":               "Uncommon",
  "orange-thighed-monkey-frog":      "Common",
  "clown-tree-frog":                 "Uncommon",
  "golden-tree-frog":                "Common",
  "painted-tree-frog":               "Common",
  "dwarf-monkey-frog":               "Common",
  "smith-frog":                      "Common",
  "common-pantanal-tree-frog":       "Common",
  // Amphibians — True Frogs
  "south-american-bullfrog":         "Uncommon",
  "paradox-frog":                    "Uncommon",
  "chacoan-horned-frog":             "Uncommon",
  "four-eyed-frog":                  "Uncommon",
  "budgetts-frog":                   "Rare",
  "rock-cascade-frog":               "Uncommon",
  // Amphibians — Caecilians
  "ringed-caecilian":                "Rare"
};
