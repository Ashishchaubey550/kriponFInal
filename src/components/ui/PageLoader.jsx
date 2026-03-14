import logo from '../../assets/logo.png'

function PageLoader() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black">
            <div className="loader-grid" aria-hidden="true" />

            <div className="loader-orb loader-orb-left" aria-hidden="true" />
            <div className="loader-orb loader-orb-right" aria-hidden="true" />

            <div className="relative z-10 flex flex-col items-center px-6 text-center">
                <img
                    src={logo}
                    alt="Kripon Digital logo"
                    className="loader-logo mb-6 h-14 w-auto md:h-16"
                />

                <p className="loader-brand text-sm md:text-base tracking-[0.42em] text-white/80">
                    KRIPON DIGITAL
                </p>

                <div className="loader-bar mt-7 h-[2px] w-48 overflow-hidden rounded-full bg-white/20">
                    <span className="loader-bar-fill block h-full w-full" />
                </div>
            </div>
        </div>
    )
}

export default PageLoader