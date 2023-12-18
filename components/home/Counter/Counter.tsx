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
                        Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Eligendi, perspiciatis.
                      </h2>
                      <p className="lead-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fugit architecto labore officia, velit numquam. Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                    <Link href={'/'} className='primary-btn mx-auto lg:mx-0'>Our Team</Link>
                    </>
                  </Reveal>

              </div>
              <div className='w-full grid grid-cols-2 items-center place-items-center' style={{ gap: '35px' }}>
                <Reveal>
                  <div className='flex flex-col gap-0'>
                      <h1 className="count">
                          5+
                      </h1>
                      <p className="sub-text">
                        Done Project
                      </p>
                  </div>
                </Reveal>
                <Reveal>
                  <div className='flex flex-col gap-0'>
                      <h1 className="count">
                          15+
                      </h1>
                      <p className="sub-text">
                        Happy Client
                      </p>
                  </div>
                </Reveal>
                <Reveal>
                  <div className='flex flex-col gap-0'>
                      <h1 className="count">
                          3+
                      </h1>
                      <p className="sub-text">
                        Years of Exp
                      </p>
                  </div>
                </Reveal>
                <Reveal>
                  <div className='flex flex-col gap-0'>
                      <h1 className="count">
                          3+
                      </h1>
                      <p className="sub-text">
                        Years of Exp
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