'use client'
import React from 'react'
import { motion } from "motion/react"



const Projects = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                {/*projects*/}

                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img
                        initial={{ y: -300, opacity: 0 }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        src="./TripIt.png" alt="" />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'>AI Trip Planner</span>
                            : Powered by GeminiAI</h4>

                        <p className='text-lg text-center md:text-left '>Trip It is a modern web application that simplifies travel planning through AI. Built using React and Vite, the app allows users to generate personalized travel itineraries based on their preferences such as destination, budget, duration, and interests. It integrates the Gemini Pro 2.5 API to convert user inputs into structured and detailed JSON travel plans, offering a seamless and intelligent planning experience.

                            The user interface is clean, intuitive, and fully responsive, making it easy to plan trips across devices. Users can fill out a dynamic form and instantly preview their itinerary with options to edit or regenerate the plan. The app emphasizes flexibility and personalization while maintaining performance and speed. Firebase integration is optionally used to store travel plans for future retrieval.

                            On the technology side, Trip It leverages React.js, Tailwind CSS, and DaisyUI for frontend development, while Framer Motion is optionally used to enhance UI interactions. The AI features are powered by the Gemini Pro 2.5 API, and Firebase Firestore is included for backend storage when needed. The project is version-controlled with GitHub and deployed via Vercel, ensuring modern DevOps and CI/CD practices.

                            Overall, Trip It showcases a blend of frontend development skills, AI integration, and a user-first design approach, making it a standout piece in my portfolio.</p>
                        <a href="https://trip-it-xi.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <button className='bg-[#F7AB0A]/50 border border-amber-700 rounded-full w-full'>
                                <span>Live Link</span>
                            </button>
                        </a>
                    </div>
                </div>

        {/*number 2*/}
                {/*<div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img
                        initial={{ y: -300, opacity: 0 }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        src="./TripIt.png" alt="" />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'>AI Trip Planner</span>
                            : Powered by GeminiAI</h4>

                        <p className='text-lg text-center md:text-left '>Trip It is a modern web application that simplifies travel planning through AI. Built using React and Vite, the app allows users to generate personalized travel itineraries based on their preferences such as destination, budget, duration, and interests. It integrates the Gemini Pro 2.5 API to convert user inputs into structured and detailed JSON travel plans, offering a seamless and intelligent planning experience.

                            The user interface is clean, intuitive, and fully responsive, making it easy to plan trips across devices. Users can fill out a dynamic form and instantly preview their itinerary with options to edit or regenerate the plan. The app emphasizes flexibility and personalization while maintaining performance and speed. Firebase integration is optionally used to store travel plans for future retrieval.

                            On the technology side, Trip It leverages React.js, Tailwind CSS, and DaisyUI for frontend development, while Framer Motion is optionally used to enhance UI interactions. The AI features are powered by the Gemini Pro 2.5 API, and Firebase Firestore is included for backend storage when needed. The project is version-controlled with GitHub and deployed via Vercel, ensuring modern DevOps and CI/CD practices.

                            Overall, Trip It showcases a blend of frontend development skills, AI integration, and a user-first design approach, making it a standout piece in my portfolio.</p>
                        <a href="https://trip-it-xi.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <button className='bg-[#F7AB0A]/50 border border-amber-700 rounded-full w-full'>
                                <span>Live Link</span>
                            </button>
                        </a>
                    </div>

                </div>*/}
            </div> 

            <div className='w-full absolute top[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>

        </motion.div>
                        

    )
                    

}

export default Projects