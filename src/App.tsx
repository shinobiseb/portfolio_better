import { Routes, Route } from 'react-router-dom';
import ProjectList from './components/ProjectList';
import Experience from './components/Experience';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
      <main id="App" className="h-screen bg-black flex flex-row justify-center items-center overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
  );
}

export default App;
