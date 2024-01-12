"use client"

import Modal from '@/components/Utils/Modal'
import Reveal from '@/components/Utils/Reveal'
import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'

const About = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(1);
  const data = [
    {
      id: 1,
      label: 'UI/UX Design',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque sapiente nam distinctio voluptatem officia omnis possimus. Rerum beatae at culpa quaerat delectus ipsa explicabo eos eligendi? Molestias fugit incidunt eveniet?'
    },
    {
      id: 2,
      label: 'Website Service',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque sapiente nam distinctio voluptatem officia omnis possimus. Rerum beatae at culpa quaerat delectus ipsa explicabo eos eligendi? Molestias fugit incidunt eveniet?'
    },
    {
      id: 3,
      label: 'Mobile App Service',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque sapiente nam distinctio voluptatem officia omnis possimus. Rerum beatae at culpa quaerat delectus ipsa explicabo eos eligendi? Molestias fugit incidunt eveniet?'
    },
    {
      id: 4,
      label: 'CMS Service',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque sapiente nam distinctio voluptatem officia omnis possimus. Rerum beatae at culpa quaerat delectus ipsa explicabo eos eligendi? Molestias fugit incidunt eveniet?'
    },
  ]

  return (
      <>
        <section id="about" className='section-spacing w-full text-center flex flex-col justify-center items-center gap-10'>
              <div className='w-full md:w-2/3'>
                <Reveal width='fit-content'>
                  <>
                    <h1 className="subtitle">
                        We are a <span className='primary-text-color euro-extd'>software company</span> in Myanmar 
                    </h1>
                    <p className='para-text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dicta aliquam adipisci minima rerum quisquam voluptate architecto ducimus fuga odio.
                    </p>
                  </>

                </Reveal>

              </div>
            
              <div className="text-center w-full md:w-2/3">
                <Reveal width='fit-content'>
                      <p className="lead-text">
                        Lorem ipsum dolor sit amet <button onClick={() => {
                          setIsOpen(true)
                          setIndex(1)
                        }} className="link">UI/UX Design</button> adipisicing elit. Corporis aperiam, vel <button onClick={() => {
                          setIsOpen(true)
                          setIndex(2)
                        }} className="link">Website Service</button> suscipit est perferendis ratione!
                        Lorem ipsum dolor sit amet <button onClick={() => {
                          setIsOpen(true)
                          setIndex(3)
                        }} className="link">Mobile App Service</button> adipisicing elit. Corporis aperiam, vel <button onClick={() => {
                          setIsOpen(true)
                          setIndex(4)
                        }} className="link">CMS Service</button> suscipit est perferendis ratione!
                      </p>
                </Reveal>
              </div>
        </section>
        {isOpen && (
          <AnimatePresence>
            <Modal label={data[index -1].label} content={data[index -1].content} setIsOpen={setIsOpen} />  
          </AnimatePresence>
        )}
      </>
  )
}

export default About