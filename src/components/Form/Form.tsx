'use client'

import { useRef, useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form'
import validator, { isEmpty } from "validator";
import { FiCheckCircle } from "react-icons/fi";
import Button from "../Button/Button"
import emailjs from '@emailjs/browser';

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string
}

const Form = () => {
  const [success, setSuccess] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Inputs>()

  const form = useRef<HTMLFormElement>(null)

  const sendEmail: SubmitHandler<Inputs> = () => {
    if (!form.current) return;

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID || '', process.env.NEXT_PUBLIC_TEMPLATE_ID || '', form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          reset()
          setSuccess(true)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      ).then(() => {
        setTimeout(() => {
          setSuccess(false)
        }, 2000)
      })
  };


  return (
    <form
      ref={form}
      onSubmit={handleSubmit(sendEmail)}
      className="space-y-8 w-full max-w-[780px]"
    >
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Seu Email"
            maxLength={50}
            {...register('email', {
              required: true,
              validate: (value) => validator.isEmail(value),
            })}
            className="bg-secondary text-paragraph h-[60px] outline-none pl-6 w-full font-body text-[15px] rounded-sm focus:outline focus:outline-1 focus:outline-sky-500"
          />
          {errors.email && (
            <p className="text-red-600">
              Digite um email valido.
            </p>
          )}
        </div>
        <div className="flex-1">
          <input
            type="text"
            placeholder="Seu Nome"
            maxLength={50}
            {...register('name', {
              required: true,
              minLength: 3,
              validate: (value) => value.trim().length !== 0
            })}
            className="bg-secondary text-paragraph h-[60px] outline-none pl-6 w-full font-body text-[15px] rounded-sm focus:outline focus:outline-1 focus:outline-sky-500"
          />
          {errors.name && (
            <p className="text-red-600">
              Digite seu nome.
            </p>
          )}
        </div>
      </div>

      <div>
        <input
          type="text"
          placeholder="Assunto"
          maxLength={50}
          {...register('subject', {
            required: true,
            minLength: 2,
            validate: (value) => value.trim().length !== 0
          })}
          className="bg-secondary text-paragraph h-[60px] outline-none pl-6 w-full font-body text-[15px] rounded-sm focus:outline focus:outline-1 focus:outline-sky-500"
        />
        {errors.subject && (
          <p className="text-red-600">
            Digite o assunto.
          </p>
        )}
      </div>

      <div>
        <textarea
          placeholder="Sua Mensagem"
          maxLength={150}
          {...register('message', {
            required: true,
            minLength: 2,
            validate: (value) => value.trim().length !== 0
          })}
          className="bg-secondary resize-none w-full outline-none p-6 rounded-sm h-[200px] focus:outline focus:outline-1 focus:outline-sky-500"></textarea>
        {errors.message && (
          <p className="text-red-600">
            Digite a sua mensagem.
          </p>
        )}
      </div>
      {success && (
        <div className="flex items-center gap-5 mx-auto bg-emerald-600 rounded-sm w-fit px-4 py-4">
          <FiCheckCircle size={21} />
          Mensagem enviada com sucesso!
        </div>
      )}
      <Button className="mx-auto lg:mx-0">
        Enviar mensagem
      </Button>
    </form>
  )
}

export default Form