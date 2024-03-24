'use client'

import { Link } from "react-scroll"

const About = () => {
  return (
    <section
      id="sobre"
      className="py-12 lg:pt-20 bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col gap-24">
          <div className="flex flex-col items-center text-center text-white">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3">
                David Coelho
              </h2>
              <p className="mb-4 text-sky-500 mx-auto w-fit">
                Desenvolvedor FullStack
              </p>

              <hr className="mb-8 w-[250px] mx-auto opacity-5" />

              <p className="mb-8 max-w-[980px]">
                Prazer eu me chamo David, nasci em Santo André-SP. Comecei a minha jornada no mundo da programação aos 14 anos no ensino médio, desde então fico fascinado a cada descoberta que faço nesse mundo incrível. No meu tempo livre gosto de ouvir música, aprender umas músicas na guitarra, jogar com os amigos e assistir séries, filmes e animes. <br />
                Estou em busca de uma oportunidade para aprender e desenvolver os meus conhecimentos da área.
              </p>
            </div>
            <Link
              to="contato"
              smooth={true}
              duration={500}
              offset={-70}
              className="py-4 px-7 font-medium text-white flex items-center justify-center rounded-lg bg-sky-700 hover:bg-sky-600 transition-all duration-300 cursor-pointer"
            >
              Entrar em contato
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About