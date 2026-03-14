import { useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

const faqs = [
    { question: "1. What services does Kripon Digital offer?", answer: "We offer high-end web design, web development, app development, and UX/UI design services tailored for modern brands." },
    { question: "2. How long does it take to build a website?", answer: "Timelines vary by project scope, but typically range from 4-8 weeks for a standard website." },
    { question: "3. Do you create custom designs?", answer: "Yes, every project starts with a unique design strategy tailored to your brand goals." },
    { question: "4. Will my website be mobile-friendly?", answer: "Absolutely. We prioritize responsive design to ensure your site looks perfect on all devices." },
    { question: "5. Do you provide ongoing support after launch?", answer: "Yes, we offer maintenance packages to keep your website secure and up-to-date." }
]

function FAQItem({ question, answer, isOpen, onClick }) {
    const contentRef = useRef(null)

    useGSAP(() => {
        if (isOpen) {
            gsap.to(contentRef.current, { height: 'auto', opacity: 1, duration: 0.3, ease: 'power2.out' })
        } else {
            gsap.to(contentRef.current, { height: 0, opacity: 0, duration: 0.3, ease: 'power2.in' })
        }
    }, { dependencies: [isOpen] })

    return (
        <div className="border-b border-white/10 last:border-none">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
            >
                <span className="text-white/80 group-hover:text-white transition-colors text-lg font-medium">{question}</span>
                <span className={`text-white transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>+</span>
            </button>
            <div ref={contentRef} className="h-0 overflow-hidden opacity-0">
                <p className="pb-6 text-white/50">{answer}</p>
            </div>
        </div>
    )
}

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    return (
        <div className="w-full bg-black py-20 flex justify-center">
            <div className="w-full max-w-[800px] px-6">
                <div className="flex justify-between items-center mb-0 py-5 border-b border-white/10">
                    <span className="text-[11px] lg:text-[13px] tracking-[3px] uppercase text-white/40 font-medium">// FAQ°</span>
                    <span className="text-[11px] lg:text-[13px] tracking-[3px] uppercase text-white/40 font-medium">Got Questions?</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight tracking-tight text-white text-center mt-12 lg:mt-16 mb-12 lg:mb-16">
                    Frequently Asked <span className="bg-gradient-to-r from-[#8A38F5] to-[#b589ff] bg-clip-text text-transparent">Questions</span>
                </h2>
                <div className="flex flex-col gap-2">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FAQ
