"use client"
 
import * as React from "react"
//import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function Mode() {
  const { theme, setTheme } = useTheme()
  return (
    <>
      <p onClick={() =>{
        setTheme('light')
      }}>light</p>
      <p onClick={() =>{
        setTheme('dark')
      }}>dark</p>
    </>
  )
}