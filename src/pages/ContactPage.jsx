import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import CustomCursor from '../components/ui/CustomCursor'
import Button from '../components/ui/button'

function ContactPage() {
    return (
        <div className="w-full bg-black min-h-screen text-white flex flex-col">
            <CustomCursor />


            <div className="grow flex flex-col items-center justify-center px-4 md:px-10 pt-[130px] lg:pt-[150px] pb-20">
                <div className="w-full max-w-3xl flex flex-col items-center">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium text-center mb-6 tracking-tight">
                        Let's work together
                    </h1>
                    <p className="text-gray-400 text-center text-base md:text-xl max-w-2xl mb-10 md:mb-16">
                        Let's build something impactful together - whether it's your brand, your website, or your next big idea.
                    </p>

                    <form className="w-full flex flex-col gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Jayesh"
                                    className="w-full bg-white/10 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-white/20 transition-colors text-white placeholder:text-white/30"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="yoob15136@gmail.com"
                                    className="w-full bg-white/10 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-white/20 transition-colors text-white placeholder:text-white/30"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="service" className="text-sm font-medium text-gray-400 ml-1">Service Needed ?</label>
                            <div className="relative">
                                <select
                                    id="service"
                                    className="w-full bg-white/10 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-white/20 transition-colors text-white appearance-none cursor-pointer"
                                    defaultValue=""
                                >
                                    <option value="" disabled className="text-gray-500">Select...</option>
                                    <option value="web-dev" className="text-black">Web Development</option>
                                    <option value="app-dev" className="text-black">App Development</option>
                                    <option value="design" className="text-black">UI/UX Design</option>
                                    <option value="marketing" className="text-black">Marketing</option>
                                </select>
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">What Can I Help You...</label>
                            <textarea
                                id="message"
                                rows={6}
                                placeholder="Hello, I'd like to enquire about..."
                                className="w-full bg-white/10 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-white/20 transition-colors text-white placeholder:text-white/30 resize-none"
                            ></textarea>
                        </div>

                        <Button className="mt-4 self-end bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-full font-medium transition-all">
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ContactPage
