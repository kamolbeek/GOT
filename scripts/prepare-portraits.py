#!/usr/bin/env python3
"""
Yuklab olingan qahramon rasmlarini saytga tayyorlaydi.

Nima qiladi:
  1. Rasmni qahramonga moslaydi — fayl nomi bo'yicha (id, qahramon ismi yoki
     aktyor ismi bo'lsa ham topadi: "Kit Harington.jpg" -> jon)
  2. Kvadratga kesadi, yuz odatda yuqorida bo'lgani uchun tepadan kesadi
  3. 600x600 ga keltirib, src/assets/characters/<id>.jpg ga saqlaydi
  4. Qaysi qahramon hali rasmsiz qolganini aytadi

Ishlatish:
    pip install Pillow
    python3 scripts/prepare-portraits.py ~/Downloads/got

Rasmni ko'chirmasdan avval tekshirib ko'rish uchun:
    python3 scripts/prepare-portraits.py ~/Downloads/got --dry-run
"""

import argparse
import re
import sys
import unicodedata
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    sys.exit("Pillow kerak:  pip install Pillow")

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "src" / "assets" / "characters"
SIZE = 600

# id -> shu qahramonni topishga yordam beradigan so'zlar (ism va aktyor)
ALIASES = {
    "eddard":   ["eddard", "ned stark", "sean bean"],
    "catelyn":  ["catelyn", "michelle fairley"],
    "robb":     ["robb", "richard madden"],
    "sansa":    ["sansa", "sophie turner"],
    "arya":     ["arya", "maisie williams"],
    "bran":     ["bran", "brandon", "isaac hempstead"],
    "jon":      ["jon snow", "jon", "kit harington"],
    "daenerys": ["daenerys", "dany", "emilia clarke"],
    "viserys":  ["viserys", "harry lloyd"],
    "rhaegar":  ["rhaegar", "wilf scolding"],
    "aerys":    ["aerys", "mad king", "david rintoul"],
    "tywin":    ["tywin", "charles dance"],
    "cersei":   ["cersei", "lena headey"],
    "jaime":    ["jaime", "nikolaj", "coster-waldau"],
    "tyrion":   ["tyrion", "peter dinklage"],
    "robert":   ["robert baratheon", "mark addy"],
    "stannis":  ["stannis", "stephen dillane"],
    "renly":    ["renly", "gethin anthony"],
    "balon":    ["balon", "patrick malahide"],
    "theon":    ["theon", "alfie allen"],
    "yara":     ["yara", "asha", "gemma whelan"],
    "olenna":   ["olenna", "diana rigg"],
    "margaery": ["margaery", "natalie dormer"],
    "loras":    ["loras", "finn jones"],
}

EXTS = {".jpg", ".jpeg", ".png", ".webp", ".avif", ".bmp", ".tiff"}


def norm(text):
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", " ", text.lower()).strip()


def match(stem):
    """Fayl nomidan qahramon id sini topadi. Topolmasa None."""
    n = norm(stem)
    best, best_len = None, 0
    for cid, keys in ALIASES.items():
        for k in keys:
            k = norm(k)
            # eng uzun mos kelgan kalit yutadi, "robert baratheon" != "robb"
            if k in n and len(k) > best_len:
                best, best_len = cid, len(k)
    return best


def square(img):
    """Kvadratga kesadi. Yuz odatda yuqorida, shuning uchun tepaga suriladi."""
    img = img.convert("RGB")
    w, h = img.size
    side = min(w, h)
    left = (w - side) // 2
    # balandroq rasmda pastdan ko'ra tepadan olish yuzni ushlab qoladi
    top = int((h - side) * 0.18) if h > w else 0
    return img.crop((left, top, left + side, top + side)).resize(
        (SIZE, SIZE), Image.LANCZOS
    )


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("src", help="yuklab olingan rasmlar papkasi")
    ap.add_argument("--dry-run", action="store_true", help="faqat ko'rsatadi, saqlamaydi")
    args = ap.parse_args()

    src = Path(args.src).expanduser()
    if not src.is_dir():
        sys.exit(f"Papka topilmadi: {src}")

    if not args.dry_run:
        OUT.mkdir(parents=True, exist_ok=True)

    done, skipped = {}, []
    for f in sorted(src.iterdir()):
        if f.suffix.lower() not in EXTS:
            continue
        cid = match(f.stem)
        if not cid:
            skipped.append(f.name)
            continue
        if cid in done:
            print(f"  ! {cid}: allaqachon '{done[cid]}' dan olingan, '{f.name}' tashlab ketildi")
            continue
        done[cid] = f.name
        if args.dry_run:
            print(f"  {f.name}  ->  {cid}.jpg")
            continue
        try:
            square(Image.open(f)).save(OUT / f"{cid}.jpg", quality=90, optimize=True)
            print(f"  ✓ {f.name}  ->  {cid}.jpg")
        except Exception as e:                      # noqa: BLE001
            print(f"  ✗ {f.name}: {e}")
            del done[cid]

    print(f"\nTayyor: {len(done)} / {len(ALIASES)}")
    missing = sorted(set(ALIASES) - set(done))
    if missing:
        print("Rasmsiz qolgani (monogrammada chiqadi):", ", ".join(missing))
    if skipped:
        print("Kimga tegishli ekani aniqlanmadi:", ", ".join(skipped))
        print("  -> fayl nomiga qahramon yoki aktyor ismini qo'shing")


if __name__ == "__main__":
    main()
