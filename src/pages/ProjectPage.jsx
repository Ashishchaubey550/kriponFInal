import React from 'react'
import ProjectsList from '../components/ui/ProjectsList'
import CustomCursor from '../components/ui/CustomCursor'


import CallToAction from '../components/ui/CallToAction'
import Footer from '../components/layout/Footer'
import BenefitsSection from '../components/ui/BenefitsSection'
import SeoMeta from '../components/ui/SeoMeta'

function ProjectPage() {
    return (
        <div className='w-full bg-black min-h-screen pt-32.5 lg:pt-37.5'>
            <SeoMeta
                title="Projects"
                description="See recent Kripon Digital projects and case-quality work delivered for ambitious brands in India, Nepal and Bhutan."
                path="/projects"
                keywords="digital agency portfolio India, web app projects Nepal, design projects Bhutan"
            />
            <CustomCursor />
            <ProjectsList />

            <BenefitsSection />
            <CallToAction />
            <Footer />
        </div>
    )
}

export default ProjectPage