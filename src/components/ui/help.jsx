import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function Help({ image, title, description, serviceKey, className, imageHeight }) {
    const navigate = useNavigate()
    const cardRef = useRef(null)
    const spotRef = useRef(null)

    const handleMouseMove = (e) => {
        const card = cardRef.current
        if (!card) return
        const { left, top, width, height } = card.getBoundingClientRect()
        const x = e.clientX - left
        const y = e.clientY - top
        const rx = ((y - height / 2) / (height / 2)) * -5
        const ry = ((x - width / 2) / (width / 2)) * 5
        card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.025)`
        if (spotRef.current) {
            spotRef.current.style.background = `radial-gradient(380px at ${x}px ${y}px, rgba(138,56,245,0.18), transparent 70%)`
        }
    }

    const handleMouseLeave = () => {
        if (cardRef.current) {
            cardRef.current.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)'
        }
        if (spotRef.current) {
            spotRef.current.style.background = 'transparent'
        }
    }

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: 'preserve-3d',
                willChange: 'transform',
                transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
            onClick={() => serviceKey && navigate(`/contact?service=${serviceKey}`)}
            className={`relative flex flex-col gap-6 ${className} group rounded-[24px] ${serviceKey ? 'cursor-pointer' : 'cursor-default'}`}
        >
            {/* Cursor spotlight overlay */}
            <div
                ref={spotRef}
                style={{ transition: 'background 0.15s ease', borderRadius: '24px' }}
                className="pointer-events-none absolute inset-0 z-10"
            />

            {/* Image container */}
            <div className={`w-full overflow-hidden rounded-[20px] ${imageHeight} relative`}>
                <img
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.07]"
                    src={image}
                    alt={title}
                />
                {/* Purple tint overlay rising from bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#6B21A8]/50 via-[#8A38F5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Glowing accent line at image bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8A38F5] to-transparent translate-y-[2px] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>

            {/* Text section */}
            <div className="flex flex-col gap-2 px-2">
                <div className="flex items-center gap-2">
                    <h1 className="text-[#FFFFFF] font-medium text-[36px] leading-[41px] group-hover:text-[#C084FC] transition-colors duration-300">{title}</h1>
                    {/* Arrow that slides in on hover */}
                    {serviceKey && <span
                        style={{ transition: 'opacity 0.3s ease, transform 0.35s cubic-bezier(0.23,1,0.32,1)' }}
                        className="ml-auto mt-1 text-[#8A38F5] opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 shrink-0"
                    >
                        <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>}
                </div>
                <p className="text-[#FFFFFF] font-light text-[19px] leading-[28px] tracking-[0.47px] opacity-60 group-hover:opacity-95 transition-opacity duration-300">{description}</p>
            </div>
        </div>
    )
}

export default Help;