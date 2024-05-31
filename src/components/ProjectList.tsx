
import Project from './Project'
import BackButton from './BackButton'
import Decals from './Decals'

const projectArray = [
  { title: 'Superhero Quiz', tags: ['API', 'Javascript', 'full stack'] },
  { title: 'Meditracker', tags: ['Masonite', 'Rest api', 'full stack'] },
  { title: 'Client Portfolio', tags: ['react', 'UI/UX', 'front end'] },
  { title: 'Goatwriting', tags: ['crud', 'mongodb', 'typescript'] },
  { title: 'Spotify clone', tags: ['SASS/CSS', 'typescript', 'front end'] },
]

export default function ProjectList() {
  return (
    <div className='flex flex-col h-full w-5/6 justify-center items-center'>
      <section className='clip z-10 flex flex-col h-5/6 w-full text-gray bg-lightgray  overflow-y-auto max-w-7xl p-2'>
        {
          projectArray.map((project, index) => (
            <Project key={index} title={project.title} tags={project.tags} />
          ))
        }
        <span className='text-center mt-3 italic text-gray'> * Some sites' backend servers may be temporarily unavailable due to pricing fluctuations.*</span>
      </section>
      <Decals/>
      <BackButton/>
    </div>
  )
}