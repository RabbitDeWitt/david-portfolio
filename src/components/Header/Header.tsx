'use client'

import { useState, useEffect } from "react"
import Navbar from "../Navbar/Navbar"
import Social from "../Social/Social"

const Header = () => {
  const [bg, setBg] = useState<boolean>(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false)
    })
  })
  return (
    <header className={`${bg ? 'bg-tertiary h-20' : 'h-24'} flex items-center fixed w-full text-white top-0 z-10 transition-all duration-300`}>
      <div className="container mx-auto h-full flex items-center justify-between">
        <h1 className="text-2xl font-semibold">
          David Coelho
        </h1>


        <div className="hidden lg:block">
          <Navbar />
        </div>

        <div className="hidden lg:block">
          <Social />
        </div>

        <div className="lg:hidden">
          Mobile
        </div>
      </div>
    </header>
  )
}

export default Header