import React from 'react'

interface projectProps {
    title : string;
    tags: Array<string>;
}

export default function Project( props : projectProps ) {

  function titleNoSpace( title : string ) {
    if([title.includes(' ')]) {
      return ( 'projects/' + title.split(' ')[0] )
    }
    else {
      return title
    }
  }

  return (

    <>
      <a href={titleNoSpace(props.title)}>
        <div className='project-div flex flex-row justify-between items-center w-full bg-orange h-24 px-8 mb-2 cursor-pointer overflow-hidden'>
            <h3 className='text-3xl font-bold truncate uppercase text-black'>{props.title}</h3>
            <ul className='flex flex-row w-7/12 justify-between text-xl'>
                <li className='project-tag uppercase italic'>{props.tags[0]}</li>
                <li className='project-tag uppercase italic'>{props.tags[1]}</li>
                <li className='project-tag uppercase italic'>{props.tags[2]}</li>
            </ul>
        </div>
      </a>
    </>
  )
}