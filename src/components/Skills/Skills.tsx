import { tecnologies } from "@/constants"
import Image from "next/image"

const Skills = () => {
  return (
    <section className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-y-5">
          {tecnologies.map(({ icon, name }, i) => (
            <div
              key={i}
              className="flex justify-center items-center lg:w-[14.28%] md:w-[20%] sm:w-[25%] w-[50%] group relative"
            >
              <Image
                src={icon}
                width={75}
                height={75}
                alt={name}
                className="object-contain saturate-0 group-hover:saturate-50 group-hover:blur-sm transition-all duration-300 "
              />

              <div className="absolute cursor-default text-transparent text-2xl font-semibold drop-shadow-sm group-hover:text-white transition-all duration-100">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills