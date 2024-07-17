import Decals from './Decals';
import BackButton from './BackButton';
import IconSection from './IconSection';


export default function About() {
  return (
    <>
      <div className='z-10 h-full w-full flex flex-col justify-center items-center overflow-hidden'>
        <main className='clip w-5/6 bg-white p-2 sm:p-8 flex justify-between flex-col max-w-[800px]'>
          <section className='h-full w-full flex flex-col justify-between p-3'>
            <h3 className='text-xl sm:text-3xl font-semibold'>About Sebastian</h3>
              <p className='mt-1 text-sm sm:text-lg h-full flex flex-col mb-4'>
                Hello! I am Sebastian AKA Seb or Ney. I am a Software Developer with a background in music, and video production.
                <br/>
                I made the switch to programming in December of 2021, after graduating from General Assembly's Software Engineering Immersive. Ever since then, I have been using my analytical skills to create applications that demonstrate efficiency and reduce visual clutter.
              </p>
            </section>

          <main className='w-full h-full text-sm sm:text-lg'>
            <div className='flex flex-col justify-between p-3'>
              <h3 className='text-xl sm:text-3xl font-semibold'>Experience</h3>
              <section className='sm:h-full flex flex-col mt-1'>
                <h4 className='font-medium'>Software Engineering Immersive, General Assembly (2021)</h4>
                <ul className='mt-1 pl-5 list-disc'>
                  <li className=''>
                    <span className='font-semibold'>Front-End Development:</span> Typescript, JavaScript, React.js, HTML/CSS
                  </li>
                  <li className=''>
                    <span className='font-semibold'>Back-End Development:</span> Node.js, Express, MongoDB, Heroku
                  </li>
                  <li className=''>
                    <span className='font-semibold'>Software Development Lifecycle:</span> Agile methodologies, Git, CI/CD.
                  </li>
                  <li className=''>
                    <span className='font-semibold'>Collaborative Projects:</span> Team projects simulating real-world environments.
                  </li>
                </ul>
              </section>
              <div className='flex flex-col h-full justify-between'>
                <section className='h-full flex flex-col justify-between'>
                  <h4 className='font-medium truncate'>Computer Science, Hostos Community College (2023-Present)</h4>
                  <ul className='mt-1 pl-5 list-disc'>
                    <li className=''>
                      <span className='font-semibold'>Core Principles:</span> Algorithms, data structures, operating systems.
                    </li>
                    <li className=''>
                      <span className='font-semibold'>Programming Languages:</span> Python, C++, Java. 
                    </li>
                    <li className=''>
                      <span className='font-semibold'>Projects:</span> Building applications, emphasizing software engineering practices.
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </main>

          <section>
            <IconSection/>
          </section>
        </main>
        <BackButton/>
      </div>

      <Decals/>
    </>
  )
}
