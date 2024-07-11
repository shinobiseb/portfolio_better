import { ProjectInfo } from "./types";

export const sidebarArr = [
    { name: 'PROJECTS', key: 0, href: 'projects' },
    { name: 'ABOUT', key: 1, href: 'about' },
    // { name: 'CONTACT', key: 2, href: 'contact' }
];

// IMAGES: 1204 X 768
export const projects: ProjectInfo[] = [
  {
    name: 'listConductor',
    title: 'listConductor',
    desc: 'A convenient application for creating and managing music playlists, storing them locally, and integrating with the Spotify API.',
    link: 'https://shinobiseb.github.io/frontend_listConductor/',
    notes: [
      'Integrates with the Spotify API to fetch and add music tracks to playlists',
      'Stores playlists in local storage for persistent access',
      'Built using modern web technologies like React, TypeScript, Vite, and localStorage for seamless performance'
    ],
    img: 'https://api.pikwy.com/web/668199e7c44d301c6c446908.jpg',
    tags: ['API', 'Front End', 'TypeScript'],
    misc: false
  },
  {
    name: 'superhero',
    title: 'Superhero Quiz',
    desc: 'A fullstack browser game aesthetically designed utilizing a custom superhero Api',
    link: 'https://vibrant-swanson-4dbce0.netlify.app/',
    notes: [
      'Developed a responsive design for multiple devices and implemented a dynamic backend to track player scores, handle win scenarios, and manage game loops',
      'Utilized jQuery, HTML/CSS, and JavaScript to deliver a seamless frontend and backend experience',
    ],
    img: 'https://api.pikwy.com/web/6658ef5cceebe410c326a80e.jpg',
    tags: ['API', 'full stack', 'Javascript'],
    misc: false
  },
  {
    name: 'spotify',
    title: 'Spotify Clone',
    desc: 'Reactive Spotify front-end clone using TypeScript, providing a seamless and dynamic user experience.',
    link: 'https://spotifyclonefrontendseb.netlify.app/',
    notes: [
      'Implemented a responsive design & experience across various devices',
      'Developed the application using TypeScript, React, and SASS/CSS',
    ],
    img: 'https://api.pikwy.com/web/665969e006ada4727678c297.jpg',
    tags: ['front end', 'SASS/CSS', 'typescript'],
    misc: true
  },
  {
    name: 'client',
    title: 'Client Portfolio',
    desc: 'Created a web portfolio to showcase art with a clean design, ensuring ease of use while displaying many images/videos',
    link: 'https://mika-portfolio-2jop-c3xuyvh7y-shinobisebs-projects.vercel.app/',
    notes: ['Developed using React, JavaScript, and TailwindCSS, the website ensures accessibility with responsive design, making it usable for all visitors.'],
    img: 'https://api.pikwy.com/web/665967ead598366e0e0996c1.jpg',
    tags: ['front end', 'react', 'UI/UX'],
    misc: false
  },
  {
    name: 'goatwriting',
    title: 'Goatwriting',
    desc: 'Songwriting CRUD web application empowering users to create, edit, and remove song ideas',
    link: 'https://relaxed-joliot-33c743.netlify.app/',
    notes: ['Orchestrated a streamlined workflow to enhance user selection and deselection of titles', 'Developed the application using TypeScript, React, SCSS/CSS, Express, and MongoDB'],
    img: 'https://api.pikwy.com/web/665969b8ceebe410c326a912.jpg',
    tags: ['CRUD', 'mongoDB', 'typescript'],
    misc: false
  },
  {
    name: 'meditracker',
    title: 'Meditracker',
    desc: 'Medication usage tracking web application, enabling users to create, edit, and remove medication trackers',
    link: 'https://dazzling-joliot-f48594.netlify.app/',
    notes: [
      'Built the application using JavaScript, CSS, and Python, implementing a custom Masonite-based Restful Routes backend',
      'Devised and implemented strategies to improve accessibility, minimize visual clutter, and enhance user journey'
    ],
    img: 'https://api.pikwy.com/web/66596752a5b41b1ffe3462f7.jpg',
    tags: ['full stack', 'Masonite', 'Rest api'],
    misc: false
  },
  {
    name: 'timeCalculator',
    title: 'Simple Time Calculator',
    desc: 'An extremely Simple utility created for Time calculation',
    link: 'https://simple-time-calculator.netlify.app/',
    notes: [
      'Empowers users to create, edit, and remove custom and existing amiibos with ease',
      'Utilizes modern web technologies like React, Node.js, Express, and MongoDB for efficient data management'
    ],
    img: 'https://api.pikwy.com/web/66711e3255dc537baf2b2c0c.jpg',
    tags: ['HTML/CSS', 'JavaScript', 'Misc.', 'Utility'],
    misc: true
  },
  {
    name: 'Weather App',
    title: 'Weather App',
    desc: 'An extremely Simple utility created for Time calculation',
    link: 'https://main--weatherappsebpatin2.netlify.app/',
    notes: [
      'Empowers users to create, edit, and remove custom and existing amiibos with ease',
      'Utilizes modern web technologies like React, Node.js, Express, and MongoDB for efficient data management'
    ],
    img: 'https://api.pikwy.com/web/66711e3255dc537baf2b2c0c.jpg',
    tags: ['Front-end', 'API', 'Utility'],
    misc: false
  },
];
