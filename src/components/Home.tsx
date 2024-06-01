
import Sidebar from './Sidebar'
import Decals from './Decals'


export default function Home() {
  return (
    <>
      <div className='clip z-10 justify-between flex flex-row flex-end h-5/6 md:h-3/4 lg:h-2/3  bg-lightgray w-5/6 overflow-hidden max-w-7xl'>
          <img className='hero-img hidden md:flex sm:-translate-x-10 sm:scale-150' src='https://i.imgur.com/WM6T7fx.png'/>
          <Sidebar/>
      </div>
      <Decals/>
    </>
  )
}
