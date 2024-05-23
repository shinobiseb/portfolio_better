import React from 'react'

export default function JimmyButton() {
  return (
    <div>
        <button onClick={() => {
            document.getElementById('Jimmy')?.classList.remove('hidden')
            document.getElementById('Jimmy')?.classList.add('flex')
            console.log('Click')
          }} className='px-2 py-1 bg-slate-100'>
            dajimmybutton
          </button>
    </div>
  )
}
