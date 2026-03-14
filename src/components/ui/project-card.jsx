import React from 'react'

function ProjectCard({ image, title, description }) {
    return (
        <div className="flex flex-col gap-6 w-full">
            <div className="w-full h-[400px] overflow-hidden rounded-[20px]">
                <img className='h-full w-full object-cover transition-transform duration-500 hover:scale-105' src={image} alt={title} />
            </div>
            <div className='flex flex-col gap-1 px-1'>
                <h3 className='text-[#FFFFFF] font-bold text-[20px] leading-[28px] tracking-[-0.4px]'>
                    {title} <span className='font-normal text-[#FFFFFF99]'>- {description}</span>
                </h3>
            </div>
        </div>
    )
}

export default ProjectCard
