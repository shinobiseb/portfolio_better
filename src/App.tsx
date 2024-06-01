
import { Routes, Route } from 'react-router-dom';
import ProjectList from "./components/ProjectList";
import About from "./components/About";
import Home from "./components/Home";

// Define the type for project information
interface ProjectInfo {
  name: string;
  title: string;
  desc: string;
  link: string;
  notes: string[];
  img: string;
  tags: string[];
}

// IMAGES: 1204 X 768
export const projects: ProjectInfo[] = [
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
    tags: ['API', 'Javascript', 'full stack']
  },
  {
    name: 'meditracker',
    title: 'Meditracker',
    desc: 'Medication usage tracking web application, enabling users to create, edit, and remove medication trackers',
    link: 'https://dazzling-joliot-f48594.netlify.app/',
    notes: ['Built the application using JavaScript, CSS, and Python, implementing a custom Masonite-based Restful Routes backend', 'Devised and implemented strategies to improve accessibility, minimize visual clutter, and enhance user journey'],
    img: 'https://api.pikwy.com/web/66596752a5b41b1ffe3462f7.jpg',
    tags: ['Masonite', 'Rest api', 'full stack']
  },
  {
    name: 'client',
    title: 'Client Portfolio',
    desc: 'Created a web portfolio to showcase art with a clean design, ensuring ease of use while displaying many images/videos',
    link: 'https://mika-portfolio-2jop-c3xuyvh7y-shinobisebs-projects.vercel.app/',
    notes: ['Developed using React, JavaScript, and TailwindCSS, the website ensures accessibility with responsive design, making it usable for all visitors.'],
    img: 'https://api.pikwy.com/web/665967ead598366e0e0996c1.jpg',
    tags: ['react', 'UI/UX', 'front end']
  },
  {
    name: 'goatwriting',
    title: 'Goatwriting',
    desc: 'Songwriting CRUD web application empowering users to create, edit, and remove song ideas',
    link: 'https://relaxed-joliot-33c743.netlify.app/',
    notes: ['Orchestrated a streamlined workflow to enhance user selection and deselection of titles', 'Developed the application using TypeScript, React, SCSS/CSS, Express, and MongoDB'],
    img: 'https://api.pikwy.com/web/665969b8ceebe410c326a912.jpg',
    tags: ['crud', 'mongodb', 'typescript']
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
    tags: ['SASS/CSS', 'typescript', 'front end']
  },
  {
    name: 'myamiibo',
    title: 'MyAmiibo',
    desc: 'A CRUD app for managing custom and existing amiibos, offering a seamless user experience.',
    link: 'https://tender-pike-ddd522.netlify.app/',
    notes: [
      'Empowers users to create, edit, and remove custom and existing amiibos with ease',
      'Utilizes modern web technologies like React, Node.js, Express, and MongoDB for efficient data management'
    ],
    img: 'https://api.pikwy.com/web/66596dadab06f231a9659074.jpg',
    tags: ['CRUD', 'React', 'Express', 'MongoDB']
  },
];

function App() {
  return (
    <main id='App' className="h-screen bg-gray flex flex-row justify-center items-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </main>
  );
}

export default App;
