import Button from './button'
import backgroundImage from '../../assets/Have_an_ideo_background.jpg'

function CallToAction() {
    return (
        <div className="relative w-full h-[60vh] min-h-[500px] md:h-[800px] flex items-center justify-center overflow-hidden bg-black">

            <img
                src={backgroundImage}
                alt="Have an idea background"
                className="absolute inset-0 w-full h-full object-cover z-0 scale-[1.1]"
            />

            <div className="relative z-10 flex flex-col items-center text-center w-full h-full justify-center mt-10 lg:mt-20 px-4">
                <h2 className="text-white text-5xl sm:text-7xl lg:text-[100px] font-light leading-[1.1] mb-2 tracking-tight">Have</h2>
                <h2 className="text-white text-5xl sm:text-7xl lg:text-[100px] font-light leading-[1.1] mb-8 lg:mb-12 tracking-tight">an idea?</h2>

                <Button className="border border-white/40 bg-white/5 hover:bg-white/10 text-white rounded-full text-2xl sm:text-4xl lg:text-[60px] px-8 py-4 lg:px-16 lg:py-8 h-auto font-light tracking-widest backdrop-blur-md transition-all hover:scale-105 duration-500">
                    TELL US
                </Button>
            </div>
        </div>
    )
}

export default CallToAction
