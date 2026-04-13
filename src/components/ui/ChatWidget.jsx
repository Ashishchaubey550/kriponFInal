import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const CONVERSATION_TREE = {
    start: {
        text: "Hi there! 👋 I'm Kripon's advanced AI assistant. How can I empower your business today?",
        options: [
            { text: "I need a Website", nextId: "website" },
            { text: "I need an App", nextId: "app" },
            { text: "What's your pricing?", nextId: "pricing" },
            { text: "I want to grow my brand", nextId: "marketing" },
            { text: "Just browsing", nextId: "browsing" }
        ]
    },
    website: {
        text: "Awesome! We build lightning-fast, high-converting, and SEO-optimized websites. Do you already have a design in mind, or do you need a fresh, modern re-design?",
        options: [
            { text: "I need a new design", nextId: "action" },
            { text: "I have a design", nextId: "action" },
            { text: "I need an e-commerce site", nextId: "ecommerce" }
        ]
    },
    ecommerce: {
        text: "An e-commerce site is a great choice! We build secure, scalable, and easy-to-manage online stores. Ready to boost your sales?",
        options: [
            { text: "Yes, let's talk!", nextId: "action" },
            { text: "Not yet", nextId: "browsing" }
        ]
    },
    app: {
        text: "Great! We build powerful native and cross-platform apps for iOS & Android that users love. What platform are you targeting?",
        options: [
            { text: "Both iOS & Android", nextId: "action" },
            { text: "Just Android", nextId: "action" },
            { text: "Just iOS", nextId: "action" }
        ]
    },
    pricing: {
        text: "Our custom packages typically start around ₹40,000 algorithms for standard websites, and scale based on advanced features like AI integrations or complex app features. What's your rough budget?",
        options: [
            { text: "Below ₹50k", nextId: "action" },
            { text: "₹50k - ₹2L", nextId: "action" },
            { text: "Above ₹2L", nextId: "action" },
            { text: "I need a custom quote", nextId: "action" }
        ]
    },
    marketing: {
        text: "Our digital marketing experts can help you reach a wider audience and increase your ROI through SEO, SMM, and targeted ad campaigns. What's your primary goal?",
        options: [
            { text: "More website traffic", nextId: "action" },
            { text: "Higher conversion rates", nextId: "action" },
            { text: "Brand awareness", nextId: "action" }
        ]
    },
    browsing: {
        text: "No problem! Take your time checking out our latest projects or our blog. Our portfolio is filled with award-winning designs. If anything catches your eye, just let me know! 🚀",
        options: [
            { text: "I have a question", nextId: "start" },
            { text: "Talk to an expert", nextId: "action" }
        ]
    },
    action: {
        text: "Perfect! The best next step is to hop on a quick discovery call or chat with our experts on WhatsApp to discuss your vision in detail. How would you like to proceed?",
        isActions: true,
        options: [
            { text: "Start over", nextId: "start" }
        ]
    }
}

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([{ sender: 'bot', text: CONVERSATION_TREE.start.text }])
    const [currentNode, setCurrentNode] = useState('start')
    const [isTyping, setIsTyping] = useState(false)
    const [inputText, setInputText] = useState('')
    const messagesEndRef = useRef(null)
    const navigate = useNavigate()

    const currentOptions = CONVERSATION_TREE[currentNode]?.options || []
    const showOptions = currentOptions.length > 0

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages, isTyping])

    const handleOptionSelect = (option) => {
        // User's message
        setMessages(prev => [...prev, { sender: 'user', text: option.text }])
        setIsTyping(true)

        // Bot's reply based on nextId
        setTimeout(() => {
            setIsTyping(false)
            const nextNode = CONVERSATION_TREE[option.nextId]

            if (nextNode) {
                setMessages(prev => [...prev, {
                    sender: 'bot',
                    text: nextNode.text,
                    isActions: nextNode.isActions
                }])
                setCurrentNode(option.nextId)
            }
        }, 1500)
    }

    const handleCustomMessage = (e) => {
        e.preventDefault()
        if (!inputText.trim()) return

        const userText = inputText.trim()
        setMessages(prev => [...prev, { sender: 'user', text: userText }])
        setInputText('')
        setIsTyping(true)
        setCurrentNode(null)

        setTimeout(() => {
            setIsTyping(false)

            const lowerText = userText.toLowerCase()

            // Smart Routing
            if (lowerText.includes('website') || lowerText.includes('web')) {
                const node = CONVERSATION_TREE['website']
                setMessages(prev => [...prev, { sender: 'bot', text: node.text, isActions: node.isActions }])
                setCurrentNode('website')
                return
            }
            if (lowerText.includes('app') || lowerText.includes('mobile') || lowerText.includes('android') || lowerText.includes('ios')) {
                const node = CONVERSATION_TREE['app']
                setMessages(prev => [...prev, { sender: 'bot', text: node.text, isActions: node.isActions }])
                setCurrentNode('app')
                return
            }
            if (lowerText.includes('marketing') || lowerText.includes('seo') || lowerText.includes('ads') || lowerText.includes('brand')) {
                const node = CONVERSATION_TREE['marketing']
                setMessages(prev => [...prev, { sender: 'bot', text: node.text, isActions: node.isActions }])
                setCurrentNode('marketing')
                return
            }

            let botReply = ""
            let showActions = false

            if (lowerText.includes('price') || lowerText.includes('cost') || lowerText.includes('money') || lowerText.includes('budget') || lowerText.includes('quote')) {
                botReply = "Our custom projects range from ₹40,000 for standard, high-performing websites to ₹2L+ for complex mobile apps and AI-integrated solutions. The exact cost depends entirely on the robust features you need. Would you like to consult our experts to get a tailored direct quote?"
                showActions = true
            } else if (lowerText.includes('time') || lowerText.includes('how long') || lowerText.includes('when') || lowerText.includes('duration')) {
                botReply = "Standard, fully-optimized websites launch in 2-4 weeks. Complex mobile apps and scalable platforms take 6-12 weeks depending on features."
                showActions = true
            } else if (lowerText.includes('founder') || lowerText.includes('owner') || lowerText.includes('who created')) {
                botReply = "Kripon Digital was founded by Ashish Chaubey and his amazing team! They oversee all our premium software projects. Would you like to speak with the team?"
                showActions = true
            } else if (lowerText.includes('hello') || lowerText.includes('hi') || lowerText.includes('hey')) {
                botReply = "Hello again! How can I empower your business today?"
            } else if (lowerText.includes('thank') || lowerText.includes('ok') || lowerText.includes('cool') || lowerText.includes('awesome') || lowerText.includes('great')) {
                botReply = "You're very welcome! Feel free to explore our site, and let me know if you need any further assistance. We're here to help you succeed."
            } else if (lowerText.includes('how are you')) {
                botReply = "I'm doing fantastic, thanks for asking! I'm here helping ambitious businesses grow. How can I help yours reach the next level?"
            } else if (lowerText.includes('services') || lowerText.includes('what do you do') || lowerText.includes('offer')) {
                botReply = "We offer a wide range of premium services including Web Development, App Development, Custom Software Solutions, UI/UX Design, and Digital Marketing. What are you most interested in?"
                showActions = true
            } else {
                botReply = "I'm always learning and evolving! While I might not understand everything perfectly just yet, I can definitely help you with our advanced web, app, design, and marketing services. What would you like to explore?"
            }

            setMessages(prev => [...prev, {
                sender: 'bot',
                text: botReply,
                isActions: showActions
            }])

            if (!showActions && !lowerText.includes('thank') && !lowerText.includes('ok') && !lowerText.includes('cool')) {
                setTimeout(() => {
                    setMessages(prev => [...prev, { sender: 'bot', text: "Anything else you'd like to know?", isActions: false }])
                    setCurrentNode('browsing')
                }, 800)
            }
        }, 1200)
    }

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/917024306915?text=${encodeURIComponent("Hi! I was chatting with your AI bot and I'd like to discuss a project.")}`
        window.open(url, '_blank', 'noopener,noreferrer')
        setIsOpen(false)
    }

    const handleContactClick = () => {
        navigate('/contact')
        setIsOpen(false)
    }

    return (
        <div className="fixed bottom-[100px] right-6 md:bottom-8 md:left-6 md:right-auto z-[9990] flex flex-col items-end md:items-start">
            {/* Chat Window */}
            {isOpen && (
                <div className="mb-4 w-[350px] max-w-[calc(100vw-48px)] overflow-hidden rounded-[24px] border border-white/10 bg-black/90 backdrop-blur-2xl shadow-[0_30px_60px_-15px_rgba(138,56,245,0.4)] animate-in slide-in-from-bottom-5 duration-300 transform origin-bottom-right md:origin-bottom-left flex flex-col">
                    {/* Header */}
                    <div className="flex bg-gradient-to-r from-[#8A38F5]/30 to-[#340B73]/30 px-5 py-4 border-b border-white/10 relative overflow-hidden">
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shimmer_3s_infinite]" />

                        <div className="flex items-center justify-between w-full relative z-10">
                            <div className="flex items-center gap-3">
                                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#8A38F5] to-[#340B73] shadow-[0_0_15px_rgba(138,56,245,0.5)]">
                                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#1A0B2E] bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-white tracking-wide">Kripon AI</h3>
                                    <p className="text-[11px] text-[#B985FF] font-medium hidden sm:block">Advanced Sales Agent</p>
                                    <p className="text-[11px] text-green-400 font-medium sm:hidden">Online</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full p-1.5 backdrop-blur-sm">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div className="flex h-[380px] flex-col gap-4 overflow-y-auto p-5 scrollbar-hide flex-1">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex w-full animate-in fade-in slide-in-from-bottom-2 duration-300 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`relative max-w-[85%] rounded-2xl px-4 py-3 text-[14px] leading-relaxed shadow-sm ${msg.sender === 'user'
                                    ? 'bg-gradient-to-br from-[#B985FF] to-[#8A38F5] text-white rounded-br-sm'
                                    : 'bg-white/10 text-white/95 border border-white/10 rounded-bl-sm backdrop-blur-md'
                                    }`}>
                                    {msg.text}

                                    {msg.isActions && (
                                        <div className="mt-5 flex flex-col gap-2.5">
                                            <button
                                                onClick={handleWhatsAppClick}
                                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#20bd5a] to-[#128C7E] px-4 py-3 text-sm font-bold text-white shadow-[0_5px_15px_rgba(37,211,102,0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(37,211,102,0.5)]"
                                            >
                                                Chat on WhatsApp
                                            </button>
                                            <button
                                                onClick={handleContactClick}
                                                className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-white/15"
                                            >
                                                Book a Video Call
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex w-full justify-start animate-in fade-in duration-300">
                                <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-sm border border-white/10 bg-white/10 backdrop-blur-md px-5 py-4">
                                    <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#B985FF]" style={{ animationDelay: '0ms' }} />
                                    <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#B985FF]" style={{ animationDelay: '150ms' }} />
                                    <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#B985FF]" style={{ animationDelay: '300ms' }} />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Options */}
                    {showOptions && !isTyping && (
                        <div className="border-t border-white/10 bg-black/40 p-4 backdrop-blur-lg animate-in slide-in-from-bottom-2 duration-300">
                            <div className="flex flex-wrap gap-2">
                                {currentOptions.map((option, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleOptionSelect(option)}
                                        className="rounded-full border border-[#8A38F5]/30 bg-[#8A38F5]/5 px-3 py-1.5 text-[13px] font-medium text-[#c9a3ff] transition-all hover:bg-[#8A38F5] hover:text-white hover:border-[#8A38F5]/80 hover:shadow-[0_0_15px_rgba(138,56,245,0.4)]"
                                    >
                                        {option.text}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Chat Text Input Field */}
                    <div className="border-t border-white/10 bg-black/60 p-3 backdrop-blur-xl">
                        <form
                            onSubmit={handleCustomMessage}
                            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 pl-4 pr-1.5 py-1.5 focus-within:border-[#8A38F5]/50 focus-within:bg-white/10 transition-all"
                        >
                            <input
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                placeholder="Type your message..."
                                className="flex-1 bg-transparent text-[13px] text-white placeholder-white/40 outline-none"
                            />
                            <button
                                type="submit"
                                disabled={!inputText.trim()}
                                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#8A38F5] to-[#340B73] text-white disabled:opacity-50 transition-all hover:scale-105 disabled:hover:scale-100"
                            >
                                <svg className="h-4 w-4 transform -rotate-90 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`group relative flex h-[64px] w-[64px] items-center justify-center rounded-full shadow-[0_8px_30px_rgba(138,56,245,0.5)] transition-all duration-300 hover:scale-110 ${isOpen
                    ? 'bg-white/10 border border-white/20 text-white'
                    : 'bg-gradient-to-br from-[#B985FF] via-[#8A38F5] to-[#340B73] text-white hover:shadow-[0_12px_40px_rgba(138,56,245,0.7)]'
                    }`}
            >
                {/* Glow ring */}
                {!isOpen && (
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#8A38F5] to-[#B985FF] opacity-30 blur-md group-hover:opacity-60 transition-opacity duration-300" />
                )}

                {isOpen ? (
                    <svg className="h-6 w-6 transform transition-transform duration-300 group-hover:rotate-90 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="h-7 w-7 transform transition-transform duration-300 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                )}

                {/* Ping animation when closed */}
                {!isOpen && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8A38F5] opacity-50 duration-1000"></span>
                )}
            </button>
        </div>
    )
}
