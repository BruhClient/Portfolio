"use client"

import React, { useEffect, useRef, useState } from 'react'
import { Button } from './ui/button'
import { Bot, Send, User, X } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Separator } from './ui/separator'
import { Input } from './ui/input'
import { useChat } from "ai/react"
import { MotionDiv } from './motion-wrapper'
import { containerVariants } from '@/lib/utils'

const AiChat = () => {

    const [open,setOpen] = useState(false)

    const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error,
  } = useChat({
    api: "/api/chat",
    
  })

  const scrollRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

   if(open) { 
    return <div className='fixed flex flex-col gap-3 right-4 bottom-3 w-[300px] lg:w-[400px] h-[500px] bg-card shadow-lg border-2 rounded-lg px-4 py-4 z-50'>

        <Button variant={"ghost"} size={"icon"} onClick={() => setOpen(false)} className='absolute top-2 right-2'><X /></Button>
        <div className='flex gap-3 items-center'>
            <Avatar className='w-11 h-11'>
                <AvatarImage  src='/avatar.jpg'></AvatarImage>
                <AvatarFallback><User size={15}/></AvatarFallback>
            </Avatar>
            <div>
                <div className='font-semibold'>
                    Travis Ang
                </div>
                <div className='text-muted-foreground text-xs'>
                    NTU Data Science and Aritificial Intelligence
                </div>
            </div>
        </div>
        <Separator />
        

        <main
                  className="flex flex-col gap-2 overflow-y-auto py-2 text-sm h-[400px]"
                  ref={scrollRef}
                >
                  {[{role : "assistant",content : "Hey , Im Travis . Thank you for viewing my website . How can i help you ? " , id:"header"},...messages].map((message) => {
                    if (message.role === "assistant") {
                      return (
                        <MotionDiv
                          variants={containerVariants}
                          initial={"hidden"}
                          animate={"visible"}
                          className="w-full flex justify-start items-center gap-2 font-serif"
                          key={message.id}
                        >
                          <Bot className="text-foreground" />
                          <div className="w-fit bg-muted text-foreground px-2 py-1 rounded-lg">
                            {message.content}
                          </div>
                        </MotionDiv>
                      )
                    }
                    return (
                      <MotionDiv
                        className="w-full text-primary-foreground flex justify-end items-center gap-2 font-serif"
                        key={message.id}
                        variants={containerVariants}
                        initial={"hidden"}
                        animate={"visible"}
                      >
                        <div className="w-fit bg-primary px-2 py-1 rounded-lg">
                          {message.content}
                        </div>
                        
                      </MotionDiv>
                    )
                  })}

                  {isLoading && (
                    <div
                      className="w-full text-primary-foreground flex justify-start items-center gap-2 font-serif"
                      key={"loading"}
                    >
                      <Bot className="text-foreground" />
                      <div className="w-fit bg-primary px-2 py-1 rounded-lg flex items-center">
                        Thinking...
                      </div>
                    </div>
                  )}
                </main>

        <div className='flex gap-1 items-center'>
            <form className="flex w-full gap-1" onSubmit={handleSubmit}>
                  <Input
                    value={input}
                    className="flex-1"
                    onChange={handleInputChange}
                    placeholder="What's on your mind ?"
                  />
                  <Button size={"icon"} disabled={isLoading}>
                    <Send />
                  </Button>
            </form>
        </div>

    </div>
   }
  return (
   
    <Button size={"icon"} className='fixed right-4 bottom-4' onClick={() => setOpen((prev) => !prev)}><Bot /></Button>
        

  )
}

export default AiChat