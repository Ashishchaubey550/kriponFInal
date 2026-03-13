import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

function CustomCursor() {
    const container = useRef(null)
    const cursorRef = useRef(null)
    const cursorTextRef = useRef(null)
    const [isEnabled, setIsEnabled] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)')
        const applyState = () => setIsEnabled(mediaQuery.matches)

        applyState()
        mediaQuery.addEventListener('change', applyState)

        return () => mediaQuery.removeEventListener('change', applyState)
    }, [])

    useGSAP(() => {
        if (!isEnabled || !cursorRef.current) return

        gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50, scale: 1 })
        const moveX = gsap.quickTo(cursorRef.current, 'x', { duration: 0.12, ease: 'power2.out' })
        const moveY = gsap.quickTo(cursorRef.current, 'y', { duration: 0.12, ease: 'power2.out' })

        const onMouseMove = (e) => {
            const { clientX, clientY } = e
            moveX(clientX)
            moveY(clientY)
        }

        window.addEventListener('mousemove', onMouseMove, { passive: true })
        return () => window.removeEventListener('mousemove', onMouseMove)
    }, { dependencies: [isEnabled], scope: container })

    useEffect(() => {
        if (!isEnabled || !cursorRef.current || !cursorTextRef.current) return

        const interactiveSelector = 'a, button, [role="button"], .interactive'
        const formControlSelector = 'input, textarea, select'

        const showInteractiveCursor = (cursorText = '') => {
            if (cursorText) {
                cursorTextRef.current.textContent = cursorText
                gsap.to(cursorRef.current, {
                    width: 80,
                    height: 80,
                    duration: 0.22,
                    ease: 'back.out(1.6)',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    mixBlendMode: 'normal'
                })
                gsap.to(cursorTextRef.current, { opacity: 1, scale: 1, duration: 0.18 })
                return
            }

            cursorTextRef.current.textContent = ''
            gsap.to(cursorRef.current, {
                scale: 2.3,
                duration: 0.18,
                ease: 'power2.out',
                backgroundColor: 'rgba(140, 50, 255, 0.5)'
            })
            gsap.to(cursorTextRef.current, { opacity: 0, scale: 0.6, duration: 0.14 })
        }

        const hideInteractiveCursor = () => {
            cursorTextRef.current.textContent = ''
            gsap.to(cursorRef.current, {
                scale: 1,
                width: 20,
                height: 20,
                duration: 0.16,
                ease: 'power2.out',
                backgroundColor: '#8C32FF',
                mixBlendMode: 'exclusion'
            })
            gsap.to(cursorTextRef.current, { opacity: 0, scale: 0.5, duration: 0.14 })
        }

        const hideCursorForTyping = () => {
            gsap.to(cursorRef.current, {
                autoAlpha: 0,
                scale: 0.4,
                duration: 0.14,
                ease: 'power2.out'
            })
        }

        const showCursorAfterTyping = () => {
            gsap.to(cursorRef.current, {
                autoAlpha: 0.85,
                scale: 1,
                duration: 0.16,
                ease: 'power2.out'
            })
        }

        const onMouseOver = (e) => {
            const interactiveEl = e.target.closest(interactiveSelector)
            if (!interactiveEl) return
            const cursorText = interactiveEl.getAttribute('data-cursor-text')
            showInteractiveCursor(cursorText || '')
        }

        const onMouseOut = (e) => {
            const fromInteractive = e.target.closest(interactiveSelector)
            if (!fromInteractive) return

            const toEl = e.relatedTarget
            if (toEl && toEl.closest?.(interactiveSelector)) return
            hideInteractiveCursor()
        }

        const onMouseOverFormControl = (e) => {
            if (!e.target.closest(formControlSelector)) return
            hideCursorForTyping()
        }

        const onMouseOutFormControl = (e) => {
            if (!e.target.closest(formControlSelector)) return
            const toEl = e.relatedTarget
            if (toEl && toEl.closest?.(formControlSelector)) return
            showCursorAfterTyping()
        }

        const onFocusIn = (e) => {
            if (!e.target.closest(formControlSelector)) return
            hideCursorForTyping()
        }

        const onFocusOut = (e) => {
            if (!e.target.closest(formControlSelector)) return
            showCursorAfterTyping()
        }

        window.addEventListener('mouseover', onMouseOver)
        window.addEventListener('mouseout', onMouseOut)
        window.addEventListener('mouseover', onMouseOverFormControl)
        window.addEventListener('mouseout', onMouseOutFormControl)
        window.addEventListener('focusin', onFocusIn)
        window.addEventListener('focusout', onFocusOut)

        return () => {
            window.removeEventListener('mouseover', onMouseOver)
            window.removeEventListener('mouseout', onMouseOut)
            window.removeEventListener('mouseover', onMouseOverFormControl)
            window.removeEventListener('mouseout', onMouseOutFormControl)
            window.removeEventListener('focusin', onFocusIn)
            window.removeEventListener('focusout', onFocusOut)
        }
    }, [isEnabled])

    useEffect(() => {
        document.body.classList.toggle('custom-cursor-enabled', isEnabled)
        return () => document.body.classList.remove('custom-cursor-enabled')
    }, [isEnabled])

    if (!isEnabled) return null

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
