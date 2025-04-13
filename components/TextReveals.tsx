"use client"

import { MotionDiv } from "./motion-wrapper";

export default function RevealText({text} : {text : string}) {
    return (
      <div className="relative overflow-hidden w-fit">
        {/* The text underneath */}
        <h1 className="text-3xl py-2 font-bold z-10">{text}</h1>
  
        {/* The sliding rectangle */}
        <MotionDiv
          initial={{ x: 0 , opacity : 1}}
          whileInView={{ x: '100%' , opacity : 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="absolute top-0 left-0 w-full h-full bg-secondary z-20"
        />
      </div>
    )
  }