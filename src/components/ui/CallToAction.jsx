import Button from './button'
import { useNavigate } from 'react-router-dom'
import backgroundImage from '../../assets/Have_an_ideo_background.jpg'

function CallToAction() {
    const navigate = useNavigate()

    return (
        <section className="relative w-full min-h-[560px] md:min-h-[760px] flex items-center justify-center overflow-hidden bg-black px-4 py-14 md:px-10">

            <img
                src={backgroundImage}
                alt="Have an idea background"
                className="absolute inset-0 w-full h-full object-cover z-0 scale-[1.07]"
            />

            <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_22%_14%,rgba(138,56,245,0.26),transparent_48%),radial-gradient(circle_at_80%_78%,rgba(58,116,255,0.14),transparent_42%),linear-gradient(180deg,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.74)_100%)]" />

            <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center rounded-[30px] border border-white/15 bg-black/35 px-6 py-12 text-center backdrop-blur-md md:px-10 md:py-16">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/40 px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/80">
                    <span className="h-2 w-2 rounded-full bg-[#8A38F5] shadow-[0_0_12px_rgba(138,56,245,0.9)]" />
                    Let's Build Something Real
                </div>

                <h2 className="text-balance text-white text-4xl sm:text-6xl lg:text-[92px] font-light leading-[1.04] tracking-tight">
                    Have an idea
                    <span className="block font-normal text-white/90">worth building?</span>
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
                    From concept to launch, we craft web and app experiences that feel premium,
                    perform fast, and convert better.
                </p>

                <div className="mt-9 flex w-full max-w-xl flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button
                        onClick={() => navigate('/contact')}
                        className="h-14 w-full rounded-full bg-[linear-gradient(180deg,#9E59FF_0%,#4B1695_100%)] px-8 text-sm font-semibold tracking-[0.18em] text-white uppercase shadow-[0_12px_40px_-18px_rgba(138,56,245,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_42px_-16px_rgba(138,56,245,0.85)] sm:w-auto"
                    >
                        Start Project
                    </Button>

                    <Button
                        onClick={() => navigate('/projects')}
                        className="h-14 w-full rounded-full border border-white/35 bg-black/35 px-8 text-sm font-semibold tracking-[0.14em] text-white uppercase transition-all duration-300 hover:bg-white/10 sm:w-auto"
                    >
                        See Work
                    </Button>
                </div>

                <div className="mt-8 flex items-center gap-5 text-[12px] tracking-[0.14em] uppercase text-white/60">
                    <span>Fast delivery</span>
                    <span className="h-1 w-1 rounded-full bg-white/40" />
                    <span>Design-first team</span>
                    <span className="h-1 w-1 rounded-full bg-white/40" />
                    <span>India · Nepal · Bhutan</span>
                </div>
            </div>
        </section>
    )
}

export default CallToAction
