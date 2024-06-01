import React from "react";

export interface ProjectInfoType {
    title: string;
    desc: string;
    link: string;
    notes: Array<string>;
    img: string;
    tags: Array<string> | Array<null>;
    show: boolean;
    setShow: any;
}

const Modal: React.FC<{ projectInfo: ProjectInfoType }> = ({ projectInfo }) => {
    if (!projectInfo.show) return null;

    return (
        <div id="Modal-bg" onClick={()=> projectInfo.setShow(false)} className='w-full h-full overflow-hidden absolute flex modal-bg z-40 justify-center'>
            <div className='modal-div flex flex-col-reverse h-full w-full justify-center self-center items-center'>
                <main id='project-div' className='clip flex flex-col-reverse sm:flex-row flex- justify-between bg-orange h-5/6 w-5/6 sm:w-5/6 sm:p-3 z-10 '>
                    <div className="flex flex-col h-full w-full sm:w-1/2 p-3">
                        <img className='w-full sm:w-full' src={projectInfo.img} alt="" />
                        <ul className='flex flex-row justify-between sm:justify-evenly w-full pt-2 italic'>
                            {projectInfo.tags.map((tag, index) => (
                                tag && (
                                    <li key={index} className='truncate hidden sm:block justify-center text-white project-tag capitalize px-2'>
                                        {tag}
                                    </li>
                                )
                            ))}
                        </ul>
                    </div>

                    <section className="flex flex-col h-full w-full sm:w-1/2 p-2 sm:p-5">
                        <h2 className='uppercase text-xl sm:text-2xl'>{projectInfo.title}</h2>
                        <div className="mt-2 project-info h-full sm:h-3/4 flex flex-col justify-around">
                            <p className='text-md italic sm:text-lg'>
                                {projectInfo.desc}
                            </p>
                            <ul className='pl-4 list-disc text-sm hidden sm:block sm:text-lg'>
                                {projectInfo.notes.map((note, index) => (
                                    note && <li key={index}>{note}</li>
                                ))}
                            </ul>
                            <a target='_blank' href={projectInfo.link} className='mt-2 p-2 sm:p-2 w-20 flex items-center justify-center bg-yellow-500 link-button'>
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
