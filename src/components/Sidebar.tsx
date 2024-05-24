import React, { useRef } from 'react';

interface ItemRefsType {
  [key: number]: HTMLLIElement | null;
}

const sidebarArr = [
  { name: 'PROJECTS', key: 0 },
  { name: 'ABOUT', key: 1 },
  { name: 'CONTACT', key: 2 }
];

export default function Sidebar() {
  const itemRefs = useRef<ItemRefsType>({});

  function lengthFunction (key : any) {
    const result = ((key.innerHTML.length) )
    return result
  }

  const handleMouseOver = (key: number) => {
    const item = itemRefs.current[key];
    if (item) {
      item.style.color = '#fffcf2';
      item.style.translate = `-${lengthFunction(item) * 3}px`;
    }
  };

  const handleMouseOut = (key: number) => {

    const item = itemRefs.current[key];
    if (item) {
      item.style.color = '#232422';
      item.style.translate = `${lengthFunction(item) * 3}px`;
    }
  };

  return (
    <div className='z-20 h-full w-2/3 sm:w-1/2 bg-orange' id='Sidebar'>
      <ul id='Sidebar-list' className='flex flex-col justify-between h-full text-right ml-4 py-4'>

        <div className='sidebar-header text-black flex flex-col justify-between h-20 mt-4 pr-5'>
          <h3 className='sidebar-header text-xl md:text-4xl'>Ney Sebastian Patin III</h3>
          <h4 className='sidebar-header text-xl md:text-3xl'>Software Engineer</h4>
        </div>
        
        {sidebarArr.map((item) => (
          <li 
            key={item.key} 
            className='sidebar-item text-black sidebar-item cursor-pointer text-2xl md:text-9xl' 
            onMouseOver={() => handleMouseOver(item.key)} 
            onMouseOut={() => handleMouseOut(item.key)}
            ref={(element) => (itemRefs.current[item.key] = element)}
          >
            {item.name}
          </li>
        ))}

      </ul>
    </div>
  );
}
