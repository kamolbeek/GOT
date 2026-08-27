# GOT — 3 tilli (UZ / RU / EN) versiya

## O'rnatish

Loyiha repo ildizida joylashgan. Klonlab olgach:

```bash
npm install
npm run dev
```

## Videoni optimallashtirish (MUHIM)

Scroll qotishining asosiy sababi — videoning o'zi. Bir marta ishga tushiring:

```bash
brew install ffmpeg        # agar o'rnatilmagan bo'lsa
./scripts/optimize-video.sh
```

Asl fayl `public/video/one-original.mp4` ga saqlanadi, o'rniga optimallashtirilgani qo'yiladi.
(`one-original.mp4` `.gitignore` da — repoga tushmaydi.)

macOS'dan tashqarida `brew` o'rniga tizim paket menejeridan foydalaning
(masalan `apt install ffmpeg`).

## Tilni qo'shish yoki matnni tahrirlash

Matn ikkita faylda:
`src/i18n/translations.js` (sayt matni) va `src/i18n/characters.js` (qahramonlar).
Yangi til qo'shish uchun `LANGS` ro'yxatiga kod qo'shing, `translations` obyektiga
xuddi shu tuzilishdagi blok yozing va `characters.js` dagi `characterCopy` ga ham
o'sha til uchun blok qo'shing. Boshqa hech qayerga tegish shart emas.

Tanlangan til `localStorage` da saqlanadi va `<html lang="...">` ga yoziladi.

## Xonadon rasmlari

Olti xonadon gerbi `public/images/` da, `.webp` formatida:
`one` Stark, `two` Lannister, `three` Targaryen, `four` Baratheon,
`five` Greyjoy, `six` Tyrell. Yo'llar `src/i18n/translations.js` dagi
`HOUSE_META` da ko'rsatilgan — rasmni almashtirsangiz, o'sha yerni yangilang.

## Buyruqlar

| Buyruq | Vazifasi |
| --- | --- |
| `npm run dev` | Lokal server (Vite) |
| `npm run build` | `dist/` ga production build |
| `npm run preview` | Build qilingan versiyani ko'rish |
| `npm run lint` | ESLint tekshiruvi |

## Qahramonlar

24 qahramon, 6 xonadon bo'yicha guruhlangan. Barchasi `src/i18n/characters.js` da:

- `CHARACTER_META` — kim qaysi xonadonda va rasmi qayerda (tildan mustaqil)
- `characterCopy` — ism, unvon, shior va tarix; uch tilda

### Rasm qo'shish

Hozir rasm o'rniga monogramma (masalan `JS`) va xonadon gerbi ko'rsatiladi.
Haqiqiy rasm qo'yish uchun:

1. Faylni `public/images/characters/` ga tashlang, masalan `jon.jpg`
2. `characters.js` da o'sha qatorni yangilang:

```js
{ id: 'jon', house: 'stark', image: '/images/characters/jon.jpg' },
```

Rasm topilmasa yoki yuklanmasa, avtomatik ravishda monogrammaga qaytadi —
ya'ni bir nechtasini qo'yib, qolganini keyin qo'shsangiz ham sayt buzilmaydi.

Eng yaxshi natija uchun: kvadrat (1:1) kesilgan, yuz yuqori qismda,
tavsiya etilgan o'lcham ~600x600.

### Yangi qahramon qo'shish

`CHARACTER_META` ga qator qo'shing va `characterCopy` ning **uchala** tilida
o'sha `id` uchun blok yozing (`name`, `title`, `words`, `bio`).
