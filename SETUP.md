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

Butun matn bitta faylda: `src/i18n/translations.js`.
Yangi til qo'shish uchun `LANGS` ro'yxatiga kod qo'shing va `translations` obyektiga
xuddi shu tuzilishdagi blok yozing. Boshqa hech qayerga tegish shart emas.

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
