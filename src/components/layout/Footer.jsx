function Footer() {
    return (
        <footer className="w-full bg-black text-white pt-12 lg:pt-20 pb-6 lg:pb-10 px-4 lg:px-6 border-t border-white/5">
            <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">


                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">

                        <div className="w-10 h-10 border-2 border-white rounded-tr-xl rounded-bl-xl flex items-center justify-center font-bold text-xl">KD</div>
                        <div className="flex flex-col leading-none">
                            <span className="font-bold text-xl tracking-tight">Kripon</span>
                            <span className="font-light text-lg tracking-wide">Digital</span>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col gap-2">
                    <h3 className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-2">Links</h3>
                    <a href="#" className="hover:text-purple-400 transition-colors">Home</a>
                    <a href="#" className="hover:text-purple-400 transition-colors">About</a>
                    <a href="#" className="hover:text-purple-400 transition-colors">Works</a>
                    <a href="#" className="hover:text-purple-400 transition-colors">Contact</a>
                </div>


                <div className="flex flex-col gap-2">
                    <h3 className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-2">Socials</h3>
                    <a href="#" className="hover:text-purple-400 transition-colors">Instagram</a>
                    <a href="#" className="hover:text-purple-400 transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-purple-400 transition-colors">Behance</a>
                </div>
            </div>


            <div className="max-w-[1200px] mx-auto mt-12 lg:mt-20 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 text-sm text-white/60">
                <div className="flex flex-col gap-1">
                    <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:yoob15136@gmail.com" className="text-purple-400 hover:underline">yoob15136@gmail.com</a>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:+917024306915" className="text-white hover:text-white transition-colors">+91 7024306915</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
