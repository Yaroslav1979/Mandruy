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
      },
      {
        text: 'Пошук місць',
        url: 'https://example.com/about',
      },
      {
        text: 'Додати місце',
        url: 'https://example.com/services',
      },
      {
        text: 'Контакти',
        url: 'https://example.com/services',
      },
      // {
      //   text: 'Про нас',
      //   url: 'https://example.com/services',
      // },
    ],
  
    // icon: [
    //   'UK', 'EN',
    // ],
    hero: {
      title: 'Вітаємо вас на «Мандруй»',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna etiam tempor orci eu lobortis. Arcu felis bibendum ut tristique et egestas quis. Euismod lacinia at quis risus sed vulputate odio ut enim. Porttitor massa id neque aliquam vestibulum morbi. Morbi non arcu risus quis varius quam quisque id. Quam quisque id diam vel quam. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Aliquam nulla facilisi cra',
      buttons: {
        serch: 'Розпочати пошук',
        learn: 'Дізнатися більше'
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
        // label: "Шукати туристичні місця",
        placeyolder: "Введіть назву місця",
        // buttonSearch: "Пошук",
        // buttonFiltr: "Критерії"
        },

        filtr: [
          {
          category: 'Категорї:',
          option: 'Обрати категорію',
        },
        {
          category: 'Область:',
          option: 'Обрати область',
        },
        
        {
          category: 'Сортувати за:',
          option: 'Назвою',
        },
      ]

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
      addTitle: "Додай свою цікаву локацію",
      addPhoto: "https://picsum.photos/500/400",
      addPlaceholder: "Додати своє туристичне місце",
      addFiltr: [
        'category1', 'category2', 'category3,',
        'category4', 'category5', 'category6',
      ],
      addCoordination: 'Додай координати твого місця',
      addDescription: 'Додай короткий опис твого місця',
     addButtons: {
        del: 'Очистити все',
        redact: 'Редагувати',
        add: 'Додати',
      }, 
    },

    founders: [
      {
        personPhoto: "https://picsum.photos/300/500",
        name: 'Андрій Гринчук',
        about: 'Автор ідеї, веб-дизайнер та головний натхненник проекту',
      },

      {
        personPhoto: "https://picsum.photos/300/500",
        name: 'Ярослав Ковтонюк',
        about: 'Верстка та front-end розробник сайту',
      },

      { personPhoto: "https://picsum.photos/300/500",
        name: 'Ім*я Прізвище',
        about: 'Опис роботи учасника проекту',
      }
    ],

    footer: {
        projectLogo: 'MANDRUY.COM',
        projectTitle: 'Lorem Ipsum',
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
