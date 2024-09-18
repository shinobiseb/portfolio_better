import { BiLogoTypescript, BiLogoMongodb } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaPython, FaSass, FaNodeJs, FaGitAlt, FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { GrHeroku } from "react-icons/gr";
import { HiOutlineCommandLine } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion"


const IconSection = ({ isVisible }: { isVisible: boolean }) => {
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <ul id="Icon-carousel" className='flex flex-row w-full justify-between px-4 py-2 overflow-x-hidden'>
              <li><BiLogoTypescript size={30} /></li>
              <li><IoLogoJavascript size={30} /></li>
              <li><FaReact size={30} /></li>
              <li><FaPython size={30} /></li>
              <li><RiTailwindCssFill size={30} /></li>
              <li><FaSass size={30} /></li>
              <li><SiExpress size={30} /></li>
              <li><BiLogoMongodb size={30} /></li>
              <li><FaNodeJs size={30} /></li>
              <li><FaGitAlt size={30} /></li>
              <li><GrHeroku size={30} /></li>
              <li><FaHtml5 size={30} /></li>
              <li><HiOutlineCommandLine size={30} /></li>
            </ul>
          </motion.section>
        )}
      </AnimatePresence>
    );
  };
  
  export default IconSection;