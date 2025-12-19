'use client'
import React from 'react'
import { motion } from "motion/react"

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col md:flex-row h-screen relative text-center md:text-left max-w-7xl px-4 md:px-10 justify-center md:justify-evenly mx-auto items-center pt-16 md:pt-0'
    >
      <h3 className='absolute top-20 md:top-24 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl'>
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src='/mee2.jpg'
        alt='About Me'
        className='-mb-20 md:mb-0 flex-shrink-0 w-32 h-32 md:w-64 md:h-64 xl:w-[500px] xl:h-[600px] rounded-full md:rounded-lg object-cover mt-10 md:mt-0'
      />

      <div className='space-y-6 md:space-y-10 px-0 md:px-10 mt-20 md:mt-0'>
        <h4 className='text-2xl md:text-4xl font-semibold'>
          Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> Background
        </h4>
        <p className='text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-justify md:text-left'>
          Hi, I&apos;m Abhikraj — a passionate web developer and BCA student. I build digital products that create real impact. With hands-on experience in React, Node.js, and MongoDB, I focus on solving real-world problems through clean, functional, and user-centric design. <br /><br />

          I&apos;m sharpening my skills while working on projects blending creativity with performance. I am also laying the groundwork for my startup to combine innovation and technology for scalable solutions. <br /><br />

          Whether it&apos;s front-end interfaces or full-stack systems, I love turning ideas into fast, functional, and beautiful products. <br /><br />

          Let&apos;s connect and build something amazing together.
        </p>
      </div>
    </motion.div>
  )
}

export default About