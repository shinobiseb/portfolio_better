import React from 'react'
import Project from './Project'
import BackButton from './BackButton'

const projectArray = [
  { title: 'Superhero Quiz', tags: ['API', 'Javascript', 'full stack'] },
  { title: 'Meditracker', tags: ['Masonite', 'Rest api', 'full stack'] },
  { title: 'Client Portfolio', tags: ['react', 'UI/UX', 'front end'] },
  { title: 'Goatwriting', tags: ['crud', 'mongodb', 'typescript'] },
  { title: 'Spotify clone', tags: ['SASS/CSS', 'typescript', 'front end'] },
]

export default function ProjectList() {
  return (
    <section className='clip z-10 flex flex-col h-4/6 text-gray bg-lightgray w-5/6 overflow-y-auto max-w-7xl p-2'>
      {
        projectArray.map((project, index) => (
          <Project key={index} title={project.title} tags={project.tags} />
        ))
      }
      <BackButton/>
    </section>
  )
}