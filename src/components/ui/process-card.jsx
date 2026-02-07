import React from 'react'

function ProcessCard({ number, title, description, className, style, ...props }) {
    return (
        <div
            style={style}
            {...props}
            className={`w-full max-w-[600px] min-h-[300px] h-auto md:h-[300px] rounded-[24px] border border-white/10 bg-gradient-to-b from-[#1A0B2E] to-[#0D001A] backdrop-blur-xl flex flex-col items-center justify-center text-center p-6 md:p-8 shadow-2xl ${className}`}
        >
            <div className="text-[#FFFFFF99] font-medium text-[20px] mb-2">{number}</div>
            <h3 className="text-white font-bold text-[28px] md:text-[32px] mb-4">{title}</h3>
            <p className="text-[#FFFFFF99] text-[14px] md:text-[16px] leading-[24px] max-w-[400px]">
                {description}
            </p>
        </div>
    )
}

export default ProcessCard
