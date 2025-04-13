
import React from 'react'
import { Button } from './ui/button'
import { ModeToggle } from './ModeToggle'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

const Profile = () => { 
    return <div className='flex items-center gap-3'>
        <Avatar className='w-10 h-10'>
            <AvatarImage src="/avatar.jpg" className='object-cover' alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className='flex flex-col'>
            <div className='font-bold'>
                Travis Ang
            </div>
            <div className='text-sm text-muted-foreground font-serif'>
                Undergraduate at NTU
            </div>
        </div>
        
        
        </div>
}
const Header = () => {
  return (
    <header className="flex w-full flex-col gap-3">
        <div className='flex w-full justify-between items-center'>
            <Profile />

            <div className='flex items-center gap-2'>
                <ModeToggle />
                <Button>View CV</Button>
            </div>

        </div>
        
    </header>
    
  )
}

export default Header
