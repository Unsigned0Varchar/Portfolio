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





const Skills = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>

        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for profieciency</h3>

        <div className='grid grid-cols-4 gap-5'>
            
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
        </div>
    </motion.div>

    
  )
}

export default Skills