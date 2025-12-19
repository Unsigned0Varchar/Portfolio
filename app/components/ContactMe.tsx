"use client"
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import {toast} from "react-hot-toast"

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

const ContactMe = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // Open mail client
    window.location.href = `mailto:abhikrajdutta0311@gmail.com?subject=${encodeURIComponent(
      data.subject
    )}&body=Hi, my name is ${encodeURIComponent(
      data.name
    )}. Message: ${encodeURIComponent(data.message)}. (${encodeURIComponent(
      data.email
    )})`

    // ✅ Show success toast
    toast.success("Message ready to send 🚀")

    // Optional: clear form after submit
    reset()
  }

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-6 md:px-10 justify-evenly mx-auto items-center pt-20 md:pt-0">
      {/* Section Title */}
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-6 md:space-y-10 w-full mt-10 md:mt-0">
        <h4 className="text-xl md:text-4xl font-semibold text-center">
          I have got what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Let&apos;s Talk</span>
        </h4>

        {/* Contact Info */}
        <div className="space-y-8">
          <div className="flex items-center space-x-5 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-[#F7AB0A] animate-pulse"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-lg md:text-2xl">+91 6001152459</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-[#F7AB0A] animate-pulse"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-lg md:text-2xl">Guwahati, Assam, India</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-[#F7AB0A] animate-pulse"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            <p className="text-lg md:text-2xl">abhikrajdutta0311@gmail.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-3 w-full md:w-3/4 lg:w-1/2 mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-3">
            <input
              {...register("name", { required: true })}
              placeholder="Name"
              className="contactIn flex-1 w-full"
              type="text"
            />
            <input
              {...register("email", { required: true })}
              placeholder="Email"
              className="contactIn flex-1 w-full"
              type="email"
            />
          </div>
          <input
            {...register("subject", { required: true })}
            placeholder="Subject"
            className="contactIn w-full"
            type="text"
          />
          <textarea
            {...register("message", { required: true })}
            placeholder="Message"
            className="contactIn w-full"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-4 px-10 rounded-md text-black font-bold text-lg hover:bg-[#f7a50a] hover:cursor-pointer transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe