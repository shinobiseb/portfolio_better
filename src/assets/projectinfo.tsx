import { projectProps } from "./types";

export const sidebarArr = [
    { name: 'PROJECTS', key: 0, href: 'projects' },
    { name: 'ABOUT', key: 1, href: 'about' },
    { name: 'CONTACT', key: 2, href: 'contact' }
];

export const projects: projectProps[] = [
  {
    title: 'SPCut Video Trimmer',
    link: 'https://spcut.vercel.app/',
    tags: ['Front end', 'TypeScript', 'FFMPEG'],
    desc: "SPCut is a video clip trimmer - taking longer video files and trimming them down to the specified length, without the need for a downloadable video editor. This application utilizes TypeScript, React, FFMPEG, and TailwindCSS.",
    misc: false,
    img: "https://i.imgur.com/yESRlTD.png"
  },
  {
    title: 'MauChat',
    link: 'https://mauchat.vercel.app/',
    tags: ['Full Stack', 'TypeScript', 'NEXTJS'],
    desc: "MauChat",
    img: "https://i.imgur.com/dFFi07A.png",
    misc: false
  },
  {
    title: 'listConductor',
    link: 'https://shinobiseb.github.io/frontend_listConductor/',
    tags: ['API', 'Front End', 'TypeScript'],
    desc: "Lorem",
    img:"https://i.imgur.com/8zgsNUQ.png",
    misc: false
  },
  {
    title: 'Superhero Quiz',
    link: 'https://vibrant-swanson-4dbce0.netlify.app/',
    tags: ['API', 'full stack', 'Javascript'],
    desc: "Lorem",
    img: "https://i.imgur.com/h0jggAY.png",
    misc: false
  },
  {
    title: 'Spotify Clone',
    link: 'https://spotifyclonefrontendseb.netlify.app/',
    tags: ['front end', 'SASS/CSS', 'typescript'],
    desc: "Lorem",
    misc: true
  },
  {
    title: 'Client Portfolio',
    link: 'https://mika-portfolio-2jop-c3xuyvh7y-shinobisebs-projects.vercel.app/',
    tags: ['front end', 'react', 'UI/UX'],
    desc: "Lorem",
    img: "https://i.imgur.com/zZL03VR.png",
    misc: false
  },
  {
    title: 'Goatwriting',
    link: 'https://relaxed-joliot-33c743.netlify.app/',
    tags: ['CRUD', 'mongoDB', 'typescript'],
    desc: "Lorem",
    misc: false
  },
  {
    title: 'Meditracker',
    link: 'https://dazzling-joliot-f48594.netlify.app/',
    tags: ['full stack', 'Masonite', 'Rest api'],
    desc: "Lorem",
    img: "https://i.imgur.com/Qkr7uAg.png",
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
