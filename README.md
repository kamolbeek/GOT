# Game of Thrones — Vesteros Solnomalari

Scroll bilan boshqariladigan Game of Thrones sahifasi. Uch tilda: **O'zbek, Rus, Ingliz**.

Vite + React 19 + GSAP ScrollTrigger.

## Ishga tushirish

```bash
npm install
npm run dev
```

Batafsil ma'lumot — [SETUP.md](./SETUP.md).

## Tuzilishi

```
index.html
public/
  images/          xonadon gerblari (one…six.webp)
  video/one.mp4    hero videosi (scroll bilan scrub qilinadi)
scripts/
  optimize-video.sh  videoni scrub uchun qayta kodlash
src/
  components/      Hero, Section1, Characters, LanguageSwitcher
  i18n/            translations.js — sayt matni
                   characters.js   — 24 qahramon, uch tilda
  styles/
```

## Qanday ishlaydi

**Hero** — video 6 ekran balandligidagi masofaga "pin" qilinadi. Scroll pozitsiyasi
videoning `currentTime` iga bog'lanadi, ya'ni foydalanuvchi videoni scroll bilan
"o'ynatadi". Har bir bo'lakda (6 ta bob) matn almashadi.

Silliq ishlashi uchun ikkita narsa muhim:

- Bir vaqtda faqat bitta `seek` navbatda turadi — keyingisi `seeked` hodisasidan
  keyin yuboriladi. Aks holda dekoder ulgurmay, rasm qotib qoladi.
- Har kadrda faqat `transform`/`opacity` yoziladi (layout hisoblanmaydi).

Agar scroll baribir sekin bo'lsa — video aybdor. `./scripts/optimize-video.sh`
uni tez seek qilinadigan qilib qayta kodlaydi (keyframe har 0.4s, B-frame yo'q).

**Tillar** — `src/i18n/translations.js` dagi bitta obyekt. Tanlov `localStorage`
da saqlanadi va `<html lang>` ga yoziladi. O'zbekchada "xonadon" so'zi nomdan
keyin keladi (`STARK XONADONI`), boshqalarda oldin — buni `houseWordPosition`
boshqaradi.

**Qahramonlar** — har bir xonadon a'zolari bir qatorda birga turadi, scroll qilganda
navbat bilan paydo bo'ladi. Kartaga bosilsa, o'sha qahramonning rasmi va to'liq
tarixi alohida oynada ochiladi (Esc yoki fon bosilsa yopiladi).

Rasm berilmagan qahramon uchun monogramma va xonadon gerbi chiziladi, shuning
uchun rasmlarni bosqichma-bosqich qo'shsa ham sayt to'liq ishlaydi.
Batafsil — [SETUP.md](./SETUP.md).
