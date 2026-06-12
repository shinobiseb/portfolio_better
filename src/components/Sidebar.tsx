import { useState } from 'react';
import { sidebarArr } from '../assets/projectinfo';
import { SocialIcon } from 'react-social-icons';
import { AnimatePresence, motion } from 'framer-motion';

export default function Sidebar() {
  const [showText, setShowText] = useState(false);

  function copyFun() {
    navigator.clipboard.writeText("https://www.sebpatin.com/");
    setShowText(true);
    setTimeout(() => setShowText(false), 2000);
  }

  return (
    <div className='z-20 flex flex-col h-full w-full md:w-1/2 bg-orange overflow-hidden' id='Sidebar'>
      <div id='Sidebar-list' className='flex flex-col justify-between items-center md:items-end h-full w-full text-center md:text-right p-6 md:pr-10'>
        
        {/* Header Section */}
        <div className='sidebar-header text-black flex flex-col w-full mt-4'>
          <h3 className='text-2xl sm:text-3xl font-bold'>Ney Sebastian Patin III</h3>
          <h4 className='text-xl sm:text-2xl opacity-80'>Software Engineer</h4>
        </div>
        
        {/* Navigation Links */}
        <ul className='flex flex-col justify-center gap-6 md:gap-8 w-full h-auto my-auto'>
  {sidebarArr.map((item) => (
    <motion.li key={item.key} whileHover='hover'>
      <a
        href={item.href}
        className='block truncate text-black cursor-pointer text-4xl sm:text-5xl font-medium'
      >
        <motion.span
          className='inline-block'
          variants={{
            hover: { x: -10, color: '#fffcf2' },
          }}
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 24 },
            color: { duration: 0.15 },
          }}
        >
          {item.name}
        </motion.span>
      </a>
    </motion.li>
  ))}
</ul>
        
        {/* Socials & Feedback */}
        <div className='flex flex-col items-center md:items-end w-full gap-4'>
          <ul id='socials' className='flex flex-row gap-4 justify-center md:justify-end'>
            <li>
              <SocialIcon
                className='hover:scale-110 transition-transform' 
                url='https://github.com/shinobiseb' 
                target='_blank'
                bgColor='transparent' 
                fgColor='currentColor'
              />
            </li>
            <li>
              <SocialIcon
                className='hover:scale-110 transition-transform' 
                url="https://www.linkedin.com/in/ney-patin-iii"
                target='_blank' 
                bgColor='transparent' 
                fgColor='currentColor'
              />
            </li>
            <li>
              <SocialIcon
                as='button'
                className='hover:scale-110 transition-transform' 
                url='https://www.sebpatin.com/' 
                bgColor='transparent' 
                fgColor='currentColor'
                onClick={copyFun}
              />
            </li>
          </ul>

          <AnimatePresence>
            {showText && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className='p-1 px-4 bg-lightgray small-clip text-sm absolute bottom-20 md:bottom-24'>
                Copied Link to Clipboard
              </motion.div>
            )}
          </AnimatePresence>

          <span className='text-gray text-xs md:text-sm mt-4'>Site by me!</span>
        </div>
      </div>
    </div>
  );
}