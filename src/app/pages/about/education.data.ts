import { Education } from "src/app/models/education.interface";

export const educationData: Education[] = [
    {
        id: 0,
        institution: "Instituto Nacional de Tecnologia Industrial",
        degree: "Fullstack Developer",
        startDate: new Date(2021, 10, 1),
        endDate: new Date(2022, 9, 29),
        logo: "https://www.ocla.org.ar/Images/entidades/entidades_logo_inti.webp",
    },
    {
        id: 1,
        institution: "University of California, Irvine",
        degree: "Bachelor of Science",
        startDate: new Date(2010, 9, 1),
        endDate: new Date(2014, 6, 1),
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/University_of_California%2C_Irvine_seal.svg/1200px-University_of_California%2C_Irvine_seal.svg.png"
    },
    {
        id: 2,
        institution: "E.P.E.T N° 1 Unesco",
        degree: "Secundary Education",
        startDate: new Date(2002, 3, 1),
        endDate: new Date(2008, 11, 30),
        logo: 'https://alumnos.epet1.edu.ar/imagenes/logoweb.png'
    }
]