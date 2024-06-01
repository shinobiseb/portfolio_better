import React from "react";

export interface ProjectInfoType {
    title: string;
    desc: string;
    link: string;
    notes: Array<string>;
    img: string;
    tags: Array<string> | Array<null>;
    show: boolean;
}

const Modal: React.FC<{ projectInfo: ProjectInfoType }> = ({ projectInfo }) => {
    if (!projectInfo.show) return null;

    return (
        <div className='w-full h-full absolute modal-bg z-40'>
            <div className='flex flex-col h-full w-full justify-center items-center'>
                <main id='project-div' className='clip flex flex-row justify-between bg-orange w-5/6 p-3 z-10 border border-black'>
                    <div className="flex flex-col project-page-info-div h-full w-1/2 p-5">
                        <img className='w-full' src={projectInfo.img} alt="" />
                        <ul className='flex flex-row justify-evenly w-full pt-2 italic'>
                            {projectInfo.tags.map((tag, index) => (
                                tag && (
                                    <li key={index} className='flex justify-center bg-white project-tag capitalize px-4'>
                                        {tag}
                                    </li>
                                )
                            ))}
                        </ul>
                    </div>

                    <section className="flex flex-col project-page-info-div h-full w-1/2 p-5">
                        <h2 className='uppercase text-2xl'>{projectInfo.title}</h2>
                        <div className="mt-2 project-info h-full sm:h-3/4 flex flex-col justify-around">
                            <p className='text-lg'>
                                {projectInfo.desc}
                            </p>
                            <ul className='pl-4 list-disc text-lg truncate'>
                                {projectInfo.notes.map((note, index) => (
                                    note && <li key={index}>{note}</li>
                                ))}
                            </ul>
                            <a target='_blank' href={projectInfo.link} className='mt-2 p-2 w-20 flex items-center justify-center bg-yellow-500 link-button'>
                                LINK_
                            </a>
                        </div>
                    </section>
                    
                </main>
            </div>
        </div>
    );
};

export default Modal;
