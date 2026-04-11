import { useState, useEffect } from 'react'

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight
            const documentHeight = document.documentElement.scrollHeight
            const scrollY = window.scrollY || document.documentElement.scrollTop

            const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100
            setProgress(Math.min(100, Math.max(0, scrollPercent)))
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll() // Initial check

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="fixed top-0 left-0 w-full h-[3px] z-[999999] pointer-events-none">
            <div
                className="h-full bg-gradient-to-r from-[#8A38F5] via-[#B985FF] to-[#8A38F5] transition-all duration-150 ease-out"
                style={{ width: `${progress}%` }}
            />
            {/* Glow effect */}
            <div
                className="absolute top-0 left-0 h-[10px] bg-[#8A38F5]/30 blur-[4px] transition-all duration-150 ease-out"
                style={{ width: `${progress}%` }}
            />
        </div>
    )
}
