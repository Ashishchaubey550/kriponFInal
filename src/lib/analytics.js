import { track } from '@vercel/analytics'

export function trackLeadConversion({ pagePath, service, preferredDate, timeSlot }) {
    const payload = {
        page_path: pagePath || window.location.pathname,
        service: service || 'unknown',
        preferred_date: preferredDate || 'not-provided',
        time_slot: timeSlot || 'not-provided',
    }

    track('contact_form_submitted', payload)

    if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
            event: 'contact_form_submitted',
            ...payload,
        })

        window.dispatchEvent(new CustomEvent('kripon:lead-conversion', { detail: payload }))
    }
}
