import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

function GlowingHorizon() {
    const container = useRef(null)
    const rayRef = useRef(null)
    const curveRef = useRef(null)

    useGSAP(() => {

        gsap.to(curveRef.current, {
            boxShadow: "0px -20px 80px rgba(140, 50, 255, 0.4)",
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        })


        gsap.fromTo(rayRef.current,
            {
                y: 100,
                opacity: 0,
                scaleY: 0.5
            },
            {
                y: -600,
                opacity: 0,
                scaleY: 2.5,
                duration: 7,
                repeat: -1,
                ease: "power1.inOut",
                onStart: () => {
                    gsap.to(rayRef.current, { opacity: 0.25, duration: 3.5, yoyo: true, repeat: 1 })
                }
            }
        )

        const handleMouseMove = (e) => {

            const xPos = e.clientX - window.innerWidth / 2;

            // Smoothly animate to new X position
            gsap.to(rayRef.current, {
                x: xPos,
                duration: 1.5,
                ease: "power2.out"
            })
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, { scope: container })

    return (
        <div ref={container} className="absolute top-0 left-0 w-full h-[1200px] overflow-hidden pointer-events-none z-0">

            <div className="absolute inset-0 bg-black/90 z-0"></div>


            <div
                ref={curveRef}
                className="absolute left-1/2 -translate-x-1/2 bottom-[-800px] w-[200%] h-[1000px] rounded-[50%] bg-black border-t border-[#8C32FF] z-10"
                style={{
                    boxShadow: "0px -10px 30px rgba(140, 50, 255, 0.15)",
                    background: "radial-gradient(circle at 50% 0%, #15032b 0%, #000000 70%)"
                }}
            />

            <div
                ref={rayRef}
                className="absolute left-1/2 -translate-x-1/2 bottom-[50px] w-[300px] md:w-[400px] h-[400px] md:h-[600px] z-0"
                style={{

                    background: "radial-gradient(ellipse at bottom, rgba(140, 50, 255, 0.3) 0%, transparent 70%)",
                    filter: "blur(60px)"
                }}
            />

            <div className="absolute left-1/2 -translate-x-1/2 bottom-[200px] w-[60%] h-[200px] bg-[#6925C0] rounded-full blur-[120px] opacity-15 z-0 pointer-events-none"></div>
        </div>
    )
}

export default GlowingHorizon
