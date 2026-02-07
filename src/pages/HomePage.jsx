import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Button from '../components/ui/button'
import Help from '../components/ui/help'
import hellofrom from '../assets/Hellofromzet.jpg'
import uiux from '../assets/uiux.jpg'
import appandweb from '../assets/appandweb.jpg'
import videoediting from '../assets/videoediting.jpg'

import ProcessCard from '../components/ui/process-card'
import homepage from '../assets/HomePage.jpg'
import Team from '../components/ui/Team'
import FAQ from '../components/ui/FAQ'
import CallToAction from '../components/ui/CallToAction'
import ProcessSection from '../components/ui/ProcessSection'
import Footer from '../components/layout/Footer'
import CustomCursor from '../components/ui/CustomCursor'
import HeroVideo from '../assets/heroVideo.mp4'
import ProjectsList from '../components/ui/ProjectsList'

gsap.registerPlugin(ScrollTrigger)

import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();
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

    return (
        <div ref={container}>
            <CustomCursor />
            <div className='relative mx-auto w-full min-h-screen'>

                <img className='absolute top-[100px] h-[1500px] w-full object-cover z-0' src={homepage} alt="" />

                <div className="relative z-20 flex flex-col items-center pt-[100px] text-center w-full px-4">


                    <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-4 py-1.5 md:px-6 md:py-2 backdrop-blur-md mb-8 lg:mb-[52px]">
                        <div className="h-1.5 w-1.5 md:h-2 md:w-2 bg-green-600 rounded-full animate-bounce"></div>
                        <span className="text-xs md:text-sm font-medium text-[#FFFFFF]">Available Now</span>
                    </div>

                    <div className='mb-8 lg:mb-[32px] w-full max-w-5xl lg:max-w-none'>
                        <h1 className="hero-text text-5xl md:text-8xl lg:text-[121.1px] font-medium leading-tight lg:leading-[121px] tracking-tight lg:tracking-[-5.5px] text-[#FFFFFF]">
                            Design with purpose,<br className="hidden md:block" /> Built for growth
                        </h1>
                    </div>

                    <div className='mb-12 lg:mb-[72px] w-full max-w-4xl lg:max-w-none px-4 lg:px-0'>
                        <h2 className="hero-text text-lg md:text-2xl lg:text-[26px] font-medium leading-relaxed lg:leading-[42px] text-[#FFFFFF99] opacity-60">
                            Kripon Digital designs and develops high-end websites for brands and <br className="hidden lg:block" /> businesses, with a strong focus on precision, performance, and visual excellence.
                        </h2>
                    </div>

                    <Button className='hero-text z-10 flex h-[36px] w-[92px] whitespace-nowrap items-center justify-center rounded-[999px] bg-[linear-gradient(180deg,#8A38F5_0%,#340B73_100%)] text-white shadow-[0px_2px_2px_-1px_#0000001A,0px_4px_10px_-2px_#0000000D] backdrop-blur-[10px] hover:opacity-90 mb-[100px]'>Book Call</Button>


                    <div className='reveal-section w-full lg:w-[1200px] aspect-video lg:aspect-auto lg:h-[675px] bg-[#D9D9D9] mb-[100px] lg:mb-[200px] overflow-hidden relative rounded-xl lg:rounded-none'>
                        <video
                            src={HeroVideo}
                            autoPlay
                            loop
                            muted
                            className='w-full h-full object-cover lg:scale-[1.25]'
                        />
                    </div>


                    <div className='reveal-section flex flex-col items-center justify-center w-full lg:w-[1104px] mb-[100px] lg:mb-[150px] px-4 lg:px-0'>
                        <Button className="w-[83px] border-2 px-[13px] py-[6px] rounded-[999px] border-solid border-[#FFFFFF] text-[#FFFFFF] backdrop-blur-2xl h-[40px] mb-6">About</Button>
                        <div className="flex items-center justify-center w-full lg:w-[1140px] px-0 lg:px-2.5">
                            <p className='w-full lg:w-[738px] text-center text-[#FFFFFF59] font-semibold text-xl md:text-3xl lg:text-[27px] leading-relaxed lg:leading-[42px] tracking-tight lg:tracking-[-0.56px]'>
                                <span className='text-[#FFFFFF] opacity-100 font-semibold text-xl md:text-3xl lg:text-[26px] leading-relaxed lg:leading-[42px] tracking-tight lg:tracking-[-0.56px]'>Kripon Digital is a </span>
                                design-driven web and app development agency crafting refined digital experiences for modern brands. We focus on detail, performance, and usability to deliver elegant, scalable, and high-impact digital solutions that help brand grow.
                            </p>
                        </div>
                    </div>


                    <div className='reveal-section w-full lg:w-[1104px] items-center justify-center flex flex-col mb-[40px] lg:mb-[60px] px-4 lg:px-0'>
                        <Button className="w-[83px] border-2 px-[13px] py-[6px] rounded-[999px] border-solid border-[#FFFFFF] text-[#FFFFFF] backdrop-blur-2xl h-[40px] mb-4">Services</Button>
                        <h2 className='text-[#FFFFFF] font-medium text-4xl md:text-6xl lg:text-[66px] leading-tight lg:leading-[84px] tracking-tight lg:tracking-[-3.5px] text-center'>How we can help</h2>
                    </div>


                    <div className='reveal-section flex flex-col lg:flex-row w-full lg:max-w-[975px] items-stretch lg:items-center gap-6 px-4 lg:px-4 mb-[100px] lg:mb-[200px]'>

                        <div className="w-full lg:w-1/2">
                            <Help
                                image={appandweb}
                                title="Web & App Development"
                                description="Strategic design that positions AI products for trust and clarity."
                                className="w-full h-full lg:min-h-[607px]"
                                imageHeight="h-[300px] lg:h-[607px]"
                            />
                        </div>


                        <div className='flex w-full lg:w-1/2 text-left flex-col gap-6 lg:gap-8'>
                            <Help
                                image={uiux}
                                title="UX/UI design"
                                description="Interfaces that adapt, predict, and respond intelligently."
                                className="w-full"
                                imageHeight="h-[250px] lg:h-[450px]"
                            />
                            <Help
                                image={videoediting}
                                title="Video Editing"
                                description="Frontend + backend + AI integrations — built for performance and scalability."
                                className="w-full"
                                imageHeight="h-[250px] lg:h-[450px]"
                            />
                        </div>
                    </div>

                    <ProjectsList />

                    <Button onClick={() => navigate('/projects')} className='z-10 flex h-[48px] px-8 whitespace-nowrap items-center justify-center rounded-[999px] bg-[#6925C0] text-white font-medium hover:opacity-90 mb-[100px] lg:mb-[150px]'>
                        More Projects
                    </Button>



                    <ProcessSection />

                    <Team />
                    <FAQ />
                    <CallToAction />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default HomePage