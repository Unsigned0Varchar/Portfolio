"use client"
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion" // ✅ use framer-motion, not motion/react

function Header() {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-50 xl:items-center backdrop-blur-md bg-white/30 dark:bg-black/30">
      
      {/* Left Social Icons */}
      <motion.div
        initial={{ x: -200, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center gap-2 sm:gap-3"
      >
        <SocialIcon url="https://www.instagram.com/un.signed_varchar0/" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://www.linkedin.com/in/abhikraj03/" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://github.com/Unsigned0Varchar" fgColor="gray" bgColor="transparent" />
      </motion.div>

      {/* Right Contact Link */}
      <motion.div
        initial={{ x: 200, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center cursor-pointer text-gray-600 dark:text-gray-300"
      >
        <SocialIcon
          url="#contact"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          className="cursor-pointer"
        />
        <p className="uppercase hidden sm:inline-flex text-xs sm:text-sm text-gray-600 dark:text-gray-400 ml-2">
          Get in Touch
        </p>
      </motion.div>
    </header>
  )
}

export default Header