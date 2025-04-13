"use client"
import React from 'react'
import Timeline from './Timeline'
import { MotionDiv } from './motion-wrapper'


const WorkExperience = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full'>

      <MotionDiv className='text-3xl font-semibold' initial={{opacity : 0 , y: 20}} whileInView={{opacity : 1 , y : 0}}>
          Work Experience
      </MotionDiv>
      
      
      
      <div className='w-full'>
        <Timeline />
      </div>
      
      
     
    </div>
  )
}

export default WorkExperience
