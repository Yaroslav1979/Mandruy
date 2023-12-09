// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()




// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

/           
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/mandruy', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('mandruy', {
  layout: 'mandruy',
  page: {
    header: {
      logotype: 'mandruy.com',

      navigation: [
      {
        text: 'Про сервіс',
        url: 'https://example.com/home',
        id: "service",
      },
      {
        text: 'Пошук місць',
        url: 'https://example.com/about',
        id: "search",
      },
      {
        text: 'Додати місце',
        url: 'https://example.com/services',
        id: "addPlace",
      },
      {
        text: 'Контакти',
        url: 'https://example.com/services',
        id: "contacts",
      },
    ],
  
    // icon: [
    //   'UK', 'EN',
    // ],
    hero: {
      title: 'Вітаємо вас на «Мандруй»',
      text: 'Наш сайт — це сервіс, призначений для пошуку відпочинкових, історичних та туристичних місць. Завдяки структурованій інформації, детальному опису, фото та координатам, будь-який турист може знайти точку неподалік від себе, аби відвідати її. Якщо ви знаєте цікаве місце, якого немає в переліку, тоді ви маєте можливість надіслати заявку на додання його в наш список.',
      buttons: {
        search: {
          text: 'Розпочати пошук',
          id: "search",
        },
        learn: 
        {text: 'Дізнатися більше',
        id: "social",
      },
      }
    } 
  },  
 

    about: {
      title: 'ПРО СЕРВІС',     
    
    content: [
      {        
      picture: '/svg/Group 14.svg',
      slogan: 'Різноманіття',
      description: 'В нашій базі можна знайти місця для таборів або недовготривалих мандрівок, визначні історичні пам’ятки, річки чи озера.',
      id: 'search'
    },
    {
      picture: '/svg/Group 15.svg',
      slogan: 'Сортування',
      description: 'Усі місця чи пам’ятки відсортовані за категоріями. Ви можете легко знайти те, що вам потрібно, задавши певні параметри пошуку',
      id: 'search'
    },
    {
      picture: '/svg/Group 16.svg',
      slogan: 'Інтерактивна мапа',
      description: 'Кожне місце також можна переглянути на Google Мапах, що додає зручності для прокладання маршрутів',
      id: 'map'
    }
    ]
  },

  social: {
    title: 'Слідкуй за нами в соцмережах',
    text: 'Отримуй актуальні новини про сервіс “Мандруй” та ділись із друзями. Дякуємо за підтримку. Якщо ти маєш якісь пропозиції чи зауваження щодо функціоналу або роботи сайту, тоді напиши нам.'
  },

    places: {
      title: 'ПОШУК МІСЦЬ',
      form: {
        search: {
        searchFild: 'Пошук',
          placeyolder: "Введіть назву місця",       
        },

        filtr: {
          eachCategory:
          {
          category: 'Категорія:',
          option: ['Обрати категорію', 'Табір', 'Мандрівка', 'Питна вода', 'Пам’ятка', 
          'Музей', 'Водойма', 'Доступно для транспорту', ]        
        },
        eachRegion:
        {
          region: 'Область:',
          option: ['Обрати область', 'Вінницька', 'Волинська', 'Дніпропетровська', 
          'Донецька', 'Житомирська', 'Закарпатська', 'Запорізька', 'Івано-Франківська',
           'Київська', 'Кіровоградська', 'Луганська', 'Львівська', 'Миколаївська',
          'Одеська', 'Полтавська', 'Рівненська', 'Сумська', 'Тернопільська', 'Харківська',
          'Херсонська'],
         },
        eachSort:
        {
          sort: 'Сортувати:',
          option: ['Вид сортування', 'За назвою', 'За датою'],
          
        },
        }
      },

      place: [
        {
        photo: "/img/places/Dubno-castle.jpg",
        namePlace: 'Дубенський замок',        
        },

        {
        photo: "/img/places/Tarakaniv-fort.jpg",
        namePlace: 'Тараканівський форт',        
        },

        {
        photo: "/img/places/Peresopnitsa.jpg",
        namePlace: 'Пересопниця',        
        },

        {
        photo: "/img/places/Loves-tunnel.jpg",
        namePlace: 'Тунель кохання',        
        },

        {
        photo: "/img/places/Fosfat-hill.jpg",
        namePlace: 'Фосфатні гори',        
        },
  
        {
        photo: "/img/places/Falcon-hills.jpg",
        namePlace: 'Соколині гори',        
        },

        {
         photo: "/img/places/White-lake.jpg",
         namePlace: 'Біле озеро',          
        },
   
        {
        photo: "/img/places/Basalt-pillars.jpg",
        namePlace: 'Базальтові стовпи',          
        },

        {
        photo: "/img/places/Sokil.jpg",
        namePlace: 'База Сокіл',            
        },
      
        {
        photo: "/img/places/Klevan-castle.jpg",
        namePlace: 'Клеванський замок',          
        },
      ],
    },

    // ---------------------map----------------------
  activeMap: {
    title: "Інтерактивна мапа",
    src: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d111939.82082888731!2d25.89549818429925!3d50.34745209765328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1694978416550!5m2!1suk!2sua" ,
    link: 'Google Maps',
  },

    // ----------------------------------------

    addPlace: {
      addTitle: "Додати місце",
      addPhoto: "/png/emptyPhoto.png",
      addPlaceholder: "Введіть назву",
      addFiltr: {
        camp: {
          name: 'Табір', 
          svgIcon: "url('/svg/camp.svg')"
          },
        travel: { 
          name: 'Мандрівка', 
          svgIcon: "url('/svg/tree.svg')"
        },
        water: { 
          name:  'Питна вода', 
          svgIcon: "url('/svg/water.svg')"
        },
        monument: { 
          name: "Пам'ятка", 
          svgIcon: "url('/svg/monument.svg')"
        },
        museum: { 
          name:  'Музей', 
          svgIcon: "url('/svg/museum.svg')"
        },
        
        waterPond: { 
          name:  'Водойма',  
          svgIcon: "url('/svg/waterPond.svg')"
        },
      
        transport: { 
          name:  'Доступно для транспорту',
          svgIcon: "url('/svg/car.svg')"
        },  
      },
      addCoordination: 'Введіть координати',
      addDescription: 'Введіть опис...',
     addButtons: {
         add: 'Надіслати',
      }, 
    },

    questions: {
      title: 'Поширені запитання',
      details: [  
          {    
            question: 'Як можна додати власне місце?',
            answer: 'Ви можете зробити це у розділі "Додати місце". Для цього потрібно ввести назву, обрати категорії, які описують місце, додати координати, опис та фото. Натиснувши кнопку "Надіслати" ми отримаємо запит. Після розгляду місце буде додане у нашу базу, або ж буде відхилене.' ,
          },
          {    
            question: 'Скільки часу потрібно на обробку мого запиту?',
            answer: 'Ми не маємо можливості розглядати запити кожного дня і додавати на сайт лише по одному місцю. Проте намагатимемось робити це регулярно, оновлюючи список місць в гугл картах раз на 1-2 тижні. Оновлення бази на сайті може зайняти довше.' ,
          },
          {    
            question: 'Як віднайти потрібне мені місце?',
            answer: 'Щоб знайти потрібне вам місце ви можете скористатися розділом "Пошук місць". Сам пошук можна здійснити за введеною назвою, областю розташування або категоріями. Також ви маєте можливість відсортувати список за потрібним критерієм та обрати вигляд списку або блоків.' ,
          },
          {    
            question: 'Для кого призначений цей сайт?',
            answer: "Сайт призначений для усіх, хто любить подорожувати Україною. Серед місць, внесених до нашої бази, є історичні пам'ятки, музеї, місця для таборів, відпочинку. Тому сайт може стати в нагоді будь-кому.",
          },
      ],
    },

    contacts: {
    title: 'Контакти',
    address:
      {
        website: 'ourwebsite.com',         
        email: 'ouremail1222@gmail.com', 
        telegram: '@telegramnickname'
      },
    },

    footer: {                
        projectDescription: 'Туристично-пошуковий сервіс “Мандруй” - це корисний існтрумент для любителів дослідження теренів України. Шукай цікаві місця та додавай власні, шляхом подачі заявок адміністрації сайту.',
        protectedProject: '2023© Мандруй. Усі права захищені',
        // socialLinks: [
        //   {
        //     link: 'Cool stuff',
        //     href: 'https://example.com/cool-stuff',
        //   },
        //   {
        //     link: 'Random feature',
        //     href: 'https://example.com/random-feature',
        //   },
        // ],
      },
    },
})
  //                  ↑↑ сюди вводимо JSON дані
})


