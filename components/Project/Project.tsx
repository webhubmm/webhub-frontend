"use client";

import React, { useEffect, useState } from 'react'
import '../../styles/project.css'
import Image from 'next/image'

const Project = () => {

  return (
    <section id='project' className='section-spacing'>
        <div className='container'>
            <div className="w-full text-center">
                <h1 className="gradient-title">
                    Done Projects
                </h1>
            </div>
            <div className="project  container justify-center">
                <div className='relative'>
                    <div className={`title subtitle`}>
                        Binary Boss , Electronic Ecommerce Shop
                    </div>
                </div>
                <div className="img-container box-1">
                    <Image
                        src="/images/project-1.png"
                        width={700}
                        height={400}
                        alt="Picture of the author"
                    />
                </div>
            </div>
            <div className="project container justify-center">
                <div className='relative'>
                    <div className={`title subtitle`}>
                        Fashion King , a ecommerce store
                    </div>
                </div>
                <div className="img-container box-2">
                    <Image
                        src="/images/project-2.png"
                        width={700}
                        height={400}
                        alt="Picture of the author"
                    />
                </div>
            </div>

            <div className="w-full text-center">
                <a href="/" className="link text-3xl ">See More Projects</a>
            </div>
        </div>
    </section>
  )
}

export default Project