"use client"
import React from 'react'
import { motion } from "motion/react"

const Prescripto = () => {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center 
          justify-center p-5 md:p-20 lg:p-28 h-screen"
        >
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="./Prescripto.png"
            alt="Prescripto project"
            className="md:mt-0 mt-20 max-w-[80%] md:max-w-[60%] lg:max-w-[40%] object-contain max-h-40 md:max-h-full"
          />

          <div className="space-y-6 px-4 md:px-10 max-w-6xl text-center md:text-left h-80 md:h-auto overflow-y-scroll md:overflow-visible scrollbar-thin scrollbar-thumb-[#F7AB0A]/80 scrollbar-track-gray-400/20">
            <h4 className="text-xl md:text-3xl lg:text-4xl font-semibold text-center">
              <span className="underline decoration-[#F7AB0A]/50">Prescripto</span>
              : Schedule your appointments with ease today!!
            </h4>

            <p className="text-sm md:text-base lg:text-lg leading-relaxed text-justify md:text-left">
              Prescripto is a Full-Stack Doctor appointment booking web application. It allows users to book, manage, and view their medical appointments seamlessly. The platform features user authentication, appointment scheduling, and a responsive design for optimal user experience across devices.
              This we app has a separate dashboard for doctors and patients where doctors can manage their appointments and patients can book and view their appointments.
              Features such as, Razorpay Payment Gateway integration for secure payments hasslefree, Email notifications for appointment reminders, and a comprehensive admin panel for managing users and appointments make Prescripto a robust solution for healthcare appointment management.
              Tech stack used to build this project are React, Node.js, Express, MongoDB, and Tailwind CSS.
            </p>

            <div className="text-center md:text-left pt-4">
              <a
                href="https://prescripto-xi-eight.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#F7AB0A]/50 border border-amber-700 rounded-full px-6 py-2 hover:bg-[#F7AB0A]/70 transition">
                  Live Link
                </button>
              </a>
            </div>
          </div>
        </div>
  )
}

export default Prescripto