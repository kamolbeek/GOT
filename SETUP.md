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
tavsiya etilgan o'lcham ~600x600. Rasm doira ichiga kesiladi, xonadon gerbi
esa uning orqasida halqa bo'lib turadi.

### Fayl nomlari

| id | Qahramon | Fayl |
| --- | --- | --- |
| eddard | Eddard Stark | `public/images/characters/eddard.jpg` |
| catelyn | Catelyn Stark | `public/images/characters/catelyn.jpg` |
| robb | Robb Stark | `public/images/characters/robb.jpg` |
| sansa | Sansa Stark | `public/images/characters/sansa.jpg` |
| arya | Arya Stark | `public/images/characters/arya.jpg` |
| bran | Bran Stark | `public/images/characters/bran.jpg` |
| jon | Jon Snow | `public/images/characters/jon.jpg` |
| daenerys | Daenerys Targaryen | `public/images/characters/daenerys.jpg` |
| viserys | Viserys Targaryen | `public/images/characters/viserys.jpg` |
| rhaegar | Rhaegar Targaryen | `public/images/characters/rhaegar.jpg` |
| aerys | Aerys II Targaryen | `public/images/characters/aerys.jpg` |
| tywin | Tywin Lannister | `public/images/characters/tywin.jpg` |
| cersei | Cersei Lannister | `public/images/characters/cersei.jpg` |
| jaime | Jaime Lannister | `public/images/characters/jaime.jpg` |
| tyrion | Tyrion Lannister | `public/images/characters/tyrion.jpg` |
| robert | Robert Baratheon | `public/images/characters/robert.jpg` |
| stannis | Stannis Baratheon | `public/images/characters/stannis.jpg` |
| renly | Renly Baratheon | `public/images/characters/renly.jpg` |
| balon | Balon Greyjoy | `public/images/characters/balon.jpg` |
| theon | Theon Greyjoy | `public/images/characters/theon.jpg` |
| yara | Yara Greyjoy | `public/images/characters/yara.jpg` |
| olenna | Olenna Tyrell | `public/images/characters/olenna.jpg` |
| margaery | Margaery Tyrell | `public/images/characters/margaery.jpg` |
| loras | Loras Tyrell | `public/images/characters/loras.jpg` |

Hamma rasmni qo'ygach, `CHARACTER_META` ni shu blok bilan almashtiring:

```js
export const CHARACTER_META = [
  { id: 'eddard',     house: 'stark',      image: '/images/characters/eddard.jpg' },
  { id: 'catelyn',    house: 'stark',      image: '/images/characters/catelyn.jpg' },
  { id: 'robb',       house: 'stark',      image: '/images/characters/robb.jpg' },
  { id: 'sansa',      house: 'stark',      image: '/images/characters/sansa.jpg' },
  { id: 'arya',       house: 'stark',      image: '/images/characters/arya.jpg' },
  { id: 'bran',       house: 'stark',      image: '/images/characters/bran.jpg' },
  { id: 'jon',        house: 'stark',      image: '/images/characters/jon.jpg' },
  { id: 'daenerys',   house: 'targaryen',  image: '/images/characters/daenerys.jpg' },
  { id: 'viserys',    house: 'targaryen',  image: '/images/characters/viserys.jpg' },
  { id: 'rhaegar',    house: 'targaryen',  image: '/images/characters/rhaegar.jpg' },
  { id: 'aerys',      house: 'targaryen',  image: '/images/characters/aerys.jpg' },
  { id: 'tywin',      house: 'lannister',  image: '/images/characters/tywin.jpg' },
  { id: 'cersei',     house: 'lannister',  image: '/images/characters/cersei.jpg' },
  { id: 'jaime',      house: 'lannister',  image: '/images/characters/jaime.jpg' },
  { id: 'tyrion',     house: 'lannister',  image: '/images/characters/tyrion.jpg' },
  { id: 'robert',     house: 'baratheon',  image: '/images/characters/robert.jpg' },
  { id: 'stannis',    house: 'baratheon',  image: '/images/characters/stannis.jpg' },
  { id: 'renly',      house: 'baratheon',  image: '/images/characters/renly.jpg' },
  { id: 'balon',      house: 'greyjoy',    image: '/images/characters/balon.jpg' },
  { id: 'theon',      house: 'greyjoy',    image: '/images/characters/theon.jpg' },
  { id: 'yara',       house: 'greyjoy',    image: '/images/characters/yara.jpg' },
  { id: 'olenna',     house: 'tyrell',     image: '/images/characters/olenna.jpg' },
  { id: 'margaery',   house: 'tyrell',     image: '/images/characters/margaery.jpg' },
  { id: 'loras',      house: 'tyrell',     image: '/images/characters/loras.jpg' },
]
```

Ba'zisini qo'ymasangiz ham bo'ladi — yuklanmagan rasm o'rniga monogramma chiziladi.

### Sarlavha logotipi

`public/images/got-logo.png` fayli qo'yilsa, "Qahramonlar" sarlavhasi ustida
avtomatik ko'rinadi. Fayl bo'lmasa, hech narsa chizilmaydi.

### Yangi qahramon qo'shish

`CHARACTER_META` ga qator qo'shing va `characterCopy` ning **uchala** tilida
o'sha `id` uchun blok yozing (`name`, `title`, `words`, `bio`).
