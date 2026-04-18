import { useState, useEffect } from 'react'
import Button from './button'
import { useNavigate } from 'react-router-dom'

function LeadPopup() {
    const [isVisible, setIsVisible] = useState(false)
    const [hasDismissed, setHasDismissed] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        // Only show once per session
        if (sessionStorage.getItem('kripon_lead_popup_dismissed')) {
            setHasDismissed(true)
            return
        }

        // Show after 15 seconds if they haven't dismissed it
        const timer = setTimeout(() => {
            if (!hasDismissed) {
                // Feature disabled by user request
                // setIsVisible(true)
            }
        }, 15000)

        // Exit intent detection (cursor leaves viewport)
        const handleMouseLeave = (e) => {
            if (e.clientY <= 0 && !hasDismissed && !isVisible) {
                // Feature disabled by user request
                // setIsVisible(true)
            }
        }

        document.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            clearTimeout(timer)
            document.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [hasDismissed, isVisible])

    const handleDismiss = () => {
        setIsVisible(false)
        setHasDismissed(true)
        sessionStorage.setItem('kripon_lead_popup_dismissed', 'true')
    }

    const handleAction = () => {
        handleDismiss()
        navigate('/contact')
    }

    const handleWhatsApp = () => {
        handleDismiss()
        const url = `https://wa.me/917024306915?text=${encodeURIComponent('Hi Kripon Digital! I would like a free website audit.')}`
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    if (!isVisible) return null

    return (
        <div className="fixed inset-0 z-99999 flex items-center justify-center p-4">
            {/* Backdrop with heavy blur */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity animate-in fade-in duration-500"
                onClick={handleDismiss}
            />

            {/* Premium Gradient Border Wrapper */}
            <div className="relative w-full max-w-lg rounded-[32px] p-[1.5px] bg-gradient-to-br from-white/20 via-white/5 to-[#8A38F5]/40 shadow-[0_0_80px_-20px_rgba(138,56,245,0.4)] animate-in slide-in-from-bottom-8 zoom-in-95 duration-500">
                {/* Popup Inner Content */}
                <div className="relative w-full h-full rounded-[30px] bg-neutral-950/90 backdrop-blur-3xl p-10 overflow-hidden">

                    {/* Dynamic Ambient Lights */}
                    <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-[#8A38F5] opacity-20 blur-[80px] animate-pulse" />
                    <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-[#340B73] opacity-30 blur-[80px]" style={{ animationDuration: '4s' }} />

                    {/* Close Button */}
                    <button
                        onClick={handleDismiss}
                        className="absolute top-6 right-6 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/50 hover:bg-white/10 hover:text-white transition-all z-20"
                        aria-label="Close"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="relative z-10 flex flex-col items-center text-center">
                        {/* Icon Container */}
                        <div className="mb-8 relative flex h-20 w-20 items-center justify-center rounded-[20px] bg-gradient-to-br from-[#8A38F5]/20 to-[#340B73]/20 border border-white/10 shadow-[inset_0_0_20px_rgba(138,56,245,0.2)] transform -rotate-6 transition-transform hover:rotate-0 duration-300">
                            <span className="text-4xl transform rotate-6">🔥</span>
                        </div>

                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:leading-tight">
                            Wait! Don't leave <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B985FF] to-[#8A38F5]">empty-handed.</span>
                        </h2>

                        <p className="mb-10 text-[17px] text-[#A1A1AA] leading-relaxed max-w-sm mx-auto font-light">
                            Get a <strong className="font-semibold text-white">Free Website Audit & Growth Strategy</strong>. We'll show you exactly why your competitors are converting more traffic.
                        </p>

                        <div className="flex w-full flex-col sm:flex-row gap-4 mb-6">
                            <Button
                                onClick={handleWhatsApp}
                                className="group relative flex-1 h-14 rounded-full bg-gradient-to-r from-[#20bd5a] to-[#128C7E] text-white flex items-center justify-center gap-3 font-semibold shadow-[0_10px_30px_-10px_rgba(37,211,102,0.5)] transition-all hover:-translate-y-1 hover:shadow-[0_15px_40px_-10px_rgba(37,211,102,0.6)] overflow-hidden"
                            >
                                {/* Shimmer Effect inside button */}
                                <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.82 14.12c-.24.68-1.42 1.34-1.96 1.38-.52.04-1 .24-3.37-.7-2.86-1.14-4.68-4.06-4.82-4.25-.14-.19-1.14-1.52-1.14-2.9 0-1.38.72-2.06.98-2.34s.56-.36.76-.36c.2 0 .38 0 .54.01.18.01.42-.07.66.5.24.58.82 2 .9 2.14.06.14.1.32.02.5-.1.2-.14.32-.28.48-.14.18-.3.38-.42.52-.14.14-.28.3-.12.58.16.28.72 1.18 1.54 1.92 1.06.94 1.96 1.24 2.24 1.38.28.14.44.12.6-.06.16-.2.7-.82.9-1.1.18-.28.38-.24.64-.14.26.08 1.66.78 1.94.92.28.14.46.22.54.34.06.12.06.68-.18 1.36z" /></svg>
                                Claim Free Audit
                            </Button>

                            <Button
                                onClick={handleAction}
                                className="flex-1 h-14 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 flex items-center justify-center font-medium transition-all"
                            >
                                Contact Sales
                            </Button>
                        </div>

                        <p className="text-[12px] text-white/30 uppercase tracking-[0.2em] font-medium">
                            100% Free · No Obligation
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeadPopup
