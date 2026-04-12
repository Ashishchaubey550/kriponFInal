import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import SeoMeta from '../../components/ui/SeoMeta'

export default function WebsiteServicePage() {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#8A38F5]/30">
            <SeoMeta
                title="Custom Website Development Agency in India | Kripon Digital"
                description="We build blazing-fast, high-converting websites and web applications for businesses in India, Nepal, and Bhutan. Get a free website architecture consultation today."
                path="/services/website-development"
                keywords="website development agency india, custom web design, react developers india, high converting websites"
            />
            <Header />

            <main className="pt-32 pb-20">
                {/* Hero Section */}
                <section className="container mx-auto px-4 lg:px-8 max-w-7xl relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8A38F5]/20 rounded-full blur-[120px] pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mt-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 rounded-full border border-[#8A38F5]/30 bg-[#8A38F5]/10 px-4 py-2 text-sm font-medium text-[#c9a3ff] mb-8"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8A38F5] opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#B985FF]"></span>
                            </span>
                            Top-Rated Web Development Agency
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
                        >
                            Websites that <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B985FF] to-[#8A38F5]">convert traffic</span> into revenue.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-neutral-400 mb-10 max-w-2xl leading-relaxed"
                        >
                            Stop losing customers to slow, outdated template websites. We architect custom React and Next.js platforms designed specifically to dominate your local market and drive sales.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                        >
                            <button
                                onClick={() => navigate('/contact')}
                                className="h-14 px-8 rounded-full bg-gradient-to-r from-[#8A38F5] to-[#340B73] hover:from-[#B985FF] hover:to-[#8A38F5] text-white font-semibold text-lg transition-all shadow-[0_0_30px_rgba(138,56,245,0.3)] hover:scale-105"
                            >
                                Get a Free Consultation
                            </button>
                        </motion.div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="container mx-auto px-4 lg:px-8 max-w-7xl mt-32">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Lightning Fast", desc: "Sub-second load times utilizing modern React architecture and edge caching." },
                            { title: "Conversion Optimized", desc: "UI/UX designed explicitly based on user psychology and A/B tested layouts." },
                            { title: "Technical SEO", desc: "Built with structured data, perfect Lighthouse scores, and semantic HTML to rank #1." }
                        ].map((feature, idx) => (
                            <div key={idx} className="p-8 rounded-[30px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#8A38F5]/10 blur-3xl group-hover:bg-[#8A38F5]/20 transition-all rounded-full translate-x-1/2 -translate-y-1/2" />
                                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-neutral-400 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ Schema target area */}
                <section className="container mx-auto px-4 lg:px-8 max-w-3xl mt-32">
                    <h2 className="text-4xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: "How much does a custom website cost?", a: "Our premium custom web development packages typically range from ₹40,000 to ₹1,50,000 depending on platform complexity, backend needs, and design scale." },
                            { q: "How long does it take to build a website?", a: "A standard highly-optimized website takes 2-4 weeks. Complex web applications with custom dashboards or e-commerce capabilities take 6-12 weeks." },
                            { q: "Do you provide SEO with the website?", a: "Yes. Every website we build includes robust technical SEO out of the box, including fast loading speeds, semantic structure, JSON-LD schema, and mobile optimization." }
                        ].map((faq, idx) => (
                            <div key={idx} className="p-6 rounded-2xl border border-white/10 bg-black">
                                <h3 className="text-xl font-semibold mb-2">{faq.q}</h3>
                                <p className="text-neutral-400">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
