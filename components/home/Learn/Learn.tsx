'use client'

import React from 'react'
import '../../../styles/learn.css'
import CourseCard from './CourseCard';

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
            image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]
  return (
    <div className='w-full flex justify-center items-center'>
        <section id='learn' className='container section-spacing relative'>
            <div className="">
                <h2 className="gradient-title text-center">
                        Free Learning
                </h2>
            </div>
            <div className="gradient-1"></div>
            <div className="gradient-2"></div>
            <div className="learn-layout">
                {
                    data.map((course,index) => (
                         <CourseCard key={index} course={course} />
                    ))
                }  
            </div>
    </section>
    </div>
  )
}

export default Learn