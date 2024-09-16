import Decals from './Decals';
import BackButton from './BackButton';
import { useState } from 'react';

export default function Contact() {

  const [textToCopy] = useState('sebpatin@gmail.com');
  const [ copiedText, showCopiedText ] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    showCopiedText(true)
    setTimeout(()=> showCopiedText(false), 2000)
  };

  return (
    <>
      <div className='z-10 h-full w-full flex flex-col justify-center items-center overflow-hidden text-center'>
        <main className='clip w-5/6 bg-white p-2 sm:p-8 flex justify-between flex-col max-w-[800px]'>
          <section className='h-full w-full flex flex-col justify-between p-3'>
            <h1 className='text-xl sm:text-3xl font-semibold'>I'm building Projects!</h1>
            <p className='text-sm sm:text-lg mt-4 text-left'>
              I’m always looking for new opportunities to collaborate on exciting and meaningful projects. 
              Whether it's building sleek web applications or innovative solutions, I’m ready to bring my skills and passion to the table.
            </p>
            <h3 className='text-sm sm:text-lg mt-4 font-semibold'>Let’s Connect!</h3>
            <span className='text-sm sm:text-lg mt-2'> 
              <a href="mailto:sebpatin@gmail.com" className='px-3 py-2 border text-black hover:border-none hover:bg-orange transition-all'>Email Me!</a>
            </span>
            <button onClick={handleCopy} className='mt-4 text-md italic text-gray'>sebpatin@gmail.com</button>
            { copiedText && (
              <span className='text-md text-orange'>
                Text Copied to Clipboard!
              </span>
            )}
          </section>
        </main>
        <BackButton/>
      </div>

      <Decals/>
    </>
  )
}
