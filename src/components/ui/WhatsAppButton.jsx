import { useState, useEffect } from 'react'

const WHATSAPP_NUMBER = '917024306915'
const DEFAULT_MESSAGE = 'Hi Kripon Digital! I visited your website and I\'m interested in your services. Can we discuss my project?'

function WhatsAppButton() {
    const [isVisible, setIsVisible] = useState(false)
    const [isPulsing, setIsPulsing] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 2000)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setIsPulsing(prev => !prev)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    const handleClick = () => {
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    if (!isVisible) return null

    return (
        <button
            onClick={handleClick}
            aria-label="Chat with us on WhatsApp"
            className="group fixed bottom-6 right-6 z-[9999] flex items-center gap-3 rounded-full transition-all duration-500"
            style={{ animation: isVisible ? 'whatsappSlideIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' : 'none' }}
        >
            {/* Tooltip */}
            <span className="hidden md:block opacity-0 group-hover:opacity-100 bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-full shadow-lg transition-all duration-300 translate-x-2 group-hover:translate-x-0 whitespace-nowrap">
                Chat with us 💬
            </span>

            {/* Button */}
            <span className="relative flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[#25D366] shadow-[0_4px_24px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_32px_rgba(37,211,102,0.65)] hover:scale-110 active:scale-95 transition-all duration-300">
                {/* Pulse ring */}
                {isPulsing && (
                    <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
                )}

                {/* WhatsApp Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-8 h-8 fill-white relative z-10"
                    aria-hidden="true"
                >
                    <path d="M16.004 0h-.018C7.174 0 .187 6.988.187 15.8c0 3.45 1.106 6.65 2.986 9.255L.424 31.65l6.82-2.696a15.674 15.674 0 008.76 2.646c8.812 0 15.8-6.988 15.8-15.8S24.816 0 16.004 0zm9.466 22.328c-.396 1.118-1.958 2.046-3.212 2.316-.862.182-1.988.328-5.78-1.242-4.852-2.008-7.974-6.936-8.216-7.258-.232-.322-1.958-2.606-1.958-4.972s1.238-3.528 1.678-4.012c.44-.484.962-.606 1.282-.606.322 0 .642.002.922.016.296.016.694-.112 1.086.828.396.952 1.352 3.296 1.47 3.536.118.24.196.518.038.838-.156.322-.236.518-.47.798-.232.28-.49.626-.7.838-.232.24-.474.498-.204.978.27.478 1.2 1.978 2.578 3.204 1.77 1.576 3.262 2.064 3.73 2.292.468.228.742.19 1.016-.116.274-.306 1.178-1.372 1.49-1.842.314-.47.626-.392 1.058-.236.432.156 2.762 1.302 3.234 1.54.47.236.786.356.904.554.116.196.116 1.148-.28 2.266z" />
                </svg>
            </span>

            {/* CSS Animation */}
            <style>{`
                @keyframes whatsappSlideIn {
                    from { opacity: 0; transform: translateY(40px) scale(0.8); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
            `}</style>
        </button>
    )
}

export default WhatsAppButton
