import logo from "../../assets/logo.png"
import Button from "../ui/button"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const url = [
        { name: "About", href: "/about", action: () => { navigate('/about'); setIsMenuOpen(false); } },
        { name: "Service", href: "/services", action: () => { navigate('/services'); setIsMenuOpen(false); } },
        { name: "Project", href: "/projects", action: () => { navigate('/projects'); setIsMenuOpen(false); } },
        { name: "Contact", href: "/contact", action: () => { navigate('/contact'); setIsMenuOpen(false); } },
    ]

    return (
        <div className="mx-auto mt-2.5 w-full max-w-[1440px] px-4 md:px-[64px] z-50 flex items-center justify-center relative">
            <header className="h-[67px] w-[90%] md:w-fit md:min-w-[686px] justify-between absolute left-1/2 top-10 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 bg-black/50 pt-[12px] pb-[12px] pl-[24px] pr-[24px] backdrop-blur-md z-50">
                <div className="text-xl font-bold flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')} >
                    <img src={logo} alt="logo" className="h-[30px] w-[34px] md:h-[41.29px] md:w-[46px]" />
                    <h1><span className="text-[#FFFFFF]">Kripon</span><span className="text-[#848483]">Digital</span></h1>
                </div>


                <nav className="hidden md:flex gap-8">
                    {url.map((item) => (
                        <button
                            key={item.name}
                            onClick={item.action}
                            className="font-bold text-[13.1px] leading-[16.8px] tracking-[-0.28px] text-[#F9FAFB] px-[14px] pt-[7px] pb-[8px] rounded-[8px] hover:text-orange-500 bg-transparent border-none cursor-pointer"
                        >
                            {item.name}
                        </button>
                    ))}
                </nav>

                <Button onClick={() => navigate('/contact')} className="hidden md:flex h-[36px] w-[92px] whitespace-nowrap items-center justify-center rounded-[999px] bg-[linear-gradient(180deg,#8A38F5_0%,#340B73_100%)] px-[13px] py-[6px] text-white shadow-[0px_2px_2px_-1px_#0000001A,0px_4px_10px_-2px_#0000000D] backdrop-blur-[10px] hover:opacity-90">
                    Book Call
                </Button>

                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </header>

            {isMenuOpen && (
                <div className="fixed inset-0 top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 md:hidden">
                    <div className="flex flex-col gap-6 items-center">
                        {url.map((item) => (
                            <button
                                key={item.name}
                                onClick={item.action}
                                className="text-2xl font-bold text-[#F9FAFB] hover:text-orange-500 transition-colors"
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                    <Button onClick={() => { navigate('/contact'); setIsMenuOpen(false); }} className="mt-4 h-[44px] w-[140px] flex items-center justify-center rounded-full bg-[linear-gradient(180deg,#8A38F5_0%,#340B73_100%)] text-white text-lg">
                        Book Call
                    </Button>
                </div>
            )}
        </div>
    )
}
export default Header;