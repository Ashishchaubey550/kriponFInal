
import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Button from '../components/ui/button'
import Footer from '../components/layout/Footer'
import CustomCursor from '../components/ui/CustomCursor'

gsap.registerPlugin(ScrollTrigger)

function AboutPage() {
    const container = useRef()

    useGSAP(() => {
        gsap.from('.hero-text', {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out'
        })

        gsap.utils.toArray('.reveal-section').forEach(section => {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            })
        })
    }, { scope: container })

    const coreValues = [
        "Custom web design",
        "Maintenance",
        "Responsive (mobile-friendly)",
        "Basic SEO setup",
        "Contact form integration",
        "1 week delivery"
    ]

    return (
        <div ref={container} className="bg-black min-h-screen text-white">
            <CustomCursor />

            <div className="relative mx-auto w-full max-w-screen-xl lg:max-w-[1440px] px-4 md:px-8 lg:px-[64px] pt-[100px] lg:pt-[150px]">


                <div className="text-center mb-[100px] lg:mb-[150px]">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-6 py-2 backdrop-blur-md mb-8 lg:mb-[52px]">
                        <span className="text-sm font-medium text-[#FFFFFF]">About Us</span>
                    </div>
                    <h1 className="hero-text text-6xl md:text-8xl lg:text-[121.1px] font-medium leading-tight lg:leading-[121px] tracking-tight lg:tracking-[-5.5px] text-[#FFFFFF]">About Us</h1>
                    <p className="hero-text mt-4 text-lg lg:text-[20px] text-gray-400">Who we are</p>
                </div>


                <div className="reveal-section flex flex-col lg:flex-row justify-between items-start mb-[100px] lg:mb-[200px] gap-10 lg:gap-0">
                    <div className="w-full lg:max-w-[600px]">
                        <h2 className="text-2xl md:text-3xl lg:text-[26px] font-medium leading-relaxed lg:leading-[42px] mb-8 text-white">
                            A digital studio driven by clarity, quality, and purpose
                        </h2>
                        <p className="text-base lg:text-[18px] leading-relaxed lg:leading-[32px] text-gray-400">
                            Kripon Digital delivering thoughtful, scalable digital solutions—starting every project with a deep understanding of your goals, users, and technical needs with clean design, modern technology, and careful attention to detail.
                        </p>
                    </div>

                    <div className="w-full aspect-video lg:w-[500px] lg:h-[300px] lg:aspect-auto rounded-[24px] bg-gradient-to-br from-[#1a0b2e] to-black border border-white/10 flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#8A38F533_0%,_transparent_70%)] opacity-50"></div>
                        <h1 className="text-8xl lg:text-[150px] font-bold tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500 select-none">KD</h1>
                    </div>
                </div>


                <div className="reveal-section text-center mb-[100px] lg:mb-[150px]">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-4 py-1 backdrop-blur-md mb-8">
                        <span className="text-xs font-medium text-[#FFFFFF]">Our mission</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-[80px] font-medium leading-[1.1] tracking-tight lg:tracking-[-3px] max-w-[900px] mx-auto">
                        Designed to elevate brands with meaning
                    </h2>
                </div>


                <div className="reveal-section flex flex-col lg:flex-row gap-10 lg:gap-[100px] mb-[100px] lg:mb-[200px]">
                    <div className="w-full lg:w-[400px]">
                        <div className="bg-[#D9D9D9] text-black rounded-[24px] p-6 lg:p-8">
                            <div className="inline-block bg-black text-white text-sm font-medium px-4 py-2 rounded-full mb-6 lg:mb-8">
                                Core value
                            </div>
                            <ul className="space-y-4">
                                {coreValues.map((value, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 0L9.79044 6.20956L16 8L9.79044 9.79044L8 16L6.20956 9.79044L0 8L6.20956 6.20956L8 0Z" fill="black" />
                                        </svg>
                                        <span className="font-medium">{value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>


                    <div className="flex-1 pt-0 lg:pt-8">
                        <p className="text-base lg:text-[18px] leading-relaxed lg:leading-[32px] text-gray-400 max-w-full lg:max-w-[600px]">
                            Kripon Digital was created by a team of skilled designers, developers, and creative thinkers who believe in the power of digital transformation. We started this agency with a clear purpose: to help businesses grow by combining clean design, modern technology, and strategic execution. From high-quality websites and mobile applications to advanced trading dashboards and engaging video content, we provide end-to-end digital solutions tailored to your business needs. Our mission is to become a reliable digital partner for brands looking to grow, innovate, and stand out in today's competitive digital world.
                        </p>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default AboutPage
