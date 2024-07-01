
import Project from './Project';
import BackButton from './BackButton';
import Decals from './Decals';
import { useState } from 'react';
import { ProjectInfo } from '../assets/types';
import { projects } from '../assets/projectinfo';

export default function ProjectList() {

  const projectMapper = ( projectArray : ProjectInfo[]) => {
    return projectArray.map((project, index) => (
      <a key={index} href={project.link} target='_blank'>
        <Project title={project.title} tags={project.tags} />
      </a>
    ))
  }

  return (
    <div className='flex flex-col h-full w-5/6 max-w-3xl justify-center items-center'>
      <section className='clip z-10 flex flex-col h-5/6 w-full text-gray bg-lightgray overflow-y-auto max-w-7xl p-2'>
        {projectMapper(projects)}
        <span className='text-center text-sm sm:text-md mt-3 italic text-gray'>
          * Some sites' backend servers may be temporarily unavailable due to pricing fluctuations. *
        </span>
      </section>
      <Decals />
      <BackButton />
    </div>
  );
}
