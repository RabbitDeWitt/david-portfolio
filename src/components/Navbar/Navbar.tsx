'use client'

import { navOptions } from "@/constants"
import { Link } from "react-scroll"

const Navbar = () => {
  return (
    <nav>
      <ul className="flex space-x-8 text-[15px]">
        {navOptions.map(({ name, href }) => (
          <li
            key={name}
            className="text-white hover:text-sky-500 cursor-pointer transition-all duration-300"
          >
            <Link
              to={href}
              activeClass='text-sky-500'
              smooth={true}
              duration={500}
              offset={-70}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar