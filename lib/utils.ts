import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const containerVariants = { 
  initial : { 
    opacity : 0
  }, 
  visible : { 
    opacity : 1
  }
}

export const cardVariants = { 
  initial : { 
    opacity : 0,
  
    x : -20 ,  
  }, 
  visible : { 
    opacity : 1, 
  
    x : 0
  }
}