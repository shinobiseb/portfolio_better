import React from 'react'
import Project from './Project'

export default function ProjectList() {
  return (
    <div className='z-10 flex flex-col h-5/6 text-gray bg-lightgray w-5/6 overflow-hidden max-w-7xl p-2'>
      <Project title={ 'Superhero Quiz' }  tags = {['API', 'Javascript', 'full stack']}/>
      <Project title={ 'Meditracker' }  tags = {['Masonite', 'Rest api', 'full stack']}/>
      <Project title={ 'Client Portfolio' }  tags = {['react', 'UI/UX', 'front end']}/>
      <Project title={ 'Goatwriting' }  tags = {['crud', 'mongodb', 'typescript']}/>
      <Project title={ 'Spotify clone' }  tags = {['SASS/CSS', 'typescript', 'front end']}/>
    </div>
  )
}
