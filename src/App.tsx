
import { Routes, Route } from 'react-router-dom';
import ProjectList from "./components/ProjectList";
import About from "./components/About";
import Home from "./components/Home";

// Define the type for project information
function App() {
  return (
    <main id='App' className="h-screen bg-black flex flex-row justify-center items-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectList/>} />
        <Route path='/about' element={<About />} />
      </Routes>
    </main>
  );
}

export default App;
