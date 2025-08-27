'use client'
import React from 'react'
import { motion } from "motion/react"

const About = () => {
  return (
    <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1.5}}
      className='flex flex-col md:flex-row relative h-screen text-center md:text-left max-w-7xl px-5 md:px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

      <motion.img
        initial={{ x:-200, opacity:0 }}
        transition={{ duration:1.2 }}
        whileInView={{opacity:1, x:0}}
        viewport={{once:true}}
        src='/mee2.jpg'
        alt="Abhikraj"
        className='mb-10 md:mb-0 flex-shrink-0 w-48 h-48 md:w-64 md:h-64 xl:w-96 xl:h-[600px] rounded-full md:rounded-lg object-cover'
      />

      <div className='space-y-6 md:space-y-10 px-2 md:px-10 max-w-xl md:max-w-2xl'>
        <h4 className='text-2xl md:text-4xl font-semibold'>
          Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> Background
        </h4>
        <p className='text-sm md:text-base leading-relaxed'>
          Hi, I&apos;m Abhikraj — a passionate web developer and a BCA student on a mission to build digital products that create real impact. With a strong foundation in computer applications and hands-on experience building web apps using modern technologies like React, Node.js, and MongoDB, I focus on solving real-world problems through clean, functional, and user-centric design. <br /><br />

          I&apos;m currently sharpening my skills while actively working on projects that blend creativity with performance. Beyond web development, I&apos;m also laying the groundwork for my own startup, where I aim to combine innovation with technology to deliver scalable solutions. <br /><br />

          Whether it&apos;s front-end interfaces or full-stack systems, I love turning ideas into fast, functional, and beautiful products. <br /><br />

          Let&apos;s connect and build something amazing together.
        </p>
      </div>
    </motion.div>
  )
}

export default About