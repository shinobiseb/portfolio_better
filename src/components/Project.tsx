import { useState } from "react"
import { projectProps } from "../assets/types"
import { AnimatePresence, motion } from 'framer-motion'

export default function Project(props: projectProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleExpand() {
    setIsExpanded((prev) => !prev);
  }

  // Misc project rendering
  if (props.misc) {
    return (
      <motion.a 
        href={props.link}
        layout="position"
        className="mb-2 w-full overflow-y-hidden relative transition-colors hover:bg-lightgray bg-orange clip-top-right px-8 h-24 flex items-center cursor-pointer"
      >
        <h3 className="text-xl sm:text-2xl font-bold truncate uppercase text-black">
          {props.title}
        </h3>
      </motion.a>
    );
  }

  const durationSeconds : number = 0.2;

  // Non-misc project rendering
  return (
    <motion.div 
      layout
      animate={{ height: isExpanded ? 'auto' : 100}}
      transition={{ duration : durationSeconds }}
      className="mb-1 w-full overflow-y-hidden relative"
    >
      <div className="bg-gray z-20 h-[20px] w-[30px] right-0 absolute" />

      <div 
        onClick={toggleExpand}
        className="relative z-20 clip-top-right flex flex-row justify-between items-center w-full bg-orange h-24 px-8 cursor-pointer hover:bg-lightgray transition-colors"
      >
        <h3 className="text-xl sm:text-2xl font-bold truncate uppercase text-black">
          {props.title}
        </h3>
        <ul className="hidden sm:flex flex-row w-1/2 justify-between text-sm">
          {props.tags.slice(0, 3).map((tag, idx) => (
            <li 
              key={idx}
              className="project-tag capitalize italic justify-center truncate items-center text-white font-semibold"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            layout
            initial={{ y: -300 }}
            animate={{ y: 0 }}
            exit={{ y: -400 }}
            transition={{ type: "just", duration: durationSeconds }}
            className="z-10 clip-bot-right w-full p-4 flex flex-col items-center bg-lightgray"
          >
            <section className="flex flex-col sm:flex-row w-full justify-between">
              {props.img && (
                <img 
                  src={props.img} 
                  alt="" 
                  className="hidden sm:block m-2 h-5/6 w-full object-cover border" 
                />
              )}
              <p className="p-2 w-full">{props.desc}</p>
            </section>
            <a 
              href={props.link}
              className="bg-orange px-8 py-4 mt-8 text-white hover:bg-yellow hover:text-black transition-colors"
            >
              Live Demo
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
