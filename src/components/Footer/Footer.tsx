import { socialMedias } from "@/constants"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="flex gap-2 items-center justify-center">
            {socialMedias.map(({ icon, href }, i) => {
              const Icon = icon
              return (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  className="h-[40px] w-[40px] flex items-center justify-center rounded-full hover:bg-white/20 transition-all duration-300 text-sky-500"
                >
                  <Icon size={20} />
                </Link>
              )
            })}
          </div>

          <p>
            &copy; 2024 David Coelho. Todos direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer