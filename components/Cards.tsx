"use client"

import Image from 'next/image'
import { MotionDiv } from './motion-wrapper'
import { cardVariants } from '@/lib/utils'
import Link from 'next/link'
import Tag from './Tag'
import { Project } from '@/types/project'



export const WebsiteProjectCard = ({project : {title, subText , description,heroImage,techs}} : {project : Project}) => { 
    return <MotionDiv variants={cardVariants} className='flex flex-col gap-2' >
      
        <div >
          <div className='text-xl font-medium'>
            {title}
          </div>
          <div className='text-lg text-muted-foreground font-serif'>
            {subText}
          </div>
        </div>
        <Link href={`/projects/${title}`} className="relative w-full aspect-[16/9]">
          <Image
              src={heroImage} // Replace with your image path
              alt="Responsive"
              fill
              className="object-cover border-2"
              sizes="100vw"

              priority
            />
        </Link>
 
       

          {techs && <div className='flex gap-2'>
              {techs.map((tech) => <Tag key={`${title} ${tech}`} tech={tech}/>)}
            </div>}

        
        <div className='text-muted-foreground px-1'>
          {description}
        </div>
      
      
  </MotionDiv>

  
  }