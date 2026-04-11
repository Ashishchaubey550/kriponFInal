import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
    // TODO: Replace these with REAL client testimonials as you get them.
    // Ask every client for a short review after project delivery.
    // Real testimonials with verifiable names/companies build massive trust.
]

// Placeholder testimonial shown when no real ones exist yet
const placeholderMode = testimonials.length === 0


function StarRating({ count }) {
    return (
        <div className="flex gap-1">
            {Array.from({ length: count }).map((_, i) => (
                <svg key={i} className="w-4 h-4 text-[#8A38F5]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    )
}

function TestimonialCard({ testimonial, index }) {
    const cardRef = useRef(null)

    useGSAP(() => {
        gsap.from(cardRef.current, {
            scrollTrigger: {
                trigger: cardRef.current,
                start: 'top 85%',
                once: true
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out'
        })
    })

    return (
        <div
            ref={cardRef}
            className="group relative rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 lg:p-8 backdrop-blur-sm transition-all duration-500 hover:border-[#8A38F5]/30 hover:shadow-[0_0_40px_-12px_rgba(138,56,245,0.15)]"
        >
            {/* Subtle gradient glow on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8A38F5]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
                {/* Stars */}
                <StarRating count={testimonial.rating} />

                {/* Quote */}
                <p className="mt-5 text-[15px] leading-[26px] text-white/60 font-light">
                    "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-4">
                    <div className="h-11 w-11 rounded-full bg-gradient-to-br from-[#8A38F5] to-[#340B73] flex items-center justify-center text-white text-sm font-semibold shadow-lg shadow-[#8A38F5]/20">
                        {testimonial.avatar}
                    </div>
                    <div>
                        <p className="text-white font-semibold text-[15px]">{testimonial.name}</p>
                        <p className="text-white/35 text-[13px]">{testimonial.role}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Testimonials() {
    return (
        <div className="w-full bg-black py-20 lg:py-28">
            <div className="w-full max-w-[1100px] mx-auto px-6">
                {/* Section Header */}
                <div className="flex justify-between items-center mb-0 px-0 py-5 border-b border-white/10">
                    <span className="text-[11px] lg:text-[13px] tracking-[3px] uppercase text-white/40 font-medium">// Testimonials°</span>
                    <span className="text-[11px] lg:text-[13px] tracking-[3px] uppercase text-white/40 font-medium">Client Love</span>
                </div>

                <div className="mt-12 lg:mt-16 text-center mb-12 lg:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight tracking-tight text-white">
                        What our clients <span className="bg-gradient-to-r from-[#8A38F5] to-[#b589ff] bg-clip-text text-transparent">say about us</span>
                    </h2>
                    <p className="mt-4 text-white/40 text-base lg:text-lg max-w-[600px] mx-auto">
                        {placeholderMode
                            ? "We're just getting started — be among our first happy clients!"
                            : "Don't just take our word for it — hear from the brands we've helped grow."
                        }
                    </p>
                </div>

                {placeholderMode ? (
                    /* CTA when no testimonials yet */
                    <div className="flex flex-col items-center gap-8">
                        <div className="relative w-full max-w-2xl rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-10 lg:p-14 text-center backdrop-blur-sm">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8A38F5]/[0.04] to-transparent" />
                            <div className="relative z-10">
                                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#8A38F5] to-[#340B73] shadow-lg shadow-[#8A38F5]/20">
                                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Let's Create Something Amazing Together</h3>
                                <p className="text-white/50 text-[15px] leading-7 mb-8 max-w-md mx-auto">
                                    We pour our heart into every project. Start your journey with us and become one of our success stories.
                                </p>
                                <a
                                    href="https://wa.me/917024306915?text=Hi%20Kripon%20Digital!%20I'm%20interested%20in%20your%20services."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2.5 rounded-full bg-[linear-gradient(180deg,#9E59FF_0%,#4B1695_100%)] px-8 py-3.5 text-sm font-semibold tracking-wide text-white uppercase shadow-[0_12px_40px_-18px_rgba(138,56,245,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_42px_-16px_rgba(138,56,245,0.85)]"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.82 14.12c-.24.68-1.42 1.34-1.96 1.38-.52.04-1 .24-3.37-.7-2.86-1.14-4.68-4.06-4.82-4.25-.14-.19-1.14-1.52-1.14-2.9 0-1.38.72-2.06.98-2.34s.56-.36.76-.36c.2 0 .38 0 .54.01.18.01.42-.07.66.5.24.58.82 2 .9 2.14.06.14.1.32.02.5-.1.2-.14.32-.28.48-.14.18-.3.38-.42.52-.14.14-.28.3-.12.58.16.28.72 1.18 1.54 1.92 1.06.94 1.96 1.24 2.24 1.38.28.14.44.12.6-.06.16-.2.7-.82.9-1.1.18-.28.38-.24.64-.14.26.08 1.66.78 1.94.92.28.14.46.22.54.34.06.12.06.68-.18 1.36z" />
                                    </svg>
                                    Start a Conversation
                                </a>
                            </div>
                        </div>
                    </div>
                ) : (
                    /* Real testimonials grid */
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={index}
                                testimonial={testimonial}
                                index={index}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Testimonials
