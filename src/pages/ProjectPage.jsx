import React from 'react'
import ProjectsList from '../components/ui/ProjectsList'
import CustomCursor from '../components/ui/CustomCursor'


import CallToAction from '../components/ui/CallToAction'
import Footer from '../components/layout/Footer'
import BenefitsSection from '../components/ui/BenefitsSection'

function ProjectPage() {
    return (
        <div className='w-full bg-black min-h-screen pt-[130px] lg:pt-[150px]'>
            <CustomCursor />
            <ProjectsList />


            <BenefitsSection />
            <CallToAction />
            <Footer />
        </div>
    )
}

export default ProjectPage