// -------------------------------------------------------------
// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/mandruyList', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('mandruyList', {
  layout: 'mandruy',
  page: {
    header: {
      logotype: 'mandruy.com',

      navigation: [
      {
        text: 'Про сервіс',
        url: 'https://example.com/home',
        id: "service",
      },
      {
        text: 'Пошук місць',
        url: 'https://example.com/about',
        id: "search",
      },
      {
        text: 'Додати місце',
        url: 'https://example.com/services',
        id: "addPlace",
      },
      {
        text: 'Контакти',
        url: 'https://example.com/services',
        id: "contacts",
      },
    ],
  
    // icon: [
    //   'UK', 'EN',
    // ],
    hero: {
      title: 'Вітаємо вас на «Мандруй»',
      text: 'Наш сайт — це сервіс, призначений для пошуку відпочинкових, історичних та туристичних місць. Завдяки структурованій інформації, детальному опису, фото та координатам, будь-який турист може знайти точку неподалік від себе, аби відвідати її. Якщо ви знаєте цікаве місце, якого немає в переліку, тоді ви маєте можливість надіслати заявку на додання його в наш список.',
      buttons: {
        search: {
          text: 'Розпочати пошук',
          id: "search",
        },
        learn: 
        {text: 'Дізнатися більше',
        id: "social",
      },
      }
    } 
  },  
 

    about: {
      title: 'ПРО СЕРВІС',     
    
    content: [
      {        
      picture: '/svg/Group 14.svg',
      slogan: 'Різноманіття',
      description: 'В нашій базі можна знайти місця для таборів або недовготривалих мандрівок, визначні історичні пам’ятки, річки чи озера.',
      id: 'search'
    },
    {
      picture: '/svg/Group 15.svg',
      slogan: 'Сортування',
      description: 'Усі місця чи пам’ятки відсортовані за категоріями. Ви можете легко знайти те, що вам потрібно, задавши певні параметри пошуку',
      id: 'search'
    },
    {
      picture: '/svg/Group 16.svg',
      slogan: 'Інтерактивна мапа',
      description: 'Кожне місце також можна переглянути на Google Мапах, що додає зручності для прокладання маршрутів',
      id: 'map'
    }
    ]
  },

  social: {
    title: 'Слідкуй за нами в соцмережах',
    text: 'Отримуй актуальні новини про сервіс “Мандруй” та ділись із друзями. Дякуємо за підтримку. Якщо ти маєш якісь пропозиції чи зауваження щодо функціоналу або роботи сайту, тоді напиши нам.'
  },

    places: {
      title: 'ПОШУК МІСЦЬ',
      form: {
        search: {
        searchFild: 'Пошук',
          placeyolder: "Введіть назву місця",       
        },

        filtr: {
          eachCategory:
          {
          category: 'Категорія:',
          option: ['Обрати категорію', 'Табір', 'Мандрівка', 'Питна вода', 'Пам’ятка', 
          'Музей', 'Водойма', 'Доступно для транспорту', ]        
        },
        eachRegion:
        {
          region: 'Область:',
          option: ['Обрати область', 'Вінницька', 'Волинська', 'Дніпропетровська', 
          'Донецька', 'Житомирська', 'Закарпатська', 'Запорізька', 'Івано-Франківська',
           'Київська', 'Кіровоградська', 'Луганська', 'Львівська', 'Миколаївська',
          'Одеська', 'Полтавська', 'Рівненська', 'Сумська', 'Тернопільська', 'Харківська',
          'Херсонська'],
         },
        eachSort:
        {
          sort: 'Сортувати:',
          option: ['Вид сортування', 'За назвою', 'За датою'],
          
        },
        }
      },

      place: [
        {
          photo: "/img/places/Dubno-castle.jpg",
          namePlace: 'Дубенський замок. Дубно',
        descriptionPlace: 'Замок князів Острозьких XV ст. в м. Дубні – один із найстаріших замків України, який до цього часу несе у собі риси середньовіччя (суворі мури, підземелля зі склепіннями) та парадного стилю (оздоблені ліпниною зали).',
        id: '00001',
      },

        {
          photo: "/img/places/Tarakaniv-fort.jpg",
          namePlace: 'Тараканівський форт',
        descriptionPlace: "Тараканівський форт - оборонна споруда, архітектурна пам'ятка XIX століття. Розташована неподалік від села Тараканів Дубенського району Рівненської області, в мальовничій місцевості над річкою Іквою.",
        id: '00002',
      },

        {
          photo: "/img/places/Peresopnitsa.jpg",
          namePlace: 'Пересопниця',
        descriptionPlace: 'Культурно-археологічний центр "Пересопниця" був зведений до 450-річчя з часу створення Євангелія. Тут розміщено зокрема Музей Першокниги, музей-скансен «Княже місто», археологічний музей. У Х-ХІІІ ст. Пересопниця була удільним князівством Київської Русі та Галицько-Волинської держави.',
        id: '00003',
      },

        {
          photo: "/img/places/Loves-tunnel.jpg",
          namePlace: 'Тунель кохання',
        descriptionPlace: 'Початок залізничного шляху, оповитого віттям дерев, відомого як Тунель Кохання, знаходиться у Клевані і веде до Оржева ідеальною прямою лінією, довжиною 4 км.',
        id: '00004',
        },
        {
          photo: "/img/places/Fosfat-hill.jpg",
          namePlace: 'Фосфатні гори',
        descriptionPlace: 'Білі гори, або Фосфатні гори - це фосфогіпсові терикони, які розташовані біля села Рубче Рівненської області. Являє собою хімічні відходи «Рівнеазоту». А також популярна фотолокація неподалік від м. Рівне.',
        id: '00005',
      },
  
        {
          photo: "/img/places/Falcon-hills.jpg",
          namePlace: 'Соколині гори',
        descriptionPlace: 'Соколи́ні Го́ри — ландшафтний заказник місцевого значення в Україні. Розташований у Березнівському районі Рівненської області, між селами Більчаки та Губків. На території заказника ростуть 77 видів рідкісних рослин, в тому числі види, занесені до Червоного списку Європи та Червоної книги України.',
        id: '00006',
      },

    //   {
    //     photo: "/img/places/White-lake.jpg",
    //      namePlace: 'Біле озеро',
    //   descriptionPlace: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna etiam tempor orci eu lobortis. Arcu felis bibendum ut tristique et egestas quis. Euismod lacinia at quis risus sed vulputate odio ut enim. Porttitor massa id neque aliquam vestibulum morbi.',
    //   id: '00007',
    // },

      {
        photo: "/img/places/Basalt-pillars.jpg",
        namePlace: 'Базальтові стовпи',
      descriptionPlace: "База́льтові стовпи́ — геологічна пам'ятка природи місцевого значення в Україні. Розташована в Костопільському районі Рівненської області, біля сіл Базальтового, Берестовця, Нового Берестовця. Площа 0,8 га. Створена на базі Івано-Долинського родовища базальтів.",
      id: '00008',
      },
    //   {
    //     photo: "/img/places/Sokil.jpg",
    //     namePlace: 'База Сокіл',
    //   descriptionPlace: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna etiam tempor orci eu lobortis. Arcu felis bibendum ut tristique et egestas quis. Euismod lacinia at quis risus sed vulputate odio ut enim. Porttitor massa id neque aliquam vestibulum morbi.',
    //   id: '00009',
    // },

      {
        photo: "/img/places/Klevan-castle.jpg",
        namePlace: 'Клеванський замок',
      descriptionPlace: "Клеванський замок — залишки оборонної споруди зі збереженими віадуком, двома кам'яними вежами «Пунтоне» та корпусами колишнього духовного училища. Розташований у західній частині смт Клевань, що в Рівненському районі Рівненської області.",
      id: '00010',
    },
      ],
    },

    // ---------------------map----------------------
  activeMap: {
    title: "Інтерактивна мапа",
    src: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d111939.82082888731!2d25.89549818429925!3d50.34745209765328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1694978416550!5m2!1suk!2sua" ,
    link: 'Google Maps',    
  },

    // ----------------------------------------

    addPlace: {
      addTitle: "Додати місце",
      addPhoto: "/png/emptyPhoto.png",
      addPlaceholder: "Введіть назву",
      addFiltr: {
        camp: {
          name: 'Табір', 
          svgIcon: "url('/svg/camp.svg')"
          },
        travel: { 
          name: 'Мандрівка', 
          svgIcon: "url('/svg/tree.svg')"
        },
        water: { 
          name:  'Питна вода', 
          svgIcon: "url('/svg/water.svg')"
        },
        monument: { 
          name: "Пам'ятка", 
          svgIcon: "url('/svg/monument.svg')"
        },
        museum: { 
          name:  'Музей', 
          svgIcon: "url('/svg/museum.svg')"
        },
        
        waterPond: { 
          name:  'Водойма',  
          svgIcon: "url('/svg/waterPond.svg')"
        },
      
        transport: { 
          name:  'Доступно для транспорту',
          svgIcon: "url('/svg/car.svg')"
        },  
      },
      addCoordination: 'Введіть координати',
      addDescription: 'Введіть опис...',
     addButtons: {
         add: 'Надіслати',
      }, 
    },

    questions: {
      title: 'Поширені запитання',
      details: [  
          {    
            question: 'Як можна додати власне місце?',
            answer: 'Ви можете зробити це у розділі "Додати місце". Для цього потрібно ввести назву, обрати категорії, які описують місце, додати координати, опис та фото. Натиснувши кнопку "Надіслати" ми отримаємо запит. Після розгляду місце буде додане у нашу базу, або ж буде відхилене.' ,
          },
          {    
            question: 'Скільки часу потрібно на обробку мого запиту?',
            answer: 'Ми не маємо можливості розглядати запити кожного дня і додавати на сайт лише по одному місцю. Проте намагатимемось робити це регулярно, оновлюючи список місць в гугл картах раз на 1-2 тижні. Оновлення бази на сайті може зайняти довше.' ,
          },
          {    
            question: 'Як віднайти потрібне мені місце?',
            answer: 'Щоб знайти потрібне вам місце ви можете скористатися розділом "Пошук місць". Сам пошук можна здійснити за введеною назвою, областю розташування або категоріями. Також ви маєте можливість відсортувати список за потрібним критерієм та обрати вигляд списку або блоків.' ,
          },
          {    
            question: 'Для кого призначений цей сайт?',
            answer: "Сайт призначений для усіх, хто любить подорожувати Україною. Серед місць, внесених до нашої бази, є історичні пам'ятки, музеї, місця для таборів, відпочинку. Тому сайт може стати в нагоді будь-кому.",
          },
      ],
    },

    contacts: {
    title: 'Контакти',
    address:
      {
        website: 'ourwebsite.com',         
        email: 'ouremail1222@gmail.com', 
        telegram: '@telegramnickname'
      },
    },

    footer: {
      projectDescription: 'Туристично-пошуковий сервіс “Мандруй” - це корисний існтрумент для любителів дослідження теренів України. Шукай цікаві місця та додавай власні, шляхом подачі заявок адміністрації сайту.',
      protectedProject: '2023© Мандруй. Усі права захищені',
        // socialLinks: [
        //   {
        //     link: 'Cool stuff',
        //     href: 'https://example.com/cool-stuff',
        //   },
        //   {
        //     link: 'Random feature',
        //     href: 'https://example.com/random-feature',
        //   },
        // ],
      },
    },
})
  //                  ↑↑ сюди вводимо JSON дані
})

