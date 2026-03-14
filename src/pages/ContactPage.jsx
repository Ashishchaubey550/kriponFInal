import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import CustomCursor from '../components/ui/CustomCursor'
import Button from '../components/ui/button'
import SeoMeta from '../components/ui/SeoMeta'
import { trackLeadConversion } from '../lib/analytics'

function ContactPage() {
    const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '831cd623-f6ff-4d74-bff9-bcf06b31e10c'
    const formEndpoint = 'https://api.web3forms.com/submit'
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [status, setStatus] = useState('idle')
    const [errorMessage, setErrorMessage] = useState('')
    const [searchParams] = useSearchParams()
    const [selectedService, setSelectedService] = useState(() => searchParams.get('service') || '')

    useEffect(() => {
        if (status !== 'success') return

        const timeoutId = window.setTimeout(() => {
            setStatus('idle')
        }, 5000)

        return () => window.clearTimeout(timeoutId)
    }, [status])

    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsSubmitting(true)
        setStatus('idle')
        setErrorMessage('')

        const form = event.currentTarget
        const formData = new FormData(form)

        const name = String(formData.get('name') || '').trim()
        const email = String(formData.get('email') || '').trim()
        const preferredDate = String(formData.get('Preferred Call Date') || '').trim()
        const timeSlot = String(formData.get('Preferred Time Slot') || '').trim()
        const service = String(formData.get('service') || '').trim()
        const message = String(formData.get('message') || '').trim()
        const customRequirement = String(formData.get('custom_service_requirement') || '').trim()

        const serviceLabelMap = {
            'web-dev': 'Web Development',
            'app-dev': 'App Development',
            'design': 'UI/UX Design',
            'marketing': 'Marketing',
            'other': 'Other (Custom Requirement)'
        }

        const serviceLabel = serviceLabelMap[service] || service
        const submittedAt = new Date().toLocaleString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Local Time'
        const sourceUrl = window.location.href

        const leadSummary = [
            `Lead: ${name}`,
            `Email: ${email}`,
            `Service: ${serviceLabel}`,
            `Preferred Call: ${preferredDate} | ${timeSlot}`,
            `Submitted: ${submittedAt} (${timezone})`,
            `Source: ${sourceUrl}`
        ].join('\n')

        const submissionPayload = {
            access_key: web3FormsAccessKey,
            subject: `New Lead: ${serviceLabel} - ${name || 'Website Inquiry'}`,
            from_name: 'Kripon Digital Website',
            replyto: email,
            'Client Name': name,
            'Client Email': email,
            Service: serviceLabel,
            'Preferred Call Date': preferredDate,
            'Preferred Time Slot': timeSlot,
            'Lead Summary': leadSummary,
            'Project Brief': message
        }

        if (service === 'other' && customRequirement) {
            submissionPayload['Custom Requirement'] = customRequirement
        }

        try {
            const response = await fetch(formEndpoint, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(submissionPayload)
            })

            let result = {}
            try {
                result = await response.json()
            } catch {
                result = {}
            }

            const wasSuccessful = Boolean(result.success)

            if (!response.ok || !wasSuccessful) {
                throw new Error(result.message || 'Something went wrong while sending your message.')
            }

            trackLeadConversion({
                pagePath: window.location.pathname,
                service,
                preferredDate,
                timeSlot
            })

            form.reset()
            setSelectedService('')
            setStatus('success')
        } catch (error) {
            setStatus('error')
            setErrorMessage(error.message || 'Failed to send. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="w-full bg-black min-h-screen text-white flex flex-col">
            <SeoMeta
                title="Contact"
                description="Contact Kripon Digital to discuss your website, app, or growth project. We work with clients across India, Nepal and Bhutan."
                path="/contact"
                keywords="contact digital agency India, web development quote Nepal, UI UX consultation Bhutan"
            />
            <CustomCursor />


            <div className="grow flex flex-col items-center justify-center px-4 md:px-10 pt-32.5 lg:pt-37.5 pb-20">
                <div className="w-full max-w-3xl flex flex-col items-center">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium text-center mb-6 tracking-tight">
                        Let's work together
                    </h1>
                    <p className="text-gray-400 text-center text-base md:text-xl max-w-2xl mb-10 md:mb-16">
                        Let's build something impactful together - whether it's your brand, your website, or your next big idea.
                    </p>

                    {status === 'success' && (
                        <div className="w-full mb-8 rounded-2xl border border-[#8A38F5]/35 bg-[linear-gradient(135deg,rgba(138,56,245,0.2)_0%,rgba(52,11,115,0.12)_100%)] p-6 backdrop-blur-sm">
                            <p className="text-[#E9DDFF] text-sm md:text-base font-medium">
                                Message sent successfully. Thank you for reaching out. We will contact you soon.
                            </p>
                        </div>
                    )}

                    {status === 'error' && (
                        <div className="w-full mb-8 rounded-2xl border border-red-400/30 bg-[linear-gradient(135deg,rgba(239,68,68,0.18)_0%,rgba(185,28,28,0.08)_100%)] p-6 backdrop-blur-sm">
                            <p className="text-red-200 text-sm md:text-base font-medium">
                                {errorMessage}
                            </p>
                        </div>
                    )}

                    <form
                        className="w-full flex flex-col gap-6"
                        onSubmit={handleSubmit}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Jayesh"
                                    required
                                    className="w-full bg-white/10 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-[#8A38F5]/70 focus:ring-2 focus:ring-[#8A38F5]/25 focus:shadow-[0_0_0_3px_rgba(138,56,245,0.12)] transition-all text-white placeholder:text-white/30"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="yoob15136@gmail.com"
                                    required
                                    className="w-full bg-white/10 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-[#8A38F5]/70 focus:ring-2 focus:ring-[#8A38F5]/25 focus:shadow-[0_0_0_3px_rgba(138,56,245,0.12)] transition-all text-white placeholder:text-white/30"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="preferredDate" className="text-sm font-medium text-gray-400 ml-1">Preferred Call Date</label>
                                <input
                                    type="date"
                                    id="preferredDate"
                                    name="Preferred Call Date"
                                    min={new Date().toISOString().split('T')[0]}
                                    required
                                    className="w-full bg-white/10 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-[#8A38F5]/70 focus:ring-2 focus:ring-[#8A38F5]/25 focus:shadow-[0_0_0_3px_rgba(138,56,245,0.12)] transition-all text-white scheme-dark"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="timeSlot" className="text-sm font-medium text-gray-400 ml-1">Preferred Time Slot</label>
                                <div className="relative">
                                    <select
                                        id="timeSlot"
                                        name="Preferred Time Slot"
                                        className="w-full bg-white/10 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-[#8A38F5]/70 focus:ring-2 focus:ring-[#8A38F5]/25 focus:shadow-[0_0_0_3px_rgba(138,56,245,0.12)] transition-all text-white appearance-none cursor-pointer"
                                        defaultValue=""
                                        required
                                    >
                                        <option value="" disabled className="bg-black text-gray-400">Select a slot...</option>
                                        <option value="09:00-11:00" className="bg-black text-white">09:00 AM - 11:00 AM</option>
                                        <option value="11:00-13:00" className="bg-black text-white">11:00 AM - 01:00 PM</option>
                                        <option value="13:00-15:00" className="bg-black text-white">01:00 PM - 03:00 PM</option>
                                        <option value="15:00-17:00" className="bg-black text-white">03:00 PM - 05:00 PM</option>
                                        <option value="17:00-19:00" className="bg-black text-white">05:00 PM - 07:00 PM</option>
                                    </select>
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 ml-1">Times are in your local timezone.</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="service" className="text-sm font-medium text-gray-400 ml-1">Service Needed ?</label>
                            <div className="relative">
                                <select
                                    id="service"
                                    name="service"
                                    className="w-full bg-white/10 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-[#8A38F5]/70 focus:ring-2 focus:ring-[#8A38F5]/25 focus:shadow-[0_0_0_3px_rgba(138,56,245,0.12)] transition-all text-white appearance-none cursor-pointer"
                                    value={selectedService}
                                    onChange={(e) => setSelectedService(e.target.value)}
                                    required
                                >
                                    <option value="" disabled className="bg-black text-gray-400">Select...</option>
                                    <option value="web-dev" className="bg-black text-white">Web Development</option>
                                    <option value="app-dev" className="bg-black text-white">App Development</option>
                                    <option value="design" className="bg-black text-white">UI/UX Design</option>
                                    <option value="marketing" className="bg-black text-white">Marketing</option>
                                    <option value="other" className="bg-black text-white">Other (Custom Requirement)</option>
                                </select>
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </div>
                            </div>
                        </div>

                        {selectedService === 'other' && (
                            <div className="flex flex-col gap-2">
                                <label htmlFor="customService" className="text-sm font-medium text-gray-400 ml-1">Tell us your exact requirement</label>
                                <input
                                    type="text"
                                    id="customService"
                                    name="custom_service_requirement"
                                    placeholder="Example: Need a landing page for my AI startup"
                                    required
                                    minLength={8}
                                    className="w-full bg-white/10 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-[#8A38F5]/70 focus:ring-2 focus:ring-[#8A38F5]/25 focus:shadow-[0_0_0_3px_rgba(138,56,245,0.12)] transition-all text-white placeholder:text-white/30"
                                />
                            </div>
                        )}

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">What Can I Help You...</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                placeholder="Tell us about your project goals, timeline, and what you need help with..."
                                required
                                minLength={30}
                                className="w-full bg-white/10 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-[#8A38F5]/70 focus:ring-2 focus:ring-[#8A38F5]/25 focus:shadow-[0_0_0_3px_rgba(138,56,245,0.12)] transition-all text-white placeholder:text-white/30 resize-none"
                            ></textarea>
                            <p className="text-xs text-gray-500 ml-1">Please add at least 30 characters so we can understand your requirements clearly.</p>
                        </div>

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="mt-6 self-end min-w-47.5 h-14 bg-[linear-gradient(180deg,#9C49FF_0%,#691FD0_100%)] hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed text-white px-12 rounded-full font-semibold text-[20px] transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(138,56,245,0.65)]"
                        >
                            {isSubmitting ? (
                                <span className="inline-flex items-center gap-2">
                                    <span className="h-4 w-4 rounded-full border-2 border-white/60 border-t-white animate-spin" aria-hidden="true"></span>
                                    Sending...
                                </span>
                            ) : (
                                'Send Message'
                            )}
                        </Button>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ContactPage
