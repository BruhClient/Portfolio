import { Tech } from '@/data/TechItemsData'
import React from 'react'
import TechItemsData from '@/data/TechItemsData'

const Tag = ({tech} : {tech : Tech}) => {

    const [icon,label] = TechItemsData.find((data) => data[1] === tech)!


  return (
 
      <div
          
            className="flex items-center gap-2 bg-muted w-fit px-3 text-sm py-2 rounded-lg shrink-0"
          >
            {icon}
            {label}
        </div>
 
  )
}

export default Tag
