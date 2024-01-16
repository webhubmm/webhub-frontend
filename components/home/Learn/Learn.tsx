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
            youtube: "https://youtube.com/playlist?list=PLomHQtzMFqxwSB1Uc3zOE9mcCma308E8s&si=7wrQ_xePUzK2Yzby",
            content: "",
            tags: ["HTML5","CSS","JS"],
            total: 137,
            projects: 20,
            color: "#00ff2f",
            image: "/images/web.webp",
        },
        {
            id: 2,
            title: "JavaScript",
            youtube: "https://youtube.com/playlist?list=PLomHQtzMFqxz6Qo_9I3Vx2FqZZzLCB0ys&si=AKYc0n6Q2Q8fnzA1",
            content: "",
            tags: ["Javascript"],
            projects: 15,
            total: 69,
            color: "#fffb00",
            image: "/images/js.webp",
        },
        {
            id: 3,
            title: "ReactJS",
            youtube: "https://youtube.com/playlist?list=PLomHQtzMFqxwit2t_hTLjPt92ph9tHJBi&si=_oGksU-7OiqH5_6t",
            content: "",
            tags: ["Functional Programming","ReactJS","Redux"],
            projects: 7,
            total: 102,
            color: "#00c3ff",
            image: "/images/react.webp",
        },
        {
            id: 4,
            title: "Laravel 9",
            youtube: "https://youtube.com/playlist?list=PLomHQtzMFqxxdrm4SgoCS0TAbcFqlUo10&si=-lDXLC8AvyrPEmLk",
            content: "",
            tags: ["Laravel"],
            projects: 1,
            total: 53,
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