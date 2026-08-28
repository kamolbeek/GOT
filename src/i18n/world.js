/* ═══════════════════════════════════════════════════════════════════════════
   Vesteros — mintaqalar. Xarita SVG bilan chiziladi (World.jsx), shuning
   uchun rasm fayl kerak emas va har qanday ekranda tiniq chiqadi.

   `at` — mintaqa belgisining xaritadagi joyi (foizda, 0–100).
   ═══════════════════════════════════════════════════════════════════════════ */

export const REGION_META = [
  { id: 'beyond',      house: null,        at: { x: 50, y: 5 },  accent: '#9fb6c9' },
  { id: 'north',       house: 'stark',     at: { x: 47, y: 20 }, accent: '#8fafc4' },
  { id: 'ironislands', house: 'greyjoy',   at: { x: 22, y: 40 }, accent: '#b8a040' },
  { id: 'riverlands',  house: null,        at: { x: 45, y: 43 }, accent: '#6fa3a0' },
  { id: 'vale',        house: null,        at: { x: 71, y: 39 }, accent: '#8ea6c8' },
  { id: 'westerlands', house: 'lannister', at: { x: 27, y: 55 }, accent: '#d4a84b' },
  { id: 'crownlands',  house: 'targaryen', at: { x: 63, y: 55 }, accent: '#c0392b' },
  { id: 'reach',       house: 'tyrell',    at: { x: 37, y: 71 }, accent: '#5a9e48' },
  { id: 'stormlands',  house: 'baratheon', at: { x: 66, y: 71 }, accent: '#c9a84c' },
  { id: 'dorne',       house: null,        at: { x: 50, y: 88 }, accent: '#d98b45' },
]