// ----------------------------------------

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/photo', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('photo', {
  layout: 'mandruy',
        
      place: [
        {
        photo: "/img/places/Bell.jpg",
        namePlace: 'Назва місця 1',
        descriptionPlace: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna etiam tempor orci eu lobortis. Arcu felis bibendum ut tristique et egestas quis. Euismod lacinia at quis risus sed vulputate odio ut enim. Porttitor massa id neque aliquam vestibulum morbi.',
        id: '00001',
      },

        {
        photo: "/img/places/Church.jpg",
        namePlace: 'Назва місця 2',
        descriptionPlace: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna etiam tempor orci eu lobortis. Arcu felis bibendum ut tristique et egestas quis. Euismod lacinia at quis risus sed vulputate odio ut enim. Porttitor massa id neque aliquam vestibulum morbi.',
        id: '00002',
      },

        {
        photo: "/img/places/Museum.jpg",
        namePlace: 'Назва місця 3',
        descriptionPlace: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna etiam tempor orci eu lobortis. Arcu felis bibendum ut tristique et egestas quis. Euismod lacinia at quis risus sed vulputate odio ut enim. Porttitor massa id neque aliquam vestibulum morbi.',
        id: '00003',
      },

        {
        photo: "/img/places/RockPicture.jpg",
        namePlace: 'Назва місця 4',
        descriptionPlace: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna etiam tempor orci eu lobortis. Arcu felis bibendum ut tristique et egestas quis. Euismod lacinia at quis risus sed vulputate odio ut enim. Porttitor massa id neque aliquam vestibulum morbi.',
        id: '00004',
        },
        {
        photo: "/img/places/Fortress.jpg",
        namePlace: 'Назва місця 5',
        descriptionPlace: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna etiam tempor orci eu lobortis. Arcu felis bibendum ut tristique et egestas quis. Euismod lacinia at quis risus sed vulputate odio ut enim. Porttitor massa id neque aliquam vestibulum morbi.',
        id: '00005',
      },
  
        {
        photo: "/img/places/OldChurch.jpg",
        namePlace: 'Назва місця 6',
        descriptionPlace: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna etiam tempor orci eu lobortis. Arcu felis bibendum ut tristique et egestas quis. Euismod lacinia at quis risus sed vulputate odio ut enim. Porttitor massa id neque aliquam vestibulum morbi.',
        id: '00006',
      },
      ],
    
    // ----------------------------------------

    addPlace: {
      // Отримайте відповідні значення для полів addPlace
      addFiltr: {
        camp: {
          name: 'Табір', 
          svgIcon: "url('/svg/camp.svg')"
          },
        travel: { 
          name: 'Мандрівка', 
          svgIcon: "url('/svg/tree.svg')"
        },
        water: { 
          name:  'Питна вода', 
          svgIcon: "url('/svg/water.svg')"
        },
        monument: { 
          name: "Пам'ятка", 
          svgIcon: "url('/svg/monument.svg')"
        },
        museum: { 
          name:  'Музей', 
          svgIcon: "url('/svg/museum.svg')"
        },
        
        waterPond: { 
          name:  'Водойма',  
          svgIcon: "url('/svg/waterPond.svg')"
        },
      
        transport: { 
          name:  'Доступно для транспорту',
          svgIcon: "url('/svg/car.svg')"
        },  
      },
      addCoordination: 'Введіть координати',
      addDescription: 'Введіть опис...',
     addButtons: {
         add: 'Надіслати',
      }
    }   
  })
}
)

// Підключаємо роутер до бек-енду
module.exports = router
