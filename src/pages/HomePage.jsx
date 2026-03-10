import { useRef, useState } from 'react'
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
import Footer from '../components/layout/Footer'
import CustomCursor from '../components/ui/CustomCursor'
import HeroVideo from '../assets/heroVideo.mp4'
import ProjectsList from '../components/ui/ProjectsList'
import Lightfall from '../components/ui/Lightfall'
import Threads from '../components/ui/Threads'
import OrbitalAnimation from '../components/ui/OrbitalAnimation'

gsap.registerPlugin(ScrollTrigger)

import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();
    const container = useRef()
    const [expandedService, setExpandedService] = useState(0);

    const services = [
        {
            id: 0,
            title: 'WEB DESIGN',
            number: '01',
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="4" y="6" width="24" height="20" rx="2" />
                    <line x1="4" y1="11" x2="28" y2="11" />
                    <circle cx="8" cy="8.5" r="0.5" fill="currentColor" />
                    <circle cx="10" cy="8.5" r="0.5" fill="currentColor" />
                    <circle cx="12" cy="8.5" r="0.5" fill="currentColor" />
                </svg>
            ),
            description: 'We are a results-driven website design and development studio. We create highly engaging custom websites and web apps, fully optimized for SEO to...',
            subcategories: [
                'WEB & APP DESIGN',
                'CONTENT MANAGEMENT',
                'ECOMMERCE',
                'WEBSITE HOSTING',
                'CUSTOMER JOURNEY',
                'LANDING PAGES',
                'UI & UX',
                'WEBSITE AUDITS'
            ]
        },
        {
            id: 1,
            title: 'COMMUNICATION',
            number: '02',
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 4L4 10L16 16L28 10L16 4Z" />
                    <path d="M4 16L16 22L28 16" />
                    <path d="M4 22L16 28L28 22" />
                </svg>
            ),
            description: 'Strategic communication solutions that connect your brand with your audience.',
            subcategories: [
                'BRAND STRATEGY',
                'CONTENT CREATION',
                'SOCIAL MEDIA',
                'EMAIL MARKETING',
                'PR & OUTREACH',
                'MESSAGING'
            ]
        },
        {
            id: 2,
            title: 'GRAPHIC DESIGN',
            number: '03',
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="16" cy="16" r="10" />
                    <path d="M16 6L18 14L26 16L18 18L16 26L14 18L6 16L14 14Z" />
                </svg>
            ),
            description: 'Visual design that captures attention and communicates your brand essence.',
            subcategories: [
                'LOGO DESIGN',
                'BRAND IDENTITY',
                'PRINT DESIGN',
                'PACKAGING',
                'ILLUSTRATIONS',
                'ICONOGRAPHY'
            ]
        },
        {
            id: 3,
            title: 'BRANDING',
            number: '04',
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M8 28L8 16L16 4L24 16L24 28" />
                    <line x1="12" y1="20" x2="20" y2="20" />
                    <line x1="12" y1="24" x2="20" y2="24" />
                </svg>
            ),
            description: 'Complete brand identity systems that make your business memorable.',
            subcategories: [
                'BRAND STRATEGY',
                'VISUAL IDENTITY',
                'BRAND GUIDELINES',
                'POSITIONING',
                'NAMING',
                'REBRANDING'
            ]
        },
        {
            id: 4,
            title: 'COPYWRITING',
            number: '05',
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="6" y="4" width="20" height="24" rx="2" />
                    <line x1="10" y1="10" x2="22" y2="10" />
                    <line x1="10" y1="14" x2="22" y2="14" />
                    <line x1="10" y1="18" x2="18" y2="18" />
                </svg>
            ),
            description: 'Compelling copy that tells your story and drives action.',
            subcategories: [
                'WEB COPY',
                'BRAND VOICE',
                'SEO WRITING',
                'AD COPY',
                'STORYTELLING',
                'UX WRITING'
            ]
        }
    ];

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

                    {/* Hero Video */}
                    <div className='reveal-section w-full lg:w-[1200px] aspect-video lg:aspect-auto lg:h-[675px] bg-[#D9D9D9] mb-[100px] lg:mb-[200px] overflow-hidden relative rounded-xl lg:rounded-none'>
                        <video
                            src={HeroVideo}
                            autoPlay
                            loop
                            muted
                            className='w-full h-full object-cover lg:scale-[1.25]'
                        />
                    </div>

                    {/* About Section */}
                    <div className='reveal-section w-full mb-[100px] lg:mb-[200px]'>
                        <div className="flex justify-between items-center mb-0 px-6 lg:px-16 py-5 border-b border-white/10">
                            <span className="text-[11px] lg:text-[13px] tracking-[3px] uppercase text-white/40 font-medium">// About Kripon°</span>
                            <span className="text-[11px] lg:text-[13px] tracking-[3px] uppercase text-white/40 font-medium">Since 2024</span>
                        </div>

                        <div className="flex flex-col lg:flex-row min-h-[480px] lg:min-h-[560px]">

                            {/* Left Column */}
                            <div className="w-full lg:w-[55%] flex flex-col px-6 lg:px-16 py-12 lg:py-14 gap-10 relative overflow-hidden">
                                <div className="absolute inset-0 z-0">
                                    <Threads
                                        color={[0.2235294117647059, 0.12156862745098039, 0.3803921568627451]}
                                        amplitude={1.9}
                                        distance={0}
                                        enableMouseInteraction={true}
                                    />
                                </div>
                                <h2 className="text-[34px] md:text-[50px] lg:text-[56px] xl:text-[62px] font-extrabold leading-[0.95] tracking-[-1px] lg:tracking-[-2px] text-white text-left uppercase italic relative z-10">
                                    Sparking Ideas,<br />
                                    Igniting Success.
                                </h2>
                                <p className="text-[11px] lg:text-[12px] leading-[22px] lg:leading-[24px] text-white/40 max-w-[480px] text-left mt-8">
                                    We envision a world where design is not decoration, but direction. A world where brands and ideas grow through clarity, consistency, and soul.
                                </p>
                            </div>

                            {/* Vertical Divider */}
                            <div className="hidden lg:block w-px bg-white/10"></div>

                            {/* Right Column */}
                            <div className="w-full lg:w-[45%] flex flex-col px-6 lg:px-14 py-12 lg:py-14 bg-black text-left">
                                <div className="space-y-7 lg:space-y-8 flex-1">
                                    <div className="flex items-start gap-4">
                                        <div className="w-[6px] h-[6px] rounded-full bg-white/80 mt-[9px] shrink-0"></div>
                                        <div>
                                            <h3 className="text-white font-bold text-[16px] lg:text-[17px] leading-[22px] mb-2">Harnessing the Power of Ideas</h3>
                                            <p className="text-white/35 text-[13px] lg:text-[14px] leading-[22px]">We transform creative concepts into inspiring campaigns.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Services Cards */}
                    <div className='reveal-section flex flex-col lg:flex-row w-full lg:max-w-[975px] items-stretch lg:items-center gap-6 px-4 lg:px-4 mb-[100px] lg:mb-[200px]'>

                        <div className="w-full lg:w-1/2">
                            <Help
                                image={hellofrom}
                                title="Web & App Development"
                                description="Strategic design that positions AI products for trust and clarity."
                                className="w-full h-full lg:min-h-[607px]"
                                imageHeight="h-[300px] lg:h-[607px]"
                            />
                        </div>

                        <div className='flex w-full lg:w-1/2 text-left flex-col gap-6 lg:gap-8'>
                            <Help
                                image={hellofrom}
                                title="UX/UI design"
                                description="Interfaces that adapt, predict, and respond intelligently."
                                className="w-full"
                                imageHeight="h-[250px] lg:h-[450px]"
                            />
                            <Help
                                image={hellofrom}
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