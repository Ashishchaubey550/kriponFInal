
import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Footer from '../components/layout/Footer'
import CustomCursor from '../components/ui/CustomCursor'
import Help from '../components/ui/help'
import BenefitsSection from '../components/ui/BenefitsSection'


import hellofrom from '../assets/Hellofromzet.jpg'
import homepage from '../assets/HomePage.jpg'

gsap.registerPlugin(ScrollTrigger)

const services = [
    {
        title: "Web Development",
        description: "We design and develop unique, user-centric, and high-performance websites tailored to your brand and business goals.",
        image: homepage
    },
    {
        title: "App Development",
        description: "From concept to launch, we build user-friendly and scalable mobile applications with clean design and robust functionality.",
        image: hellofrom
    },
    {
        title: "Stock Market Dashboard",
        description: "We develop custom stock market dashboards for algorithm trading platforms, focusing on real-time data visualization, performance tracking, and user-friendly interfaces.",
        image: homepage
    },
    {
        title: "Forex Trading Systems",
        description: "We create solutions, forex trading systems with smart dashboards, strategy integrators, and automation-ready architecture for seamless trading operations.",
        image: hellofrom
    },
    {
        title: "UI/UX Design",
        description: "We design intuitive user interfaces that are focused on usability, clarity, and engaging digital experiences.",
        image: homepage
    },
    {
        title: "Video Editing",
        description: "Professional video editing services to enhance your brand's visual presence across digital platforms.",
        image: hellofrom
    }
]

function ServicePage() {
    const container = useRef()

    useGSAP(() => {

        gsap.from('.hero-text', {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out'
        })


        gsap.from('.service-card', {
            scrollTrigger: {
                trigger: '.service-grid',
                start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out'
        })

    }, { scope: container })

    return (
        <div ref={container} className="bg-black min-h-screen text-white">
            <CustomCursor />

            <div className="relative mx-auto w-full max-w-screen-xl lg:max-w-[1440px] px-4 md:px-8 lg:px-[64px] pt-[100px] lg:pt-[150px]">


                <div className="text-center mb-[60px] lg:mb-[100px]">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-6 py-2 backdrop-blur-md mb-8 lg:mb-[52px] hero-text">
                        <span className="text-sm font-medium text-[#FFFFFF]">Our service</span>
                    </div>
                    <h1 className="hero-text text-5xl md:text-7xl lg:text-[120px] font-medium leading-none tracking-tight lg:tracking-[-4px] text-[#FFFFFF] mb-6 lg:mb-4">
                        Our service
                    </h1>
                    <p className="hero-text text-lg lg:text-[20px] text-gray-400">Going beyond what's possible</p>
                </div>


                <div className="service-grid grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:gap-y-16 mb-[100px] lg:mb-[200px]">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <Help
                                image={service.image}
                                title={service.title}
                                description={service.description}
                                className="w-full"
                                imageHeight="h-[250px] md:h-[300px] lg:h-[350px]"
                            />
                        </div>
                    ))}
                </div>


                <BenefitsSection />

                <Footer />
            </div>
        </div>
    )
}

export default ServicePage
