/* ═══════════════════════════════════════════════════════════════════════════
   Xarita markerlari.

   Xaritaning o'zi — kitobdagi haqiqiy xarita rasmi (src/assets/westeros-map.jpg),
   hero videosidan olinib, perspektivasi tuzatilgan. Shuning uchun bu yerda
   faqat marker joylari bor: `at` — rasm ustidagi joy, foizda (0–100).
   ═══════════════════════════════════════════════════════════════════════════ */

export const MAP_REGIONS = [
  { id: 'beyond',      house: null,        at: { x: 41, y: 7 } },
  { id: 'north',       house: 'stark',     at: { x: 30, y: 20 } },
  { id: 'ironislands', house: 'greyjoy',   at: { x: 13, y: 28 } },
  { id: 'vale',        house: null,        at: { x: 44, y: 31 } },
  { id: 'riverlands',  house: null,        at: { x: 28, y: 41 } },
  { id: 'crownlands',  house: 'targaryen', at: { x: 38, y: 50 } },
  { id: 'westerlands', house: 'lannister', at: { x: 20, y: 60 } },
  { id: 'reach',       house: 'tyrell',    at: { x: 27, y: 74 } },
  { id: 'stormlands',  house: 'baratheon', at: { x: 59, y: 56 } },
  { id: 'dorne',       house: null,        at: { x: 63, y: 74 } },
]
