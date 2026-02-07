import { useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

const faqs = [
    { question: "1. What services does Kripon Digital offer?", answer: "We offer high-end web design, web development, app development, and UX/UI design services tailored for modern brands." },
    { question: "2. How long does it take to build a website?", answer: "Timelines vary by project scope, but typically range from 4-8 weeks for a standard website." },
    { question: "3. Do you create custom designs?", answer: "Yes, every project starts with a unique design strategy tailored to your brand goals." },
    { question: "4. Will my website be mobile-friendly?", answer: "Absolutely. We prioritize responsive design to ensure your site looks perfect on all devices." },
    { question: "5. Do you provide ongoing support after launch?", answer: "Yes, we offer maintenance packages to keep your website secure and up-to-date." },
    { question: "6. Can you redesign an existing website?", answer: "Yes, we can modernize your existing site while improving performance and user experience." },
    { question: "7. What if I don't like the design?", answer: "We have an iterative design process with feedback loops to ensure you love the final result." },
    { question: "8. Are there any refunds if I don't like the service?", answer: "We work closely with you to prevent this, but our refund policy is detailed in our service agreement." }
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
