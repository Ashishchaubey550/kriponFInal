import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

const benefits = [
    { title: "Design-Focused Approach.", description: "We create visually refined designs that align with your brand and engage your audience." },
    { title: "Custom & Scalable Solutions.", description: "Every product is tailored to your needs and built to grow with your business." },
    { title: "Attention to Detail.", description: "From design to development, we focus on quality, precision, and performance." },
    { title: "Clear Communication.", description: "We keep you informed at every stage with transparent and timely updates." },
    { title: "On-Time Delivery.", description: "We respect deadlines and ensure your project is delivered as planned." },
    { title: "Post-Launch Support", description: "We provide ongoing support to keep your website running smoothly." }
]

function getIcon(index) {
    const props = { width: 20, height: 20, fill: "none", stroke: "currentColor", strokeWidth: "1.7", viewBox: "0 0 24 24" }
    const icons = [
        // Design
        <svg key={0} {...props}><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" strokeLinecap="round" strokeLinejoin="round" /></svg>,
        // Scalable
        <svg key={1} {...props}><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" strokeLinecap="round" strokeLinejoin="round" /></svg>,
        // Detail / magnifier
        <svg key={2} {...props}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" strokeLinecap="round" /></svg>,
        // Communication
        <svg key={3} {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" /></svg>,
        // On-Time / clock
        <svg key={4} {...props}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round" /></svg>,
        // Support / shield
        <svg key={5} {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    ]
    return icons[index]
}

function BenefitCard({ benefit, index }) {
    const cardRef = useRef(null)
    const glowRef = useRef(null)

    const handleMouseMove = (e) => {
        if (!cardRef.current || !glowRef.current) return
        const { left, top } = cardRef.current.getBoundingClientRect()
        const x = e.clientX - left
        const y = e.clientY - top
        glowRef.current.style.background = `radial-gradient(360px at ${x}px ${y}px, rgba(138,56,245,0.16), transparent 65%)`
    }

    const handleMouseLeave = () => {
        if (glowRef.current) glowRef.current.style.background = 'transparent'
    }

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="benefit-card group relative rounded-[30px] border border-white/10 hover:border-[#8A38F5]/50 overflow-hidden min-h-[300px] cursor-default"
            style={{
                willChange: 'transform',
                transition: 'border-color 0.45s ease, transform 0.45s cubic-bezier(0.23,1,0.32,1)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.022)' }}
            onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)' }}
        >
            {/* Mouse-tracked glow */}
            <div ref={glowRef} className="pointer-events-none absolute inset-0 z-0" style={{ transition: 'background 0.1s ease' }} />

            {/* Diagonal shine sweep */}
            <div
                className="pointer-events-none absolute inset-0 z-0 -translate-x-full group-hover:translate-x-full"
                style={{
                    background: 'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.045) 50%, transparent 65%)',
                    transition: 'transform 0.8s cubic-bezier(0.23,1,0.32,1)',
                }}
            />

            {/* Top border sweep */}
            <div
                className="absolute top-0 left-0 h-[1.5px] w-0 group-hover:w-full bg-gradient-to-r from-transparent via-[#8A38F5] to-transparent z-10"
                style={{ transition: 'width 0.55s cubic-bezier(0.23,1,0.32,1)' }}
            />

            {/* Ghost index number */}
            <span
                className="pointer-events-none absolute -right-3 -bottom-5 text-[108px] font-black leading-none select-none text-white/[0.03] group-hover:text-[#8A38F5]/[0.09]"
                style={{
                    transition: 'color 0.5s ease, transform 0.5s cubic-bezier(0.23,1,0.32,1)',
                    transform: 'scale(1)',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.12)' }}
            >
                {String(index + 1).padStart(2, '0')}
            </span>

            {/* Content */}
            <div className="relative z-10 p-8 md:p-12 flex flex-col gap-6 h-full justify-center">
                {/* Icon badge */}
                <div
                    className="w-11 h-11 rounded-2xl border border-white/10 group-hover:border-[#8A38F5]/70 flex items-center justify-center text-white/35 group-hover:text-[#C084FC] group-hover:bg-[#8A38F5]/10 shrink-0"
                    style={{ transition: 'border-color 0.4s ease, color 0.4s ease, background 0.4s ease, transform 0.4s cubic-bezier(0.23,1,0.32,1)' }}
                >
                    {getIcon(index)}
                </div>

                <div>
                    <h3
                        className="text-2xl md:text-3xl font-medium mb-3 text-white group-hover:text-[#E2C9FF]"
                        style={{ transition: 'color 0.4s ease' }}
                    >
                        {benefit.title}
                    </h3>
                    <p
                        className="text-gray-500 group-hover:text-gray-300 text-lg leading-relaxed"
                        style={{ transition: 'color 0.4s ease' }}
                    >
                        {benefit.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

function BenefitsSection() {
    const container = useRef(null)
    const prefersReducedMotion = usePrefersReducedMotion()

    useGSAP(() => {
        if (prefersReducedMotion) return
        gsap.from('.benefit-card', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 80%',
                once: true,
            },
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out'
        })
    }, { scope: container, dependencies: [prefersReducedMotion] })

    return (
        <div ref={container} className="w-full bg-black text-white py-20 px-4 md:px-10 flex flex-col items-center">
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 backdrop-blur-md mb-12">
                <span className="text-xs font-medium text-white/70">Why choose us</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-medium mb-16 tracking-tight">Benefits of working with us</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
                {benefits.map((benefit, index) => (
                    <BenefitCard key={index} benefit={benefit} index={index} />
                ))}
            </div>
        </div>
    )
}

export default BenefitsSection
