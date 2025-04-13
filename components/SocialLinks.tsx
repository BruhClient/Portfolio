import { Instagram, Linkedin, Youtube } from 'lucide-react'
import React from 'react'
import { FaTelegram, FaWhatsapp } from 'react-icons/fa'
import { Button } from './ui/button'

const SocialLinks = () => {
  return (
    <div className='flex gap-1 flex-wrap'>
      <Button size={"icon"} variant={"outline"}><Instagram /></Button>
      <Button size={"icon"} variant={"outline"}><FaWhatsapp /></Button>
      <Button size={"icon"} variant={"outline"}><FaTelegram /></Button>
      <Button size={"icon"} variant={"outline"}><Linkedin /></Button>
      <Button size={"icon"} variant={"outline"}><Youtube /></Button>
    </div>
  )
}

export default SocialLinks
