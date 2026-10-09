"use client"
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'

const HelloRamp = () => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
      w-full md:w-[600px] xl:w-[900px] snap-center bg-[#292929] 
      p-6 md:p-10 hover:opacity-100 opacity-40 cursor-pointer 
      transition-opacity duration-200 overflow-hidden'>

      {/* Logo */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Image
          src="/helloramp_ai_logo.jpeg"
          alt="HelloRamp_company Logo"
          width={200}
          height={200}
          className='rounded-full object-center w-24 h-24 md:w-32 md:h-32 xl:w-48 xl:h-48'
        />
      </motion.div>

      {/* Content */}
      <div className='px-2 md:px-10 text-center md:text-left h-96 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#F7AB0A]/80 scrollbar-track-gray-400/20'>
        <h4 className='text-xl md:text-3xl xl:text-4xl font-light'>
          HelloRamp.ai
        </h4>
        <p className='font-bold text-lg md:text-xl xl:text-2xl mt-1'>
          QA Analyst
        </p>

        <p className='uppercase py-3 text-sm md:text-base text-gray-300'>
          September 2026 - Present
        </p>

        {/* Responsibilities */}
        <ul className='list-disc space-y-3 ml-5 text-sm md:text-lg text-gray-200 text-left'>
          <li>Tested AI-generated automotive images for visual accuracy, consistency, and quality.</li>
          <li>Identified and reported defects against defined quality standards.</li>
          <li>Validated outputs against requirements and flagged inconsistencies.</li>
          <li>Ensured mobile responsiveness and accessibility standards.</li>
          <li>Followed QA guidelines to maintain accuracy and consistency across testing tasks.</li>
        </ul>
      </div>
    </article>
  )
}

export default HelloRamp;
