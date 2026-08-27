/* ═══════════════════════════════════════════════════════════════════════════
   Qahramonlar — barcha matn shu yerda.
   Kattaligi sababli translations.js dan ajratilgan; translations.js uni
   har bir tilning `characters` kaliti sifatida biriktiradi.
   ═══════════════════════════════════════════════════════════════════════════ */

// ─── Roster (tildan mustaqil) ───────────────────────────────────────────────
// `image: null` bo'lsa, komponent uslublangan o'rinbosar chizadi.
// Rasm qo'shish uchun: public/images/characters/ ga fayl tashlang va
// bu yerga yo'lini yozing, masalan image: '/images/characters/jon.jpg'
export const CHARACTER_META = [
  { id: 'eddard',    house: 'stark',     image: null },
  { id: 'catelyn',   house: 'stark',     image: null },
  { id: 'robb',      house: 'stark',     image: null },
  { id: 'sansa',     house: 'stark',     image: null },
  { id: 'arya',      house: 'stark',     image: null },
  { id: 'bran',      house: 'stark',     image: null },
  { id: 'jon',       house: 'stark',     image: null },

  { id: 'daenerys',  house: 'targaryen', image: null },
  { id: 'viserys',   house: 'targaryen', image: null },
  { id: 'rhaegar',   house: 'targaryen', image: null },
  { id: 'aerys',     house: 'targaryen', image: null },

  { id: 'tywin',     house: 'lannister', image: null },
  { id: 'cersei',    house: 'lannister', image: null },
  { id: 'jaime',     house: 'lannister', image: null },
  { id: 'tyrion',    house: 'lannister', image: null },

  { id: 'robert',    house: 'baratheon', image: null },
  { id: 'stannis',   house: 'baratheon', image: null },
  { id: 'renly',     house: 'baratheon', image: null },

  { id: 'balon',     house: 'greyjoy',   image: null },
  { id: 'theon',     house: 'greyjoy',   image: null },
  { id: 'yara',      house: 'greyjoy',   image: null },

  { id: 'olenna',    house: 'tyrell',    image: null },
  { id: 'margaery',  house: 'tyrell',    image: null },
  { id: 'loras',     house: 'tyrell',    image: null },
]

// Kartalar shu tartibda guruhlanadi
export const CHARACTER_HOUSE_ORDER = [
  'stark', 'targaryen', 'lannister', 'baratheon', 'greyjoy', 'tyrell',
]

