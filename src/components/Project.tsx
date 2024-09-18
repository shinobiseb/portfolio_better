import { projectProps } from "../assets/types"

export default function Project( props : projectProps ) {

  return (
    <>
        <div className='project-div  flex flex-row justify-between items-center w-full bg-orange h-24 px-8 mb-2 cursor-pointer'>
            <h3 className='text-xl sm:text-2xl font-bold truncate uppercase text-black'>{props.title}</h3>
            <ul className='sm:flex flex-row w-1/6 sm:w-1/2 justify-between text-sm'>
                <li className='project-tag capitalize italic justify-center truncate items-center text-white font-semibold'>{props.tags[0]}</li>
                <li className='project-tag capitalize italic justify-center truncate items-center text-white font-semibold hidden sm:flex'>{props.tags[1]}</li>
                <li className='project-tag capitalize italic justify-center truncate items-center text-white font-semibold hidden sm:flex'>{props.tags[2]}</li>
            </ul>
        </div>
    </>
  )
}
