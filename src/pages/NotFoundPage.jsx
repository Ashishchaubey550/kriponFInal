import { Link } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import CustomCursor from '../components/ui/CustomCursor'
import SeoMeta from '../components/ui/SeoMeta'

function NotFoundPage() {
    return (
        <div className="w-full min-h-screen bg-black text-white flex flex-col">
            <SeoMeta
                title="Page Not Found"
                description="The page you are looking for does not exist or may have moved."
                path="/404"
                keywords="404 Kripon Digital"
                robots="noindex, nofollow"
            />
            <CustomCursor />

            <main className="grow flex items-center justify-center px-4 pt-32.5 lg:pt-37.5 pb-20">
                <div className="w-full max-w-3xl rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.01)_100%)] p-8 md:p-12 text-center">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/45">404</p>
                    <h1 className="mt-4 text-4xl md:text-6xl font-medium tracking-tight">This page does not exist</h1>
                    <p className="mt-5 text-base md:text-lg leading-8 text-white/65">
                        The link may be outdated, the URL may be wrong, or the page may have moved. Use one of the routes below to continue.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/" className="inline-flex min-w-42.5 items-center justify-center rounded-full border border-[#8A38F5]/55 bg-[linear-gradient(180deg,rgba(156,73,255,0.22)_0%,rgba(105,31,208,0.12)_100%)] px-6 py-3 text-sm font-medium text-[#EADFFF] transition-all hover:border-[#8A38F5]/80">
                            Go Home
                        </Link>
                        <Link to="/services" className="inline-flex min-w-42.5 items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white transition-all hover:border-white/20 hover:bg-white/5">
                            View Services
                        </Link>
                        <Link to="/contact" className="inline-flex min-w-42.5 items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white transition-all hover:border-white/20 hover:bg-white/5">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default NotFoundPage
