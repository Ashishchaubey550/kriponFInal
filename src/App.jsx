import { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import './App.css'
import Header from './components/layout/Header'
import PageLoader from './components/ui/PageLoader'
import WhatsAppButton from './components/ui/WhatsAppButton'
import LeadPopup from './components/ui/LeadPopup'
import ChatWidget from './components/ui/ChatWidget'
import ScrollProgress from './components/ui/ScrollProgress'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ServicePage = lazy(() => import('./pages/ServicePage'))
const ProjectPage = lazy(() => import('./pages/ProjectPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const BlogList = lazy(() => import('./pages/BlogList'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const WebsiteServicePage = lazy(() => import('./pages/services/WebsiteServicePage'))
const AppServicePage = lazy(() => import('./pages/services/AppServicePage'))
const StartupLandingPage = lazy(() => import('./pages/industries/StartupLandingPage'))

function App() {
  const [showLoader, setShowLoader] = useState(() => {
    if (typeof window === 'undefined') return false
    return !window.sessionStorage.getItem('kripon_loader_seen')
  })

  useEffect(() => {
    if (!showLoader) return undefined

    const timeout = window.setTimeout(() => {
      setShowLoader(false)
      window.sessionStorage.setItem('kripon_loader_seen', '1')
    }, 1850)

    return () => window.clearTimeout(timeout)
  }, [showLoader])

  return (
    <>
      {showLoader && <PageLoader />}
      <div className="min-h-screen w-full bg-[#000000]">
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/blog" element={<BlogList />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/services/website-development" element={<WebsiteServicePage />} />
                <Route path="/services/app-development" element={<AppServicePage />} />
                <Route path="/for-startups" element={<StartupLandingPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <ScrollProgress />
            <LeadPopup />
            <ChatWidget />
          </Suspense>
        </BrowserRouter>
        <Analytics />
        <WhatsAppButton />
      </div>
    </>
  )
}

export default App
