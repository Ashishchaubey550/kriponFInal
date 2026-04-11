import { Link } from 'react-router-dom'
import { blogs } from '../data/blogs'
import SeoMeta from '../components/ui/SeoMeta'
import Footer from '../components/layout/Footer'
import CustomCursor from '../components/ui/CustomCursor'

function BlogList() {
    return (
        <div className="w-full bg-black min-h-screen text-white flex flex-col">
            <SeoMeta
                title="Blog & Insights"
                description="Expert insights on web development, mobile apps, UI/UX design, and business growth from Kripon Digital."
                path="/blog"
                keywords="kripon digital blog, web development cost india, business mobile app benefits, ui ux insights"
            />
            <CustomCursor />

            <div className="grow w-full max-w-5xl mx-auto px-6 pt-32 lg:pt-40 pb-20">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-6 tracking-tight">
                        Our Latest Insights
                    </h1>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Thoughts, strategies, and guides on design, development, and building successful digital products.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {blogs.map(blog => (
                        <article key={blog.id} className="group flex flex-col bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden hover:border-[#8A38F5]/40 transition-all duration-500">
                            <Link to={`/blog/${blog.slug}`} className="block relative w-full aspect-video overflow-hidden">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={blog.coverImage}
                                    alt={blog.title}
                                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </Link>

                            <div className="p-8 flex flex-col grow">
                                <div className="flex items-center gap-3 mb-4">
                                    {blog.tags.map(tag => (
                                        <span key={tag} className="text-xs font-semibold uppercase tracking-wider text-[#8A38F5]">
                                            {tag}
                                        </span>
                                    ))}
                                    <span className="text-xs text-white/40 ml-auto">{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                </div>

                                <h2 className="text-2xl font-bold mb-4 line-clamp-2 text-white group-hover:text-[#B985FF] transition-colors">
                                    <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                                </h2>

                                <p className="text-white/60 line-clamp-3 mb-8 grow">
                                    {blog.excerpt}
                                </p>

                                <Link
                                    to={`/blog/${blog.slug}`}
                                    className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-white uppercase group-hover:text-[#8A38F5] transition-colors mt-auto"
                                >
                                    Read Article
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default BlogList
