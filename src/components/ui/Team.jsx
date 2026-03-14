import React, { useState, useRef } from 'react'
import Button from './button'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


const TEAM_MEMBERS = [
    {
        id: 1,
        name: "Ashish Choubey",
        title: "Founder & Lead Developer",
        description: "Ashish is a professional web developer specializing in modern, high-performance websites. He focuses on clean code, responsive design, and seamless user experiences to build reliable and scalable digital solutions.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Sarah Johnson",
        title: "UI/UX Designer",
        description: "Sarah brings creative visions to life with intuitive and visually stunning designs. Her focus on user-centric interfaces ensures every digital product is both beautiful and functional.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "David Smith",
        title: "Backend Engineer",
        description: "David architects robust server-side solutions. With expertise in scalable databases and API development, he ensures the engine behind the website runs smoothly and securely.",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "Emily Chen",
        title: "Product Manager",
        description: "Emily bridges the gap between technical teams and business goals. Her strategic planning and agile methodology keep projects on track and aligned with client visions.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
    }
]

export default function Team() {
    const [activeIndex, setActiveIndex] = useState(0)
    const containerRef = useRef(null)
    const imageRef = useRef(null)
    const textRef = useRef(null)
    const activeMember = TEAM_MEMBERS[activeIndex]

    useGSAP(() => {
        gsap.fromTo(imageRef.current,
            { opacity: 0, scale: 1.1 },
            { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
        )

        gsap.fromTo(textRef.current.children,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }
        )
    }, { scope: containerRef, dependencies: [activeIndex] })

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? TEAM_MEMBERS.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setActiveIndex((prev) => (prev === TEAM_MEMBERS.length - 1 ? 0 : prev + 1))
    }

    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') handlePrev()
            if (e.key === 'ArrowRight') handleNext()
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    return (
        <div ref={containerRef} className="w-full flex flex-col items-center justify-center py-10 lg:py-20 bg-black text-white relative z-50">
            <div className='flex flex-col items-center mb-10 lg:mb-16 px-4 text-center'>
                <Button className="w-[83px] border-2 px-[13px] py-[6px] rounded-[999px] border-solid border-[#FFFFFF] text-[#FFFFFF] backdrop-blur-2xl h-[40px] mb-4">Team</Button>
                <h2 className='text-[#FFFFFF] font-medium text-4xl sm:text-5xl lg:text-[66px] leading-tight lg:leading-[84px] tracking-tight lg:tracking-[-3.5px]'>Meet the incredible team</h2>
                <div className="hidden lg:flex gap-4 mt-8">
                    <button onClick={handlePrev} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                        ←
                    </button>
                    <button onClick={handleNext} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                        →
                    </button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row w-full max-w-[1200px] gap-8 lg:gap-12 px-4">
                <div className="w-full lg:w-[500px] aspect-[5/6] lg:h-[600px] bg-neutral-800 rounded-lg overflow-hidden shrink-0">
                    <img
                        ref={imageRef}
                        src={activeMember.image}
                        alt={activeMember.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex flex-col justify-between flex-grow pt-0 lg:pt-4">
                    <div ref={textRef}>
                        <div className="text-2xl lg:text-4xl font-light text-white/50 mb-2">#{activeMember.id}</div>
                        <h3 className="text-3xl lg:text-5xl font-medium mb-2 interactive w-fit">{activeMember.name}</h3>
                        <p className="text-lg lg:text-xl text-purple-400 mb-4 lg:mb-6">{activeMember.title}</p>
                        <p className="text-base lg:text-xl text-white/60 leading-relaxed max-w-full lg:max-w-[500px]">
                            {activeMember.description}
                        </p>
                    </div>

                    <div className="flex lg:hidden gap-4 mt-6">
                        <button onClick={handlePrev} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                            ←
                        </button>
                        <button onClick={handleNext} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                            →
                        </button>
                    </div>

                    <div className="flex gap-2 lg:gap-4 mt-6 lg:mt-8 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
                        {TEAM_MEMBERS.map((member, index) => (
                            <button
                                key={member.id}
                                onClick={() => setActiveIndex(index)}
                                className={`w-20 h-28 lg:w-32 lg:h-40 rounded-lg overflow-hidden border-2 transition-all duration-300 shrink-0 ${index === activeIndex ? 'border-purple-600 opacity-100' : 'border-transparent opacity-50 hover:opacity-75'
                                    }`}
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
