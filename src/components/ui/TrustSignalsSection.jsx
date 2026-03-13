const proofStats = [
    { value: '3-5x', label: 'faster first impression with strong UX and loading performance' },
    { value: '24h', label: 'average response window after qualified enquiry' },
    { value: '100%', label: 'custom process built around your goals, not templates' },
]

const testimonials = [
    {
        quote: 'Kripon Digital brought structure to our product thinking and turned a vague brief into a polished experience.',
        author: 'Startup Founder',
        context: 'Product and website direction'
    },
    {
        quote: 'The team moved fast, communicated clearly, and kept quality high from first concept to delivery.',
        author: 'Operations Lead',
        context: 'Business website build'
    },
    {
        quote: 'Their design decisions felt strategic, not decorative. That made the final product stronger and easier to use.',
        author: 'Brand Manager',
        context: 'UI/UX and conversion improvement'
    },
]

function TrustSignalsSection({ compact = false }) {
    return (
        <section className={compact ? 'w-full' : 'w-full py-16 lg:py-24'}>
            <div className="mb-8 flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 backdrop-blur-md w-fit">
                <span className="text-xs font-medium text-white/70">Proof and trust</span>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {proofStats.map((stat) => (
                    <div key={stat.value} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                        <p className="text-3xl font-semibold tracking-tight text-[#E8D9FF]">{stat.value}</p>
                        <p className="mt-2 text-sm leading-6 text-white/60">{stat.label}</p>
                    </div>
                ))}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                {testimonials.map((testimonial) => (
                    <article key={testimonial.author + testimonial.context} className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.01)_100%)] p-6">
                        <p className="text-base leading-7 text-white/80">"{testimonial.quote}"</p>
                        <p className="mt-5 text-sm font-medium text-white">{testimonial.author}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/40">{testimonial.context}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default TrustSignalsSection
