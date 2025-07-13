"use client"
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "motion/react" // use framer-motion, not "motion/react"




function Header() {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      
      {/* Left Social Icons */}
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-row items-center'
      >
        <SocialIcon url="https://www.instagram.com/un.signed_varchar0/" fgColor='gray' bgColor='transparent' />
        <SocialIcon url="https://www.linkedin.com/in/abhikraj03/" fgColor='gray' bgColor='transparent' />
        <SocialIcon url="https://github.com/Unsigned0Varchar" fgColor='gray' bgColor='transparent' />
      </motion.div>

      {/* Right Contact Link */}
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-row items-center cursor-pointer text-gray-300'
      >
        {/* ✅ Use SocialIcon with url="#contact" instead of Link */}
        <SocialIcon
          url="#contact"
          network='email'
          fgColor='gray'
          bgColor='transparent'
          className='cursor-pointer'
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch</p>
      </motion.div>

    </header>
  )
}

export default Header