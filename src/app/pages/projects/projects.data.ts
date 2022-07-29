import { Project } from 'src/app/models/projects.interface';

export const projectsData: Project[] = [
  {
    id: 0,
    name: 'Mi Portfolio Personal',
    description:
      'Mi Portfolio Personal. Forntend creado con Typescript en Angular 14, estilos con Sass y Bootstrap 5.2. Backend creado con Java en Spring Boot conectada a una base de datos MySQL.',
    date: new Date(2022, 5, 1),
    frontUrl: 'https://github.com/MatiGaleano/Portfolio-Frontend',
    backUrl: '',
    demoUrl: 'https://portfolio.matiasgaleano.com.ar',
    image: 'assets/images/projects/portfolio_01.png',
  },
  {
    id: 1,
    name: 'Pokemon Memory',
    description:
      'Juego de memoria con tematica de pokemon. Creado con Typescript en Angular, estilos CSS y Bootstrap. Imagenes de pokemon de pokeapi.co',
    date: new Date(2022, 5, 1),
    frontUrl: 'https://github.com/MatiGaleano/Pokemon-Memory',
    backUrl: '',
    demoUrl: 'https://matigaleano.github.io/Pokemon-Memory/',
    image: 'assets/images/projects/pokememory_01.png'
  },
];
