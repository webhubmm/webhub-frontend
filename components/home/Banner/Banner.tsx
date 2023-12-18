"use client";

import Reveal from '@/components/Utils/Reveal';
import React from 'react'

const Banner = () => {
  return (
    <>
        <section id='banner' className='section-spacing'>
            <Reveal>
                <div className="container mx-auto px-4 text-center">
                            <h1 className="main-title">
                                Webhub
                            </h1>
                            <h2 className="subtitle">
                                Boost your <span className='primary-text-color euro-extd'>productivity</span> with our services 
                            </h2>
                </div>
            </Reveal>
        </section>
    </>
  )
}

export default Banner