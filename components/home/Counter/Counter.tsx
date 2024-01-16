"use client"

import React from 'react'
import Link from 'next/link'
import Reveal from '@/components/Utils/Reveal'
import {motion} from 'framer-motion'

const Counter = () => {
  return (
    <section id='counter' className='section-spacing relative'>
          <div className="box container mx-auto px-4">
              <div className='flex flex-col flex-wrap justify-start items-start'>
                  <Reveal>
                    <>
                      <div className='mb-6'>
                      <h1 className="gradient-title counter-main-title">
                          We Are
                      </h1>
                      <h2 className="subtitle">
                         a dedicated team of professionals with a passion for creating exceptional digital experiences. 
                      </h2>
                      <p className="lead-text">
                        Our diverse skill set and collaborative approach enable us to offer a wide range of services, making us a one-stop solution for all your web and mobile development requirements.
                      </p>
                    </div>
                    {/* <div className="flex justify-center lg:justify-start">
                      <Link href={'/'} className=' primary-btn'>Our Team</Link>
                    </div> */}
                    </>
                  </Reveal>
              </div>
              <div className='w-full grid grid-cols-2 gap-3 items-center place-items-center' style={{ gap: '35px' }}>
                <Reveal>
                  <div className='flex flex-col gap-0'>
                      <h1 className="count">
                          4
                      </h1>
                      <p className="sub-text">
                        Done Project
                      </p>
                  </div>
                </Reveal>
                <Reveal>
                  <div className='flex flex-col gap-0'>
                      <h1 className="count">
                          4
                      </h1>
                      <p className="sub-text">
                        Happy Client
                      </p>
                  </div>
                </Reveal>
                <Reveal>
                  <div className='flex flex-col gap-0'>
                      <h1 className="count">
                          4+
                      </h1>
                      <p className="sub-text">
                        Years of Exp
                      </p>
                  </div>
                </Reveal>
                <Reveal>
                  <div className='flex flex-col gap-0'>
                      <h1 className="count">
                          6
                      </h1>
                      <p className="sub-text">
                        Projects
                      </p>
                  </div>
                </Reveal>
              </div>
          </div>
          <motion.div className="gradient-1"
            animate={{
                x: [-20,0,-20],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            ></motion.div>    </section>
  )
}

export default Counter