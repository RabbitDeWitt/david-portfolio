import { tecnologies } from "@/constants"
import Image from "next/image"

const Skills = () => {
  return (
    <section className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-2  sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-y-3 ">
          {tecnologies.map(({ icon, name }, i) => (
            <div
              key={i}
              className="flex justify-center items-center"
            >
              <Image
                src={icon}
                width={75}
                height={75}
                alt={name}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills