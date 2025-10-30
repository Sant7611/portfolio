import React from 'react'


const ProjectCard = ({title, main, source, img}) => {
  return (
   <div className='p-3 md:p-6 mb-5 flex flex-col justify-between md:w-70 md:h-auto w-64 h-80 bg-[#01010100] shadow-xl shadow-[#3f3b3b] rounded-2xl'>
    <div>
        <img src={img} alt="" className="p-4 w-full h-40 object-contain rounded-2xl" />
        <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal ">
            {title}
        </h3>
        <p className="px-4 text-sm md:text-lg leading-tight py-2 ">{main}</p>
    </div>

    <div className="mt-2 p-2 md:p-4 w-full flex justify-center">
        <a href={source} className='text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-primary'>
            Source Code
        </a>
    </div>
</div>

  )
}

export default ProjectCard