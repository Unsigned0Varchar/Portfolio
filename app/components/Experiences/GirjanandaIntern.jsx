"use client"
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'

const GirjanandaIntern = () => {
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
          src="/girjananda.png"
          alt="Girijananda Logo"
          width={200}
          height={200}
          className='rounded-full object-center w-24 h-24 md:w-32 md:h-32 xl:w-48 xl:h-48'
        />
      </motion.div>

      {/* Content */}
      <div className='px-2 md:px-10 text-center md:text-left h-96 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#F7AB0A]/80 scrollbar-track-gray-400/20'>
        <h4 className='text-xl md:text-3xl xl:text-4xl font-light'>
          Girijananda University
        </h4>
        <p className='font-bold text-lg md:text-xl xl:text-2xl mt-1'>
          Web Developer Intern
        </p>

        {/* Skills */}
        <div className='flex flex-wrap justify-center md:justify-start gap-3 my-3'>
          <Image className='rounded-full' src="/react.svg" alt="React" width={40} height={40} />
          <Image className='rounded-full' src="/mySql.svg" alt="MySQL" width={40} height={40} />
          <Image className='rounded-full' src="/js.svg" alt="JavaScript" width={40} height={40} />
          <Image className='rounded-full' src="/express-js.png" alt="Express.js" width={40} height={40} />
        </div>

        <p className='uppercase py-3 text-sm md:text-base text-gray-300'>
          July 2025 - August 2025
        </p>

        {/* Responsibilities */}
        <ul className='list-disc space-y-3 ml-5 text-sm md:text-lg text-gray-200 text-left'>
          <li>Developed responsive web interfaces using React.js.</li>
          <li>Integrated backend APIs with Express and MySQL.</li>
          <li>Collaborated with UI/UX designers for seamless design implementation.</li>
          <li>Ensured mobile responsiveness and accessibility standards.</li>
          <li>Optimized performance and fixed cross-browser compatibility issues.</li>
        </ul>
      </div>
    </article>
  )
}

export default GirjanandaIntern;