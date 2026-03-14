import React from 'react'
import StackingCards from './StackingCards'

import resume from '../../assets/resume.png'
import spaa from '../../assets/spaa.png'
import sparkluminarius from '../../assets/sparkluminarius.png'
import dpEnter from '../../assets/dpEnter.png'
const projects = [
    {
        id: 1,
        title: 'Transform Your Resume',
        description: 'AI-powered resume builder',
        image: resume,
        color: '#1a1a1a'
    },
    {
        id: 2,
        title: 'Decorative Bollards',
        description: 'Design and implementation',
        image: spaa,
        color: '#2a2a2a'
    },
    {
        id: 3,
        title: 'Discover Tranquility',
        description: 'Spa and wellness center',
        image: sparkluminarius,
        color: '#3a3a3a'
    },
    {
        id: 4,
        title: 'Fusion Space',
        description: 'Modern login portal',
        image: dpEnter,
        color: '#4a4a4a'
    }
]

export default function ProjectsList() {
    return (
        <>
            <StackingCards
                items={projects}
                headerContent={
                    <div className="px-4 text-center md:text-left">
                        <h2 className='text-white text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 lg:mb-6'>Featured Project</h2>
                        <p className='text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto md:mx-0'>
                            We help bring ideas to create digital experience that work.
                        </p>
                    </div>
                }
                renderItem={(project, index) => (
                    <div className="w-full max-w-5xl h-[52vh] lg:h-[74vh] bg-neutral-900 rounded-[20px] lg:rounded-[30px] overflow-hidden shadow-2xl relative border border-white/10">
                        <div className="relative w-full h-full">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                                loading={index === 0 ? 'eager' : 'lazy'}
                                fetchPriority={index === 0 ? 'high' : 'low'}
                                decoding="async"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 lg:p-12">
                                <h3 className="text-white text-2xl sm:text-3xl lg:text-5xl font-bold mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 text-base lg:text-xl">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            />

            <div className='h-[20vh] w-full bg-black'></div>
        </>
    )
}
