import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

function CustomCursor() {
    const container = useRef(null)
    const cursorRef = useRef(null)
    const cursorTextRef = useRef(null)

    useGSAP(() => {

        gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50, scale: 1 })

        const onMouseMove = (e) => {
            const { clientX, clientY } = e
            gsap.to(cursorRef.current, {
                x: clientX,
                y: clientY,
                duration: 0.15,
                ease: "power2.out"
            })
        }

        window.addEventListener('mousemove', onMouseMove)
        return () => window.removeEventListener('mousemove', onMouseMove)
    }, { scope: container })

    useEffect(() => {
        const onMouseEnter = (e) => {
            const target = e.target
            const cursorText = target.getAttribute('data-cursor-text')

            if (cursorText) {
                cursorTextRef.current.innerText = cursorText
                gsap.to(cursorRef.current, {
                    width: 80,
                    height: 80,
                    duration: 0.3,
                    ease: "back.out(1.7)",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    mixBlendMode: "normal"
                })
                gsap.to(cursorTextRef.current, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.3
                })
            } else {
                gsap.to(cursorRef.current, {
                    scale: 3,
                    duration: 0.2,
                    ease: "back.out(1.7)",
                    backgroundColor: "rgba(140, 50, 255, 0.5)"
                })
            }
        }

        const onMouseLeave = () => {
            cursorTextRef.current.innerText = ""
            gsap.to(cursorRef.current, {
                scale: 1,
                width: 20,
                height: 20,
                duration: 0.2,
                ease: "power2.out",
                backgroundColor: "#8C32FF",
                mixBlendMode: "exclusion"
            })
            gsap.to(cursorTextRef.current, {
                opacity: 0,
                scale: 0.5,
                duration: 0.2
            })
        }


        const targets = document.querySelectorAll('a, button, input, textarea, [role="button"], .interactive')

        targets.forEach(el => {
            el.addEventListener('mouseenter', onMouseEnter)
            el.addEventListener('mouseleave', onMouseLeave)
        })


        return () => {
            targets.forEach(el => {
                el.removeEventListener('mouseenter', onMouseEnter)
                el.removeEventListener('mouseleave', onMouseLeave)
            })
        }
    }, [])

    // Optional: Add a MutationObserver to handle dynamically added buttons
    useEffect(() => {
        const handleEnter = (e) => {
            const cursorText = e.target.getAttribute('data-cursor-text')
            if (cursorText) {
                cursorTextRef.current.innerText = cursorText
                gsap.to(cursorRef.current, {
                    width: 80,
                    height: 80,
                    duration: 0.3,
                    ease: "back.out(1.7)",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    mixBlendMode: "normal"
                })
                gsap.to(cursorTextRef.current, { opacity: 1, scale: 1 })
            } else {
                gsap.to(cursorRef.current, { scale: 3, duration: 0.2, ease: "back.out(1.7)", backgroundColor: "rgba(140, 50, 255, 0.5)" })
            }
        }

        const handleLeave = () => {
            cursorTextRef.current.innerText = ""
            gsap.to(cursorRef.current, { scale: 1, width: 20, height: 20, backgroundColor: "#8C32FF", mixBlendMode: "exclusion" })
            gsap.to(cursorTextRef.current, { opacity: 0, scale: 0.5 })
        }

        const observer = new MutationObserver((mutations) => {
            const targets = document.querySelectorAll('.interactive')
            targets.forEach(el => {
                el.removeEventListener('mouseenter', handleEnter)
                el.removeEventListener('mouseleave', handleLeave)
                el.addEventListener('mouseenter', handleEnter)
                el.addEventListener('mouseleave', handleLeave)
            })
        })

        observer.observe(document.body, { childList: true, subtree: true })

        return () => observer.disconnect()
    }, [])

    return (
        <div ref={container} className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-exclusion">
            <div
                ref={cursorRef}
                className="absolute top-0 left-0 w-[20px] h-[20px] bg-[#8C32FF] rounded-full opacity-80 backdrop-blur-sm flex items-center justify-center"
                style={{
                    boxShadow: "0 0 10px rgba(140, 50, 255, 0.5)"
                }}
            >
                <span
                    ref={cursorTextRef}
                    className="text-black font-bold text-[10px] opacity-0 scale-50"
                >
                </span>
            </div>
        </div>
    )
}

export default CustomCursor
