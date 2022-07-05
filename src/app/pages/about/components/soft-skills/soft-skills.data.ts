export interface SoftSkill {
  id: number;
  name: string;
  description: string;
  url: string;
}

export const softSkillData: SoftSkill[] = [
  {
    id: 1,
    name: 'Trabajo en equipo',
    description:
      'Trabajo en equipo con mis compañeros para lograr los objetivos.',
    url: 'assets/images/soft-skills/equipo.svg',
  },
  {
    id: 2,
    name: 'Comunicaion activa',
    description:
      'Trato de generar vinculos a traves de la comunicacion con mis compañeros.',
    url: 'assets/images/soft-skills/comunicativo.svg',
  },
  {
    id: 3,
    name: 'Dispuesto a ayudar',
    description:
      'Dispuesto a ayudar a los demas en cualquier momento que se necesite.',
    url: 'assets/images/soft-skills/ayuda.svg',
  },
  {
    id: 4,
    name: 'Organizado',
    description:
      'Trato de organizarme planeando con anticipacion ayudandome con herramientas como Notion para lograr los objetivos.',
    url: 'assets/images/soft-skills/organizado.svg',
  },
  {
    id: 5,
    name: 'Adaptable a los cambios',
    description:
      'Tengo facilidad para adaptarme a los cambios que se presenten en el dia a dia.',
    url: 'assets/images/soft-skills/adaptable.svg',
  },
  {
    id: 6,
    name: 'Formacion constante',
    description:
      'Constante busqueda de informacion y actualizacion en las tecnologias que usoen el dia a dia y las que quiero aprender.',
    url: 'assets/images/soft-skills/formacion.svg',
  },
];
