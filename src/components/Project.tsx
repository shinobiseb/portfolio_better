import { useState } from "react"
import { projectProps } from "../assets/types"
import { AnimatePresence, motion } from 'framer-motion'

export default function Project( props : projectProps ) {

  const [ isExpanded, setIsExpanded ] = useState(false)

  function collapseProject(){
    setIsExpanded(!isExpanded)
  }

  return (
    <motion.div 
    layout={'position'}
    className="mb-2 w-full overflow-y-hidden relative">
        {/* hider div */}
        {
          !props.misc ? 
          <div className="bg-gray z-20 h-[20px] w-[30px]  right-0  absolute"/> : 
          null
        }
        <div onClick={collapseProject} className=' relative z-20 clip-top-right flex flex-row justify-between items-center w-full bg-orange h-24 px-8 cursor-pointer hover:bg-yellow transition-colors'>
            <h3 className='text-xl sm:text-2xl font-bold truncate uppercase text-black'>{props.title}</h3>
            {
              !props.misc ? 
              <ul className='hidden justify-between sm:flex flex-row w-1/6 sm:w-1/2 text-sm'>
                <li className='project-tag capitalize italic justify-center truncate items-center text-white font-semibold'>{props.tags[0]}</li>
                <li className='project-tag capitalize italic justify-center truncate items-center text-white font-semibold hidden sm:flex'>{props.tags[1]}</li>
                <li className='project-tag capitalize italic justify-center truncate items-center text-white font-semibold hidden sm:flex'>{props.tags[2]}</li>
              </ul> : 
              null
            }
            
        </div>
        <AnimatePresence>
        { props.misc ? 
          null : 
          isExpanded ?
            <motion.div
              layout
              initial={{ y: -300 }}
              animate={{ y: 0}}
              exit={{ y: -400 }}
              transition={{ type: "just", duration: 0.3 }}
              className="z-10 clip-bot-right w-full p-4 flex flex-col text-wrap justify-between items-center bg-lightgray">
              <section className="flex w-full justify-between ">
                { 
                props.img 
                ? 
                <img 
                className="hidden m-2 sm:flex  h-5/6 w-full object-cover border" 
                src={props.img}
                alt="" /> 
                : null
                }
                <p className="text-ellipsis p-2 w-full">{props.desc}</p>
              </section>
              <a className="bg-orange px-8 py-4 mt-8 text-white hover:bg-yellow hover:text-black transition-colors" href={props.link}>Live Demo</a>
            </motion.div>
          : null
        }
        </AnimatePresence>
    </motion.div>
  )
}
