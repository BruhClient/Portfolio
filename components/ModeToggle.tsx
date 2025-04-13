"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
export function ModeToggle() {
  const { setTheme,theme } = useTheme()
  const toggleTheme = () => { 
    if (theme === "light") { 
      setTheme("dark")
    } else { 
      setTheme("light")
    }
  }
  const [mounted,setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  },[])
  if (!mounted) { 
    return null
  }
  return (
    <>
    <Button size={"icon"} variant={"outline"} onClick={() => toggleTheme()}>
      {theme === "light" ? <Sun /> : <Moon />}
      </Button>
    
    </>
  )
}
