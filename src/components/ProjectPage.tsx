import React from 'react'
import Project from './Project';

export interface projectInfoType {
    title: string;
    desc: string;
    link: string;
    notes: Array<string>;
    img: string;
    tags: Array<string> | Array<null>;
}

export default function ProjectPage( projectInfo : projectInfoType ) {

    console.log(Project)

  return (
    <main id='project-div' className='clip flex flex-row justify-between bg-orange w-5/6 p-3 z-10 border border-black'>
        <div className="flex flex-col project-page-info-divh-full w-1/2 p-5">
            <img className='w-full' src={projectInfo.img} alt="" />
            <ul className='flex flex-row justify-evenly w-3/4 mt-5 italic'>
                <li className='project-tag capitalize'>
                    {projectInfo.tags[0]}
                </li>
                <li className='project-tag capitalize'>
                    {projectInfo.tags[1]}
                </li>
                <li className='project-tag capitalize'>
                    {projectInfo.tags[2]}
                </li>
            </ul>
        </div>

        <section className="flex flex-col project-page-info-div h-full w-1/2 p-5">
            <h2 className='uppercase text-4xl'>{projectInfo.title}</h2>
            <div className="mt-2 project-info sm:h-2/3 flex flex-col justify-around">
                <p className='text-xl'>
                    {projectInfo.desc}
                </p>
                <ul className='pl-4 list-disc text-lg'>
                    <li>{projectInfo.notes[0]}</li>
                    <li>{projectInfo.notes[1]}</li>
                    <li>{projectInfo.notes[2]}</li>
                </ul>
                <a target='_blank' href={projectInfo.link} className='mt-2 p-2 w-20 flex items-center justify-center bg-yellow-500 link-button'>
                    LINK_
                </a>
            </div>
        </section>
    </main>
  )
}
