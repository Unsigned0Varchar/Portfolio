'use client'
import React from 'react'
import { motion } from "motion/react"

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly ax-aito items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

        <motion.img
        initial={{
            x:-200,
            opacity:0,
        }}
        transition={{
            duration:1.2,
        }}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}
        src='/mee2.jpg'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> Background</h4>
            <p className='text-sm'>
                Hi, I’m Abhikraj — a passionate web developer and a BCA student on a mission to build digital products that create real impact. With a strong foundation in computer applications and hands-on experience building web apps using modern technologies like React, Node.js, and MongoDB, I focus on solving real-world problems through clean, functional, and user-centric design.

I’m currently sharpening my skills while actively working on projects that blend creativity with performance. Beyond web development, I’m also laying the groundwork for my own startup, where I aim to combine innovation with technology to deliver scalable solutions.

Whether it’s front-end interfaces or full-stack systems, I love turning ideas into fast, functional, and beautiful products.

Let’s connect and build something amazing together.
            </p>
        </div>
    </motion.div>


  )
}

export default About