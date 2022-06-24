import { Work } from "src/app/models/works.interface";

export const works: Work[] = [
    {
        id: 0,
        title: "Game Developer",
        institution: "Blizzard",
        actual: false,
        startDate: new Date(2016, 9, 1),
        endDate: new Date(2017, 8, 1),
        logo: "https://cdn2.steamgriddb.com/file/sgdb-cdn/icon/937ea3f7714dc0d01475da7bff33b596/32/256x256.png",
        description: 'I worked as a Game Developer for Blizzard Entertainment. I was responsible for the development of the game "World of Warcraft".'
    },
    {
        id: 1,
        title: "Java Spring Developer",
        institution: "Mercado Libre",
        actual: false,
        startDate: new Date(2020, 9, 1),
        endDate: new Date(2021, 8, 1),
        logo: "https://d2zftyvti5s458.cloudfront.net/wp-content/uploads/2017/08/mercadolibre-certificado-180.png",
        description: 'I worked as a Java Spring Developer for Mercado Libre. I was responsible for the development of the application "Mercado Libre".'
    },
    {
        id: 2,
        title: "MEAN Stack Developer",
        institution: "Globant",
        actual: false,
        startDate: new Date(2019, 9, 1),
        endDate: new Date(2020, 8, 1),
        logo: "https://takingcare.globant.com/ES/assets/images/globant-lightbg-color-2.png",
        description: 'I worked as a MEAN Stack Developer for Globant. I was responsible for the development of the application "Taking Care".'
    },
    {
        id: 3,
        title: "Angular Developer",
        institution: "Google",
        actual: false,
        startDate: new Date(2018, 9, 1),
        endDate: new Date(2019, 8, 1),
        logo: "https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png",
        description: 'I worked as a Angular Developer for Google. I was responsible for the development of the application "Google".'
    },
    {
        id: 4,
        title: "Project Manager",
        institution: "Facebook",
        actual: false,
        startDate: new Date(2017, 9, 1),
        endDate: new Date(2018, 8, 1),
        logo: "https://www.facebook.com/images/fb_icon_325x325.png",
        description: 'I worked as a Project Manager for Facebook. I was responsible for the development of the application "Facebook".'
    },
    {
        id: 5,
        title: "Fullstack Developer",
        institution: "I.N.T.I.",
        actual: true,
        startDate: new Date(2021, 10, 1),
        endDate: new Date(2022, 9, 29),
        logo: "https://www.ocla.org.ar/Images/entidades/entidades_logo_inti.webp",
        description: 'I worked as a Fullstack Developer for I.N.T.I. I was responsible for the development of the application "Inti".'
    },
];