import { useState } from "react"
import { projectProps } from "../assets/types"
import { AnimatePresence, motion } from 'framer-motion'

export default function Project( props : projectProps ) {

  const [ isExpanded, setIsExpanded ] = useState(false)

  function collapseProject(){
    setIsExpanded(!isExpanded)
  }

  return (
    <div 
    className="mb-2 w-full">
        <div onClick={collapseProject} className='clip-top-right flex flex-row justify-between items-center w-full bg-orange h-24 px-8 cursor-pointer'>
            <h3 className='text-xl sm:text-2xl font-bold truncate uppercase text-black'>{props.title}</h3>
            <ul className='hidden sm:flex flex-row w-1/6 sm:w-1/2 justify-between text-sm'>
                <li className='project-tag capitalize italic justify-center truncate items-center text-white font-semibold'>{props.tags[0]}</li>
                <li className='project-tag capitalize italic justify-center truncate items-center text-white font-semibold hidden sm:flex'>{props.tags[1]}</li>
                <li className='project-tag capitalize italic justify-center truncate items-center text-white font-semibold hidden sm:flex'>{props.tags[2]}</li>
            </ul>
        </div>
        { props.misc ? 
          null : 
          isExpanded ?
          <motion.div 
            // initial={{ y: -400 }}
            // animate={{ y: 0}}
            transition={{ type: "just" }}
            className="clip-bot-right w-full px-8 py-8 flex flex-col text-wrap justify-between items-center bg-lightgray">
            <img 
            className="hidden sm:relative border h-5/6 w-1/2 object-cover" 
            src="https://i.imgur.com/o8GARQq.png"
            alt="" />
            <p className="text-ellipsis">{props.desc}</p>
            <a className="bg-orange px-8 py-4 mt-8 text-white hover:bg-yellow" href={props.link}>Live Demo</a>
          </motion.div>
          : null
        }
    </div>
  )
}