// ─── Matnlar ────────────────────────────────────────────────────────────────
export const characterCopy = {

  // ══════════════════════════════ O’ZBEKCHA ══════════════════════════════
  uz: {
    section: {
      eyebrow: 'TAXT UCHUN KURASHGANLAR',
      titleTop: 'Saltanat',
      titleEm: 'Qahramonlari',
      subtitle: 'Har bir xonadonning o’z qoni, o’z qasami va o’z xiyonati bor. Batafsil bilish uchun qahramonni tanlang.',
      tapHint: 'Tarixini o’qish uchun bosing',
      close: 'Yopish',
    },
    people: {
      eddard: {
        name: 'Eddard Stark',
        title: 'Qishyurt Lordi, Shimol Qo’riqchisi',
        words: '«Hukmni chiqargan qo’lning o’zi qilich urishi kerak»',
        bio: 'Sharaf uni ham ulug’lagan, ham halok qilgan odam. Robert Baratheonning eng sodiq do’sti va Qirol Qo’li. Qirol Bandargohida u haqiqatni topdi — Cerseining bolalari Robertdan emasligini — va bu haqiqat uchun boshini berdi. O’lganidan keyin ham uning so’zlari Shimolni birlashtirib turdi.',
      },
      catelyn: {
        name: 'Catelyn Stark',
        title: 'Qishyurt Xonimi, Tulli qizi',
        words: '«Men shafqat so’rayotganim yo’q — men o’g’limni so’rayapman»',
        bio: 'Ona sifatida shafqatsiz, siyosatchi sifatida ehtiyotkor. Riverran’dan kelgan Tulli qizi Starklar xonadoniga sadoqat olib keldi. Bolalarini himoya qilish uchun urush boshlanishiga yo’l qo’ydi va oxir-oqibat Qizil To’yda o’g’li Robb bilan birga halok bo’ldi.',
      },
      robb: {
        name: 'Robb Stark',
        title: 'Shimol Qiroli, Yosh Bo’ri',
        words: '«Ular menga taxt kerak emas deyishdi. Men esa otamning qasosini oldim»',
        bio: 'Bironta jangda yutqazmagan sarkarda. Otasi qatl etilgach, Shimol uni qirol deb e’lon qildi va u janubga qon to’kib tushdi. Lekin u qilich bilan yutgan urushni bergan va’dasini buzib boy berdi — Freylar bilan qilingan ahd Qizil To’yda uning hayotiga zomin bo’ldi.',
      },
      sansa: {
        name: 'Sansa Stark',
        title: 'Qishyurt Xonimi, keyinchalik Shimol Qirolichasi',
        words: '«Men sekin o’rganuvchi emasman. Men omon qolaman»',
        bio: 'Ritsarlar va qo’shiqlar haqida orzu qilgan qiz Qirol Bandargohida ularning yolg’onligini bilib oldi. Joffri, Litlfinger va Ramsi qo’lida ko’rgan azoblari uni sindirmadi — siyosatchi qilib toblab qo’ydi. Oxirida u Shimolni mustaqil qirollik sifatida boshqardi.',
      },
      arya: {
        name: 'Arya Stark',
        title: 'Yuzsizlar shogirdi',
        words: '«Bir kunda bir odamga aytiladigan yagona so’z bor: yo’q»',
        bio: 'Igna bilan tikishni emas, qilich bilan urishni tanlagan qiz. Otasining o’limidan keyin Vesteros bo’ylab daydidi, Braavos’da Yuzsizlar orasida o’zligini yo’qotishga o’rgatildi — lekin Stark bo’lib qolishni afzal ko’rdi. Qishyurt jangida Tun Qiroliga xanjar urib, Uzun Tunni tugatdi.',
      },
      bran: {
        name: 'Bran Stark',
        title: 'Uch Ko’zli Qarg’a',
        words: '«Men endi Bran Stark emasman. Men boshqa narsaman»',
        bio: 'Devordan uloqtirilgach oyoqlaridan ayrildi, lekin o’rniga boshqa narsani topdi — vaqtni ko’rish qobiliyatini. Devordan narida Uch Ko’zli Qarg’aga aylandi va o’tmishning barcha xotirasini o’ziga yukladi. Urush tugagach, saltanat aynan uni — hikoyani to’la biladigan odamni — taxtga tanladi.',
      },
      jon: {
        name: 'Jon Snow',
        title: 'Tungi Qorovul Bosh Qo’mondoni, Aegon Targaryen',
        words: '«Men qalqonman, insonlar saltanatini qo’riqlaydigan»',
        bio: 'Umr bo’yi o’zini harom o’g’il deb bilib yashadi. Aslida u Rhaegar Targaryen va Lyanna Starkning qonuniy o’g’li — Temir Taxtning haqiqiy vorisi. Tungi Qorovulda xizmat qildi, o’z odamlari tomonidan xanjarlandi va tiriltirildi. Taxtni emas, tinchlikni tanladi: sevgan ayolini o’ldirib, Vesterosni olovdan saqladi.',
      },

      daenerys: {
        name: 'Daenerys Targaryen',
        title: 'Ajdaholar Onasi, Zanjirlarni Sindiruvchi',
        words: '«Men g’ildirakni to’xtatmoqchi emasman. Men uni sindiraman»',
        bio: 'Surgunda tug’ilgan, sotib yuborilgan, kuyovining o’limidan keyin olovdan uch ajdaho bilan chiqqan ayol. Essos bo’ylab qullikni bekor qildi va o’zini ozodlik qirolichasi deb bildi. Lekin Qirol Bandargohi ustidagi olov unda otasining — Telba Qirolning — qonini uyg’otdi.',
      },
      viserys: {
        name: 'Viserys Targaryen',
        title: 'Tilanchi Qirol',
        words: '«Men ajdaho uyg’otdim»',
        bio: 'Sulolaning so’nggi erkak vorisi bo’lib qolganini o’zining eng katta fazilati deb bildi. Singlisini ot ustidagi qo’shin evaziga sotdi va tojni kutdi. Ajdaho bo’lishni juda xohladi, lekin ajdaho emas edi — Drogo unga eritilgan oltindan toj kiydirdi.',
      },
      rhaegar: {
        name: 'Rhaegar Targaryen',
        title: 'Ajdaho Toshi Shahzodasi',
        words: '«Sevgi saltanatning o’limi bo’ldi»',
        bio: 'Kitob o’qigan, arfa chalgan va jangda hech kimga yon bermagan valiahd shahzoda. Lyanna Starkni olib qochishi butun bir sulolani ag’dargan urushni boshladi. Uch Nayza jangida Robertning bolg’asi ostida halok bo’ldi — o’lguncha ham sirini oshkor qilmadi.',
      },
      aerys: {
        name: 'Aerys II Targaryen',
        title: 'Telba Qirol',
        words: '«Hammasini yondiringlar!»',
        bio: 'Yigirma yil hukmronlik qildi va oxirida yovvoyi olovdan boshqa hech narsaga ishonmay qoldi. Shubha uni o’z lordlarini tiriklayin kuydirishga olib keldi. Qirol Bandargohini butunlay yondirmoqchi bo’lganida, uni qo’riqlashga qasam ichgan Jaime Lannister orqasidan xanjar urdi.',
      },

      tywin: {
        name: 'Tywin Lannister',
        title: 'Kasterli Qoya Lordi, Qirol Qo’li',
        words: '«Arslon qo’ylarning fikri bilan qiziqmaydi»',
        bio: 'Kulgili bo’lib qolgan xonadonni Vesterosdagi eng qo’rqinchli kuchga aylantirgan odam. U uchun oila nomi har qanday odamdan — hatto o’z bolalaridan ham — ustun turardi. Qizil To’yni u uyushtirdi. Oxir-oqibat kamsitib kelgan o’g’li Tirion uni hojatxonada kamon o’qi bilan o’ldirdi.',
      },
      cersei: {
        name: 'Cersei Lannister',
        title: 'Andallarning Qirolichasi',
        words: '«Taxtlar o’yiniga kirishsang — yo g’alaba qozonasan, yo o’lasan»',
        bio: 'Ayol bo’lib tug’ilgani uchun hokimiyatdan chetlatilgan va shu haqsizlikni umr bo’yi qasosga aylantirgan. Uch farzandini ham yo’qotdi, har safar yanada shafqatsizroq bo’lib qaytdi. Bosh Sepatni yovvoyi olov bilan portlatib, o’ziga qarshi turgan hammani bir zumda yo’q qildi.',
      },
      jaime: {
        name: 'Jaime Lannister',
        title: 'Qirol Qotili, Oq Qorovul Lordi',
        words: '«Sizga nom beriladigan yagona ish — eng yaxshi ishim edi»',
        bio: 'Butun saltanat uni qasamini buzgan qotil deb bildi. Aslida u Telba Qirolni yarim million odamni yondirishdan to’xtatgan edi — lekin buni hech kimga tushuntirmadi. O’ng qo’lini yo’qotgach, kimligini qaytadan o’rgandi. Oxirida esa Cerseiga bo’lgan muhabbati uni yana orqaga tortdi.',
      },
      tyrion: {
        name: 'Tyrion Lannister',
        title: 'Qirolicha Qo’li',
        words: '«Men ichaman va bilaman. Mening qilganim shu»',
        bio: 'Kaltaligi uchun otasi nafratlangan, opasi o’lim tilagan odam. Qurolsiz tug’ilgani uchun aqlni qurol qildi. Qora Suv jangida shaharni saqlab qoldi, keyin otasini o’ldirib Essosga qochdi va Daeneris’ning Qo’liga aylandi. Vesterosdagi eng chuqur ko’rgan siyosatchi — va eng ko’p yanglishgani ham u.',
      },

      robert: {
        name: 'Robert Baratheon',
        title: 'Yetti Qirollik Qiroli',
        words: '«Men bolg’a bilan urushni yutdim, endi esa taxtda semirib yotibman»',
        bio: 'Jang maydonida tengsiz, taxtda esa befarq. Lyanna Starkning o’limi uchun butun bir sulolani ag’dardi, lekin qo’lga kiritgan tojidan hech qachon zavq olmadi. Yigirma yil ov, ichkilik va qarzda o’tdi — hukmronlikni Lannisterlar qo’liga topshirib qo’ydi.',
      },
      stannis: {
        name: 'Stannis Baratheon',
        title: 'Ajdaho Toshi Lordi',
        words: '«Yaxshi ish yomon ishni yuvmaydi»',
        bio: 'Qonun bo’yicha taxtning haqiqiy vorisi — va buni hech kimga eslatishdan charchamagan odam. Adolatli, lekin egilmas; sodiq, lekin sovuq. Qizil kohin Melisandra unga g’alaba va’da qildi, u esa evaziga o’z qizini olovga berdi. Undan keyin unga hech kim qolmadi.',
      },
      renly: {
        name: 'Renly Baratheon',
        title: 'Bo’ron Nihoyasi Lordi',
        words: '«Yaxshi qirol bo’lish uchun sevimli bo’lish kerak»',
        bio: 'Aka-ukalarning eng yoshi va eng yoqimlisi. Taxtga na qonuniy, na jangovar haqqi bor edi — lekin Tyrelllar qo’shini va odamlarning muhabbati bor edi. Aynan shu uni xavfli qildi: Melisandraning soyasi uni o’z chodirida o’ldirdi.',
      },

      balon: {
        name: 'Balon Greyjoy',
        title: 'Temir Orollar Lordi',
        words: '«Biz ekmaymiz — biz olamiz»',
        bio: 'Ikki marta isyon ko’tardi, ikkalasida ham yutqazdi. Birinchisida o’g’li Teonni garovga berdi, ikkinchisida esa Shimolni talab, hech narsaga erisha olmadi. Eski yo’lga — «temir bahoga» — so’nggigacha sodiq qoldi. Ukasi Euron uni ko’prikdan uloqtirdi.',
      },
      theon: {
        name: 'Theon Greyjoy',
        title: 'Temir Orollar shahzodasi',
        words: '«Men Teon Greyjoyman. Balon Greyjoyning o’g’li»',
        bio: 'Starklar qo’lida garov bo’lib o’sdi — na Stark bo’la oldi, na Greyjoy. O’z qadrini isbotlash uchun Robbga xiyonat qilib Qishyurtni egalladi va hamma narsani yo’qotdi. Ramsi qo’lida «Hidli»ga aylantirildi. Oxirida o’zini qaytarib oldi: Branni himoya qilib, Tun Qiroliga qarshi yugurdi.',
      },
      yara: {
        name: 'Yara Greyjoy',
        title: 'Temir Flot kapitani',
        words: '«Men Balon Greyjoyning farzandiman — men uning merosiman»',
        bio: 'Otasi o’g’il kutgan joyda tug’ilgan qiz, lekin temir odamlar orasida hurmatni jinsi bilan emas, kemasi bilan qozondi. Ukasini Ramsi qo’lidan qutqarishga urindi, keyin Daeneris tarafiga o’tdi. Euron uni asir qilganda ham bo’yin egmadi.',
      },

      olenna: {
        name: 'Olenna Tyrell',
        title: 'Tikanlar Qirolichasi',
        words: '«Ayting-chi, unga — bu men edim»',
        bio: 'Vesterosdagi eng o’tkir til va eng sovuqqon aql. Nevarasi Margeryni himoya qilish uchun Joffrini to’yida zaharladi va yillar davomida hech kim buni bilmadi. Xonadoni yo’q qilingach, Jaime taklif qilgan zaharni ichdi — va o’lishidan oldin haqiqatni Cerseiga aytib ketdi.',
      },
      margaery: {
        name: 'Margaery Tyrell',
        title: 'Yetti Qirollik Qirolichasi',
        words: '«Men qirolicha bo’lishni emas, Qirolicha bo’lishni xohlayman»',
        bio: 'Uch qirol bilan unashtirildi va har safar taxtga bir qadam yaqinlashdi. Kuch qo’rquvdan emas, muhabbatdan kelishini tushungan yagona siyosatchi: kambag’allarga tashrif buyurdi, xalq uni sevdi. Bosh Sepatdagi tuzoqni payqadi — lekin juda kech.',
      },
      loras: {
        name: 'Loras Tyrell',
        title: 'Gullar Ritsari',
        words: '«Men g’alabani sizga bag’ishlayman»',
        bio: 'Saltanatdagi eng iqtidorli yosh ritsar — nayza jangida uni yenggan deyarli hech kim bo’lmagan. Renly Baratheonga bo’lgan sadoqati uni siyosatga tortdi va sevgilisining o’limi uni sindirdi. Iymon Militsiyasi uni aynan shu muhabbati uchun qamadi.',
      },
    },
  },

  // ══════════════════════════════ РУССКИЙ ══════════════════════════════
  ru: {
    section: {
      eyebrow: 'ТЕ, КТО БОРОЛСЯ ЗА ТРОН',
      titleTop: 'Герои',
      titleEm: 'Королевства',
      subtitle: 'У каждого дома своя кровь, своя клятва и своё предательство. Выберите героя, чтобы узнать больше.',
      tapHint: 'Нажмите, чтобы прочитать историю',
      close: 'Закрыть',
    },
    people: {
      eddard: {
        name: 'Эддард Старк',
        title: 'Лорд Винтерфелла, Хранитель Севера',
        words: '«Тот, кто выносит приговор, сам должен занести меч»',
        bio: 'Человек, которого честь возвысила и она же погубила. Вернейший друг Роберта Баратеона и Десница Короля. В Королевской Гавани он нашёл правду — дети Серсеи не от Роберта — и заплатил за неё головой. Даже после смерти его слова держали Север вместе.',
      },
      catelyn: {
        name: 'Кейтилин Старк',
        title: 'Леди Винтерфелла, урождённая Талли',
        words: '«Я не прошу милости — я прошу сына»',
        bio: 'Беспощадная как мать, осторожная как политик. Дочь Талли из Риверрана принесла дому Старков верность своей семьи. Ради защиты детей она допустила войну и в конце концов погибла на Красной свадьбе вместе с сыном Роббом.',
      },
      robb: {
        name: 'Робб Старк',
        title: 'Король Севера, Молодой Волк',
        words: '«Мне говорили, что трон мне не нужен. А я мстил за отца»',
        bio: 'Полководец, не проигравший ни одной битвы. После казни отца Север провозгласил его королём, и он прошёл на юг с боями. Но войну, выигранную мечом, он потерял, нарушив данное слово — сделка с Фреями стоила ему жизни на Красной свадьбе.',
      },
      sansa: {
        name: 'Санса Старк',
        title: 'Леди Винтерфелла, позже Королева Севера',
        words: '«Я не тугодум. Я выжившая»',
        bio: 'Девочка, мечтавшая о рыцарях и песнях, узнала в Королевской Гавани, что они лгут. Джоффри, Мизинец и Рамси не сломали её — они выковали из неё политика. В конце она повела Север как независимое королевство.',
      },
      arya: {
        name: 'Арья Старк',
        title: 'Ученица Безликих',
        words: '«Есть лишь одно слово, которое можно сказать смерти: не сегодня»',
        bio: 'Девочка, выбравшая не иглу для шитья, а Иглу для боя. После смерти отца скиталась по Вестеросу, в Браавосе училась у Безликих терять себя — но предпочла остаться Старк. В битве за Винтерфелл её клинок оборвал Долгую ночь и Короля Ночи.',
      },
      bran: {
        name: 'Бран Старк',
        title: 'Трёхглазый ворон',
        words: '«Я больше не Бран Старк. Я нечто другое»',
        bio: 'Сброшенный с башни, он потерял ноги, но обрёл иное — способность видеть сквозь время. За Стеной он стал Трёхглазым вороном и принял в себя всю память прошлого. Когда война кончилась, королевство выбрало на трон именно его — того, кто знает всю историю целиком.',
      },
      jon: {
        name: 'Джон Сноу',
        title: 'Лорд-командующий Ночного Дозора, Эйгон Таргариен',
        words: '«Я — щит, что охраняет царство людей»',
        bio: 'Всю жизнь считал себя бастардом. На деле — законный сын Рейгара Таргариена и Лианны Старк, истинный наследник Железного трона. Служил в Ночном Дозоре, был заколот своими же людьми и возвращён к жизни. Он выбрал не трон, а мир: убив любимую, он спас Вестерос от огня.',
      },

      daenerys: {
        name: 'Дейенерис Таргариен',
        title: 'Мать драконов, Разрушительница оков',
        words: '«Я не остановлю колесо. Я его сломаю»',
        bio: 'Рождённая в изгнании, проданная как товар, вышедшая из погребального огня с тремя драконами. Она отменяла рабство по всему Эссосу и считала себя королевой освобождённых. Но пламя над Королевской Гаванью пробудило в ней кровь отца — Безумного Короля.',
      },
      viserys: {
        name: 'Визерис Таргариен',
        title: 'Король-попрошайка',
        words: '«Я разбудил дракона»',
        bio: 'Считал своим главным достоинством то, что остался последним наследником династии по мужской линии. Продал сестру за конное войско и ждал короны. Он очень хотел быть драконом, но им не был — Дрого короновал его расплавленным золотом.',
      },
      rhaegar: {
        name: 'Рейгар Таргариен',
        title: 'Принц Драконьего Камня',
        words: '«Любовь стала гибелью королевства»',
        bio: 'Наследный принц, читавший книги, игравший на арфе и не уступавший никому в бою. Похищение Лианны Старк развязало войну, обрушившую целую династию. Пал на Трезубце под молотом Роберта — и не раскрыл свою тайну даже умирая.',
      },
      aerys: {
        name: 'Эйрис II Таргариен',
        title: 'Безумный Король',
        words: '«Жечь их всех!»',
        bio: 'Правил двадцать лет и к концу не верил ни во что, кроме дикого огня. Подозрительность довела его до сожжения собственных лордов заживо. Когда он решил спалить всю Королевскую Гавань, Джейме Ланнистер — поклявшийся его защищать — вонзил меч ему в спину.',
      },

      tywin: {
        name: 'Тайвин Ланнистер',
        title: 'Лорд Утёса Кастерли, Десница Короля',
        words: '«Льва не заботит мнение овец»',
        bio: 'Человек, превративший дом, над которым смеялись, в самую грозную силу Вестероса. Имя семьи стояло для него выше любого человека — даже собственных детей. Красную свадьбу устроил он. В итоге сын, которого он презирал, застрелил его из арбалета в отхожем месте.',
      },
      cersei: {
        name: 'Серсея Ланнистер',
        title: 'Королева андалов',
        words: '«В игре престолов ты либо побеждаешь, либо умираешь»',
        bio: 'Отстранённая от власти лишь за то, что родилась женщиной, она превратила эту несправедливость в пожизненную месть. Потеряла всех троих детей и каждый раз возвращалась ещё безжалостнее. Взорвав Великую Септу диким огнём, она за миг уничтожила всех своих противников.',
      },
      jaime: {
        name: 'Джейме Ланнистер',
        title: 'Цареубийца, лорд-командующий Королевской гвардии',
        words: '«Дело, за которое меня прозвали, было лучшим, что я сделал»',
        bio: 'Всё королевство считало его клятвопреступником и убийцей. На деле он остановил Безумного Короля от сожжения полумиллиона людей — но не стал объяснять это никому. Потеряв правую руку, он заново узнал, кто он. И всё же любовь к Серсее утянула его обратно.',
      },
      tyrion: {
        name: 'Тирион Ланнистер',
        title: 'Десница Королевы',
        words: '«Я пью и я знаю всякое. Вот чем я занимаюсь»',
        bio: 'Ненавидимый отцом за рост и проклинаемый сестрой. Родившись без оружия, он сделал оружием ум. Спас город в битве на Черноводной, затем убил отца и бежал в Эссос, где стал Десницей Дейенерис. Самый прозорливый политик Вестероса — и чаще всех ошибавшийся.',
      },

      robert: {
        name: 'Роберт Баратеон',
        title: 'Король Семи Королевств',
        words: '«Я выиграл войну молотом, а теперь жирею на троне»',
        bio: 'Непревзойдённый в бою и безразличный на троне. Ради смерти Лианны Старк он обрушил целую династию, но так и не получил радости от завоёванной короны. Двадцать лет прошли в охоте, вине и долгах — правление он отдал в руки Ланнистеров.',
      },
      stannis: {
        name: 'Станнис Баратеон',
        title: 'Лорд Драконьего Камня',
        words: '«Доброе дело не смывает дурного»',
        bio: 'По закону — истинный наследник трона, и он не уставал напоминать об этом. Справедливый, но негнущийся; верный, но холодный. Красная жрица Мелисандра обещала ему победу, и он отдал за неё родную дочь огню. После этого рядом не осталось никого.',
      },
      renly: {
        name: 'Ренли Баратеон',
        title: 'Лорд Штормового Предела',
        words: '«Чтобы быть хорошим королём, надо быть любимым»',
        bio: 'Младший и самый обаятельный из братьев. У него не было ни законного, ни военного права на трон — зато были войска Тиреллов и любовь людей. Именно это сделало его опасным: тень Мелисандры убила его в собственном шатре.',
      },

      balon: {
        name: 'Бейлон Грейджой',
        title: 'Лорд Железных островов',
        words: '«Мы не сеем — мы берём»',
        bio: 'Дважды поднимал восстание и дважды проиграл. В первый раз отдал сына Теона в заложники, во второй — разорял Север и ничего не добился. Старому пути — «железной цене» — он остался верен до конца. Брат Эурон сбросил его с моста.',
      },
      theon: {
        name: 'Теон Грейджой',
        title: 'Принц Железных островов',
        words: '«Я Теон Грейджой. Сын Бейлона Грейджоя»',
        bio: 'Вырос заложником у Старков — не стал ни Старком, ни Грейджоем. Доказывая свою ценность, предал Робба и захватил Винтерфелл, потеряв всё. У Рамси его превратили в Вонючку. В конце он вернул себе имя: бросился на Короля Ночи, защищая Брана.',
      },
      yara: {
        name: 'Яра Грейджой',
        title: 'Капитан Железного флота',
        words: '«Я дитя Бейлона Грейджоя — я его наследие»',
        bio: 'Родилась дочерью там, где отец ждал сына, но уважение железнорождённых заслужила не полом, а своим кораблём. Пыталась вырвать брата из рук Рамси, затем встала на сторону Дейенерис. Даже в плену у Эурона она не склонилась.',
      },

      olenna: {
        name: 'Оленна Тирелл',
        title: 'Королева Шипов',
        words: '«Скажите ей — это была я»',
        bio: 'Самый острый язык и самый холодный ум Вестероса. Ради защиты внучки Маргери отравила Джоффри на его же свадьбе, и годами никто об этом не знал. Когда её дом был уничтожен, она выпила предложенный Джейме яд — и перед смертью сказала Серсее правду.',
      },
      margaery: {
        name: 'Маргери Тирелл',
        title: 'Королева Семи Королевств',
        words: '«Я не хочу быть королевой. Я хочу быть Королевой»',
        bio: 'Была помолвлена с тремя королями и каждый раз подходила к трону на шаг ближе. Единственный политик, понявший, что власть рождается из любви, а не из страха: она шла к беднякам, и народ её любил. Ловушку в Великой Септе она разгадала — но слишком поздно.',
      },
      loras: {
        name: 'Лорас Тирелл',
        title: 'Рыцарь Цветов',
        words: '«Я посвящаю эту победу вам»',
        bio: 'Самый одарённый молодой рыцарь королевства — на турнирах его почти никто не побеждал. Преданность Ренли Баратеону втянула его в политику, а смерть возлюбленного сломала. Воинствующая Вера бросила его в темницу именно за эту любовь.',
      },
    },
  },

  // ══════════════════════════════ ENGLISH ══════════════════════════════
  en: {
    section: {
      eyebrow: 'THOSE WHO PLAYED FOR THE THRONE',
      titleTop: 'Heroes of',
      titleEm: 'the Realm',
      subtitle: 'Every house has its own blood, its own oath and its own betrayal. Choose a character to read their story.',
      tapHint: 'Click to read their history',
      close: 'Close',
    },
    people: {
      eddard: {
        name: 'Eddard Stark',
        title: 'Lord of Winterfell, Warden of the North',
        words: '“He who passes the sentence should swing the sword”',
        bio: 'A man raised up by honour and destroyed by it. Robert Baratheon’s truest friend and Hand of the King. In King’s Landing he found the truth — that Cersei’s children were not Robert’s — and paid for it with his head. Even after his death, his words held the North together.',
      },
      catelyn: {
        name: 'Catelyn Stark',
        title: 'Lady of Winterfell, born of House Tully',
        words: '“I am not asking for mercy — I am asking for my son”',
        bio: 'Ruthless as a mother, cautious as a player. A Tully daughter of Riverrun, she brought her family’s loyalty to House Stark. To protect her children she let a war begin, and in the end she died beside her son Robb at the Red Wedding.',
      },
      robb: {
        name: 'Robb Stark',
        title: 'King in the North, the Young Wolf',
        words: '“They told me I did not need a throne. I wanted my father avenged”',
        bio: 'A commander who never lost a battle. When his father was executed the North named him king, and he cut his way south. But the war he won with the sword he lost by breaking his word — the bargain with the Freys cost him his life at the Red Wedding.',
      },
      sansa: {
        name: 'Sansa Stark',
        title: 'Lady of Winterfell, later Queen in the North',
        words: '“I’m a slow learner, it’s true. But I learn”',
        bio: 'A girl who dreamed of knights and songs learned in King’s Landing that both lie. Joffrey, Littlefinger and Ramsay did not break her — they forged her into a politician. In the end she led the North as an independent kingdom.',
      },
      arya: {
        name: 'Arya Stark',
        title: 'Apprentice of the Faceless Men',
        words: '“There is only one thing we say to death: not today”',
        bio: 'A girl who chose a sword called Needle over a sewing one. After her father’s death she wandered Westeros, and in Braavos the Faceless Men taught her to shed herself — but she chose to stay a Stark. At Winterfell her blade ended the Long Night and the Night King with it.',
      },
      bran: {
        name: 'Bran Stark',
        title: 'The Three-Eyed Raven',
        words: '“I’m not Bran Stark any more. I’m something else”',
        bio: 'Thrown from a tower, he lost his legs and found something else — the ability to see across time. Beyond the Wall he became the Three-Eyed Raven and took the whole memory of the past into himself. When the war ended, the realm chose him precisely because he knows the entire story.',
      },
      jon: {
        name: 'Jon Snow',
        title: 'Lord Commander of the Night’s Watch, Aegon Targaryen',
        words: '“I am the shield that guards the realms of men”',
        bio: 'He spent his life believing he was a bastard. In truth he was the lawful son of Rhaegar Targaryen and Lyanna Stark — the rightful heir to the Iron Throne. He served the Night’s Watch, was stabbed by his own men and brought back. He chose peace over the throne: by killing the woman he loved, he spared Westeros the fire.',
      },

      daenerys: {
        name: 'Daenerys Targaryen',
        title: 'Mother of Dragons, Breaker of Chains',
        words: '“I’m not going to stop the wheel. I’m going to break the wheel”',
        bio: 'Born in exile, sold like goods, and walked out of a funeral pyre with three dragons. She ended slavery across Essos and believed herself a queen of the freed. But the fire over King’s Landing woke in her the blood of her father — the Mad King.',
      },
      viserys: {
        name: 'Viserys Targaryen',
        title: 'The Beggar King',
        words: '“I have woken the dragon”',
        bio: 'He treated being the last male heir of the dynasty as his greatest virtue. He sold his sister for an army on horseback and waited for a crown. He wanted badly to be a dragon, but he was not one — Drogo crowned him with molten gold.',
      },
      rhaegar: {
        name: 'Rhaegar Targaryen',
        title: 'Prince of Dragonstone',
        words: '“Love was the death of a kingdom”',
        bio: 'A crown prince who read books, played the harp and yielded to no one in the lists. Taking Lyanna Stark unleashed a war that brought down an entire dynasty. He fell at the Trident under Robert’s hammer — and never gave up his secret, even dying.',
      },
      aerys: {
        name: 'Aerys II Targaryen',
        title: 'The Mad King',
        words: '“Burn them all!”',
        bio: 'He ruled twenty years and by the end trusted nothing but wildfire. Suspicion drove him to burn his own lords alive. When he moved to torch all of King’s Landing, Jaime Lannister — sworn to protect him — put a sword through his back.',
      },

      tywin: {
        name: 'Tywin Lannister',
        title: 'Lord of Casterly Rock, Hand of the King',
        words: '“A lion does not concern himself with the opinion of sheep”',
        bio: 'The man who turned a house people laughed at into the most feared power in Westeros. The family name outranked any person for him — his own children included. The Red Wedding was his design. In the end the son he despised shot him with a crossbow in the privy.',
      },
      cersei: {
        name: 'Cersei Lannister',
        title: 'Queen of the Andals',
        words: '“When you play the game of thrones, you win or you die”',
        bio: 'Kept from power for the sole crime of being born a woman, she turned that injustice into a lifetime of revenge. She lost all three of her children, and each time came back crueller. Blowing up the Great Sept with wildfire, she erased every rival in an instant.',
      },
      jaime: {
        name: 'Jaime Lannister',
        title: 'The Kingslayer, Lord Commander of the Kingsguard',
        words: '“The things I do for love”',
        bio: 'The whole realm called him an oathbreaker and a murderer. In truth he stopped the Mad King from burning half a million people — and never explained himself to anyone. Losing his sword hand, he had to learn who he was again. And still, his love for Cersei pulled him back.',
      },
      tyrion: {
        name: 'Tyrion Lannister',
        title: 'Hand of the Queen',
        words: '“I drink and I know things. That’s what I do”',
        bio: 'Hated by his father for his height and wished dead by his sister. Born without weapons, he made a weapon of his mind. He saved the city at the Blackwater, then killed his father and fled to Essos to become Daenerys’s Hand. The sharpest political mind in Westeros — and the one most often wrong.',
      },

      robert: {
        name: 'Robert Baratheon',
        title: 'King of the Seven Kingdoms',
        words: '“I won the war with a hammer, and now I grow fat on a throne”',
        bio: 'Unmatched on the battlefield and indifferent on the throne. For Lyanna Stark’s death he brought down an entire dynasty, yet never took any joy in the crown he won. Twenty years passed in hunting, drink and debt — he left the ruling to the Lannisters.',
      },
      stannis: {
        name: 'Stannis Baratheon',
        title: 'Lord of Dragonstone',
        words: '“A good act does not wash out the bad”',
        bio: 'By law the true heir to the throne, and he never tired of reminding anyone. Just, but unbending; loyal, but cold. The red priestess Melisandre promised him victory, and he gave his own daughter to the fire for it. After that, no one was left beside him.',
      },
      renly: {
        name: 'Renly Baratheon',
        title: 'Lord of Storm’s End',
        words: '“To be a good king, you must be loved”',
        bio: 'The youngest and most charming of the brothers. He had neither lawful nor martial claim to the throne — but he had the Tyrell armies and the love of the people. That is exactly what made him dangerous: Melisandre’s shadow killed him in his own tent.',
      },

      balon: {
        name: 'Balon Greyjoy',
        title: 'Lord of the Iron Islands',
        words: '“We do not sow — we take”',
        bio: 'He raised rebellion twice and lost twice. The first cost him his son Theon as a hostage; the second saw him raid the North and gain nothing. He kept faith with the Old Way — the iron price — to the last. His brother Euron threw him off a bridge.',
      },
      theon: {
        name: 'Theon Greyjoy',
        title: 'Prince of the Iron Islands',
        words: '“My name is Theon Greyjoy. Son of Balon Greyjoy”',
        bio: 'Raised as a hostage among the Starks, he became neither Stark nor Greyjoy. Proving his worth, he betrayed Robb and took Winterfell, and lost everything. Ramsay unmade him into Reek. In the end he took his name back: he charged the Night King to shield Bran.',
      },
      yara: {
        name: 'Yara Greyjoy',
        title: 'Captain of the Iron Fleet',
        words: '“I am Balon Greyjoy’s child — I am his legacy”',
        bio: 'Born a daughter where her father wanted a son, she earned the ironborn’s respect not by her sex but by her ship. She tried to pull her brother out of Ramsay’s hands, then threw in with Daenerys. Even as Euron’s prisoner she never bent.',
      },

      olenna: {
        name: 'Olenna Tyrell',
        title: 'The Queen of Thorns',
        words: '“Tell Cersei. I want her to know it was me”',
        bio: 'The sharpest tongue and coldest mind in Westeros. To protect her granddaughter Margaery she poisoned Joffrey at his own wedding, and for years no one knew. When her house was destroyed she drank the poison Jaime offered — and told Cersei the truth before she died.',
      },
      margaery: {
        name: 'Margaery Tyrell',
        title: 'Queen of the Seven Kingdoms',
        words: '“I don’t want to be a queen. I want to be the queen”',
        bio: 'Betrothed to three kings, each time a step closer to the throne. The only player who understood that power grows from love rather than fear: she walked among the poor, and the people adored her. She saw the trap in the Great Sept — but too late.',
      },
      loras: {
        name: 'Loras Tyrell',
        title: 'The Knight of Flowers',
        words: '“I dedicate this victory to you”',
        bio: 'The most gifted young knight in the realm — almost no one unhorsed him in the lists. His devotion to Renly Baratheon drew him into politics, and his lover’s death broke him. The Faith Militant threw him in a cell for that very love.',
      },
    },
  },
}
