import { Link } from 'react-router-dom'
import logo from '../../assets/logo.webp'

function Footer() {
    return (
        <footer className="relative w-full overflow-hidden border-t border-white/10 bg-black text-white px-4 lg:px-6 pt-14 lg:pt-20 pb-7 lg:pb-10">
            <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(138,56,245,0.22)_0%,rgba(0,0,0,0)_70%)]" />

            <div className="relative mx-auto max-w-[1240px] rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.01)_100%)] p-7 md:p-9 lg:p-11 backdrop-blur-sm">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
                    <div className="lg:col-span-5">
                        <div className="mb-5 flex items-center gap-2">
                            <img src={logo} alt="Kripon Digital logo" className="h-[30px] w-[34px] md:h-[41.29px] md:w-[46px]" />
                            <p className="text-xl font-bold"><span className="text-[#FFFFFF]">Kripon</span><span className="text-[#848483]">Digital</span></p>
                        </div>

                        <p className="max-w-md text-sm leading-7 text-white/60">
                            We design and build high-performance digital experiences for growing brands. Ready to turn ideas into outcomes.
                        </p>

                        <a
                            href="mailto:ashish550chaubey@gmail.com"
                            className="mt-6 inline-flex items-center rounded-full border border-[#8A38F5]/55 bg-[linear-gradient(180deg,rgba(156,73,255,0.22)_0%,rgba(105,31,208,0.12)_100%)] px-5 py-2.5 text-sm font-medium text-[#EADFFF] transition-all hover:border-[#8A38F5]/80 hover:bg-[linear-gradient(180deg,rgba(156,73,255,0.3)_0%,rgba(105,31,208,0.2)_100%)]"
                        >
                            Start a project
                        </a>
                    </div>

                    <div className="lg:col-span-2">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Navigation</p>
                        <div className="flex flex-col gap-2.5 text-white/90">
                            <Link to="/" className="transition-colors hover:text-[#B985FF]">Home</Link>
                            <Link to="/services" className="transition-colors hover:text-[#B985FF]">Services</Link>
                            <Link to="/projects" className="transition-colors hover:text-[#B985FF]">Work</Link>
                            <Link to="/about" className="transition-colors hover:text-[#B985FF]">About</Link>
                            <Link to="/contact" className="transition-colors hover:text-[#B985FF]">Contact</Link>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Social</p>
                        <div className="flex flex-col gap-2.5 text-white/90">
                            <a href="#" className="inline-flex items-center gap-2 transition-colors hover:text-[#B985FF]" aria-label="Instagram">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37a4 4 0 1 1-7.75 1.25 4 4 0 0 1 7.75-1.25z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                                Instagram
                            </a>
                            <a href="#" className="inline-flex items-center gap-2 transition-colors hover:text-[#B985FF]" aria-label="LinkedIn">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.48 1s2.5 1.12 2.5 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.8V24h-5v-7.6c0-1.8 0-4.1-2.5-4.1s-2.9 1.9-2.9 4V24h-5V8z" />
                                </svg>
                                LinkedIn
                            </a>
                            <a href="#" className="inline-flex items-center gap-2 transition-colors hover:text-[#B985FF]" aria-label="Behance">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M8.6 11.2c1.5-.5 2.2-1.6 2.2-3.1C10.8 5.6 9 4 6 4H0v16h6.3c3.2 0 5.3-1.8 5.3-4.7 0-2.1-1.1-3.4-3-4.1zM3 6.8h2.5c1.5 0 2.2.5 2.2 1.7 0 1.2-.8 1.8-2.2 1.8H3V6.8zm2.9 10.4H3v-4.1h2.8c1.7 0 2.6.6 2.6 2.1 0 1.4-1 2-2.5 2zM16 7h7V5h-7v2zm8 6.5c0-3.5-2.1-5.7-5.3-5.7-3.4 0-5.7 2.4-5.7 6.1 0 3.8 2.2 6.1 5.9 6.1 2.7 0 4.6-1.2 5.3-3.5h-2.9c-.4.9-1.2 1.3-2.4 1.3-1.7 0-2.8-1-2.9-2.8H24v-1.5zm-8-1c.2-1.7 1.2-2.6 2.7-2.6 1.5 0 2.4.9 2.5 2.6H16z" />
                                </svg>
                                Behance
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Contact</p>
                        <div className="flex flex-col gap-2.5">
                            <a href="mailto:ashish550chaubey@gmail.com" className="text-white/90 transition-colors hover:text-[#B985FF]">ashish550chaubey@gmail.com</a>
                            <a href="tel:+917024306915" className="text-white/90 transition-colors hover:text-[#B985FF]">+91 7024306915</a>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-white/10 pt-5 text-xs text-white/45 md:flex md:items-center md:justify-between">
                    <p>Copyright {new Date().getFullYear()} Kripon Digital. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Built for clarity, speed, and growth.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
