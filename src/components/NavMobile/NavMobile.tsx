'use client'

import { useState } from "react"
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { navOptions } from "@/constants";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  //Framer motion variants
  const circleVariants = {
    hidden: {
      scale: 0
    },
    visible: {
      scale: 180,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 60
      }
    }
  }

  const ulVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1
      }
    }
  }

  return (
    <nav className="relative">
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer text-white"
      >

        <HiOutlineMenu className="w-8 h-8" />
      </div>

      <motion.div
        variants={circleVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : 'hidden'}
        className="w-4 h-4 rounded-full bg-sky-500 fixed top-0 right-0"
      >
      </motion.div>

      <motion.ul
        variants={ulVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : ''}
        className={`${isOpen ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-200 overflow-hidden`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className=" cursor-pointer absolute top-8 right-8"
        >
          <HiOutlineX className="w-8 h-8" />
        </div>

        {navOptions.map(({ name, href }) => (
          <li
            key={name}
            className="mb-8"
          >
            <Link
              to={href}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
              className="text-xl cursor-pointer"
            >
              {name}
            </Link>
          </li>
        ))}
      </motion.ul>
    </nav>
  )
}

export default NavMobile