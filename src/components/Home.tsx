import React from 'react'
import Sidebar from './Sidebar'


export default function Home() {
  return (
    <div id='Home-div' className='z-10 justify-between flex flex-row h-5/6 lg:h-5/6 md:h-3/4 bg-lightgray w-5/6 overflow-hidden max-w-7xl'>
        <img className='hero-img' src='https://i.imgur.com/WM6T7fx.png'/>
        <Sidebar/>
    </div>
  )
}
