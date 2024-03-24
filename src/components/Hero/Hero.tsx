'use client'

import Image from "next/image"
import { Link } from "react-scroll"

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start w-full text-white">
            <p className="text-lg text-sky-500 mb-[22px] font-semibold">Oi, Eu sou o <span className="line-through decoration-2 decoration-black">Goku</span> David Coelho</p>

            <h1 className="leading-[44px] text-4xl md:text-5xl md:leading-tight md:tracking-[-2px] lg:text-7xl lg:leading-[1.2] font-bold">
              Desenvolvedor FullStack
            </h1>

            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              Sou apaixonado em ouvir música, tocar guitarra, assistir filmes e séries, jogar video-game e é claro programar.
            </p>

            <Link
              to="contato"
              smooth={true}
              duration={500}
              offset={-70}
              className="py-4 px-7 font-medium text-white flex items-center justify-center rounded-lg bg-sky-700 hover:bg-sky-600 transition-all duration-300 cursor-pointer"
            >
              Me pague um café ☕
            </Link>
          </div>

          <div className="hidden lg:flex flex-1 justify-center items-center h-full">
            <Image
              src='/foto.png'
              width={450}
              height={450}
              alt="Foto de David Coelho"
              className="object-cover rounded-full"

            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero