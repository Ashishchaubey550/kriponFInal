import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import { Button } from '../../components/ui/button'
import SeoMeta from '../../components/ui/SeoMeta'

export default function AppServicePage() {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#B985FF]/30">
            <SeoMeta
                title="Mobile App Development Company in India | iOS & Android | Kripon"
                description="Kripon Digital develops premium, scalable iOS and Android applications. From MVP to enterprise scale, we build apps that dominate the App Store."
                path="/services/app-development"
                keywords="mobile app development india, ios app developers, android app development agency, react native developers"
            />
            <Header />

            <main className="pt-32 pb-20">
                {/* Hero Section */}
                <section className="container mx-auto px-4 lg:px-8 max-w-7xl relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 mt-10">
                        <div className="flex-1 text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 mb-8"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                                </span>
                                iOS & Android Engineering
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
                            >
                                Build Apps that <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#B985FF]">people love using.</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-xl text-neutral-400 mb-10 max-w-xl leading-relaxed"
                            >
                                We engineer native-feeling cross-platform applications using React Native and Flutter. Fast deployment, flawless UI, and infinite scalability.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <Button
                                    onClick={() => navigate('/contact')}
                                    className="h-14 px-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:scale-105"
                                >
                                    Discuss Your App Idea
                                </Button>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex-1 relative"
                        >
                            <div className="aspect-[4/5] bg-gradient-to-br from-blue-900/40 to-black rounded-[40px] border border-white/10 flex items-center justify-center p-8 backdrop-blur-xl shadow-2xl overflow-hidden relative">
                                <div className="w-[300px] h-[600px] bg-black rounded-[40px] border-[8px] border-neutral-800 shadow-2xl absolute shadow-[0_0_50px_rgba(37,99,235,0.4)] overflow-hidden">
                                    <div className="w-full h-full bg-gradient-to-b from-[#111] to-black p-6">
                                        <div className="w-1/2 h-6 bg-neutral-900 rounded-full mx-auto mb-8" />
                                        <div className="space-y-4">
                                            <div className="w-full h-32 bg-gradient-to-r from-blue-600 to-[#8A38F5] rounded-2xl animate-pulse" />
                                            <div className="flex gap-4">
                                                <div className="w-1/2 h-24 bg-neutral-900 rounded-2xl" />
                                                <div className="w-1/2 h-24 bg-neutral-900 rounded-2xl" />
                                            </div>
                                            <div className="w-full h-40 bg-neutral-900 rounded-2xl" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
