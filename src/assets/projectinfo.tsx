import { ProjectInfo } from "./types";

export const sidebarArr = [
    { name: 'PROJECTS', key: 0, href: 'projects' },
    { name: 'ABOUT', key: 1, href: 'about' },
    { name: 'CONTACT', key: 2, href: 'contact' }
];

export const projects: ProjectInfo[] = [
  {
    title: 'SPCut Video Trimmer',
    link: 'https://spcut.vercel.app/',
    tags: ['Full Stack', 'SAAS', 'FFMPEG'],
    misc: false
  },
  {
    title: 'MauChat',
    link: 'https://mauchat.vercel.app/',
    tags: ['Full Stack', 'SAAS', 'NEXTJS'],
    misc: false
  },
  {
    title: 'listConductor',
    link: 'https://shinobiseb.github.io/frontend_listConductor/',
    tags: ['API', 'Front End', 'TypeScript'],
    misc: false
  },
  {
    title: 'Superhero Quiz',
    link: 'https://vibrant-swanson-4dbce0.netlify.app/',
    tags: ['API', 'full stack', 'Javascript'],
    misc: false
  },
  {
    title: 'Spotify Clone',
    link: 'https://spotifyclonefrontendseb.netlify.app/',
    tags: ['front end', 'SASS/CSS', 'typescript'],
    misc: true
  },
  {
    title: 'Client Portfolio',
    link: 'https://mika-portfolio-2jop-c3xuyvh7y-shinobisebs-projects.vercel.app/',
    tags: ['front end', 'react', 'UI/UX'],
    misc: false
  },
  {
    title: 'Goatwriting',
    link: 'https://relaxed-joliot-33c743.netlify.app/',
    tags: ['CRUD', 'mongoDB', 'typescript'],
    misc: false
  },
  {
    title: 'Meditracker',
    link: 'https://dazzling-joliot-f48594.netlify.app/',
    tags: ['full stack', 'Masonite', 'Rest api'],
    misc: false
  },
  {
    title: 'Simple Time Calculator',
    link: 'https://simple-time-calculator.netlify.app/',
    tags: ['HTML/CSS', 'JavaScript', 'Misc.', 'Utility'],
    misc: true
  },
  {
    title: 'Weather App',
    link: 'https://shinobiseb.github.io/weather-api-app-2/',
    tags: ['Front-end', 'API', 'Utility'],
    misc: true
  },
];
