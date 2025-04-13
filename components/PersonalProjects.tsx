"use client"

import React from 'react'
import { MotionDiv } from './motion-wrapper'
import RevealText from './TextReveals'
import { WebsiteProjectCard } from './Cards'
import PersonalProjectData from '@/data/PersonalProjectData'





const PersonalProjects = () => {
  return (
    <div className='flex flex-col gap-3'>
      <RevealText text='Personal Projects'/>
      <MotionDiv className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3' initial={"initial"} whileInView={"visible"} transition={{staggerChildren : 0.1}}>
          {PersonalProjectData.map((project) => { 
            return <WebsiteProjectCard key={project.title} project={project}/>
          })}

      </MotionDiv>
    </div>
  )
}

export default PersonalProjects
