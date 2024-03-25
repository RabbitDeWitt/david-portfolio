'use client'

import { contactInfos } from "@/constants"
import ContactItem from "../ContactItem/ContactItem"
import Button from "../Button/Button"

import emailjs from '@emailjs/browser';
import { FormEvent, useRef } from "react";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID || '', process.env.NEXT_PUBLIC_TEMPLATE_ID || '', form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

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

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-8 w-full max-w-[780px]"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <input
                id=""
                type="text"
                name="email"
                placeholder="Seu Email"
                className="bg-secondary text-paragraph h-[60px] outline-none pl-6 w-full font-body text-[15px] rounded-sm focus:outline focus:outline-1 focus:outline-sky-500"
              />
              <input
                id=""
                type="text"
                name="name"
                placeholder="Seu Nome"
                className="bg-secondary text-paragraph h-[60px] outline-none pl-6 w-full font-body text-[15px] rounded-sm focus:outline focus:outline-1 focus:outline-sky-500"
              />

            </div>
            <input
              id=""
              type="text"
              name="subject"
              placeholder="Assunto"
              className="bg-secondary text-paragraph h-[60px] outline-none pl-6 w-full font-body text-[15px] rounded-sm focus:outline focus:outline-1 focus:outline-sky-500"
            />
            <textarea
              name="message"
              placeholder="Sua Mensagem"
              className="bg-secondary resize-none w-full outline-none p-6 rounded-sm h-[200px] focus:outline focus:outline-1 focus:outline-sky-500"></textarea>
            <Button className="mx-auto lg:mx-0">
              Enviar mensagem
            </Button>
          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact