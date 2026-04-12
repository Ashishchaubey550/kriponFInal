import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import SeoMeta from '../../components/ui/SeoMeta'

export default function StartupLandingPage() {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#25D366]/30">
            <SeoMeta
                title="Tech Partner & MVP Development Agency for Startups | Kripon"
                description="We help ambitious startups build robust MVPs, scale digital products, and acquire users. Fixed pricing, fast delivery, scalable codebases."
                path="/for-startups"
                keywords="startup mvp development, tech partner for startups, app development for startups india"
            />
            <Header />

            <main className="pt-32 pb-20">
                <section className="container mx-auto px-4 lg:px-8 max-w-7xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#20bd5a]/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto mt-20 relative z-10">
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                            We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-[#20bd5a]">MVPs</span> for Ambitious Startups.
                        </h1>
                        <p className="text-xl text-neutral-400 mb-10 leading-relaxed font-light">
                            Skip the expensive in-house tech hiring. We act as your entire technical arm, taking your idea from whiteboard to production-ready scalable application in weeks, not months.
                        </p>

                        <div className="flex gap-4">
                            <button
                                onClick={() => navigate('/contact')}
                                className="h-14 px-8 rounded-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-400 hover:to-green-600 text-white font-bold text-lg shadow-[0_0_20px_rgba(37,211,102,0.4)]"
                            >
                                Book Strategy Call
                            </button>
                        </div>
                    </div>
                </section>

                {/* How it works for startups */}
                <section className="container mx-auto px-4 lg:px-8 max-w-5xl mt-40">
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">The Startup Playbook</h2>
                    <div className="grid md:grid-cols-3 gap-8 relative">
                        <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-black via-green-500/50 to-black z-0" />

                        {[
                            { step: "01", title: "Discovery & Arch", desc: "We map out your database, user flows, and tech stack to ensure future scalability without technical debt." },
                            { step: "02", title: "Rapid Development", desc: "Our team builds your product using modern frameworks like React, Next.js, and Node. Weekly sprints & updates." },
                            { step: "03", title: "Launch & Scale", desc: "We deploy to AWS/Vercel, monitor analytics, and begin iterating based on your first users' feedback." }
                        ].map((item, id) => (
                            <div key={id} className="relative z-10 bg-black border border-white/10 rounded-2xl p-8 hover:border-green-500/50 transition-colors">
                                <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center font-bold text-xl mb-6 mx-auto md:mx-0 shadow-[0_0_15px_rgba(37,211,102,0.2)]">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
