// app/components/ZigZagTimeline.tsx
'use client';

import events from '@/data/WorkExperienceData';
import { motion } from 'framer-motion';



export default function ZigZagTimeline() {
  return (
    <div className="relative max-w-5xl mx-auto px-4 py-16">
      
      <div className="relative">
        {/* vertical center line */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-secondary transform -translate-x-1/2" />

        <div className="space-y-16">
          {events.map((event, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                className={`relative flex flex-col items-center md:flex-row  ${isLeft ? '' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                
                transition={{ duration: 0.2 }}
              >
                {/* Connector line dot */}
                <div className={`w-full md:w-1/2 hidden md:flex justify-center ${isLeft ? "md:justify-end" : "md:justify-start"} `}>
                  <div className="relative">
                    <div className="w-4 h-4 bg-background rounded-full border-4 border-foreground shadow absolute top-2.5 left-1/2 transform -translate-x-1/2 z-10" />
                  </div>
                </div>

                {/* Card content */}
                <div className={`b w-full md:w-1/2 ${isLeft ? "md:pl-4" : "md:pr-4"}`}>
                  <div className="bg-muted p-6 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                    <time className="text-sm font-serif text-muted-foreground">{event.date}</time>
                    <p className="mt-2 ">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
