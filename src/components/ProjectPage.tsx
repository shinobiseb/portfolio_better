import React from 'react'

interface projectType {
    title: string;
    desc: string;
    link: string;
    notes: Array<string>;
    img: string;
    tags: Array<string> | Array<null>;
}

export default function ProjectPage( projectInfo : projectType ) {
  return (
    <div className='flex flex-row justify-between bg-lightgray w-5/6 h-5/6 p-3 z-10'>
        <div className="flex flex-col project-page-info-divh-full w-1/2 p-5">
            <img className='w-full' src={projectInfo.img} alt="" />
            <ul className='flex flex-row justify-between w-full mt-5'>
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

        <div className="flex flex-col project-page-info-div h-full w-1/2 p-5">
            <h2 className='uppercase text-4xl'>{projectInfo.title}</h2>
            <div className="mt-2 project-info sm:h-2/3 flex flex-col justify-between">
                <p className=''>
                    {projectInfo.desc}
                </p>
                <ul className='pl-4 list-disc '>
                    <li>{projectInfo.notes[0]}</li>
                    <li>{projectInfo.notes[1]}</li>
                    <li>{projectInfo.notes[2]}</li>
                </ul>
                <a href={projectInfo.link} className='p-2 w-20 flex items-center justify-center bg-yellow-500 link-button'>
                    LINK_
                </a>
            </div>
        </div>
    </div>
  )
}
