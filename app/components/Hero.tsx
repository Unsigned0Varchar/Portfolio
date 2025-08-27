"use client"
import * as React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Hi, My name's Abhikraj", "Coffee-Lover.jsx", "<ButLovesToCodeMore />"],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className="h-screen flex flex-col space-y-6 sm:space-y-8 items-center justify-center text-center overflow-hidden px-4">
      <BackgroundCircles />

      {/* Profile Image */}
      <Image
        src="/MyPic.jpg"
        alt="Profile picture"
        width={160}
        height={160}
        className="relative rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto object-cover"
        priority
      />

      <div className="z-20">
        {/* Subtitle */}
        <h2 className="text-xs sm:text-sm uppercase text-gray-500 pb-2 tracking-[8px] sm:tracking-[15px]">
          Software Engineer
        </h2>

        {/* Typewriter Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold px-2 sm:px-6 md:px-10">
          <span className="mr-2 sm:mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        {/* Buttons */}
        <div className="pt-5 flex flex-wrap justify-center gap-3 sm:gap-5">
          <Link href="#about"><button className="heroButton">About</button></Link>
          <Link href="#projects"><button className="heroButton">Projects</button></Link>
          <Link href="#skills"><button className="heroButton">Skills</button></Link>
          <Link href="#workexperience"><button className="heroButton">Experience</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Hero