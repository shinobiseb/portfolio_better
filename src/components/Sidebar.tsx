import { useRef } from 'react';
import { ItemRefsType } from '../assets/types';
import { sidebarArr } from '../assets/projectinfo';
import { SocialIcon } from 'react-social-icons';

export default function Sidebar() {
  const itemRefs = useRef<ItemRefsType>({});

  const handleMouseOver = (key: number) => {
    const item = itemRefs.current[key];
    if (item) {
      item.style.color = '#fffcf2';
      item.style.transform = `translateX(-10px)`;
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
        <div className='sidebar-header text-black flex flex-col w-full h-20 mt-4 items-center md:justify-right md:items-end'>
          <h3 className='text-2xl sm:text-4xl '>Ney Sebastian Patin III</h3>
          <h4 className='text-2xl sm:text-3xl '>Software Engineer</h4>
        </div>
        
        <ul className='flex flex-col justify-evenly items-center md:items-end w-full h-3/5'>
          {sidebarArr.map((item) => (
            <li key={item.key}>
              <a 
                className='sidebar-item text-black cursor-pointer text-6xl' 
                onMouseOver={() => handleMouseOver(item.key)} 
                onMouseOut={() => handleMouseOut(item.key)}
                ref={(element) => (itemRefs.current[item.key] = element)}
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        
        <ul id='socials' className='flex flex-row w-1/2 justify-evenly'>
          <li>
            <a href="https://github.com/shinobiseb" target='_blank' rel='noopener noreferrer'>
              <SocialIcon
                className='social-icon' 
                url='https://github.com/shinobiseb' 
                bgColor='transparent' 
                fgColor='currentColor'
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ney-patin-iii-6a0a3915a" target='_blank' rel='noopener noreferrer'>
              <SocialIcon
                className='social-icon' 
                url="https://www.linkedin.com/in/ney-patin-iii-6a0a3915a" 
                bgColor='transparent' 
                fgColor='currentColor'
              />
            </a>
          </li>
          <li>
            <a href='https://www.sebpatin.com/' target='_blank' rel='noopener noreferrer'>
              <SocialIcon
                className='social-icon' 
                url='https://www.sebpatin.com/' 
                bgColor='transparent' 
                fgColor='currentColor'
              />
            </a>
          </li>
        </ul>
      </div>
      <span className='text-gray text-right pr-5'>Site by me!</span>
    </div>
  );
}