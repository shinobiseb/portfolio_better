import React from 'react'
import Project from './Project'

const projectArray = [
  { title: 'Superhero Quiz', tags: ['API', 'Javascript', 'full stack'] },
  { title: 'Meditracker', tags: ['Masonite', 'Rest api', 'full stack'] },
  { title: 'Client Portfolio', tags: ['react', 'UI/UX', 'front end'] },
  { title: 'Goatwriting', tags: ['crud', 'mongodb', 'typescript'] },
  { title: 'Spotify clone', tags: ['SASS/CSS', 'typescript', 'front end'] },
]

export default function ProjectList() {
  return (
    <div className='z-10 flex flex-col h-5/6 text-gray bg-lightgray w-5/6 overflow-hidden max-w-7xl p-2'>
      {
        projectArray.map((project, index) => (
          <Project key={index} title={project.title} tags={project.tags} />
        ))
      }
    </div>
  )
}