import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import './App.css'
import Header from './components/layout/Header'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ServicePage = lazy(() => import('./pages/ServicePage'))
const ProjectPage = lazy(() => import('./pages/ProjectPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

function App() {
  return (
    <>
      <div className="min-h-screen w-full bg-[#000000]">
        <BrowserRouter>
          <Header />
          <main>
            <Suspense fallback={<div style={{ minHeight: '100vh', background: '#000' }} />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicePage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Suspense>
          </main>
        </BrowserRouter>
        <Analytics />
      </div>
    </>
  )
}

export default App
