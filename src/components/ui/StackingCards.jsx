import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

function StackingCards({ items, renderItem, headerContent }) {
    const container = useRef(null)
    const cardsRef = useRef([])

    useGSAP(() => {
        const cards = cardsRef.current.filter(Boolean)
        if (cards.length === 0) return

        const totalScroll = cards.length * 100

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                pin: true,
                start: "top top",
                end: `+=${totalScroll}%`,
                scrub: 1,
            }
        })

        cards.forEach((card, i) => {
            if (i === 0) {
                gsap.set(card, { yPercent: 0 })
            } else {
                gsap.set(card, { yPercent: 100 })
            }
        })

        cards.forEach((card, i) => {
            if (i === 0) return

            tl.to(card, {
                yPercent: 0,
                duration: 1,
                ease: "none"
            })

            if (i > 0) {
                tl.to(cards[i - 1], {
                    scale: 0.95,
                    opacity: 0.8,
                    duration: 1
                }, "<")
            }
        })

        ScrollTrigger.refresh()

    }, { scope: container, dependencies: [items] })

    return (
        <div className='w-full'>
            {headerContent && (
                <div className='flex flex-col items-center justify-center text-center px-4 mb-[50px]'>
                    {headerContent}
                </div>
            )}

            <div ref={container} className="h-screen w-full relative overflow-hidden flex flex-col items-center">
                {items.map((item, index) => {
                    const cardContent = renderItem(item, index)
                    return (
                        <div
                            key={item.id || index}
                            ref={el => cardsRef.current[index] = el}
                            className="absolute top-0 w-full h-full flex items-center justify-center p-4 md:p-10"
                            style={{ zIndex: index + 1 }}
                        >
                            {React.cloneElement(cardContent, {
                                className: `${cardContent.props.className || ''} interactive transition-transform duration-500 ease-out`,
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
