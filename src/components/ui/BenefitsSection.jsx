import React from 'react'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const benefits = [
    {
        title: "Design-Focused Approach.",
        description: "We create visually refined designs that align with your brand and engage your audience.",
        align: "items-start text-left",
        special: "design-card",
        colSpan: ""
    },
    {
        title: "Custom & Scalable Solutions.",
        description: "Every product is tailored to your needs and built to grow with your business.",
        align: "items-end text-right",
        special: "scale-card",
        colSpan: ""
    },
    {
        title: "Attention to Detail.",
        description: "From design to development, we focus on quality, precision, and performance.",
        align: "items-start text-left",
        colSpan: ""
    },
    {
        title: "Clear Communication.",
        description: "We keep you informed at every stage with transparent and timely updates.",
        align: "items-end text-right",
        colSpan: ""
    },
    {
        title: "On-Time Delivery.",
        description: "We respect deadlines and ensure your project is delivered as planned.",
        align: "items-start text-left",
        colSpan: ""
    },
    {
        title: "Post-Launch Support",
        description: "• We provide ongoing support to keep your website running smoothly.",
        align: "items-end text-right",
        colSpan: ""
    }
]

function BenefitsSection() {
    const container = useRef(null)

    useGSAP(() => {
        gsap.from('.benefit-card', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 80%',
            },
            y: 50,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
        })
    }, { scope: container })

    return (
        <div ref={container} className="w-full bg-black text-white py-20 px-4 md:px-10 flex flex-col items-center">
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 backdrop-blur-md mb-12">
                <span className="text-xs font-medium text-white/70">Why choose us</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-medium mb-16 tracking-tight">Benefits of working with us</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
                {benefits.map((benefit, index) => (
                    <div
                        key={index}
                        className={`benefit-card group relative p-8 md:p-12 rounded-[30px] border border-white/10 overflow-hidden transition-all duration-300 min-h-[320px] h-auto flex flex-col justify-center ${benefit.align} ${benefit.special === 'scale-card' ? 'bg-gradient-to-t from-purple-900/40 to-transparent' : 'bg-transparent'}`}
                    >

                        {benefit.special === 'design-card' && (
                            <div className="absolute inset-0 z-0 opacity-40">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(100,100,100,0.1),transparent_50%)]"></div>
                            </div>
                        )}


                        {benefit.special === 'scale-card' && (
                            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[conic-gradient(from_90deg_at_50%_100%,rgba(140,50,255,0.3),transparent)] blur-2xl opacity-60 pointer-events-none" />
                        )}


                        <div className="relative z-10 w-full flex flex-col h-full justify-center">
                            <h3 className={`text-2xl md:text-3xl font-medium mb-4 text-white self-start ${benefit.align === 'items-end text-right' ? 'md:self-end md:text-right' : 'md:self-start md:text-left'}`}>
                                {benefit.title}
                            </h3>
                            <p className={`text-gray-400 text-lg leading-relaxed max-w-sm self-start text-left ${benefit.align === 'items-end text-right' ? 'md:self-end md:text-right' : 'md:self-start md:text-left'}`}>
                                {benefit.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BenefitsSection
