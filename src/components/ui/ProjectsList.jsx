import React, { useRef } from 'react'
import StackingCards from './StackingCards'

import resume from '../../assets/resume.webp'
import spaa from '../../assets/spaa.webp'
import sparkluminarius from '../../assets/sparkluminarius.webp'
import dpEnter from '../../assets/dpEnter.webp'

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
        color: '#3a3a3a',
        link: 'https://www.thesparkluminaires.com/'
    },
    {
        id: 4,
        title: 'Fusion Space',
        description: 'Modern login portal',
        image: dpEnter,
        color: '#4a4a4a'
    }
]

function TiltProjectCard({ project, index }) {
    const cardRef = useRef(null)

    const handleMouseMove = (e) => {
        const card = cardRef.current
        if (!card) return
        const { left, top, width, height } = card.getBoundingClientRect()
        const x = e.clientX - left
        const y = e.clientY - top
        // subtle 3D tilt
        const rx = ((y - height / 2) / (height / 2)) * -3
        const ry = ((x - width / 2) / (width / 2)) * 3
        card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.01)`
    }

    const handleMouseLeave = () => {
        if (cardRef.current) {
            cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
        }
    }

    const isClickable = !!project.link;
    const Component = isClickable ? 'a' : 'div';

    return (
        <Component
            href={isClickable ? project.link : undefined}
            target={isClickable ? "_blank" : undefined}
            rel={isClickable ? "noopener noreferrer" : undefined}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: 'preserve-3d',
                willChange: 'transform',
                transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
            className={`w-full max-w-5xl h-[52vh] lg:h-[74vh] bg-neutral-900 rounded-[20px] lg:rounded-[30px] overflow-hidden shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)] hover:shadow-[0_40px_80px_-15px_rgba(138,56,245,0.2)] relative border border-white/10 group ${isClickable ? 'block cursor-pointer' : ''}`}
        >
            <div className="relative w-full h-full">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    fetchPriority={index === 0 ? 'high' : 'low'}
                    decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 lg:p-12 transition-colors duration-500 group-hover:from-[#340B73]/90">
                    <h3
                        className="text-white text-2xl sm:text-3xl lg:text-5xl font-bold mb-2 transform transition-transform duration-500 group-hover:translate-x-2"
                        style={{ transform: 'translateZ(30px)' }}
                    >
                        {project.title}
                    </h3>
                    <p
                        className="text-gray-300 text-base lg:text-xl transform transition-transform duration-500 delay-75 group-hover:translate-x-2"
                        style={{ transform: 'translateZ(20px)' }}
                    >
                        {project.description}
                    </p>
                    {isClickable && (
                        <p
                            className="text-white/80 text-sm mt-4 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2"
                            style={{ transform: 'translateZ(10px)' }}
                        >
                            Click to view &rarr;
                        </p>
                    )}
                </div>
                {/* Gloss overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
        </Component>
    )
}

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
                    <TiltProjectCard project={project} index={index} key={project.id} />
                )}
            />

            <div className='h-[20vh] w-full bg-black'></div>
        </>
    )
}
