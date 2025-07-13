"use client"
import React from 'react'
import { motion } from "motion/react"
import Image from 'next/image'

const ExpCard = () => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
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
          className='rounded-full object-center xl:w-[200px] xl:h-[200px]'
        />
      </motion.div>

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Girijananda University</h4>
        <p className='font-bold text-2xl mt-1'>Web Developer Intern</p>
        <div className='flex space-x-2 my-2'>
          <Image className='rounded-full' src="/react.svg" alt="React" width={40} height={40} />
          <Image className='rounded-full' src="/mySql.svg" alt="MySQL" width={40} height={40} />
          <Image className='rounded-full' src="/js.svg" alt="JavaScript" width={40} height={40} />
          <Image className='rounded-full' src="/express-js.png" alt="Express.js" width={40} height={40} />
        </div>
        <p className='uppercase py-5 text-gray-300'>July 2025 - August 2025</p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
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

export default ExpCard