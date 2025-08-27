"use client"
import React from 'react'
import { motion } from "motion/react"

type Props = {}

const TripIt = (props: Props) => {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center 
          justify-center p-10 md:p-20 lg:p-28 h-screen"
        >
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="./TripIt.png"
            alt="Trip It project"
            className="max-w-[80%] md:max-w-[60%] lg:max-w-[40%] object-contain"
          />

          <div className="space-y-6 px-4 md:px-10 max-w-4xl text-center md:text-left">
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
              <span className="underline decoration-[#F7AB0A]/50">AI Trip Planner</span>
              : Powered by GeminiAI
            </h4>

            <p className="text-sm md:text-base lg:text-lg leading-relaxed">
              Trip It is a modern web application that simplifies travel planning through AI. 
              Built using React and Vite, the app allows users to generate personalized travel itineraries 
              based on their preferences such as destination, budget, duration, and interests.  
              It integrates the Gemini Pro 2.5 API to convert user inputs into structured and detailed JSON travel plans, 
              offering a seamless and intelligent planning experience. <br /><br />
              The UI is clean, intuitive, and fully responsive. Firebase integration optionally stores plans for later use.  
              Deployed via Vercel with CI/CD best practices.
            </p>

            <a
              href="https://trip-it-xi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#F7AB0A]/50 border border-amber-700 rounded-full px-6 py-2 hover:bg-[#F7AB0A]/70 transition">
                Live Link
              </button>
            </a>
          </div>
        </div>
  )
}

export default TripIt