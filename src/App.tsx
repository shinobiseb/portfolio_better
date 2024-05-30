import Sidebar from "./components/Sidebar"
import Contact from "./components/Contact"
import ProjectList from "./components/ProjectList"
import Decals from "./components/Decals"
import About from "./components/About"
import Home from "./components/Home"
import ProjectPage from "./components/ProjectPage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function titleNoSpace( title : string ) {
  if([title.includes(' ')]) {
    return ( title.split(' ')[0] )
  }
  else {
    return title
  }
}

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
const projects: ProjectInfo[] = [
  {
    name: 'superhero',
    title: 'Superhero Quiz',
    desc: 'A fullstack browser game aesthetically designed utilizing a custom superhero Api',
    link: 'https://vibrant-swanson-4dbce0.netlify.app/',
    notes: [
      'Built with JavaScript and API', 
      'Responsive design', 
      'Multiple levels',
  ],
    img: 'https://api.pikwy.com/web/6658ef5cceebe410c326a80e.jpg',
    tags: ['API', 'Javascript', 'full stack']
  },
  {
    name: 'meditracker',
    title: 'Meditracker',
    desc: 'Description for Meditracker project',
    link: 'https://example.com/meditracker',
    notes: ['Note 1', 'Note 2', 'Note 3'],
    img: 'path/to/meditracker-image.jpg',
    tags: ['Masonite', 'Rest api', 'full stack']
  },
  {
    name: 'client',
    title: 'Client Portfolio',
    desc: 'Description for Client Portfolio project',
    link: 'https://example.com/client-portfolio',
    notes: ['Note 1', 'Note 2', 'Note 3'],
    img: 'path/to/client-portfolio-image.jpg',
    tags: ['react', 'UI/UX', 'front end']
  },
  {
    name: 'goatwriting',
    title: 'Goatwriting',
    desc: 'Description for Goatwriting project',
    link: 'https://example.com/goatwriting',
    notes: ['Note 1', 'Note 2', 'Note 3'],
    img: 'path/to/goatwriting-image.jpg',
    tags: ['crud', 'mongodb', 'typescript']
  },
  {
    name: 'spotify',
    title: 'Spotify Clone',
    desc: 'Description for Spotify Clone project',
    link: 'https://example.com/spotify-clone',
    notes: ['Note 1', 'Note 2', 'Note 3'],
    img: 'path/to/spotify-clone-image.jpg',
    tags: ['SASS/CSS', 'typescript', 'front end']
  },
];


function App() {
  return (
    <div id='App' className="h-screen bg-gray flex flex-row justify-center items-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectList/>} />
        {projects.map(project => (
          <Route
            key={project.name}
            path={`/projects/${project.name}`}
            element={<ProjectPage title={project.title} desc={project.desc} link={project.link} notes={project.notes} img={project.img} tags={project.tags} />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
