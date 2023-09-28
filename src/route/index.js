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
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna etiam tempor orci eu lobortis. Arcu felis bibendum ut tristique et egestas quis. Euismod lacinia at quis risus sed vulputate odio ut enim. Porttitor massa id neque aliquam vestibulum morbi. Morbi non arcu risus quis varius quam quisque id. Quam quisque id diam vel quam. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Aliquam nulla facilisi cra',
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
    },
    {
      picture: '/svg/Group 15.svg',
      slogan: 'Сортування',
      description: 'Усі місця чи пам’ятки відсортовані за категоріями. Ви можете легко знайти те, що вам потрібно, задавши певні параметри пошуку',
    },
    {
      picture: '/svg/Group 16.svg',
      slogan: 'Інтерактивна мапа',
      description: 'Кожне місце також можна переглянути на Google Мапах, що додає зручності для прокладання маршрутів',
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
        photo: "/img/places/Bell.jpg",
        descriptionPlace: 'Назва місця 1'
        },

        {
        photo: "/img/places/Church.jpg",
        descriptionPlace: 'Назва місця 2'
        },

        {
        photo: "/img/places/Museum.jpg",
        descriptionPlace: 'Назва місця 3'
        },

        {
        photo: "/img/places/RockPicture.jpg",
        descriptionPlace: 'Назва місця 4'
        },
        {
        photo: "/img/places/Fortress.jpg",
        descriptionPlace: 'Назва місця 5'
        },
  
        {
        photo: "/img/places/OldChurch.jpg",
        descriptionPlace: 'Назва місця 6'
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
      addDescription: 'Введіть короткий опис...',
     addButtons: {
         add: 'Надіслати',
      }, 
    },

    // founders: [
    //   {
    //     personPhoto: "https://picsum.photos/300/500",
    //     name: 'Андрій Гринчук',
    //     about: 'Автор ідеї, веб-дизайнер та головний натхненник проекту',
    //   },

    //   {
    //     personPhoto: "https://picsum.photos/300/500",
    //     name: 'Ярослав Ковтонюк',
    //     about: 'Верстка та front-end розробник сайту',
    //   },

    //   { personPhoto: "https://picsum.photos/300/500",
    //     name: 'Ім*я Прізвище',
    //     about: 'Опис роботи учасника проекту',
    //   }
    // ],

    questions: {
      title: 'Поширені запитання',
      details: [  
          {    
            question: 'Як можна додати власне місце?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' ,
          },
          {    
            question: 'Скільки часу потрібно на обробку мого запиту?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' ,
          },
          {    
            question: 'Як віднайти потрібне мені місце?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' ,
          },
          {    
            question: 'Для кого призначений цей сайт?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' ,
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
        projectLogo: 'MANDRUY.COM',
        projectTitle: 'Mандруй',
        projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna etiam tempor orci eu lobortis. Arcu felis bibendum ut tristique et egestas quis. Euismod lacinia at quis risus sed vulputate odio ut enim. Porttitor massa id neque aliquam vestibulum morbi. Morbi non arcu risus quis varius quam quisque id. Quam quisque id diam vel quam. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Aliquam nulla facilisi cras',
        socialLinks: [
          {
            link: 'Cool stuff',
            href: 'https://example.com/cool-stuff',
          },
          {
            link: 'Random feature',
            href: 'https://example.com/random-feature',
          },
        ],
      },
    },
})
  //                  ↑↑ сюди вводимо JSON дані
})

// Підключаємо роутер до бек-енду
module.exports = router
