import Sidebar from "./components/Sidebar"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Decals from "./components/Decals"
import About from "./components/About"
import Home from "./components/Home"


function App() {

  return (
    <div id='App' className="h-screen bg-gray flex flex-row justify-center items-center">
        {/* <Home/> */}
        
        <Decals/>
        <img className="jimmy hidden" id="Jimmy" src="https://media.discordapp.net/attachments/773549302383378472/1243074116324691978/Jimmoi_nerrdtroon.png?ex=6650267c&is=664ed4fc&hm=d04af56be58d65bc9843390b04be91b38fb4feee8118e74c1653653d9a43a670&=&format=webp&quality=lossless&width=588&height=832" alt="Nerdtron Image"/>
    </div>
  )
}

export default App
