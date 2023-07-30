// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ===========================================================

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },

  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',

  address: '26, Soborna str, Rivne, Ukraine',
}

var footer = {
  social: {
    email: {
      text: 'ivan@mail.com',
      href: 'mailto:ivan@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    LinkedIn: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
  address: '26, Soborna str, Rivne, Ukraine',
}

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
        text: 'Запропонувати місце',
        url: 'https://example.com/services',
      },
      {
        text: 'Контакти',
        url: 'https://example.com/services',
      },
      {
        text: 'Про нас',
        url: 'https://example.com/services',
      },
    ],
    icon: [
      'UK', 'EN',
    ],
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },

    about: {
      title: 'ПРО СЕРВІС',     
    
    content: [
      {        
      picture: '/svg/Group 14.svg',
      slogan: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna etiam tempor orci eu lobortis. Arcu felis bibendum ut tristique et egestas quis. Euismod lacinia at quis risus sed vulputate odio ut enim. Porttitor massa id neque aliquam vestibulum morbi. Morbi non arcu risus quis varius quam quisque.',
    },
    {
      picture: '/svg/Group 15.svg',
      slogan: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna etiam tempor orci eu lobortis. Arcu felis bibendum ut tristique et egestas quis. Euismod lacinia at quis risus sed vulputate odio ut enim. Porttitor massa id neque aliquam vestibulum morbi. Morbi non arcu risus quis varius quam quisque.',
    },
    {
      picture: '/svg/Group 16.svg',
      slogan: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna etiam tempor orci eu lobortis. Arcu felis bibendum ut tristique et egestas quis. Euismod lacinia at quis risus sed vulputate odio ut enim. Porttitor massa id neque aliquam vestibulum morbi. Morbi non arcu risus quis varius quam quisque.',
    }
    ]
  },

    places: {
      title: 'Lorem Ipsum',
      form: {
        searchFild: 'Пошук',
        label: "Шукати туристичні місця",
        placeyolder: "Ввведіть назву місця",
        buttonSearch: "Пошук",
        buttonFiltr: "Критерії"
      },

      place: [
        {
        photo: "https://picsum.photos/500/400",
        descriptionPlace: 'Lorem ipsum dolor sit amet'
        },

        {
        photo: "https://picsum.photos/500/400",
        descriptionPlace: 'Lorem ipsum dolor sit amet'
        },

        {
        photo: "https://picsum.photos/500/400",
        descriptionPlace: 'Lorem ipsum dolor sit amet'
        },

        {
        photo: "https://picsum.photos/500/400",
        descriptionPlace: 'Lorem ipsum dolor sit amet'
        },
        {
        photo: "https://picsum.photos/500/400",
        descriptionPlace: 'Lorem ipsum dolor sit amet'
        },
  
        {
        photo: "https://picsum.photos/500/400",
        descriptionPlace: 'Lorem ipsum dolor sit amet'
        },
      ],
    },

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
