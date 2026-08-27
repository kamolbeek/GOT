import { characterCopy } from './characters'

// ─── Available languages ─────────────────────────────────────────────────────
export const LANGS = [
  { code: 'uz', label: 'UZ', name: "O'zbekcha" },
  { code: 'ru', label: 'RU', name: 'Русский' },
  { code: 'en', label: 'EN', name: 'English' },
]

export const DEFAULT_LANG = 'uz'

// ─── Chapter scroll ranges (language-independent) ────────────────────────────
export const CHAPTER_META = [
  { id: 'prologue',      progress: [0.00, 0.12], sigil: '✦' },
  { id: 'winterfell',    progress: [0.12, 0.30], sigil: '⚔' },
  { id: 'westeros',      progress: [0.30, 0.52], sigil: '♜' },
  { id: 'kings-landing', progress: [0.52, 0.70], sigil: '👑' },
  { id: 'swords',        progress: [0.70, 0.87], sigil: '⚒' },
  { id: 'throne',        progress: [0.87, 1.01], sigil: '♔' },
]

// ─── House visuals (language-independent) ────────────────────────────────────
export const HOUSE_META = [
  {
    id: 'stark',
    image: '/images/one.webp',
    accent: '#8fafc4',
    borderColor: '#4a6380',
    bg: 'linear-gradient(135deg, #0d1117 0%, #1a2332 60%, #0d1117 100%)',
  },
  {
    id: 'lannister',
    image: '/images/two.webp',
    accent: '#d4a84b',
    borderColor: '#7a6130',
    bg: 'linear-gradient(135deg, #1a1200 0%, #2a1f00 60%, #1a1200 100%)',
  },
  {
    id: 'targaryen',
    image: '/images/three.webp',
    accent: '#c0392b',
    borderColor: '#7a1a1a',
    bg: 'linear-gradient(135deg, #1a0000 0%, #2d0a0a 60%, #1a0000 100%)',
  },
  {
    id: 'baratheon',
    image: '/images/four.webp',
    accent: '#c9a84c',
    borderColor: '#5a5020',
    bg: 'linear-gradient(135deg, #0a0a00 0%, #1f1c00 60%, #0a0a00 100%)',
  },
  {
    id: 'greyjoy',
    image: '/images/five.webp',
    accent: '#b8a040',
    borderColor: '#3a4a5a',
    bg: 'linear-gradient(135deg, #050810 0%, #0a1020 60%, #050810 100%)',
  },
  {
    id: 'tyrell',
    image: '/images/six.webp',
    accent: '#5a9e48',
    borderColor: '#2a4a20',
    bg: 'linear-gradient(135deg, #030a00 0%, #0a1800 60%, #030a00 100%)',
  },
]

