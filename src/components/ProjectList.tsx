import Project from './Project';
import BackButton from './BackButton';
import Decals from './Decals';
import { ProjectInfo } from '../assets/types';
import { projects } from '../assets/projectinfo';
import { AnimatePresence, motion } from 'framer-motion'

export default function ProjectList() {
  const projectMapper = (projectArray: ProjectInfo[], miscValue: boolean) => {
    return projectArray
      .filter(project => project.misc === miscValue)
      .map((project, index) => (
        <a key={index} href={project.link} target='_blank' rel='noopener noreferrer'>
          <Project misc={project.misc} title={project.title} tags={project.tags} />
        </a>
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
        className='clip z-10 flex flex-col h-5/6 w-full text-gray bg-lightgray overflow-y-auto max-w-7xl p-2'>
          <div className='non-misc-projects'>
            {projectMapper(projects, false)}
          </div>

          <div id='MiscDiv' className='misc-projects'>              <h2>Miscellaneous Projects</h2>
            <div className="project-div-misc">
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
