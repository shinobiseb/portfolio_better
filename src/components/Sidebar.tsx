import React, { useRef } from 'react';

interface ItemRefsType {
  [key: number]: HTMLAnchorElement | null;
}

const sidebarArr = [
  { name: 'PROJECTS', key: 0, href: 'Projects' },
  { name: 'ABOUT', key: 1, href: 'About' },
  { name: 'CONTACT', key: 2, href: 'Contact' }
];

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
    <div className='z-20 flex flex-col justify-around h-full w-2/3 sm:w-1/2 bg-orange' id='Sidebar'>
      <div id='Sidebar-list' className='flex flex-col justify-around h-full text-right pr-5'>
        <div className='sidebar-header text-black flex flex-col h-20 mt-4'>
          <h3 className='text-2xl md:text-4xl'>Ney Sebastian Patin III</h3>
          <h4 className='text-2xl md:text-3xl'>Software Engineer</h4>
        </div>
        
        <ul className='flex flex-col justify-evenly w-full h-3/5'>
        {sidebarArr.map((item) => (
          <a 
            key={item.key} 
            className='sidebar-item text-black cursor-pointer text-2xl sm:text-7xl lg:text-9xl' 
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
    </div>
  );
}
