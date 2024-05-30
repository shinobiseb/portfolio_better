import Sidebar from "./components/Sidebar"
import Contact from "./components/Contact"
import ProjectList from "./components/ProjectList"
import Decals from "./components/Decals"
import About from "./components/About"
import Home from "./components/Home"
import ProjectPage from "./components/ProjectPage"
import { Route, Routes, Router } from 'react-router-dom'


function App() {

  return (
    <div id='App' className="h-screen bg-gray flex flex-row justify-center items-center">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<ProjectList/>}/>
          <Route path="/projects/1" element={<ProjectList/>}/>
        </Routes>
    </div>
  )
}

export default App
