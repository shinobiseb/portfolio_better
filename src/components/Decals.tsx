

export default function Decals() {
  return (
    <div id='Decals' 
    className="absolute left-0 right-0 ml-auto mr-auto w-[95%] h-[95%] flex flex-row justify-between bg-image-grid">
        <div id="Decal-stack">
            <div className="z-20 h-7 arrow bg-white"></div>
            <div className="z-20 h-7 arrow -rotate-90 bg-white"></div>
        </div>

        <div id="Decal-stack">
            <div className="z-20 h-7 arrow rotate-90 bg-white"></div>
            <div className="z-20 h-7 arrow rotate-180 bg-white"></div>
        </div>
        
    </div>
  )
}

