'use client'

import { useState, useEffect } from "react"
import Navbar from "../Navbar/Navbar"
import Social from "../Social/Social"
import NavMobile from "../NavMobile/NavMobile"
import { Link } from "react-scroll"

const Header = () => {
  const [bg, setBg] = useState<boolean>(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false)
    })
  })
  return (
    <header className={`${bg ? 'bg-tertiary h-20 border-b-[1px] border-b-sky-500/15' : 'h-24'} flex items-center fixed w-full text-white top-0 z-10 transition-all duration-300`}>
      <div className="container mx-auto h-full flex items-center justify-between">
        <Link
          to='home'
          activeClass='text-sky-500'
          smooth={true}
          duration={500}
          offset={-70}
          className="text-2xl font-semibold cursor-pointer"
        >
          David Coelho
        </Link>

        <div className="hidden lg:block">
          <Navbar />
        </div>

        <div className="hidden lg:block">
          <Social />
        </div>

        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  )
}

export default Header