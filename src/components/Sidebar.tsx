import React, { useRef } from 'react';

interface ItemRefsType {
  [key: number]: HTMLLIElement | null;
}

const sidebarArr = [
  {
    name: 'PROJECTS',
    key: 0
  },
  {
    name: 'ABOUT',
    key: 1
  },
  {
    name: 'CONTACT',
    key: 2
  }
];

export default function Sidebar() {
  const itemRefs = useRef<ItemRefsType>({});

  function lengthFunction (key : any) {
    const result = (1/(key.innerHTML.length) * 2)
    return result
  }

  const handleMouseOver = (key: number) => {
    const item = itemRefs.current[key];
    if (item) {
      item.style.color = '#fffcf2';
      item.style.translate = `-${lengthFunction(item)}em`;
    }
  };

  const handleMouseOut = (key: number) => {

    const item = itemRefs.current[key];
    if (item) {
      item.style.color = '#252422';
      item.style.translate = `${lengthFunction(item)}em`;
    }
  };

  return (
    <div className='z-20 h-full sm:w-1/2 bg-orange' id='Sidebar'>
      <ul id='Sidebar-list' className='flex flex-col justify-evenly h-full text-right sm:text-7xl ml-4'>
        {sidebarArr.map((item) => (
          <li 
            key={item.key} 
            className='sidebar-item text-black sidebar-item cursor-pointer' 
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
