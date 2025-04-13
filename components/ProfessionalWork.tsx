"use client"
import React from 'react'
import { WebsiteProjectCard } from './Cards'
import RevealText from './TextReveals'
import { MotionDiv } from './motion-wrapper'
import ProfessionalWorkData from '@/data/ProfessionalWorkData'





const ProfessionalWork = () => {
  return (
    <div className='flex flex-col gap-3'>
      <RevealText text='Professional Work'/>
      <MotionDiv className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3' initial={"initial"} whileInView={"visible"} transition={{staggerChildren : 0.1}}>
          {ProfessionalWorkData.map((project) => { 
            return <WebsiteProjectCard key={project.title} project={project}/>
          })}

      </MotionDiv>
    </div>
  )
}

export default ProfessionalWork
