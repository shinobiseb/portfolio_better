import Modal from './Modal';
import Project from './Project';
import BackButton from './BackButton';
import Decals from './Decals';
import { projects } from '../App';
import { useState } from 'react';

const projectArray = [
  { title: 'Superhero Quiz', tags: ['API', 'Javascript', 'full stack'] },
  { title: 'Meditracker', tags: ['Masonite', 'Rest api', 'full stack'] },
  { title: 'Client Portfolio', tags: ['react', 'UI/UX', 'front end'] },
  { title: 'Goatwriting', tags: ['CRUD', 'mongoDB', 'typescript'] },
  { title: 'Spotify clone', tags: ['SASS/CSS', 'typescript', 'front end'] },
];

export default function ProjectList() {
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleProjectClick = (index: number) => {
    setSelectedProject(projects[index]);
    setShow(true);
  };

  return (
    <div className='flex flex-col h-full w-5/6 max-w-3xl justify-center items-center'>
      <section className='clip z-10 flex flex-col h-5/6 w-full text-gray bg-lightgray overflow-y-auto max-w-7xl p-2'>
        {projectArray.map((project, index) => (
          <div key={index} onClick={() => handleProjectClick(index)}>
            <Project title={project.title} tags={project.tags} />
          </div>
        ))}
        <span className='text-center text-sm sm:text-md mt-3 italic text-gray'>
          * Some sites' backend servers may be temporarily unavailable due to pricing fluctuations. *
        </span>
      </section>
      <Modal 
        projectInfo={{
          title: selectedProject.title,
          desc: selectedProject.desc,
          img: selectedProject.img,
          tags: selectedProject.tags,
          notes: selectedProject.notes,
          link: selectedProject.link,
          show: show,
          setShow: setShow,
        }}
      />
      <Decals />
      <BackButton />
    </div>
  );
}
