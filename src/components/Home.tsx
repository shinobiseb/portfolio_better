
import Sidebar from './Sidebar'
import Decals from './Decals'


export default function Home() {
  return (
    <>
      <div className='clip z-10 justify-between flex flex-row flex-end  sm:max-w-[800px] md:h-3/4 h-2/3  bg-lightgray w-5/6 overflow-hidden max-w-7xl'>
          <img className='hero-img hidden md:flex sm:scale-150' src='https://i.imgur.com/WM6T7fx.png'/>
          <Sidebar/>
      </div>
      <Decals/>
    </>
  )
}
