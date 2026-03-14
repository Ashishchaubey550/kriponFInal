import Button from './button'
import ProcessCard from './process-card'
import StackingCards from './StackingCards'

const processSteps = [
    {
        number: "01",
        title: "Requirement",
        description: "We collect all necessary information from the client to understand their goals and needs for the website.",
        style: { background: '#10051D' }
    },
    {
        number: "02",
        title: "Plan",
        description: "We begin by understanding your brand, goals, and audience to create a clear strategy and structure for your website.",
        style: { background: '#1A0B2E' }
    },
    {
        number: "03",
        title: "Design",
        description: "Our team crafts visually refined, user-focused designs that balance aesthetics, usability, and brand identity.",
        style: { background: '#25123F' }
    },
    {
        number: "04",
        title: "Build",
        description: "We develop fast, responsive, and scalable websites using clean code and modern technologies.",
        style: { background: '#2F1850' }
    },
    {
        number: "05",
        title: "Launch",
        description: "After thorough testing and optimization, we launch your website and ensure smooth performance across all devices.",
        style: { background: '#3A1F61' }
    }
]

function ProcessSection() {
    return (
        <div className='relative w-full bg-black'>
            <StackingCards
                items={processSteps}
                headerContent={
                    <div className='mb-10 lg:mb-[60px] flex flex-col items-center px-4'>
                        <Button className="w-[83px] border-2 px-[13px] py-[6px] rounded-[999px] border-solid border-[#FFFFFF] text-[#FFFFFF] backdrop-blur-2xl h-[40px] mb-4">Process</Button>
                        <h2 className='text-[#FFFFFF] font-medium text-4xl sm:text-5xl lg:text-[66px] leading-tight lg:leading-[84px] tracking-tight lg:tracking-[-3.5px] text-center'>How we work</h2>
                    </div>
                }
                renderItem={(step) => (
                    <ProcessCard
                        {...step}
                        className="w-full"
                    />
                )}
            />
        </div>
    )
}

export default ProcessSection
