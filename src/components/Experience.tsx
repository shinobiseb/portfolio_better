import Decals from './Decals';
import BackButton from './BackButton';
import IconSection from './IconSection';
import { AnimatePresence, motion } from 'framer-motion';
import ExperienceBlock from './ExperienceBlock';
import { experienceInfo } from '../assets/experienceInfo';

export default function Experience() {
  return (
    <AnimatePresence>
  <div className='z-10 h-full w-full flex flex-col justify-center items-center overflow-hidden'>
    <motion.main
      key="experience"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: .4 }}  
      className='clip w-5/6 bg-gray transition-colors text-white p-2 sm:p-8 flex flex-col justify-between max-w-[800px] h-4/5 overflow-hidden'
    >
      {/* min-h-0 allows flex items to shrink below content size */}
      <main className='w-full flex-1 flex flex-col min-h-0 text-sm sm:text-lg'>
        <h3 className='text-xl sm:text-3xl font-semibold mb-3 flex-shrink-0'>Experience</h3>
        
        {/* flex-1 takes remaining height, overflow-y-auto handles scrolling */}
        <div className='flex-1 overflow-y-auto min-h-0 p-3 flex flex-col gap-4'>
          {experienceInfo.map((item, index) => {
            return (
              <ExperienceBlock 
                key={index}
                subject={item.subject}
                company={item.company}
                dateRange={item.dateRange}
                bullets={item.bullets}
              />
            )
          })}
        </div>
      </main>

      <section className='flex-shrink-0 mt-4'>
        <IconSection isVisible/>
      </section>
    </motion.main>
    <BackButton/>
  </div>
  <Decals/>
</AnimatePresence>
  )
}
