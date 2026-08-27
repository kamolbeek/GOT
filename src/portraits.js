/* ═══════════════════════════════════════════════════════════════════════════
   Qahramon suratlari.

   src/assets/characters/ ga tashlangan har qanday rasm build vaqtida
   avtomatik topiladi va fayl nomi bo'yicha qahramonga ulanadi:
   jon.jpg -> id 'jon'.  Kodga tegish shart emas.

   Bu public/ ga qo'yishdan afzal: Vite faqat mavjud fayllarni ro'yxatga
   oladi, shuning uchun rasmi yo'q qahramon uchun 404 so'rov ketmaydi —
   u to'g'ridan-to'g'ri monogrammaga tushadi.
   ═══════════════════════════════════════════════════════════════════════════ */

const files = import.meta.glob('./assets/characters/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
})

export const PORTRAITS = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [
    path.split('/').pop().replace(/\.\w+$/, '').toLowerCase(),
    url,
  ]),
)
