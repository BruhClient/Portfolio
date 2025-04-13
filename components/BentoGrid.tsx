"use client"

import { ArrowRight, Computer, Github, Linkedin, Youtube } from 'lucide-react'
import React from 'react'
import { MotionButton } from './motion-wrapper'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { FaTelegramPlane } from 'react-icons/fa'
import Image from 'next/image'
import RevealText from './TextReveals'
import { Button } from './ui/button'
import Link from 'next/link'
import { smoothScroll } from '@/lib/utils'

const BentoGrid = () => {
  return (
    <div className='grid grid-cols-12 w-full gap-2'>
      <HeroBlock />
      <SocialBlock />
      <ContentBlock />
    </div>
  )
}

export default BentoGrid

const HeroBlock = () => { 
    return <div className='md:col-span-6 col-span-12 row-span-2 w-full rounded-lg bg-muted flex justify-center items-center flex-col min-h-[200px]'>

        <div className='flex flex-col gap-2 py-5  '>
            <Avatar className='w-12 h-12 object-center'>
                <AvatarImage src="/avatar.jpg" className='object-cover'  alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className='text-2xl font-bold '>
                Hey , Im Travis <span className='hand-wave'>👋</span>
            </div>
            <div className='text-lg'>
                I make cool websites like this one !
            </div>
            <div className='bg-green-200 text-green-500 shadow-lg flex items-center justify-center gap-2 rounded-lg py-2 text-sm font-semibold w-fit px-5'>
                <div className='bg-green-500 rounded-full aspect-square w-2 animate-pulse'/>Available
            </div>

            
            <button onClick={(e) => smoothScroll(e, "contact")}  className='self-start flex gap-2 cursor-pointer items-center mt-4 hover:text-secondary'>
                Contact <ArrowRight size={20}/>
            </button>
        </div>
        

        
    </div>
}


const SocialLinkBlock = ({children , color } : { children? : React.ReactNode, color: string}) => { 
    return <MotionButton whileHover={{rotateZ : 3 , scale : 1.1}} 
    className='cursor-pointer md:col-span-3 md:flex hidden w-full h-[150px] justify-center items-center rounded-lg hover:z-20' 
    style={{background : color}}>{children}
    </MotionButton>
}

const SocialBlock = () => { 
    return <>
    <SocialLinkBlock color='#ff4d40'><Youtube size={50} color='white'/></SocialLinkBlock>
    <SocialLinkBlock color='#0a66c2'><Linkedin size={50} color='white'/></SocialLinkBlock>
    <SocialLinkBlock color='#0F0F0F'><Github size={50} color='white'/></SocialLinkBlock>
    <SocialLinkBlock color='#0F0F43'><FaTelegramPlane size={50} color='white'/></SocialLinkBlock>
    </>
}
const ContentBlock = () => { 
    return <div className='col-span-12 row-span-2 w-full rounded-lg bg-muted px-5 py-5 flex gap-4 lg:flex-row flex-col items-center '>
                
                <Image src={"/hero.jpg"} alt='hero' width={300} height={300 } className='rounded-lg'/>
                
                

                <div className='flex flex-col gap-2'>
                    <RevealText text='A bit more about myself'/>

                
                    
                    <div className='text-muted-foreground font-serif text-lg'>
                        <span className='text-foreground'>I'm a singaporean web developer specializing in modern, full-stack applications with a focus on Next.js. </span>
                        I work comfortably across both frontend and backend, using tools like Drizzle ORM, Prisma, and Flask. 
                        I have experience building scalable applications with cloud databases such as Neon, integrating payments with Stripe, and implementing custom authentication flows using Auth.js (NextAuth). 
                        I’m passionate about building efficient, well-structured systems that deliver a seamless user experience.
                    </div>
                    
                    <div className='flex gap-3'>
                        <Button variant={"outline"} onClick={(e) => smoothScroll(e,"work-experience")}><Computer/>Work Experience</Button>
                        <Button>View CV</Button>
                    </div>
                    
                </div>
                
                
         
            
    

    
</div>
}
