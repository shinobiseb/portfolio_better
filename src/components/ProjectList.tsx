import Project from './Project';
import BackButton from './BackButton';
import Decals from './Decals';
import { projectProps } from '../assets/types';
import { projects } from '../assets/projectinfo';
import { AnimatePresence, motion } from 'framer-motion'

export default function ProjectList() {
  const projectMapper = (projectArray: projectProps[], miscValue: boolean) => {
    return projectArray
      .filter(project => project.misc === miscValue)
      .map((project, index) => (
        <motion.li layout key={index} rel='noopener noreferrer'>
          <Project 
          desc={project.desc}
          link={project.link}
          misc={project.misc} 
          title={project.title} 
          tags={project.tags} 
          img={project.img}
          />
        </motion.li>
      ));
  };

  return (
    <AnimatePresence>
      <div
      className='flex flex-col h-full w-5/6 max-w-3xl justify-center items-center'>
        <motion.main 
        initial={{ opacity: 0, x: -400 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.25 }} 
        className='clip z-10 flex flex-col h-5/6 w-full text-gray bg-gray overflow-y-auto max-w-7xl p-2'>
          <motion.ul
            layout
            className='non-misc-projects'>
              {projectMapper(projects, false)}
          </motion.ul>
          <div className='misc-projects'>       
            <h2 className='text-white'>Miscellaneous Projects</h2>
            <div
            className="w-full grid sm:grid-cols-2 sm:grid-col sm:gap-x-2">
              {projectMapper(projects, true)}
            </div>
          </div>


          <span className='text-center text-sm sm:text-md mt-3 italic text-gray'>
            * Some sites' backend servers may be temporarily unavailable due to pricing fluctuations. *
          </span>
        </motion.main>
        <Decals/>
        <BackButton/>
      </div>
    </AnimatePresence>
  );
}
