
import Link from "next/link"
import { socialMedias } from "@/constants"
import { IconType } from "react-icons"

const Social = () => {
  return (
    <ul className="flex space-x-6">
      {socialMedias.map(({ icon, href }, i) => {
        const Icon = icon
        return (
          <li
            key={i}
            className="flex justify-center items-center text-sky-500"
          >
            <Link
              href={href}
              className="h-[30px] w-[30px] flex items-center justify-center rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <Icon size={20} />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Social