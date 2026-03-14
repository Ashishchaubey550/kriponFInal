import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

function StackingCards({ items, renderItem, headerContent }) {
    const container = useRef(null)
    const cardsRef = useRef([])
    const prefersReducedMotion = usePrefersReducedMotion()
    const [enableStackAnimation, setEnableStackAnimation] = useState(false)

    useEffect(() => {
        const updateAnimationMode = () => {
            const isDesktop = typeof window !== 'undefined' ? window.innerWidth >= 1024 : false
            setEnableStackAnimation(isDesktop && !prefersReducedMotion)
        }

        updateAnimationMode()
        window.addEventListener('resize', updateAnimationMode)

        return () => window.removeEventListener('resize', updateAnimationMode)
    }, [prefersReducedMotion])

    useGSAP(() => {
        if (!enableStackAnimation) {
            ScrollTrigger.getAll().forEach((trigger) => {
                if (container.current && trigger.trigger === container.current) {
                    trigger.kill()
                }
            })
            return
        }

        const cards = cardsRef.current.filter(Boolean)
        if (cards.length === 0) return

        const totalScroll = cards.length * 100

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                pin: true,
                start: "top top",
                end: `+=${totalScroll}%`,
                scrub: 0.65,
                anticipatePin: 1,
            }
        })

        cards.forEach((card, i) => {
            if (i === 0) {
                gsap.set(card, { yPercent: 0, force3D: true, willChange: 'transform' })
            } else {
                gsap.set(card, { yPercent: 100, force3D: true, willChange: 'transform' })
            }
        })

        cards.forEach((card, i) => {
            if (i === 0) return

            tl.to(card, {
                yPercent: 0,
                duration: 1,
                ease: "none",
                force3D: true
            })

            if (i > 0) {
                tl.to(cards[i - 1], {
                    scale: 0.95,
                    opacity: 0.8,
                    duration: 1,
                    force3D: true
                }, "<")
            }
        })

        return () => {
            tl.scrollTrigger?.kill()
            tl.kill()
            cards.forEach((card) => {
                gsap.set(card, { clearProps: 'transform,opacity,willChange' })
            })
        }

    }, { scope: container, dependencies: [items, enableStackAnimation] })

    return (
        <div className='w-full'>
            {headerContent && (
                <div className='flex flex-col items-center justify-center text-center px-4 mb-[50px]'>
                    {headerContent}
                </div>
            )}

            <div
                ref={container}
                className={enableStackAnimation
                    ? 'h-screen w-full relative overflow-hidden flex flex-col items-center'
                    : 'w-full flex flex-col items-center gap-6 px-4 md:px-8 lg:px-10'
                }
            >
                {items.map((item, index) => {
                    const cardContent = renderItem(item, index)
                    return (
                        <div
                            key={item.id || index}
                            ref={el => cardsRef.current[index] = el}
                            className={enableStackAnimation
                                ? 'absolute top-0 w-full h-full flex items-center justify-center p-4 md:p-10'
                                : 'relative w-full flex items-center justify-center'
                            }
                            style={enableStackAnimation ? { zIndex: index + 1 } : undefined}
                        >
                            {React.cloneElement(cardContent, {
                                className: `${cardContent.props.className || ''} interactive transition-transform duration-500 ease-out will-change-transform`,
                                'data-cursor-text': 'VIEW',
                                onMouseEnter: (e) => {
                                    gsap.to(e.currentTarget, { scale: 1.05, duration: 0.4, ease: "power2.out" })
                                    if (cardContent.props.onMouseEnter) cardContent.props.onMouseEnter(e)
                                },
                                onMouseLeave: (e) => {
                                    gsap.to(e.currentTarget, { scale: 1, duration: 0.4, ease: "power2.out" })
                                    if (cardContent.props.onMouseLeave) cardContent.props.onMouseLeave(e)
                                }
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default StackingCards
