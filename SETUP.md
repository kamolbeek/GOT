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

Rasmni **`src/assets/characters/`** papkasiga tashlang, fayl nomi qahramonning
`id` si bilan bir xil bo'lsin. Boshqa hech narsa qilish shart emas — build
vaqtida o'zi topilib ulanadi.

```
src/assets/characters/jon.jpg       -> Jon Snow
src/assets/characters/daenerys.png  -> Daenerys Targaryen
```

`jpg`, `jpeg`, `png`, `webp`, `avif` — hammasi bo'ladi.

Rasm qo'yilmagan qahramon monogrammada qoladi, ya'ni bir nechtasini qo'yib,
qolganini keyin qo'shsangiz ham sayt to'liq ishlayveradi. Rasmi yo'q qahramon
uchun hech qanday so'rov ketmaydi (404 bo'lmaydi) — Vite faqat mavjud
fayllarni ro'yxatga oladi.

Tavsiya: kvadrat (1:1), ~600x600, yuz yuqori qismda. Rasm doira ichiga
kesiladi, xonadon gerbi esa uning orqasida halqa bo'lib turadi.

### Rasmlarni avtomatik tayyorlash

Internetdan yuklab olingan rasmlar odatda 2:3 vertikal bo'ladi va nomlari
tartibsiz. Skript ularni o'zi kesadi va nomlaydi:

```bash
pip install Pillow
python3 scripts/prepare-portraits.py ~/Downloads/got --dry-run   # avval tekshirib ko'ring
python3 scripts/prepare-portraits.py ~/Downloads/got             # keyin haqiqiy ishga tushiring
```

Fayl nomida qahramon ismi, laqabi yoki **aktyor ismi** bo'lsa yetarli —
`Kit Harington.jpg`, `Ned Stark - Sean Bean.jpg`, `emilia-clarke.png`
hammasi to'g'ri joyga tushadi. Skript oxirida kim rasmsiz qolganini aytadi.

### Fayl nomlari

**Stark** — `eddard.jpg`, `catelyn.jpg`, `robb.jpg`, `sansa.jpg`, `arya.jpg`, `bran.jpg`, `jon.jpg`
**Targaryen** — `daenerys.jpg`, `viserys.jpg`, `rhaegar.jpg`, `aerys.jpg`
**Lannister** — `tywin.jpg`, `cersei.jpg`, `jaime.jpg`, `tyrion.jpg`
**Baratheon** — `robert.jpg`, `stannis.jpg`, `renly.jpg`
**Greyjoy** — `balon.jpg`, `theon.jpg`, `yara.jpg`
**Tyrell** — `olenna.jpg`, `margaery.jpg`, `loras.jpg`

To'liq ro'yxat:

| id | Qahramon |
| --- | --- |
| `eddard` | Eddard Stark |
| `catelyn` | Catelyn Stark |
| `robb` | Robb Stark |
| `sansa` | Sansa Stark |
| `arya` | Arya Stark |
| `bran` | Bran Stark |
| `jon` | Jon Snow |
| `daenerys` | Daenerys Targaryen |
| `viserys` | Viserys Targaryen |
| `rhaegar` | Rhaegar Targaryen |
| `aerys` | Aerys II Targaryen |
| `tywin` | Tywin Lannister |
| `cersei` | Cersei Lannister |
| `jaime` | Jaime Lannister |
| `tyrion` | Tyrion Lannister |
| `robert` | Robert Baratheon |
| `stannis` | Stannis Baratheon |
| `renly` | Renly Baratheon |
| `balon` | Balon Greyjoy |
| `theon` | Theon Greyjoy |
| `yara` | Yara Greyjoy |
| `olenna` | Olenna Tyrell |
| `margaery` | Margaery Tyrell |
| `loras` | Loras Tyrell |

### Sarlavha logotipi

`public/images/got-logo.png` fayli qo'yilsa, "Qahramonlar" sarlavhasi ustida
avtomatik ko'rinadi. Fayl bo'lmasa, hech narsa chizilmaydi.

### Yangi qahramon qo'shish

`CHARACTER_META` ga qator qo'shing va `characterCopy` ning **uchala** tilida
o'sha `id` uchun blok yozing (`name`, `title`, `words`, `bio`).
