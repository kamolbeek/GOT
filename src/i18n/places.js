/* ═══════════════════════════════════════════════════════════════════════════
   Xarita ma'lumoti.

   Koordinatalar 0–1000 (x) va 0–1400 (y) oralig'ida — Vesteros baland qit'a.
   `minZoom` — obyekt qaysi yaqinlashtirishdan boshlab ko'rinadi. Xarita
   ilovalaridagidek: uzoqdan faqat yirik joylar, yaqinlashgan sari maydalari
   qo'shilib boradi.
   ═══════════════════════════════════════════════════════════════════════════ */

// Mintaqa markerlari — har birida xonadon gerbi turadi (gerbi borlarida).
export const MAP_REGIONS = [
  { id: 'beyond',      x: 470, y:  95, house: null,        minZoom: 1 },
  { id: 'north',       x: 455, y: 330, house: 'stark',     minZoom: 1 },
  { id: 'ironislands', x: 268, y: 512, house: 'greyjoy',   minZoom: 1 },
  { id: 'riverlands',  x: 470, y: 545, house: null,        minZoom: 1 },
  { id: 'vale',        x: 700, y: 495, house: null,        minZoom: 1 },
  { id: 'westerlands', x: 330, y: 650, house: 'lannister', minZoom: 1 },
  { id: 'crownlands',  x: 636, y: 655, house: 'targaryen', minZoom: 1 },
  { id: 'reach',       x: 415, y: 835, house: 'tyrell',    minZoom: 1 },
  { id: 'stormlands',  x: 700, y: 815, house: 'baratheon', minZoom: 1 },
  { id: 'dorne',       x: 560, y: 1035, house: null,       minZoom: 1 },
]

