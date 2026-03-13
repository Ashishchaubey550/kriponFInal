import React, { useEffect, useRef } from 'react'
import Button from './button'
import backgroundImage from '../../assets/Have_an_ideo_background.jpg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function CallToAction() {
    const containerRef = useRef(null)
    const textRef1 = useRef(null)
    const textRef2 = useRef(null)
    const buttonRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            })

            tl.fromTo(textRef1.current,
                { y: 80, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
            )
                .fromTo(textRef2.current,
                    { y: 80, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1, ease: "power4.out" },
                    "-=0.8"
                )
                .fromTo(buttonRef.current,
                    { y: 40, opacity: 0, scale: 0.9 },
                    { y: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.5)" },
                    "-=0.6"
                )
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={containerRef} className="relative w-full h-[60vh] min-h-[500px] md:h-[800px] flex items-center justify-center overflow-hidden bg-black group">
            {/* Background Image with slow zoom */}
            <div className="absolute inset-0 z-0 transition-transform duration-[15000ms] ease-linear group-hover:scale-110">
                <img
                    src={backgroundImage}
                    alt="Have an idea background"
                    className="w-full h-full object-cover scale-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/90 backdrop-blur-[2px]"></div>
            </div>

            {/* Glowing Ambient Orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[700px] h-[300px] md:h-[700px] bg-purple-600/20 rounded-full blur-[100px] md:blur-[180px] z-0 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center text-center w-full justify-center px-4">
                <div className="overflow-hidden mb-2">
                    <h2 ref={textRef1} className="text-white text-6xl sm:text-7xl lg:text-[120px] font-light leading-[1] tracking-tight">Have</h2>
                </div>
                <div className="overflow-hidden mb-12 lg:mb-16">
                    <h2 ref={textRef2} className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40 text-6xl sm:text-7xl lg:text-[120px] font-light leading-[1.1] tracking-tight italic pr-4">an idea?</h2>
                </div>

                <div ref={buttonRef} className="relative group/btn cursor-pointer outline-none">
                    {/* Animated Button Glow */}
                    <div className="absolute -inset-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 rounded-full blur opacity-30 group-hover/btn:opacity-70 transition duration-500 group-hover/btn:duration-200"></div>
                    <Button className="relative border border-white/20 bg-black/40 hover:bg-black/80 text-white rounded-full text-xl sm:text-2xl lg:text-[36px] px-10 py-5 lg:px-16 lg:py-6 h-auto font-light tracking-[0.2em] backdrop-blur-xl transition-all hover:scale-[1.02] duration-500 hover:border-white/50">
                        TELL US
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CallToAction
