import { useParams, Navigate, Link } from 'react-router-dom'
import { blogs } from '../data/blogs'
import SeoMeta from '../components/ui/SeoMeta'
import Footer from '../components/layout/Footer'
import CustomCursor from '../components/ui/CustomCursor'

// Very simple markdown parser for bold, italics, headers, lists, and links
function renderContent(text) {
    const html = text
        .replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold mt-10 mb-4 text-white">$1</h3>')
        .replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold mt-12 mb-6 text-white">$1</h2>')
        .replace(/^\* (.*$)/gim, '<li class="ml-5 list-disc mb-2">$1</li>')
        .replace(/^[0-9]\. (.*$)/gim, '<li class="ml-5 list-decimal mb-2 text-white/90">$1</li>')
        .replace(/\*\*(.*?)\*\*/gim, '<strong class="text-white font-semibold">$1</strong>')
        .replace(/\*(.*?)\*/gim, '<em class="text-white/80">$1</em>')
        .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" class="text-[#B985FF] hover:text-[#8A38F5] underline underline-offset-4 transition-colors">$1</a>')
        .replace(/\n\n/gim, '</p><p class="mb-6 leading-relaxed">')

    return <div dangerouslySetInnerHTML={{ __html: `<p class="mb-6 leading-relaxed">${html}</p>` }} />
}

function BlogPost() {
    const { slug } = useParams()
    const blog = blogs.find(b => b.slug === slug)

    if (!blog) {
        return <Navigate to="/blog" replace />
    }

    return (
        <div className="w-full bg-black min-h-screen text-white flex flex-col">
            <SeoMeta
                title={blog.title}
                description={blog.excerpt}
                path={`/blog/${blog.slug}`}
                keywords={blog.tags.join(', ')}
            />
            <CustomCursor />

            <article className="grow w-full max-w-3xl mx-auto px-6 pt-32 lg:pt-40 pb-20">
                <Link to="/blog" className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-10 transition-colors text-sm font-semibold tracking-wider uppercase">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Blog
                </Link>

                <div className="flex items-center gap-4 mb-6">
                    {blog.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-[#8A38F5]/10 text-[#B985FF] rounded-full text-xs font-semibold tracking-wider uppercase border border-[#8A38F5]/20">
                            {tag}
                        </span>
                    ))}
                    <span className="text-white/40 text-sm">{new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                    {blog.title}
                </h1>

                <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden mb-12 border border-white/10">
                    <img src={blog.coverImage} alt={blog.title} className="w-full h-full object-cover" />
                </div>

                <div className="prose prose-invert prose-lg max-w-none text-white/70">
                    {renderContent(blog.content)}
                </div>

                {/* Call to action at bottom of post */}
                <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-[#8A38F5]/10 to-[#340B73]/10 border border-[#8A38F5]/30 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to elevate your digital presence?</h3>
                    <p className="text-white/70 mb-6">Let's discuss how we can help your business grow with a high-performance website or mobile app.</p>
                    <Link to="/contact" className="inline-block bg-[#8A38F5] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#6925C0] transition-colors">
                        Get a Free Consultation
                    </Link>
                </div>
            </article>

            <Footer />
        </div>
    )
}

export default BlogPost
