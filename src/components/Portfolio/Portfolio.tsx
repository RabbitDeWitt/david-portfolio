import { projects } from "@/constants"
import ProjectCard from "../ProjectCard/ProjectCard"

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="py-12 lg:pt-20 bg-primary text-white"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-5">Projetos</h2>
          <p className="text-base text-paragraph mb-16 lg:mb-24 max-w-[520px]">
            Esses são os meus projetos, neles eu coloquei em pratica os conhecimentos que adqueri com os meus estudos.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio