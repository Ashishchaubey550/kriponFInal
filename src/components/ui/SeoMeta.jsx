import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://www.kripon.in'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`

function upsertMeta({ attr, key, content }) {
    if (!content) return
    let tag = document.head.querySelector(`meta[${attr}="${key}"]`)
    if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(attr, key)
        document.head.appendChild(tag)
    }
    tag.setAttribute('content', content)
}

function upsertCanonical(url) {
    let link = document.head.querySelector('link[rel="canonical"]')
    if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
    }
    link.setAttribute('href', url)
}

function upsertJsonLd(id, data) {
    if (!data) return
    let script = document.getElementById(id)
    if (!script) {
        script = document.createElement('script')
        script.type = 'application/ld+json'
        script.id = id
        document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(data)
}

function SeoMeta({ title, description, path = '', keywords, schema, robots }) {
    const location = useLocation()

    useEffect(() => {
        const canonicalPath = path || location.pathname
        const canonicalUrl = `${SITE_URL}${canonicalPath === '/' ? '' : canonicalPath}`
        const fullTitle = title ? `${title} | Kripon Digital` : 'Kripon Digital | Web, App & Growth Partner in India, Nepal and Bhutan'

        document.title = fullTitle

        upsertMeta({ attr: 'name', key: 'description', content: description })
        upsertMeta({ attr: 'name', key: 'keywords', content: keywords })
        upsertMeta({ attr: 'name', key: 'robots', content: robots || 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' })

        upsertMeta({ attr: 'property', key: 'og:type', content: 'website' })
        upsertMeta({ attr: 'property', key: 'og:site_name', content: 'Kripon Digital' })
        upsertMeta({ attr: 'property', key: 'og:title', content: fullTitle })
        upsertMeta({ attr: 'property', key: 'og:description', content: description })
        upsertMeta({ attr: 'property', key: 'og:url', content: canonicalUrl })
        upsertMeta({ attr: 'property', key: 'og:image', content: DEFAULT_OG_IMAGE })

        upsertMeta({ attr: 'name', key: 'twitter:card', content: 'summary_large_image' })
        upsertMeta({ attr: 'name', key: 'twitter:title', content: fullTitle })
        upsertMeta({ attr: 'name', key: 'twitter:description', content: description })
        upsertMeta({ attr: 'name', key: 'twitter:image', content: DEFAULT_OG_IMAGE })

        upsertCanonical(canonicalUrl)
        upsertJsonLd('page-schema', schema)
    }, [title, description, path, keywords, schema, robots, location.pathname])

    return null
}

export default SeoMeta
