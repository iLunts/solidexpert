
import { Developer } from './developer';

export const DEVELOPERS: Developer[] = [
  {
    hoursFree: 29,
    firstName: 'Jon',
    lastName: 'Guerrero',
    specialization: 'Android',
    levelSeniority: 'Senior Pomidor' ,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book.`,
    id: 1,
    languages: [
      {
        name: 'Java',
        years: 4
      },
      {
        name: 'JavaScript',
        years: 1
      },
      {
        name: 'Kotlin',
        years: 0.5
      },
      {
        name: 'Visual Basic',
        years: 2
      },
      {
        name: 'C#',
        years: 1
      }
    ],
    dataBase: [
      {
        name: 'SQLite',
        years: 3
      },
      {
        name: 'Realm',
        years: 2
      },
      {
        name: 'StorIO SQLite',
        years: 1
      },
      {
        name: 'MySQL',
        years: 0.5
      },
      {
        name: 'Room',
        years: 2
      }
    ],
    technologies: [
      {
        name: 'Java Server Pages (JSP)',
        years: 1
      },
      {
        name: 'HTML',
        years: 1
      },
      {
        name: 'CSS',
        years: 1
      },
      {
        name: 'XML/XSL/XSLT/XPath',
        years: 1
      },
    ],
    rapidApp: [
      {
        name: 'Eclipse IDE',
        years: 2
      },
      {
        name: 'MS Visual Studio',
        years: 2
      },
      {
        name: 'Android Studio',
        years: 3
      },
    ],
    teamProj: [
      {
        name: 'AgencyBanking',
        description: `It’s a banking mobile application. This is a big application
        developing by big team. This app allows you to make a lot of banking
        transactions and to see your account information.`,
      },
      {
        name: 'Deichmann',
        description: `Online shop for German shoes. Here you have your own proﬁle, there are
        your settings, wish list and cart. App provides you to search any
        kinds of shoes. It can be shoes for women, men, kids, sport, trends
        and others. You can add any kinds of shoes to your cart, wish list or
        buy it. Also, app provides you to see for the product details.`,
      },
      {
        name: 'Doxisafe',
        description: `Application for storing your documents in dierent formats, like
        doc/pdf/txt and many others. App allows you to scan documents with
        camera and then you can convert this photos in dierent types of ﬁles,
        doc/pdf/txt and others. More over you can apply some ﬁlters to each
        photo or document.`,
      },
      {
        name: 'SKPDI',
        description: ` Task manager for employees on Russian roads. Application allows
        employees choose their tasks and send reports about their works. There
        are a lot of kinds of tasks, for example defects, linear, points and
        other types. Each type has own logic and UI.`,
      },
      {
        name: 'PocketPub',
        description: ` Details: music application for musicians and listeners. It allows you
        to ﬁnd street concerts, to have access to live music at any time and
        pay as much as you can or want. To grow new artists, support their
        talents. To show worldwide events that you attend personally.`,
      },
      {
        name: 'SKPDI',
        description: ` This app was developed for restaurants and pubs. It allows you to make
        an order directly from the phone. And also, it allows you to book
        places in restaurants and pubs.`,
      },
      {
        name: 'VIM',
        description: `Vehicle Inventory Manager. App for tracking cars locations using
        beacons. App can store cars. You can add them or remove. Also,
        application provides you to see cars on the map.`,
      },
    ],
    personalProj: [
      {
        name: 'Ticker',
        description: `running line. Description: It’s a simple app that displays your text
        at full screen. Ticker allows you: to select text color, to choose a
        background color, to show text as roll title or to ﬁt it into your
        screen, to save all the created captions in your history.`,
        link: `https://play.google.com/store/apps/details?id=mikes.dept.ticker&hl=en`,
      },
      {
        name: 'GetCurrency',
        description: ` Description: the smart tool to calculate live currency and foreign
        exchanges rates with simple currency converter. Daily updated currency
        rates published by the European Central Bank are always at your hand.`,
        link: `https://play.google.com/store/apps/details?id=mikes.dept.currencyrates&hl=en`,
      },
      {
        name: 'OpenWeather',
        description: `accurate forecast. Description: the app contains more then 70.000
        cities. You can ﬁnd your city using OpenWeather. You can always see
        more information about the weather in your city. Also, you can see the
        temperature in the city next week.`,
        link: `https://play.google.com/store/apps/details?id=sergei.mikevich.openweather&hl=en`,
      },
      {
        name: 'Credits',
        description: `  Description: this app allows you to keep organized all your debts. Now
        you don’t need to remember who owes you a $100, and whom you owe €23.
        You can invite as many friends as you need, use as many currencies as
        you need.`,
        link: `https://play.google.com/store/apps/details?id=io.credits.v1&ah=ilsxgG0d20L0ON4kBFcQAa_ttN4&hl=en`,
      },
      {
        name: 'Game “Funny pairs”',
        description: `Description: The game ﬁeld is ﬁlled with various pictures. This game
        requires user to spot the identical logical pairs. If user ﬁnds the
        identical pairs, they will disappear, otherwise, they’ll be turned
        around. This game keeps the score and records. Here are three diculty
        levels that, in turn, are broken up into 10 levels.`,
        link: ` https://play.google.com/store/apps/details?id=mikes.dept.funnypairs`,
      },
      {
        name: 'Game “Math Game”',
        description: ` Description: android application that helps to overcome the problems
        of poor oral counting skills. Math Game - app for adults and children.
        Choose some options as you like before examples resolving. And then
        you can train your brain with Math Game. Application with modern
        design.`,
        link: ` https://play.google.com/store/apps/details?id=mikes.dept.mathgame`,
      },
      {
        name: 'CoCo',
        description: `Control Your Costs. Description: You can account and storage your
        costs every day! The application allows you to make plans for your
        costs and control your costs. Just create any category and spend money
        according your plans.`,
        link: `https://play.google.com/store/apps/details?id=mikes.dept.moneycontrol`,
      },
    ],
  },
  {
    hoursFree: 20,
    firstName: 'Sam',
    lastName: 'Shadel',
    specialization: 'Java',
    levelSeniority: 'Senior' ,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book.`,
    id: 2,
    languages: [],
    dataBase: [],
    technologies: [],
    rapidApp: [],
    teamProj: [],
    personalProj: [ ],
  },
  {
    hoursFree: 21,
    firstName: 'Martin',
    lastName: 'Fusco',
    specialization: '.Net',
    levelSeniority: 'Senior' ,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book.`,
    id: 3,
    languages: [],
    dataBase: [],
    technologies: [],
    rapidApp: [],
    teamProj: [],
    personalProj: [ ],

  },
  {
    hoursFree: 22,
    firstName: 'Jess',
    lastName: 'Bundy',
    specialization: 'Front End',
    levelSeniority: 'Senior' ,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book.`,
    id: 4,
    languages: [],
    dataBase: [],
    technologies: [],
    rapidApp: [],
    teamProj: [],
    personalProj: [ ],

  },
  {
    hoursFree: 27,
    firstName: 'Nicko',
    lastName: 'Sarkisian',
    specialization: 'Designer',
    levelSeniority: 'Middle' ,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book.`,
    id: 5,
        languages: [],
    dataBase: [],
    technologies: [],
    rapidApp: [],
    teamProj: [],
    personalProj: [ ],

  },
  {
    hoursFree: 40,
    firstName: 'Goddart',
    lastName: 'Krichmar',
    specialization: 'Sale manager',
    levelSeniority: 'Senior' ,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book.`,
    id: 6,
        languages: [],
    dataBase: [],
    technologies: [],
    rapidApp: [],
    teamProj: [],
    personalProj: [ ],

  },
  {
    hoursFree: 33,
    firstName: 'Mill',
    lastName: 'Maalouf',
    specialization: 'Phyton',
    levelSeniority: 'Senior' ,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book.`,
    id: 7,
        languages: [],
    dataBase: [],
    technologies: [],
    rapidApp: [],
    teamProj: [],
    personalProj: [ ],

  },
  {
    hoursFree: 35,
    firstName: 'Stearne',
    lastName: 'Ayling',
    specialization: 'JavaScript',
    levelSeniority: 'Senior' ,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book.`,
    id: 8,
        languages: [],
    dataBase: [],
    technologies: [],
    rapidApp: [],
    teamProj: [],
    personalProj: [ ],

  },
  {
    hoursFree: 30,
    firstName: 'Jon',
    lastName: 'Guerrero',
    specialization: 'Android',
    levelSeniority: 'Middle' ,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book.`,
    id: 9,
        languages: [],
    dataBase: [],
    technologies: [],
    rapidApp: [],
    teamProj: [],
    personalProj: [ ],

  },
  {
    hoursFree: 22,
    firstName: 'Sam',
    lastName: 'Shadel',
    specialization: 'Java',
    levelSeniority: 'Senior' ,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book.`,
    id: 10,
        languages: [],
    dataBase: [],
    technologies: [],
    rapidApp: [],
    teamProj: [],
    personalProj: [ ],

  },
  {
    hoursFree: 24,
    firstName: 'Martin',
    lastName: 'Fusco',
    specialization: '.Net',
    levelSeniority: 'Middle' ,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book.`,
    id: 11,
        languages: [],
    dataBase: [],
    technologies: [],
    rapidApp: [],
    teamProj: [],
    personalProj: [ ],

  },
  {
    hoursFree: 28,
    firstName: 'Jess',
    lastName: 'Bundy',
    specialization: 'Front End',
    levelSeniority: 'Middle' ,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book.`,
    id: 12,
        languages: [],
    dataBase: [],
    technologies: [],
    rapidApp: [],
    teamProj: [],
    personalProj: [ ],

  },
  {
    hoursFree: 25,
    firstName: 'Nicko',
    lastName: 'Sarkisian',
    specialization: 'Designer',
    levelSeniority: 'Senior' ,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book.`,
    id: 13,
        languages: [],
    dataBase: [],
    technologies: [],
    rapidApp: [],
    teamProj: [],
    personalProj: [ ],

  },
  {
    hoursFree: 20,
    firstName: 'Goddart',
    lastName: 'Krichmar',
    specialization: 'Sale manager',
    levelSeniority: 'Senior' ,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book.`,
    id: 14,
        languages: [],
    dataBase: [],
    technologies: [],
    rapidApp: [],
    teamProj: [],
    personalProj: [ ],

  },
  {
    hoursFree: 27,
    firstName: 'Mill',
    lastName: 'Maalouf',
    specialization: 'Phyton',
    levelSeniority: 'Middle' ,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book.`,
    id: 15,
        languages: [],
    dataBase: [],
    technologies: [],
    rapidApp: [],
    teamProj: [],
    personalProj: [ ],

  },
  {
    hoursFree: 25,
    firstName: 'Stearne',
    lastName: 'Ayling',
    specialization: 'JavaScript',
    levelSeniority: 'Senior' ,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book.`,
    id: 16,
        languages: [],
    dataBase: [],
    technologies: [],
    rapidApp: [],
    teamProj: [],
    personalProj: [ ],

  }
];

