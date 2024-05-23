import React from 'react'

export default function Decals() {
  return (
    <div id='Decals' 
    className="absolute left-0 right-0 ml-auto mr-auto w-[95%] h-[95%] flex flex-row -z-8 justify-between"
    >
        <div id="Decal-stack">
            <div className="arrow bg-white"></div>
            <div className="arrow -rotate-90 bg-white"></div>
        </div>

        <div id="Decal-stack">
            <div className="arrow rotate-90 bg-white"></div>
            <div className="arrow rotate-180 bg-white"></div>
        </div>
        
    </div>
  )
}
