import React from 'react'

export default function BackButton() {

  return (
    <div onClick={() =>  history.back() } className='z-20 back-button flex sm:min-h-8 h-8 items-center pl-3 mt-4 overflow-hidden cursor-pointer hover:bg-black'>
        <div className='arrow bg-white -rotate-45 h-8'></div>
        <div className='arrow bg-white -rotate-45 h-8'></div>
        <div className='arrow bg-white -rotate-45 h-8'></div>
        <div className='arrow bg-white -rotate-45 h-8'></div>
        <span className='uppercase text-white text-5xl font-semibold pr-5'>back</span>
        <div className='arrow bg-white -rotate-45 h-8'></div>
        <div className='arrow bg-white -rotate-45 h-8'></div>
        <div className='arrow bg-white -rotate-45 h-8'></div>
        <div className='arrow bg-white -rotate-45 h-8'></div>
    </div>
  )
}
