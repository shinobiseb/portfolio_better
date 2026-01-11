import { IExperience } from "../assets/types"

export default function ExperienceBlock( {
    subject,
    company,
    dateRange,
    bullets
} : IExperience) {
  return (
    <section className='sm:h-full flex flex-col mt-1'>
        <h4 className='font-medium'>{subject}, {company} ({dateRange})</h4>
        <ul className='mt-1 pl-5 list-disc'>
          {bullets.map(( bullet, index )=> {
            return (
                <li key={index}>
                    <span className="font-medium">{bullet.key}: </span> 
                    {bullet.desc}
                </li>
            )
          })}
        </ul>
    </section>
  )
}
