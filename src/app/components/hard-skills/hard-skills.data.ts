export interface HardSkill {
    id: number,
    name: string,
    function: 'frontend' | 'backend' | 'tool',
    url: string
  }

export const hardSkillData: HardSkill[] = [
    {
        id: 1,
        name: 'HTML',
        function: 'frontend',
        url: 'assets/images/icons/html.svg'
    },
    {
        id: 2,
        name: 'CSS',
        function: 'frontend',
        url: 'assets/images/icons/css.svg'
    },
    {
        id: 3,
        name: 'Javascript',
        function: 'frontend',
        url: 'assets/images/icons/javascript.svg'
    },
    {
        id: 4,
        name: 'Typescript',
        function: 'frontend',
        url: 'assets/images/icons/typescript.svg'
    },
    {
        id: 5,
        name: 'Angular',
        function: 'frontend',
        url: 'assets/images/icons/angular.svg'
    },
    {
        id: 6,
        name: 'Sass',
        function: 'frontend',
        url: 'assets/images/icons/sass.svg'
    },
    {
        id: 7,
        name: 'Bootstrap',
        function: 'frontend',
        url: 'assets/images/icons/bootstrap.svg'
    },
    {
        id: 8,
        name: 'Java',
        function: 'backend',
        url: 'assets/images/icons/java.svg'
    },
    {
        id: 9,
        name: 'Spring Boot',
        function: 'backend',
        url: 'assets/images/icons/springboot.svg'
    },
    {
        id: 10,
        name: 'MySQL',
        function: 'backend',
        url: 'assets/images/icons/mysql.svg'
    },
    {
        id: 11,
        name: 'Node Js',
        function: 'backend',
        url: 'assets/images/icons/nodejs.svg'
    },
    {
        id: 12,
        name: 'Visual Studio Code',
        function: 'tool',
        url: 'assets/images/icons/vscode.svg'
    },
    {
        id: 16,
        name: 'Net Beans',
        function: 'tool',
        url: 'assets/images/icons/netbeans.svg'
    },
    {
        id: 13,
        name: 'Git',
        function: 'tool',
        url: 'assets/images/icons/git.svg'
    },
    {
        id: 14,
        name: 'Npm',
        function: 'tool',
        url: 'assets/images/icons/npm.svg'
    },   
    {
        id: 17,
        name: 'Maven',
        function: 'tool',
        url: 'assets/images/icons/maven.svg'
    },
    {
        id: 18,
        name: 'Heroku',
        function: 'tool',
        url: 'assets/images/icons/heroku.svg'
    },
    {
        id: 19,
        name: 'Firebase',
        function: 'tool',
        url: 'assets/images/icons/firebase.svg'
    },
]