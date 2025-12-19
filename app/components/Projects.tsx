'use client'
import React from 'react'
import { motion } from "motion/react"
import TripIt from './Projects/TripIt'
import Prescripto from './Projects/Prescripto'

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl text-center w-full z-20">
        Projects
      </h3>

      {/* Project slider */}
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 
        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        {/* Project #1 */}
        <TripIt/>
        <Prescripto/>
      </div>
      
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.section>
  )
}

export default Projects