// Shahar va qal'alar. `seatOf` bo'lsa, nomi tarjimadan olinadi.
export const MAP_PLACES = [
  // ── yirik (1.7 dan) ─────────────────────────────────────────────────────
  { name: 'Winterfell',      x: 455, y: 362, kind: 'castle', minZoom: 1.7, seatOf: 'north' },
  { name: 'Pyke',            x: 268, y: 545, kind: 'castle', minZoom: 1.7, seatOf: 'ironislands' },
  { name: 'Riverrun',        x: 435, y: 575, kind: 'castle', minZoom: 1.7, seatOf: 'riverlands' },
  { name: 'The Eyrie',       x: 700, y: 528, kind: 'castle', minZoom: 1.7, seatOf: 'vale' },
  { name: 'Casterly Rock',   x: 322, y: 682, kind: 'castle', minZoom: 1.7, seatOf: 'westerlands' },
  { name: "King's Landing",  x: 636, y: 688, kind: 'city',   minZoom: 1.7, seatOf: 'crownlands' },
  { name: 'Highgarden',      x: 402, y: 866, kind: 'castle', minZoom: 1.7, seatOf: 'reach' },
  { name: "Storm's End",     x: 706, y: 848, kind: 'castle', minZoom: 1.7, seatOf: 'stormlands' },
  { name: 'Sunspear',        x: 640, y: 1050, kind: 'castle', minZoom: 1.7, seatOf: 'dorne' },
  { name: 'Castle Black',    x: 470, y: 176, kind: 'castle', minZoom: 1.7 },
  { name: 'Oldtown',         x: 344, y: 952, kind: 'city',   minZoom: 1.7 },
  { name: 'White Harbor',    x: 574, y: 425, kind: 'city',   minZoom: 1.7 },

  // ── o'rta (2.6 dan) ─────────────────────────────────────────────────────
  { name: 'Dragonstone',     x: 722, y: 646, kind: 'castle', minZoom: 2.6 },
  { name: 'Harrenhal',       x: 540, y: 592, kind: 'castle', minZoom: 2.6 },
  { name: 'The Twins',       x: 470, y: 500, kind: 'castle', minZoom: 2.6 },
  { name: 'Moat Cailin',     x: 470, y: 452, kind: 'castle', minZoom: 2.6 },
  { name: 'Lannisport',      x: 305, y: 700, kind: 'city',   minZoom: 2.6 },
  { name: 'Gulltown',        x: 742, y: 560, kind: 'city',   minZoom: 2.6 },
  { name: 'Bitterbridge',    x: 508, y: 800, kind: 'town',   minZoom: 2.6 },
  { name: 'Seagard',         x: 392, y: 520, kind: 'castle', minZoom: 2.6 },
  { name: 'Deepwood Motte',  x: 352, y: 300, kind: 'castle', minZoom: 2.6 },
  { name: 'Karhold',         x: 592, y: 268, kind: 'castle', minZoom: 2.6 },
  { name: 'Last Hearth',     x: 528, y: 218, kind: 'castle', minZoom: 2.6 },
  { name: 'Horn Hill',       x: 404, y: 916, kind: 'castle', minZoom: 2.6 },
  { name: 'Starfall',        x: 452, y: 1032, kind: 'castle', minZoom: 2.6 },
  { name: 'Yronwood',        x: 604, y: 990, kind: 'castle', minZoom: 2.6 },

  // ── mayda (3.8 dan) ─────────────────────────────────────────────────────
  { name: 'Torrhen’s Square', x: 420, y: 330, kind: 'town', minZoom: 3.8 },
  { name: 'Barrowton',        x: 452, y: 412, kind: 'town', minZoom: 3.8 },
  { name: 'Widow’s Watch',    x: 604, y: 352, kind: 'town', minZoom: 3.8 },
  { name: 'Greywater Watch',  x: 448, y: 470, kind: 'town', minZoom: 3.8 },
  { name: 'Maidenpool',       x: 606, y: 596, kind: 'town', minZoom: 3.8 },
  { name: 'Duskendale',       x: 636, y: 632, kind: 'town', minZoom: 3.8 },
  { name: 'Saltpans',         x: 590, y: 560, kind: 'town', minZoom: 3.8 },
  { name: 'Stoney Sept',      x: 480, y: 640, kind: 'town', minZoom: 3.8 },
  { name: 'Darry',            x: 528, y: 556, kind: 'town', minZoom: 3.8 },
  { name: 'Runestone',        x: 726, y: 512, kind: 'town', minZoom: 3.8 },
  { name: 'Ashemark',         x: 372, y: 640, kind: 'town', minZoom: 3.8 },
  { name: 'Golden Tooth',     x: 392, y: 610, kind: 'town', minZoom: 3.8 },
  { name: 'Silverhill',       x: 372, y: 726, kind: 'town', minZoom: 3.8 },
  { name: 'Crakehall',        x: 332, y: 748, kind: 'town', minZoom: 3.8 },
  { name: 'Longtable',        x: 470, y: 848, kind: 'town', minZoom: 3.8 },
  { name: 'Cider Hall',       x: 500, y: 872, kind: 'town', minZoom: 3.8 },
  { name: 'Grassy Vale',      x: 560, y: 828, kind: 'town', minZoom: 3.8 },
  { name: 'Nightsong',        x: 640, y: 902, kind: 'town', minZoom: 3.8 },
  { name: 'Blackhaven',       x: 618, y: 936, kind: 'town', minZoom: 3.8 },
  { name: 'Griffin’s Roost',  x: 686, y: 790, kind: 'town', minZoom: 3.8 },
  { name: 'Mistwood',         x: 716, y: 890, kind: 'town', minZoom: 3.8 },
  { name: 'Hellholt',         x: 508, y: 1010, kind: 'town', minZoom: 3.8 },
  { name: 'Godsgrace',        x: 592, y: 1042, kind: 'town', minZoom: 3.8 },
  { name: 'Planky Town',      x: 652, y: 1078, kind: 'town', minZoom: 3.8 },
  { name: 'The Tor',          x: 690, y: 1030, kind: 'town', minZoom: 3.8 },
  { name: 'Wyl',              x: 660, y: 950, kind: 'town', minZoom: 3.8 },
  { name: 'Three Towers',     x: 330, y: 900, kind: 'town', minZoom: 3.8 },
  { name: 'Blackcrown',       x: 372, y: 880, kind: 'town', minZoom: 3.8 },
]

// Suv havzalari va yirik geografik nomlar
export const MAP_WATERS = [
  { name: 'The Shivering Sea', x: 830, y: 250, minZoom: 1,   rot: -14 },
  { name: 'The Sunset Sea',    x: 130, y: 640, minZoom: 1,   rot: -78 },
  { name: 'Bay of Ice',        x: 322, y: 232, minZoom: 2.6, rot: 0 },
  { name: 'Blackwater Bay',    x: 700, y: 672, minZoom: 2.6, rot: 0 },
  { name: 'Sea of Dorne',      x: 612, y: 960, minZoom: 2.6, rot: 0 },
  { name: 'Ironman’s Bay',     x: 300, y: 470, minZoom: 2.6, rot: 0 },
]

// Tog' tizmalari — chizilgan uchburchakchalar guruhi
export const MAP_RANGES = [
  { x: 690, y: 470, n: 7, minZoom: 1.7, label: 'Mountains of the Moon' },
  { x: 560, y: 960, n: 6, minZoom: 1.7, label: 'Red Mountains' },
  { x: 520, y: 250, n: 5, minZoom: 2.6, label: 'The Frostfangs' },
]

export const MAP_FORESTS = [
  { x: 396, y: 268, n: 6, minZoom: 2.6, label: 'Wolfswood' },
  { x: 566, y: 640, n: 5, minZoom: 2.6, label: 'Kingswood' },
  { x: 452, y: 786, n: 4, minZoom: 3.8, label: 'Rainwood' },
]
