'use client'

import Button from "../Button/Button"
import emailjs from '@emailjs/browser';
import { FormEvent, useRef } from "react";

const Form = () => {
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
  )
}

export default Form