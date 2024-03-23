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
              className="flex justify-center items-center lg:w-[14.28%] md:w-[20%] sm:w-[25%] w-[50%]"
            >
              <Image
                src={icon}
                width={75}
                height={75}
                alt={name}
                className="object-contain saturate-0 hover:saturate-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills