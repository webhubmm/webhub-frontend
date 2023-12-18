'use client'

import React from 'react'
import CourseCard from './CourseCard';
import Reveal from '@/components/Utils/Reveal';
import {motion} from 'framer-motion'

const Learn = () => {

    const data = [
        {
            id: 1,
            title: "Web Development",
            youtube: "",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, error recusandae beatae nemo eum ratione eligendi reiciendis vel architecto ipsum quaerat sapiente perspiciatis qui ipsa dignissimos labore aliquam soluta fugit?",
            tags: ["HTML5","CSS"],
            total: 155,
            projects: [],
            color: "#00ff2f",
            image: "/images/web.jpeg",
        },
        {
            id: 2,
            title: "JavaScript",
            youtube: "",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, error recusandae beatae nemo eum ratione eligendi reiciendis vel architecto ipsum quaerat sapiente perspiciatis qui ipsa dignissimos labore aliquam soluta fugit?",
            tags: ["Javascript"],
            projects: [],
            total: 69,
            color: "#fffb00",
            image: "/images/js.jpeg",
        },
        {
            id: 3,
            title: "ReactJS",
            youtube: "",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, error recusandae beatae nemo eum ratione eligendi reiciendis vel architecto ipsum quaerat sapiente perspiciatis qui ipsa dignissimos labore aliquam soluta fugit?",
            tags: ["Functional Programming","ReactJS","Redux"],
            projects: [],
            total: 80,
            color: "#00c3ff",
            image: "/images/react.png",
        },
        {
            id: 4,
            title: "Laravel 9",
            youtube: "",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, error recusandae beatae nemo eum ratione eligendi reiciendis vel architecto ipsum quaerat sapiente perspiciatis qui ipsa dignissimos labore aliquam soluta fugit?",
            tags: ["Laravel"],
            projects: [],
            total: 50,
            color: "#ff1e00",
            image: "/images/laravel9.webp",
        }
    ]
  return (
    <div className='w-full flex justify-center items-center'>
        <section id='learn' className='container mx-auto px-4 section-spacing relative'>
            <div className="">
                <Reveal>
                    <h2 className="gradient-title text-center">
                            Free Learning
                    </h2>
                </Reveal>
            </div>
            <motion.div className="gradient-1"
            animate={{
                x: [-20,0,-20],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            ></motion.div>
            <motion.div className="gradient-2"
            animate={{
                y: [-20,0,-20],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            ></motion.div>
            <Reveal width='100%'>
                <div className="learn-layout">
                    {
                        data.map((course,index) => (
                            <CourseCard key={index} course={course} />
                        ))
                    }  
                </div>
            </Reveal>
    </section>
    </div>
  )
}

export default Learn