// ─── Translations ────────────────────────────────────────────────────────────
export const translations = {
  // ══════════════════════════════ O'ZBEKCHA ══════════════════════════════
  uz: {
    brand: 'Game of Thrones',
    loadingSub: 'Vesteros Solnomalari',
    scrollHint: 'Pastga',
    nav: {
      world: 'Dunyo',
      characters: 'Qahramonlar',
      houses: 'Xonadonlar',
      history: 'Tarix',
    },
    cta: {
      primary: 'Sayohatni boshlash',
      ghost: 'Saltanatni kashf etish',
    },
    chapters: {
      'prologue': {
        subtitle: 'MUZ VA OLOV QO\u2019SHIG\u2019I',
        title: 'Qadimiy Solnomalar',
        body: 'Avvalida faqat Maesterlarning so\u2019zlari bor edi \u2014 qadimiy kitoblarda muhrlangan sirlar, ularni ochishga jur\u2019at etadigan qo\u2019lni kutib.',
      },
      'winterfell': {
        subtitle: 'STARKLAR XONADONI \u2014 QISHYURT',
        title: 'Shimol Unutmaydi',
        body: 'Qish yaqinlashmoqda. Qadimiy devorlar ortida Shimolning sovuq shivirlari Devorning o\u2019zidan ham qadimiyroq hikoyalarni olib yuradi.',
      },
      'westeros': {
        subtitle: 'VESTEROS SALTANATI',
        title: 'Yetti Qirollik',
        body: 'Bulutlarga burkangan Eyri cho\u2019qqilaridan Dornning qizil qumlarigacha \u2014 yetti qirollik, bitta taxt va qon to\u2019kish uchun mingta sabab.',
      },
      'kings-landing': {
        subtitle: 'QIROL BANDARGOHI \u2014 POYTAXT',
        title: 'Toj Qo\u2019lga Kiritiladigan Shahar',
        body: 'Qirollarni butunligicha yutib yuboradigan shahar. Havoda oltin va xiyonat hidi. Bu yerdagi har bir tabassum ortida xanjar yashiringan.',
      },
      'swords': {
        subtitle: 'ZABT ETISHDA TOBLANGAN',
        title: 'Ming Qilich',
        body: 'Fotih Aegonning dushmanlari taslim qilgan ming qilich. Eritilgan. Qayta shakllantirilgan. Dahshatli va ulug\u2019vor bir narsaga aylantirilgan.',
      },
      'throne': {
        subtitle: 'TAXTLAR O\u2019YINIGA KIRISHSANG',
        title: 'Temir Taxt',
        body: 'Yo g\u2019alaba qozonasan \u2014 yo o\u2019lasan.',
      },
    },
    credit: {
      by: 'Sayt muallifi',
      name: 'Kamoliddin',
      email: 'kamaliddinashurov@gmail.com',
    },
    section1: {
      eyebrow: 'VESTEROSNING BUYUK XONADONLARI',
      titleTop: 'Ulug\u2019',
      titleEm: 'Xonadonlar',
      subtitle: 'Yetti qirollik. Olti buyuk xonadon. Bitta Temir Taxt.',
    },
    houseWord: 'XONADONI',
    houseWordPosition: 'after',   // STARK XONADONI
    houses: {
      stark: {
        name: 'STARK',
        seat: 'Qishyurt',
        words: '\u00abQish Yaqinlashmoqda\u00bb',
        region: 'Shimol',
        sigil: 'Kulrang Yovvoyi Bo\u2019ri',
        description:
          'Shimolning qo\u2019riqchilari. Starklar qoni Birinchi Odamlarga borib taqaladi. Sharaf ularning qilichi, muzlagan shamol esa bayrog\u2019i. Boshqalar qulaganda ular chidaydi \u2014 qishning o\u2019zidek sabrli.',
      },
      lannister: {
        name: 'LANNISTER',
        seat: 'Kasterli Qoya',
        words: '\u00abNa\u2019ramni Eshit\u00bb',
        region: 'G\u2019arb Yerlari',
        sigil: 'Oltin Arslon',
        description:
          'Vesterosdagi eng boy xonadon. Ularning arsloni shunchaki na\u2019ra tortmaydi \u2014 u yutib yuboradi. Hokimiyat ularning tug\u2019ma huquqi, oltin \u2014 tili, qarz esa mohirlik bilan ishlatiladigan qurol.',
      },
      targaryen: {
        name: 'TARGARYEN',
        seat: 'Ajdaho Toshi',
        words: '\u00abOlov va Qon\u00bb',
        region: 'Toj Yerlari',
        sigil: 'Uch Boshli Ajdaho',
        description:
          'Qadimiy Valiriya qoni. Ular Vesterosni zabt etmadi \u2014 uni yondirib bo\u2019ysundirdi. Ajdaho minuvchilar, sulola quruvchilar va olov yutgan dunyoning so\u2019nggi vorislari.',
      },
      baratheon: {
        name: 'BARATHEON',
        seat: 'Bo\u2019ron Nihoyasi',
        words: '\u00abG\u2019azab Bizniki\u00bb',
        region: 'Bo\u2019ronli Yerlar',
        sigil: 'Tojli Qora Bug\u2019u',
        description:
          'Bo\u2019ronlardan tug\u2019ilgan, janglarda toblangan. Baratheonlar Temir Taxtni ayyorlik bilan emas, temir iroda va jangovar bolg\u2019a bilan qo\u2019lga kiritdi. G\u2019azab ularning zaifligi emas \u2014 bu ularning toji.',
      },
      greyjoy: {
        name: 'GREYJOY',
        seat: 'Payk',
        words: '\u00abBiz Ekmaymiz\u00bb',
        region: 'Temir Orollar',
        sigil: 'Oltin Kraken',
        description:
          'Dengiz bosqinchilari. Cho\u2019kkan Xudodan boshqa hech kimga bosh egmaydigan temir odamlar. Yasay olmaganini tortib oladi, tortib ola olmaganini yondiradi. Dengiz \u2014 ularning saltanati, qolgani esa o\u2019lja.',
      },
      tyrell: {
        name: 'TYRELL',
        seat: 'Oliybog\u2019',
        words: '\u00abKuchayib O\u2019samiz\u00bb',
        region: 'Bog\u2019lar O\u2019lkasi',
        sigil: 'Oltin Atirgul',
        description:
          'Saltanatni oziqlantiradigan atirgullar egalari \u2014 Bog\u2019lar O\u2019lkasining eng boy zodagonlari. Go\u2019zallik va farovonlik ortida shafqatsiz shuhratparastlik yotadi: bog\u2019larda kuchayib o\u2019sadi, fitnalarda esa undan-da kuchli.',
      },
    },
  },

  // ══════════════════════════════ РУССКИЙ ══════════════════════════════
  ru: {
    brand: 'Game of Thrones',
    loadingSub: 'Хроники Вестероса',
    scrollHint: 'Листайте',
    nav: {
      world: 'Мир',
      characters: 'Персонажи',
      houses: 'Дома',
      history: 'История',
    },
    cta: {
      primary: 'Начать путь',
      ghost: 'Исследовать мир',
    },
    chapters: {
      'prologue': {
        subtitle: 'ПЕСНЬ ЛЬДА И ПЛАМЕНИ',
        title: 'Древние Хроники',
        body: 'В начале были лишь слова мейстеров — тайны, запечатанные в древних томах, что ждали руки, достаточно смелой, чтобы их открыть.',
      },
      'winterfell': {
        subtitle: 'ДОМ СТАРК — ВИНТЕРФЕЛЛ',
        title: 'Север Помнит',
        body: 'Зима близко. За древними стенами холодный шёпот Севера несёт предания старше самой Стены.',
      },
      'westeros': {
        subtitle: 'ЗЕМЛИ ВЕСТЕРОСА',
        title: 'Семь Королевств',
        body: 'От облачных вершин Орлиного Гнезда до красных песков Дорна — семь королевств, один трон и тысяча поводов для крови.',
      },
      'kings-landing': {
        subtitle: 'КОРОЛЕВСКАЯ ГАВАНЬ — СТОЛИЦА',
        title: 'Где Добывают Короны',
        body: 'Город, что проглатывает королей целиком. Золото и предательство висят в воздухе. Каждая улыбка здесь прячет клинок.',
      },
      'swords': {
        subtitle: 'ВЫКОВАН ЗАВОЕВАНИЕМ',
        title: 'Тысяча Клинков',
        body: 'Тысяча мечей, сложенных врагами Эйгона Завоевателя. Расплавлены. Перекованы. Обращены в нечто ужасное и великолепное.',
      },
      'throne': {
        subtitle: 'КОГДА ИГРАЕШЬ В ИГРУ ПРЕСТОЛОВ',
        title: 'Железный Трон',
        body: 'Побеждаешь — или умираешь.',
      },
    },
    credit: {
      by: 'Автор сайта',
      name: 'Kamoliddin',
      email: 'kamaliddinashurov@gmail.com',
    },
    section1: {
      eyebrow: 'ВЕЛИКИЕ ДОМА ВЕСТЕРОСА',
      titleTop: 'Благородные',
      titleEm: 'Дома',
      subtitle: 'Семь королевств. Шесть великих домов. Один Железный Трон.',
    },
    houseWord: 'ДОМ',
    houseWordPosition: 'before',  // ДОМ СТАРК
    houses: {
      stark: {
        name: 'СТАРК',
        seat: 'Винтерфелл',
        words: '«Зима Близко»',
        region: 'Север',
        sigil: 'Серый Лютоволк',
        description:
          'Хранители Севера. Кровь Старков восходит к Первым Людям. Честь — их меч, а морозный ветер — их знамя. Они выстаивают там, где падают другие, — терпеливые, как сама зима.',
      },
      lannister: {
        name: 'ЛАННИСТЕР',
        seat: 'Утёс Кастерли',
        words: '«Услышь Мой Рёв»',
        region: 'Западные Земли',
        sigil: 'Золотой Лев',
        description:
          'Богатейший дом Вестероса. Их лев не просто рычит — он пожирает. Власть — их право по рождению, золото — их язык, а долг — оружие, которым они владеют безупречно.',
      },
      targaryen: {
        name: 'ТАРГАРИЕН',
        seat: 'Драконий Камень',
        words: '«Пламя и Кровь»',
        region: 'Королевские Земли',
        sigil: 'Трёхглавый Дракон',
        description:
          'Кровь древней Валирии. Они не завоевали Вестерос — они выжгли его до покорности. Всадники драконов, основатели династии и последние из мира, поглощённого огнём.',
      },
      baratheon: {
        name: 'БАРАТЕОН',
        seat: 'Штормовой Предел',
        words: '«Нам Ярость»',
        region: 'Штормовые Земли',
        sigil: 'Коронованный Чёрный Олень',
        description:
          'Рождённые бурей, закалённые битвой. Баратеоны взяли Железный Трон не хитростью, а железной волей и боевым молотом. Ярость — не их слабость, а их корона.',
      },
      greyjoy: {
        name: 'ГРЕЙДЖОЙ',
        seat: 'Пайк',
        words: '«Мы Не Сеем»',
        region: 'Железные Острова',
        sigil: 'Золотой Кракен',
        description:
          'Морские разбойники. Железные люди, что не склоняются ни перед одним королём, кроме Утонувшего Бога. Чего не могут создать — забирают. Чего не могут забрать — сжигают. Море — их королевство, всё прочее — добыча.',
      },
      tyrell: {
        name: 'ТИРЕЛЛ',
        seat: 'Хайгарден',
        words: '«Вырастая Сильными»',
        region: 'Простор',
        sigil: 'Золотая Роза',
        description:
          'Богатейшие лорды Простора, чьи розы кормят державу. За красотой и изобилием скрывается дом безжалостных амбиций — растущий сильным в садах и ещё сильнее в интригах.',
      },
    },
  },

  // ══════════════════════════════ ENGLISH ══════════════════════════════
  en: {
    brand: 'Game of Thrones',
    loadingSub: 'The Chronicles of Westeros',
    scrollHint: 'Scroll',
    nav: {
      world: 'The World',
      characters: 'Characters',
      houses: 'Houses',
      history: 'History',
    },
    cta: {
      primary: 'Begin the Journey',
      ghost: 'Explore the Realm',
    },
    chapters: {
      'prologue': {
        subtitle: 'A SONG OF ICE AND FIRE',
        title: 'The Ancient Chronicles',
        body: 'In the beginning, there were only the words of the Maesters — secrets sealed within ancient tomes, waiting for a hand brave enough to open them.',
      },
      'winterfell': {
        subtitle: 'HOUSE STARK — WINTERFELL',
        title: 'The North Remembers',
        body: 'Winter is coming. Beyond the ancient walls, the cold whispers of the North carry stories older than the Wall itself.',
      },
      'westeros': {
        subtitle: 'THE REALM OF WESTEROS',
        title: 'The Seven Kingdoms',
        body: "From the Eyrie's clouded peaks to the red sands of Dorne — seven kingdoms, one throne, a thousand reasons to bleed.",
      },
      'kings-landing': {
        subtitle: "KING'S LANDING — THE CAPITAL",
        title: 'Where Crowns Are Won',
        body: 'The city that swallows kings whole. Gold and treachery perfume the air. Every smile here conceals a blade.',
      },
      'swords': {
        subtitle: 'FORGED IN CONQUEST',
        title: 'A Thousand Blades',
        body: 'One thousand swords, surrendered by enemies of Aegon the Conqueror. Melted. Reshaped. Made into something terrible and magnificent.',
      },
      'throne': {
        subtitle: 'WHEN YOU PLAY THE GAME OF THRONES',
        title: 'The Iron Throne',
        body: 'You win — or you die.',
      },
    },
    credit: {
      by: 'By',
      name: 'Kamoliddin',
      email: 'kamaliddinashurov@gmail.com',
    },
    section1: {
      eyebrow: 'THE GREAT HOUSES OF WESTEROS',
      titleTop: 'The Noble',
      titleEm: 'Houses',
      subtitle: 'Seven kingdoms. Six great houses. One Iron Throne.',
    },
    houseWord: 'HOUSE',
    houseWordPosition: 'before',  // HOUSE STARK
    houses: {
      stark: {
        name: 'STARK',
        seat: 'Winterfell',
        words: '"Winter Is Coming"',
        region: 'The North',
        sigil: 'Grey Direwolf',
        description:
          'Wardens of the North, the Starks trace their blood to the First Men. Honour is their sword and the frozen wind their banner. They endure where others fall — patient as winter itself.',
      },
      lannister: {
        name: 'LANNISTER',
        seat: 'Casterly Rock',
        words: '"Hear Me Roar"',
        region: 'The Westerlands',
        sigil: 'Golden Lion',
        description:
          'The wealthiest house in Westeros. Their lion does not merely roar — it devours. Power is their birthright, gold their language, and debt a weapon they wield with surgical precision.',
      },
      targaryen: {
        name: 'TARGARYEN',
        seat: 'Dragonstone',
        words: '"Fire and Blood"',
        region: 'The Crownlands',
        sigil: 'Three-Headed Dragon',
        description:
          'Blood of Old Valyria. They did not conquer Westeros — they burned it into submission. Dragon riders, dynasty builders, and the last of a world consumed by fire.',
      },
      baratheon: {
        name: 'BARATHEON',
        seat: "Storm's End",
        words: '"Ours Is The Fury"',
        region: 'The Stormlands',
        sigil: 'Crowned Black Stag',
        description:
          'Born of storms, tempered by battle. The Baratheons seized the Iron Throne not through cunning but through iron will and a war hammer. Fury is not their weakness — it is their crown.',
      },
      greyjoy: {
        name: 'GREYJOY',
        seat: 'Pyke',
        words: '"We Do Not Sow"',
        region: 'The Iron Islands',
        sigil: 'Golden Kraken',
        description:
          'Reavers of the sea. Iron men who bow to no king but the Drowned God. What they cannot make, they take. What they cannot take, they burn. The sea is their kingdom — all else is plunder.',
      },
      tyrell: {
        name: 'TYRELL',
        seat: 'Highgarden',
        words: '"Growing Strong"',
        region: 'The Reach',
        sigil: 'Golden Rose',
        description:
          'The richest lords of the Reach, whose roses feed the realm. Behind beauty and abundance lies a house of ruthless ambition — growing strong in gardens, and stronger still in schemes.',
      },
    },
  },
}

// ─── Character copy ─────────────────────────────────────────────────────────
// The roster runs to 24 people in three languages, so it lives in
// characters.js rather than bloating this file. Attached here so components
// keep reading everything through one `t` object: t.characters.people[id]
for (const lang of Object.keys(translations)) {
  translations[lang].characters = characterCopy[lang]
}
