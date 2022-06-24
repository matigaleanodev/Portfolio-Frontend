import { Education } from "src/app/models/education.interface";

export const educationData: Education[] = [
    {
        id: 0,
        institution: "I.N.T.I.",
        title: "Fullstack Developer",
        startDate: new Date(2021, 10, 1),
        endDate: new Date(2022, 9, 29),
        actual: true,
        logo: "https://www.ocla.org.ar/Images/entidades/entidades_logo_inti.webp",
        description: 'I studied at I.N.T.I. (Instituto Nacional de Tecnologia Industrial). I learned Javascript, Typescript, HTML & CSS, Angular, Java, Spring Boot, MySQL".'
    },
    {
        id: 1,
        institution: "University of California, Irvine",
        title: "Bachelor of Science",
        startDate: new Date(2010, 9, 1),
        endDate: new Date(2014, 6, 1),
        actual: false,
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/University_of_California%2C_Irvine_seal.svg/1200px-University_of_California%2C_Irvine_seal.svg.png",
        description: 'I studied at University of California, Irvine. I learned Java, C, C++, HTML & CSS, SQL, and some other languages.'
    },
    {
        id: 2,
        institution: "E.P.E.T N° 1 Unesco",
        title: "Secundary Education",
        startDate: new Date(2002, 3, 1),
        endDate: new Date(2008, 11, 30),
        actual: false,
        logo: 'https://alumnos.epet1.edu.ar/imagenes/logoweb.png',
        description: 'I studied at E.P.E.T N° 1 Unesco. I learned some languages.'
    }
]