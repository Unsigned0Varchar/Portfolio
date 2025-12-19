"use client"

import React from 'react'
import { motion } from "motion/react"
import Apiint from './skillOne-by-One/Apiint'
import AuthLogo from './skillOne-by-One/AuthLogo'
import BootstrapLogo from './skillOne-by-One/BootstrapLogo'
import Express from './skillOne-by-One/Exress'
import FlutterLogo from './skillOne-by-One/FlutterLogo'
import GoogleCloud from './skillOne-by-One/GoogleCloud'
import HtmlLogo from './skillOne-by-One/HtmlLogo'
import JsLogo from './skillOne-by-One/JsLogo'
import Mongo from './skillOne-by-One/Mongo'
import NextLogo from './skillOne-by-One/NextLogo'
import ReactLogo from './skillOne-by-One/ReactLogo'
import TailwindLogo from './skillOne-by-One/TailwindLogo'
import TsLogo from './skillOne-by-One/TsLogo'
import VercelLogo from './skillOne-by-One/VercelLogo'
import Firebase from './skillOne-by-One/Firebase'
import MySql from './skillOne-by-One/MySql'
import Shadcn from './skillOne-by-One/Shadcn'
import Dart from './skillOne-by-One/Dart'

const Skills = () => {
  return (
    <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1.5}}
      className='h-screen flex flex-col relative text-center md:text-left xl:flex-row 
      max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
      <h3 className='absolute top-20 md:top-24 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl'>
        Skills
      </h3>

      <h3 className='absolute top-32 md:top-36 uppercase tracking-[2px] md:tracking-[3px] text-gray-500 text-xs md:text-sm text-center px-4'>
        Hover over an image to see name of skill
      </h3>

      <div className='grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 mt-32 md:mt-28 p-4'>
        <Apiint/>
        <AuthLogo/>
        <BootstrapLogo/>
        <Express/>
        <FlutterLogo/>
        <GoogleCloud/>
        <HtmlLogo/>
        <JsLogo/>
        <Mongo/>
        <NextLogo/>
        <ReactLogo/>
        <TailwindLogo/>
        <TsLogo/>
        <VercelLogo/>
        <Firebase/>
        <MySql/>
        <Shadcn/>
        <Dart/>
      </div>
    </motion.div>
  )
}

export default Skills