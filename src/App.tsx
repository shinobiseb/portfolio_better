import Sidebar from "./components/Sidebar"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Decals from "./components/Decals"


function App() {

  return (
    <div className="h-screen -z-10 bg-gray flex flex-row justify-center items-center">
      <Sidebar/>
      <Decals/>
    </div>
  )
}

export default App
