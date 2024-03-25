import { contactInfos } from "@/constants"
import ContactItem from "../ContactItem/ContactItem"
import Button from "../Button/Button"
import Form from "../Form/Form";

const Contact = () => {
  return (
    <section
      id="contato"
      className="py-12 lg:pt-20 bg-tertiary text-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3">Entre em contato</h2>
          <p className="text-base text-paragraph mb-16 lg:mb-24 max-w-[520px]">
            Se você se interessou, sinta-se a para entrar em contato comigo.
          </p>
        </div>

        <div className="flex flex-col-reverse lg:gap-x-8 lg:flex-row">

          <div className="flex flex-1 flex-col items-center md:items-start md:flex-row lg:flex-col gap-8 mt-20 lg:mt-0  mb-12 lg:mb-0 lg:pt-2">
            {contactInfos.map((info, i) => (
              <ContactItem
                key={i}
                item={info}
              />
            ))}
          </div>

          <Form />

        </div>
      </div>
    </section>
  )
}

export default Contact