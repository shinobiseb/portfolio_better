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
    desc: "MauChat is a real-time messaging application, with account creation, authentication and authorization. MauChat utilizes a custom MongoDB API, Web Sockets, React, TypeScript, TailwindCSS and NextJS.",
    img: "https://i.imgur.com/dFFi07A.png",
    misc: false
  },
  {
    title: 'listConductor',
    link: 'https://shinobiseb.github.io/frontend_listConductor/',
    tags: ['API', 'Front End', 'TypeScript'],
    desc: "ListConductor is a playlist creation app that uses Spotify's API to search for songs to add to playlists. Future plans include Spotify User integration. ListConductor utilizes React, TypeScript, Spotify API, TailwindCSS and LocalStorage.",
    img:"https://i.imgur.com/8zgsNUQ.png",
    misc: false
  },
  {
    title: 'Superhero Quiz',
    link: 'https://vibrant-swanson-4dbce0.netlify.app/',
    tags: ['API', 'full stack', 'Javascript'],
    desc: "This web based superhero themed quiz game features a 2 player support and a win state at 5 points. Superhero Quiz utilizes a custom Netlify API, and superhero aesthetic via CSS styling",
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
    desc: "A Custom React client portfolio created for the amazing artist Mika Ervin. This Portfolio site utilizes React, Vite, TypeScript and TailwindCSS",
    img: "https://i.imgur.com/zZL03VR.png",
    misc: false
  },
  {
    title: 'Goatwriting',
    link: 'https://relaxed-joliot-33c743.netlify.app/',
    tags: ['CRUD', 'mongoDB', 'typescript'],
    desc: "A Cancelled work in progress CRUD application that utilized TypeScript and React to create a music creation application for artists. This served as my introduction to TypeScript",
    misc: false
  },
  {
    title: 'Meditracker',
    link: 'https://dazzling-joliot-f48594.netlify.app/',
    tags: ['full stack', 'Masonite', 'Rest api'],
    desc: "A Medication Tracker application, designed to be extremely user friendly. Meditracker utilizes a custom Masonite backend, with a React frontend, along with Material UI.",
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
  {
    title: 'Clip Site',
    link: 'https://vercel.com/shinobisebs-projects/sketch-mp4-clip',
    tags: ['Front-end', 'Search', 'Svelte'],
    misc: true
  },
];
