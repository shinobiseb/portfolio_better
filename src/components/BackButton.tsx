import React from 'react'

export default function BackButton() {

  return (
    <div onClick={() =>  history.back()} className='z-20 back-button p-2 flex h-1 sm:h-8 items-center pl-3 mt-4 overflow-hidden cursor-pointer hover:bg-black'>
        <div className='arrow bg-white -rotate-45 h-2 sm:h-8'></div>
        <div className='arrow bg-white -rotate-45 h-2 sm:h-8'></div>
        <div className='arrow bg-white -rotate-45 h-2 sm:h-8'></div>
        <div className='arrow bg-white -rotate-45 h-2 sm:h-8'></div>
        <span className='uppercase text-white text-md sm:text-5xl pr-1 sm:pr-4 font-semibold'>back</span>
        <div className='arrow bg-white -rotate-45 h-2 sm:h-8'></div>
        <div className='arrow bg-white -rotate-45 h-2 sm:h-8'></div>
        <div className='arrow bg-white -rotate-45 h-2 sm:h-8'></div>
        <div className='arrow bg-white -rotate-45 h-2 sm:h-8'></div>
    </div>
  )
}
