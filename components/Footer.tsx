import React from 'react'
import SocialLinks from './SocialLinks'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'

const Footer = () => {
  return (
    <div className='min-h-[200px] flex items-center justify-center bg-muted w-full flex-col gap-2'>
        
        <div className='text-lg font-bold'>Thank you for viewing my porfolio!</div>
        <div className='flex items-center flex-wrap gap-1'>
            <Link href={""} className={cn(buttonVariants({variant : "link"}))}>
                CV
            </Link>
            <Link href={""} className={cn(buttonVariants({variant : "link"}))}>
                Experience
            </Link>
            <Link href={""} className={cn(buttonVariants({variant : "link"}))}>
                Projects
            </Link>

            <Link href={""} className={cn(buttonVariants({variant : "link"}))}>
                Contact
            </Link>
        </div>
        <SocialLinks />
       
    </div>
  )
}

export default Footer
