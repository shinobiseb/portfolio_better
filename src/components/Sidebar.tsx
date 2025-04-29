import { useRef, useState } from 'react';
import { ItemRefsType } from '../assets/types';
import { sidebarArr } from '../assets/projectinfo';
import { SocialIcon } from 'react-social-icons';
import { AnimatePresence, motion } from 'framer-motion';


export default function Sidebar() {
  const copyRef = useRef(null);
  const itemRefs = useRef<ItemRefsType>({});

  const [showText, setShowText] = useState(false)

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

  function copyFun() {
    navigator.clipboard.writeText("https://www.sebpatin.com/")
    setShowText(true)
    setTimeout(()=>setShowText(false), 2000)
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
            <SocialIcon
              className='social-icon' 
              url='https://github.com/shinobiseb' 
              target='_blank'
              bgColor='transparent' 
              fgColor='currentColor'
            />
          </li>
          <li>
            <SocialIcon
              className='social-icon' 
              url="https://www.linkedin.com/in/ney-patin-iii-6a0a3915a"
              target='_blank' 
              bgColor='transparent' 
              fgColor='currentColor'
            />
          </li>
          <li>
            <SocialIcon
              as='button'
              className='social-icon' 
              url='https://www.sebpatin.com/' 
              bgColor='transparent' 
              target='_blank' 
              fgColor='currentColor'
              ref={copyRef}
              onClick={copyFun}
              />
          </li>
        </ul>
        
              <AnimatePresence>
              {
                showText 
                ? <motion.div 
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='p-1 px-4 absolute bottom-36 bg-lightgray small-clip'>
                      Copied Link to Clipboard
                  </motion.div> 
                : null
              }
              </AnimatePresence>
      </div>
      <span className='text-gray text-right pr-5'>Site by me!</span>
    </div>
  );
}