export const worldCopy = {

  // ══════════════════════════════ O’ZBEKCHA ══════════════════════════════
  uz: {
    section: {
      eyebrow: 'MUZ VA OLOV O’LKASI',
      titleTop: 'Vesteros',
      titleEm: 'Dunyosi',
      subtitle: 'Devordan narida yotgan muzliklardan Dornning qizil qumlarigacha. Mintaqani tanlab, uning hikoyasini o’qing.',
      mapLabel: 'Vesteros qit’asi',
      hint: 'Mintaqa ustiga bosing',
      lockHint: 'Xaritani boshqarish uchun bosing',
      unlockHint: 'Sudrab suring \u00b7 g\u2019ildirak bilan yaqinlashtiring \u00b7 chiqish uchun Esc',
      seatLabel: 'Poytaxti',
      rulerLabel: 'Hukmron xonadon',
      noHouse: 'Yagona hukmdor yo’q',
    },
    regions: {
      beyond: {
        name: 'Devordan Narida',
        seat: 'Hech kimning yeri',
        summary: 'Qonun ham, qirol ham yetib bormaydigan muzlik.',
        body: 'Sakkiz yuz fut balandlikdagi Devor ortida saltanat tugaydi. U yerda erkin xalq, gigantlar, oq yurgichlar va Uzun Tunning xotirasi yashaydi. Vesterosning eng qadimiy qo’rquvi janubdan emas, aynan shu tomondan keladi.',
      },
      north: {
        name: 'Shimol',
        seat: 'Qishyurt',
        summary: 'Saltanatning yarmi bo’lgan, aholisi eng siyrak o’lka.',
        body: 'Yetti qirollikning eng kattasi va eng sovug’i. Bu yerda odamlar kam gapiradi, uzoq eslaydi va qishga umr bo’yi tayyorgarlik ko’radi. Starklar sakkiz ming yildan buyon shu yerdan hukmronlik qiladi — va Shimol faqat o’z lordiga bo’ysunadi.',
      },
      ironislands: {
        name: 'Temir Orollar',
        seat: 'Payk',
        summary: 'Tosh, sho’r suv va temir baho.',
        body: 'Etti orol — quruq, qashshoq va shafqatsiz. Bu yerda hosil emas, o’lja qadrlanadi. Temir odamlar o’zi yasagan narsani emas, tortib olganini haqiqiy mulk deb biladi va Cho’kkan Xudodan boshqa hech kimga bosh egmaydi.',
      },
      riverlands: {
        name: 'Daryolar O’lkasi',
        seat: 'Riverran',
        summary: 'Saltanatning markazi — va shuning uchun doimiy jang maydoni.',
        body: 'Uch daryo kesib o’tgan unumdor tekislik. Aynan markazda joylashgani uni boy qildi va halok qildi: Vesterosdagi deyarli har bir urush shu yerdan o’tgan. Tullilar bu yerni ushlab turadi, lekin ko’pincha o’z kuchi bilan emas, ittifoqlari bilan.',
      },
      vale: {
        name: 'Vodiy',
        seat: 'Eyri',
        summary: 'Tog’lar orasidagi, zabt etilmagan qal’a.',
        body: 'Oy Tog’lari bilan o’ralgan Vodiyga faqat bitta tor yo’ldan kirish mumkin. Eyri hech qachon bosib olinmagan. Bu himoya Arrenlarga xavfsizlik berdi — va ular ko’pgina urushlarni chetdan kuzatib o’tirishni afzal ko’rdi.',
      },
      westerlands: {
        name: 'G’arb Yerlari',
        seat: 'Kasterli Qoya',
        summary: 'Saltanatni moliyalashtirgan oltin konlari.',
        body: 'Tepaliklar ostidagi konlar Lannisterlarni Vesterosdagi eng boy xonadonga aylantirdi. Ularning kuchi qilichda emas, qarzda: Temir Taxtning o’zi ham ularga qarzdor bo’lgan. Oltin tugagan kunda kuch ham tugadi.',
      },
      crownlands: {
        name: 'Toj Yerlari',
        seat: 'Qirol Bandargohi',
        summary: 'Taxt turgan joy — va u uchun kurash shu yerda.',
        body: 'Fotih Aegon qo’lga kiritgan yer. Qirol Bandargohi — saltanatning eng katta, eng boy va eng iflos shahri. Yarim million odam, Temir Taxt va uning atrofidagi to’xtovsiz fitna. Ajdaho Toshi ham shu yerga qaraydi.',
      },
      reach: {
        name: 'Bog’lar O’lkasi',
        seat: 'Oliybog’',
        summary: 'Saltanatni to’ydiradigan yer.',
        body: 'Vesterosning eng unumdor va eng ko’p aholili o’lkasi. Bu yerda ritsarlik, qo’shiq va nazokat qadrlanadi — lekin shu nazokat ostida saltanatdagi eng ayyor siyosat yotadi. Tyrelllar oziq-ovqat bilan ham, nikoh bilan ham hukmronlik qiladi.',
      },
      stormlands: {
        name: 'Bo’ronli Yerlar',
        seat: 'Bo’ron Nihoyasi',
        summary: 'Dengizdan uradigan bo’ronlar o’lkasi.',
        body: 'Tor Dengizdan keladigan shamollar bu qirg’oqni ayamaydi. Bo’ron Nihoyasi qal’asini na bo’ron, na qamal sindira olgan. Bu yer Baratheonlarni yetishtirdi — jangda tengsiz, siyosatda esa sabri yo’q xonadonni.',
      },
      dorne: {
        name: 'Dorn',
        seat: 'Quyoshnayza',
        summary: 'Ajdaholarga bo’ysunmagan yagona o’lka.',
        body: 'Qizil tog’lar ortidagi issiq, quruq janub. Dorn Vesterosga qilich bilan emas, nikoh bilan qo’shildi — Targaryenlar ularni zabt eta olmagan yagona xalq. Bu yerda qiz farzand ham merosxo’r bo’la oladi, qasos esa unutilmaydi.',
      },
    },
  },

  // ══════════════════════════════ РУССКИЙ ══════════════════════════════
  ru: {
    section: {
      eyebrow: 'ЗЕМЛЯ ЛЬДА И ПЛАМЕНИ',
      titleTop: 'Мир',
      titleEm: 'Вестероса',
      subtitle: 'От льдов за Стеной до красных песков Дорна. Выберите землю и прочтите её историю.',
      mapLabel: 'Континент Вестерос',
      hint: 'Нажмите на землю',
      lockHint: 'Нажмите, чтобы управлять картой',
      unlockHint: 'Перетаскивайте \u00b7 колесо приближает \u00b7 Esc \u2014 выход',
      seatLabel: 'Столица',
      rulerLabel: 'Правящий дом',
      noHouse: 'Единого правителя нет',
    },
    regions: {
      beyond: {
        name: 'За Стеной',
        seat: 'Ничья земля',
        summary: 'Льды, куда не доходит ни закон, ни король.',
        body: 'За Стеной в восемьсот футов королевство заканчивается. Там живут вольный народ, великаны, Белые Ходоки и память о Долгой ночи. Древнейший страх Вестероса приходит не с юга, а именно отсюда.',
      },
      north: {
        name: 'Север',
        seat: 'Винтерфелл',
        summary: 'Половина королевства — и меньше всего людей на ней.',
        body: 'Самая большая и самая холодная из Семи Королевств. Здесь мало говорят, долго помнят и всю жизнь готовятся к зиме. Старки правят отсюда восемь тысяч лет, и Север слушает только своего лорда.',
      },
      ironislands: {
        name: 'Железные острова',
        seat: 'Пайк',
        summary: 'Камень, солёная вода и железная цена.',
        body: 'Семь островов — сухих, бедных и суровых. Здесь ценят не урожай, а добычу. Железнорождённые считают своим лишь то, что взято, а не выращено, и не склоняются ни перед кем, кроме Утонувшего Бога.',
      },
      riverlands: {
        name: 'Речные земли',
        seat: 'Риверран',
        summary: 'Середина королевства — и потому вечное поле боя.',
        body: 'Плодородная равнина, пересечённая тремя реками. Положение в самом центре сделало её богатой и погубило: почти каждая война Вестероса прошла здесь. Талли держат эту землю, но чаще союзами, чем силой.',
      },
      vale: {
        name: 'Долина',
        seat: 'Орлиное Гнездо',
        summary: 'Непокорённая крепость среди гор.',
        body: 'Долину окружают Лунные горы, и войти в неё можно лишь по одной узкой дороге. Орлиное Гнездо не брали ни разу. Эта защита дала Арренам безопасность — и они предпочитали пересиживать чужие войны в стороне.',
      },
      westerlands: {
        name: 'Западные земли',
        seat: 'Утёс Кастерли',
        summary: 'Золотые копи, на которые жило королевство.',
        body: 'Копи под холмами сделали Ланнистеров богатейшим домом Вестероса. Их сила не в мечах, а в долге: сам Железный трон был им должен. Когда золото кончилось, кончилась и власть.',
      },
      crownlands: {
        name: 'Королевские земли',
        seat: 'Королевская Гавань',
        summary: 'Здесь стоит трон — и здесь за него дерутся.',
        body: 'Земля, взятая Эйгоном Завоевателем. Королевская Гавань — крупнейший, богатейший и грязнейший город королевства. Полмиллиона человек, Железный трон и непрерывные интриги вокруг него. Сюда же смотрит и Драконий Камень.',
      },
      reach: {
        name: 'Простор',
        seat: 'Хайгарден',
        summary: 'Земля, которая кормит королевство.',
        body: 'Самая плодородная и населённая часть Вестероса. Здесь чтят рыцарство, песни и учтивость — но под этой учтивостью лежит самая изощрённая политика в королевстве. Тиреллы правят и хлебом, и браками.',
      },
      stormlands: {
        name: 'Штормовые земли',
        seat: 'Штормовой Предел',
        summary: 'Земля штормов, бьющих с моря.',
        body: 'Ветра с Узкого моря не щадят этот берег. Штормовой Предел не сломили ни буря, ни осада. Эта земля вырастила Баратеонов — дом, непревзойдённый в бою и не имеющий терпения для политики.',
      },
      dorne: {
        name: 'Дорн',
        seat: 'Солнечное Копьё',
        summary: 'Единственная земля, не покорившаяся драконам.',
        body: 'Жаркий сухой юг за красными горами. Дорн вошёл в Вестерос не мечом, а браком — единственный народ, которого Таргариены не смогли завоевать. Здесь наследовать может и дочь, а месть не забывают.',
      },
    },
  },

  // ══════════════════════════════ ENGLISH ══════════════════════════════
  en: {
    section: {
      eyebrow: 'THE LAND OF ICE AND FIRE',
      titleTop: 'The World of',
      titleEm: 'Westeros',
      subtitle: 'From the ice beyond the Wall to the red sands of Dorne. Choose a land and read its story.',
      mapLabel: 'The continent of Westeros',
      hint: 'Select a land',
      lockHint: 'Click the map to take control',
      unlockHint: 'Drag to pan \u00b7 wheel to zoom \u00b7 Esc to release',
      seatLabel: 'Seat',
      rulerLabel: 'Ruling house',
      noHouse: 'No single ruler',
    },
    regions: {
      beyond: {
        name: 'Beyond the Wall',
        seat: 'No man’s land',
        summary: 'Ice that neither law nor king reaches.',
        body: 'Past eight hundred feet of Wall, the realm ends. What lives there is the free folk, the giants, the White Walkers and the memory of the Long Night. Westeros’s oldest fear comes not from the south but from here.',
      },
      north: {
        name: 'The North',
        seat: 'Winterfell',
        summary: 'Half the realm, and the fewest people on it.',
        body: 'The largest and coldest of the Seven Kingdoms. Here people say little, remember long, and spend a lifetime preparing for winter. The Starks have ruled from it for eight thousand years, and the North answers only to its own lord.',
      },
      ironislands: {
        name: 'The Iron Islands',
        seat: 'Pyke',
        summary: 'Stone, salt water, and the iron price.',
        body: 'Seven islands, dry and poor and hard. What is prized here is not harvest but plunder. The ironborn count as theirs only what is taken rather than grown, and bend to no one but the Drowned God.',
      },
      riverlands: {
        name: 'The Riverlands',
        seat: 'Riverrun',
        summary: 'The middle of the realm, and so its permanent battlefield.',
        body: 'Fertile plain cut by three rivers. Sitting at the centre made it rich and ruined it: nearly every war in Westeros has crossed this ground. The Tullys hold it, more often by alliance than by strength.',
      },
      vale: {
        name: 'The Vale',
        seat: 'The Eyrie',
        summary: 'An unconquered stronghold among the mountains.',
        body: 'The Mountains of the Moon ring the Vale, and only one narrow road leads in. The Eyrie has never been taken. That safety served the Arryns well — and left them content to sit out other people’s wars.',
      },
      westerlands: {
        name: 'The Westerlands',
        seat: 'Casterly Rock',
        summary: 'The gold mines the realm ran on.',
        body: 'The mines beneath these hills made the Lannisters the richest house in Westeros. Their power lay not in swords but in debt: the Iron Throne itself owed them. When the gold ran out, so did the power.',
      },
      crownlands: {
        name: 'The Crownlands',
        seat: 'King’s Landing',
        summary: 'Where the throne stands, and where it is fought over.',
        body: 'The land Aegon the Conqueror took for himself. King’s Landing is the realm’s largest, richest and filthiest city — half a million people, the Iron Throne, and the scheming that never stops around it. Dragonstone looks on from the bay.',
      },
      reach: {
        name: 'The Reach',
        seat: 'Highgarden',
        summary: 'The land that feeds the realm.',
        body: 'The most fertile and most populous part of Westeros. Chivalry, song and courtesy are honoured here — and beneath that courtesy runs the sharpest politics in the realm. The Tyrells rule by grain as much as by marriage.',
      },
      stormlands: {
        name: 'The Stormlands',
        seat: 'Storm’s End',
        summary: 'A coast the sea storms never spare.',
        body: 'The winds off the Narrow Sea batter this shore without pause. Storm’s End has broken neither to gale nor to siege. This land produced the Baratheons — a house unmatched in battle and with no patience for politics.',
      },
      dorne: {
        name: 'Dorne',
        seat: 'Sunspear',
        summary: 'The one land the dragons never took.',
        body: 'Hot, dry south beyond the red mountains. Dorne joined Westeros by marriage rather than by sword — the only people the Targaryens could not conquer. Here a daughter may inherit, and a grudge is never forgotten.',
      },
    },
  },
}
