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
        className='clip w-5/6 bg-gray transition-colors text-white p-2 sm:p-8 flex justify-between flex-col max-w-[800px]'>

          <main className='w-full h-full text-sm sm:text-lg'>
            <div className='flex flex-col justify-between p-3'>
              <h3 className='text-xl sm:text-3xl font-semibold'>Experience</h3>

              {experienceInfo.map((item, index)=> {
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

          <section>
            <IconSection isVisible/>
          </section>
        </motion.main>
        <BackButton/>
      </div>

      <Decals/>
    </AnimatePresence>
  )
}
