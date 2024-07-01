import { useRef } from 'react';
import { ItemRefsType } from '../assets/types';
import { sidebarArr } from '../assets/projectinfo';

export default function Sidebar() {
  const itemRefs = useRef<ItemRefsType>({});

  const handleMouseOver = (key: number) => {
    const item = itemRefs.current[key];
    if (item) {
      item.style.color = '#fffcf2';
      item.style.transform = `translateX(-30px)`;
    }
  };

  const handleMouseOut = (key: number) => {
    const item = itemRefs.current[key];
    if (item) {
      item.style.color = '#232422';
      item.style.transform = `translateX(0px)`;
    }
  };

  return (
    <div className='z-20 flex flex-col justify-center md:justify-end h-full w-full md:w-1/2 bg-orange overflow-hidden' id='Sidebar'>
      <div id='Sidebar-list' className='flex flex-col justify-around items-center h-full w-full text-right sm:pr-5'>
        <div className='sidebar-header text-black flex flex-col w-full h-20 mt-4 items-center md:justify-right sm:items-end'>
          <h3 className='text-2xl sm:text-4xl '>Ney Sebastian Patin III</h3>
          <h4 className='text-2xl sm:text-3xl '>Software Engineer</h4>
        </div>
        
        <ul className='flex flex-col justify-evenly items-center sm:items-end w-full h-3/5'>
        {sidebarArr.map((item) => (
          <a 
            key={item.key} 
            className='sidebar-item text-black cursor-pointer text-6xl md:text-7xl' 
            onMouseOver={() => handleMouseOver(item.key)} 
            onMouseOut={() => handleMouseOut(item.key)}
            ref={(element) => (itemRefs.current[item.key] = element)}
            href={item.href}
          >
            {item.name}
          </a>
        ))}
        </ul>
      </div>
      <span className='text-gray text-right pr-5'>Site by me!</span>
    </div>
  );
}
