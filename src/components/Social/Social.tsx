import Link from "next/link"
import { socialMedias } from "@/constants"

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
              target="_blank"
              className="h-[40px] w-[40px] flex items-center justify-center rounded-full hover:bg-white/20 transition-all duration-300"
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