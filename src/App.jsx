import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/layout/Header'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicePage from './pages/ServicePage'
import ProjectPage from './pages/ProjectPage'
import ContactPage from './pages/ContactPage'

function App() {

  return (
    <>
      <div className="min-h-screen w-full bg-[#000000]">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </BrowserRouter>
      </div >
    </>
  )
}

export default App
