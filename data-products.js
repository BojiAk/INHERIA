// Lista produse INHERIA (catalog)
const PRODUCTS = [
  {
    id: "vit-vital-ashwa",
    name: "Vital Ashwa",
    category: "Vitamine & Minerale",
    price: 69,
    badge: "Basic",
    image: "images/produse/1.png",
    short: "Suport natural pentru echilibru și energie zilnică.",
    long: "Formulă pe bază de Ashwagandha, gândită pentru perioadele aglomerate. Ajută la gestionarea stresului și la menținerea vitalității.",
    highlights: ["Ashwagandha (adaptogen)", "Energie & echilibru", "Rutina zilnică"],
    tags: ["ashwagandha", "energie", "stres"]
  },
  {
    id: "vit-immunity-reishi",
    name: "Immunity Reishi",
    category: "Vitamine & Minerale",
    price: 99,
    badge: "Premium",
    image: "images/produse/2.png",
    short: "Sprijin pentru imunitate și recuperare.",
    long: "Reishi, „ciuperca nemuririi”, este folosită tradițional pentru susținerea sistemului imunitar și a stării generale de bine.",
    highlights: ["Reishi (extract)", "Imunitate", "Stare de bine"],
    tags: ["reishi", "imunitate", "somn"]
  },
  {
    id: "sup-focus-schisandra",
    name: "Focus Schisandra",
    category: "Suplimente & Adaptogeni",
    price: 89,
    badge: "Basic",
    image: "images/produse/3.png",
    short: "Claritate și focus pentru zilele încărcate.",
    long: "Schisandra este cunoscută ca „fructul cu 5 arome” și e folosită pentru energie mentală și susținerea organismului.",
    highlights: ["Schisandra (fructe)", "Focus", "Energie mentală"],
    tags: ["schisandra", "focus", "detox"]
  },
  {
    id: "sup-detox-moringa",
    name: "Detox Moringa",
    category: "Suplimente & Adaptogeni",
    price: 99,
    badge: "Standard",
    image: "images/produse/4.png",
    short: "Detox blând și suport pentru imunitate.",
    long: "Moringa, „arborele vieții”, susține vitalitatea, pielea și părul. Ideal în perioadele de reset și rutină.",
    highlights: ["Moringa (frunze)", "Detox", "Imunitate"],
    tags: ["moringa", "detox", "imunitate"]
  },
  {
    id: "tea-calm-sun",
    name: "Calm Sun",
    category: "Ceaiuri & Infuzii",
    price: 39,
    badge: "Basic",
    image: "images/produse/11.png",
    short: "Infuzie calmantă pentru liniște și echilibru.",
    long: "Cu sunătoare sălbatică, creată pentru momentele în care vrei să te oprești puțin și să respiri.",
    highlights: ["Sunătoare sălbatică", "Calm", "Ritual de seară"],
    tags: ["ceai", "calm", "sunătoare"]
  },
  {
    id: "tea-forest-pin",
    name: "Forest Pin",
    category: "Ceaiuri & Infuzii",
    price: 42,
    badge: "Basic",
    image: "images/produse/12.png",
    short: "Aromă de pădure, pentru respirație și stare bună.",
    long: "Mugurii de pin oferă o infuzie plăcută, potrivită în sezonul rece și pentru ritualuri zilnice.",
    highlights: ["Muguri de pin", "Aromă fresh", "Rutină zilnică"],
    tags: ["pin", "infuzie", "respirație"]
  },
  {
    id: "snack-moringa-bar",
    name: "Moringa Bar",
    category: "Snackuri",
    price: 15,
    badge: "Standard",
    image: "images/produse/5.png",
    short: "Baton proteic vegetal cu Moringa.",
    long: "Combinație pentru vitalitate și detox, potrivită pentru persoane active și rutine echilibrate.",
    highlights: ["Proteic vegetal", "Moringa", "Detox"],
    tags: ["snack", "moringa", "proteic"]
  },
  {
    id: "snack-maca-boost",
    name: "Maca Boost",
    category: "Snackuri",
    price: 15,
    badge: "Standard",
    image: "images/produse/6.png",
    short: "Pudră pentru smoothie cu Maca.",
    long: "Ușor de adăugat în smoothie-uri sau iaurt. Susține energia și rezistența fără cafea.",
    highlights: ["Pentru smoothie", "Maca", "Rezistență"],
    tags: ["maca", "smoothie", "energie"]
  },
  {
    id: "cos-glow-kola",
    name: "Glow Kola",
    category: "Cosmetice",
    price: 79,
    badge: "Basic",
    image: "images/produse/7.png",
    short: "Cremă hidratantă cu Gotu Kola.",
    long: "Formulă lejeră pentru piele calmă și elasticitate. Potrivită pentru rutina zilnică.",
    highlights: ["Gotu Kola", "Hidratare", "Elasticitate"],
    tags: ["gotu kola", "cremă", "hidratare"]
  },
  {
    id: "cos-golden-catina",
    name: "Golden Cătină",
    category: "Cosmetice",
    price: 89,
    badge: "Basic",
    image: "images/produse/8.png",
    short: "Cremă nutritivă cu Cătină.",
    long: "Ajută la regenerare și strălucire. Ideală pentru piele obosită sau ternă.",
    highlights: ["Cătină", "Regenerare", "Strălucire"],
    tags: ["cătină", "regenerare", "îngrijire"]
  },
{
  id: "ashwagandha",
  name: "Ashwagandha",
  category: "Plante",
  badge: "Premium",
  price: 59,
  image: "images/produse/9.png",
  shortDesc: "Stres, echilibru și vitalitate.",
  description: "Plantă ayurvedică folosită de mii de ani pentru susținerea echilibrului și rezistenței la stres.",
  highlights: ["Stres", "Echilibru", "Ayurveda"],
  tags: ["stres", "adaptogen", "india"]
},
{
  id: "reishi",
  name: "Reishi",
  category: "Plante",
  badge: "Premium",
  price: 69,
  image: "images/produse/10.png",
  shortDesc: "Imunitate și echilibru.",
  description: "Ciupercă medicinală rară, folosită tradițional în Asia pentru susținerea echilibrului.",
  highlights: ["Imunitate", "Echilibru", "Tradiție asiatică"],
  tags: ["imunitate", "somn", "china"]
},
{
  id: "biomemory-trace-pendant",
  name: "Colier BioMemory „Trace”",
  category: "Handmade",
  badge: "Personalizat",
  price: 170,
  image: "images/produse/13.png",
  shortDesc: "Pandantiv simbolic creat la comandă.",
  description: "Bijuterie minimalistă care păstrează o urmă simbolică a unei persoane dragi sau a unei legături importante.",
  highlights: [
    "Personalizare discretă",
    "Realizat manual",
    "Design pur și intim"
  ],
  tags: ["handmade", "memorie", "personalizat"]
},

{
  id: "biomemory-bracelet",
  name: "Brățară BioMemory",
  category: "Handmade",
  badge: "Personalizat",
  price: 140,
  image: "images/produse/14.png",
  shortDesc: "Brățară simbolică cu semnificație personală.",
  description: "Creată pentru a păstra o legătură emoțională, purtată zilnic, discret.",
  highlights: [
    "Potrivită pentru cupluri",
    "Personalizare simbolică",
    "Design minimalist"
  ],
  tags: ["bratara", "memorie", "emotional"]
},

];
