import Image from "next/image"
import Button from "../Button/Button"

const About = () => {
  return (
    <section className="py-12 lg:pt-28 bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col gap-24">
          {/*  <Image
            src='/sobre.svg'
            width={500}
            height={70}
            alt="Sobre"
            className="object-contain md:mx-auto l"
          /> */}
          <div className="flex flex-col items-center text-center text-white">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 text-center">
                David Coelho
              </h2>
              <p className="mb-4 text-sky-500 mx-auto w-fit">
                Desenvolvedor FullStack
              </p>

              <hr className="mb-8 w-[250px] mx-auto opacity-5" />

              <p className="mb-8 max-w-[980px]">
                Prazer eu me chamo David, nasci em Santo André-SP. Comecei a minha jornada no mundo da programação aos 14 anos no ensino médio, desde então fico fascinado a cada descoberta que faço nesse mundo incrível. No meu tempo livre goste de ouvir música, aprender umas músicas na guitarra, jogar com os amigos e assistir séries, filmes e animes. <br />
                Estou em busca de uma oportunidade para aprender e desenvolver os meus conhecimentos da área.
              </p>
            </div>
            <Button>
              Entrar em contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About