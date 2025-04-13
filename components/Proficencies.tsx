'use client'

import { useRef } from 'react'
import { useAnimationFrame } from 'framer-motion'
import TechItemsData from '@/data/TechItemsData'



export default function TechScrollBar() {
  const containerRef = useRef<HTMLDivElement>(null)
  const x = useRef(0)

  useAnimationFrame((_, delta) => {
    if (!containerRef.current) return
    x.current -= (delta / 1000) * 80 // speed: 80px/sec

    const width = containerRef.current.scrollWidth / 2
    if (Math.abs(x.current) >= width) {
      x.current = 0
    }

    containerRef.current.style.transform = `translateX(${x.current}px)`
  })

  const duplicated = [...TechItemsData, ...TechItemsData]

  return (
    <div className="overflow-hidden w-full bg-background py-4">
      <div
        ref={containerRef}
        className="flex whitespace-nowrap gap-4 will-change-transform"
      >
        {duplicated.map(([icon, label], i) => (
          <div
            key={i}
            className="flex items-center gap-2 bg-muted w-fit px-3 text-sm py-2 rounded-lg shrink-0"
          >
            {icon}
            {label}
          </div>
        ))}
      </div>
    </div>
  )
}