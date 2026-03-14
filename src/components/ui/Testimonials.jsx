import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
    {
        name: "Rahul Sharma",
        role: "Founder, TechVista",
        text: "Kripon Digital transformed our online presence completely. Their attention to detail and design thinking is unmatched. We saw a 3x increase in conversions within the first month.",
        rating: 5,
        avatar: "RS"
    },
    {
        name: "Priya Thapa",
        role: "CEO, NepalCraft",
        text: "Working with Kripon was an incredible experience. They understood our brand vision perfectly and delivered a website that truly represents who we are. Highly recommended!",
        rating: 5,
        avatar: "PT"
    },
    {
        name: "Amit Patel",
        role: "Director, GrowthHub",
        text: "The team at Kripon Digital is exceptional. They delivered our project ahead of schedule with quality that exceeded our expectations. Their development skills are top-notch.",
        rating: 5,
        avatar: "AP"
    },
    {
        name: "Sneha Gupta",
        role: "Marketing Head, Brandify",
        text: "From concept to launch, Kripon Digital made the entire process seamless. Their UI/UX expertise brought our app idea to life beautifully. Outstanding work!",
        rating: 5,
        avatar: "SG"
    },
    {
        name: "Deepak Joshi",
        role: "Co-founder, FinEdge",
        text: "Kripon Digital built our trading dashboard with precision and performance in mind. The result was a sleek, real-time platform our users love. Truly world-class quality.",
        rating: 5,
        avatar: "DJ"
    },
    {
        name: "Ananya Roy",
        role: "Owner, StyleNest",
        text: "Our e-commerce site needed a complete overhaul and Kripon delivered beyond what we imagined. Sales jumped 40% after launch. Best investment we've made for our brand.",
        rating: 5,
        avatar: "AR"
    }
]

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
                        Don't just take our word for it — hear from the brands we've helped grow.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            testimonial={testimonial}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonials
