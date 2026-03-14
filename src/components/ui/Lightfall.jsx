import { useEffect, useRef } from 'react'

function Lightfall({ color = '#8A38F5', particleCount = 50 }) {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        let animationFrameId
        let particles = []

        const setCanvasSize = () => {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }

        setCanvasSize()
        window.addEventListener('resize', setCanvasSize)

        class Particle {
            constructor() {
                this.reset()
            }

            reset() {
                this.x = Math.random() * canvas.width
                this.y = Math.random() * -canvas.height
                this.speed = 0.5 + Math.random() * 1.5
                this.opacity = 0.1 + Math.random() * 0.3
                this.length = 30 + Math.random() * 80
                this.thickness = 0.5 + Math.random() * 1
            }

            update() {
                this.y += this.speed
                if (this.y > canvas.height) {
                    this.reset()
                }
            }

            draw() {
                const gradient = ctx.createLinearGradient(this.x, this.y, this.x, this.y + this.length)
                gradient.addColorStop(0, `${color}00`)
                gradient.addColorStop(0.5, `${color}${Math.floor(this.opacity * 255).toString(16).padStart(2, '0')}`)
                gradient.addColorStop(1, `${color}00`)

                ctx.strokeStyle = gradient
                ctx.lineWidth = this.thickness
                ctx.beginPath()
                ctx.moveTo(this.x, this.y)
                ctx.lineTo(this.x, this.y + this.length)
                ctx.stroke()
            }
        }

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle())
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            
            particles.forEach(particle => {
                particle.update()
                particle.draw()
            })

            animationFrameId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener('resize', setCanvasSize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [color, particleCount])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.6 }}
        />
    )
}

export default Lightfall
