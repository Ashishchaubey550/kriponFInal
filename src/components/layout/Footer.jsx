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
                            href="mailto:digital@kripon.in"
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
                            <Link to="/blog" className="transition-colors hover:text-[#B985FF]">Blog</Link>
                            <Link to="/contact" className="transition-colors hover:text-[#B985FF]">Contact</Link>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Social</p>
                        <div className="flex flex-col gap-2.5 text-white/90">
                            <a href="https://www.instagram.com/kripon_digital/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-[#B985FF]" aria-label="Instagram">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37a4 4 0 1 1-7.75 1.25 4 4 0 0 1 7.75-1.25z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                                Instagram
                            </a>
                            <a href="https://www.facebook.com/kripondigital" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-[#B985FF]" aria-label="Facebook">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                                Facebook
                            </a>
                            <a href="https://x.com/kripondigital" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-[#B985FF]" aria-label="Twitter">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                                Twitter / X
                            </a>
                            {/* TODO: Replace with your actual LinkedIn company page URL */}
                            <a href="https://www.linkedin.com/company/kripon-digital" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-[#B985FF]" aria-label="LinkedIn">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.48 1s2.5 1.12 2.5 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.8V24h-5v-7.6c0-1.8 0-4.1-2.5-4.1s-2.9 1.9-2.9 4V24h-5V8z" />
                                </svg>
                                LinkedIn
                            </a>
                            <a href="https://wa.me/917024306915?text=Hi%20Kripon%20Digital!%20I%20visited%20your%20website." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-[#25D366]" aria-label="WhatsApp">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.82 14.12c-.24.68-1.42 1.34-1.96 1.38-.52.04-1 .24-3.37-.7-2.86-1.14-4.68-4.06-4.82-4.25-.14-.19-1.14-1.52-1.14-2.9 0-1.38.72-2.06.98-2.34s.56-.36.76-.36c.2 0 .38 0 .54.01.18.01.42-.07.66.5.24.58.82 2 .9 2.14.06.14.1.32.02.5-.1.2-.14.32-.28.48-.14.18-.3.38-.42.52-.14.14-.28.3-.12.58.16.28.72 1.18 1.54 1.92 1.06.94 1.96 1.24 2.24 1.38.28.14.44.12.6-.06.16-.2.7-.82.9-1.1.18-.28.38-.24.64-.14.26.08 1.66.78 1.94.92.28.14.46.22.54.34.06.12.06.68-.18 1.36z" />
                                </svg>
                                WhatsApp
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Contact</p>
                        <div className="flex flex-col gap-2.5">
                            <a href="mailto:digital@kripon.in" className="inline-flex items-center gap-2 text-white/90 transition-colors hover:text-[#B985FF]">
                                {/* Email Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
                                Email Us
                            </a>
                            <a href="tel:+917024306915" className="inline-flex items-center gap-2 text-white/90 transition-colors hover:text-[#B985FF]">
                                {/* Call Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.09 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.73 3.06a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.99.36 2.01.6 3.06.73A2 2 0 0 1 22 16.92z" /></svg>
                                +91 8823850908
                            </a>
                            <a href="https://wa.me/917024306915" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/90 transition-colors hover:text-[#25D366]">
                                {/* WhatsApp Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.82 14.12c-.24.68-1.42 1.34-1.96 1.38-.52.04-1 .24-3.37-.7-2.86-1.14-4.68-4.06-4.82-4.25-.14-.19-1.14-1.52-1.14-2.9 0-1.38.72-2.06.98-2.34s.56-.36.76-.36c.2 0 .38 0 .54.01.18.01.42-.07.66.5.24.58.82 2 .9 2.14.06.14.1.32.02.5-.1.2-.14.32-.28.48-.14.18-.3.38-.42.52-.14.14-.28.3-.12.58.16.28.72 1.18 1.54 1.92 1.06.94 1.96 1.24 2.24 1.38.28.14.44.12.6-.06.16-.2.7-.82.9-1.1.18-.28.38-.24.64-.14.26.08 1.66.78 1.94.92.28.14.46.22.54.34.06.12.06.68-.18 1.36z" /></svg>
                                WhatsApp Us
                            </a>
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
