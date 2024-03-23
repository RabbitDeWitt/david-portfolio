import { ProjectCardProps } from "@/types"
import Image from "next/image"
import Link from "next/link"

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { name, thumb, demoLink, gitLink, tecnologies } = project
  return (
    <div className="relative group">
      <Image
        src={thumb}
        width={350}
        height={350}
        alt={`Thumb do projeto ${name}`}
        className="object-contain rounded-lg"
      />
      <div className="hidden absolute top-0 left-0 bg-black/75 w-full h-full group-hover:flex flex-col justify-center items-center transition-all duration-300">
        <h1 className="text-white text-2xl font-semibold mb-2">{name}</h1>
        <div className="flex gap-2">
          {tecnologies.map(({ icon, name }) => (
            <div key={name}>
              <Image
                src={icon}
                width={25}
                height={25}
                alt={`Icone do ${name}`}
                className="object-contain"
              />
            </div>
          ))}

        </div>
        <div className="mt-5 flex gap-4 ">
          <Link
            href={demoLink}
            target="_blank"
            className="bg-sky-700 hover:bg-sky-600 px-2 rounded-full transition-all duration-300"
          >
            Demo
          </Link>
          <Link
            href={gitLink}
            target="_blank"
            className="bg-sky-700 hover:bg-sky-600 px-2 rounded-full transition-all duration-300"
          >
            Repositorio
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard