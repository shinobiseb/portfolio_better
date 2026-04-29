
import Sidebar from './Sidebar'
import Decals from './Decals'
import { AnimatePresence, motion } from 'framer-motion'


export default function Home() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scaleY: 0, scaleX: .1 }}
        animate={{ opacity: 1, scaleY: 1, scaleX: 1 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.25 }} 
      className='clip z-10 justify-between flex flex-row flex-end md:h-3/4 h-2/3  bg-lightgray overflow-hidden'>
            <img className='hidden sm:flex' src='https://i.imgur.com/WM6T7fx.png'/>
          <Sidebar/>
      </motion.div>
      <Decals/>
    </AnimatePresence>
  )
}
