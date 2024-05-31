import React from 'react'
import Decals from './Decals'
import BackButton from './BackButton'

export default function About() {
  return (
    <>
      <div className='z-10 h-full w-full flex flex-col justify-center items-center overflow-hidden'>
        <main className='clip h-5/6 w-5/6 bg-orange p-8 flex justify-between flex-row overflow-y-auto'>
          <section className='h-full w-1/3 flex flex-col justify-between p-3'>
            <h3 className='text-3xl font-semibold'>About Sebastian</h3>
            <section className='h-full flex flex-col'>
              <p className='mt-1 text-md sm:text-lg'>
                Hello! I am Sebastian AKA Seb or Ney. I am a Software Developer with a background in music, and video production.
                <br/>
                <br/>
                I made the switch to programming in December of 2021, after graduating from General Assembly's Software Engineering Immersive. Ever since then, I have been using my analytical skills to create applications that demonstrate efficiency and reduce visual clutter.
              </p>
            </section>
          </section>

          <main className='w-2/3 h-full text-md sm:text-lg'>
            <div className='h-1/2 flex flex-col justify-between p-3'>
              <h3 className='text-3xl font-semibold'>Experience</h3>
              <section className='h-full flex flex-col mt-1'>
                <h4 className='font-medium'>Software Engineering Immersive, General Assembly (2021)</h4>
                <ul className='mt-1 pl-5 '>
                  <li className='list-disc'>
                    <span className='font-semibold'>Front-End Development:</span> HTML, CSS, JavaScript, React.
                  </li>
                  <li className='list-disc'>
                    <span className='font-semibold'>Back-End Development:</span> Node.js, Express, MongoDB.
                  </li>
                  <li className='list-disc'>
                    <span className='font-semibold'>Software Development Lifecycle:</span> Agile methodologies, Git, CI/CD.
                  </li>
                  <li className='list-disc'>
                    <span className='font-semibold'>Collaborative Projects:</span> Team projects simulating real-world environments.
                  </li>
                </ul>
              </section>
              <div className='flex flex-col h-full justify-between'>
                <section className='h-full flex flex-col justify-between mt-1'>
                  <h4 className='font-medium'>Computer Science, Hostos Community College (2023-Present)</h4>
                  <ul className='mt-1 pl-5'>
                    <li className='list-disc'>
                      <span className='font-semibold'>Core Principles:</span> Algorithms, data structures, operating systems.
                    </li>
                    <li className='list-disc'>
                      <span className='font-semibold'>Programming Languages:</span> Java, Python, C++.
                    </li>
                    <li className='list-disc'>
                      <span className='font-semibold'>Projects:</span> Building applications, emphasizing software engineering practices.
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </main>
        </main>
        <BackButton/>
      </div>

      <Decals/>
    </>
  )
}
