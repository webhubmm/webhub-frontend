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
      content: 'At WebHubMM, our UI/UX services are meticulously crafted to elevate the visual appeal, usability, and overall user experience of your digital products. We understand that the user interface (UI) and user experience (UX) play a pivotal role in the success of any digital platform. Our dedicated team of UI/UX designers combines creativity with functionality to deliver designs that not only look stunning but also provide an intuitive and seamless interaction for your users'
    },
    {
      id: 2,
      label: 'Website Service',
      content: 'At WebHubMM, we specialize in developing robust and scalable web applications that are tailored to meet the unique requirements of your business. Our Web App services encompass a comprehensive approach, blending cutting-edge technologies with a strategic mindset to deliver solutions that not only meet but exceed your expectations.'
    },
    {
      id: 3,
      label: 'Mobile App Service',
      content: 'WebHubMM is at the forefront of mobile app development, delivering cutting-edge solutions that cater to the dynamic needs of the mobile landscape. Our Mobile App services are designed to provide a seamless and intuitive experience for users across iOS and Android platforms.'
    },
    {
      id: 4,
      label: 'CMS Service',
      content: 'WebHubMM offers comprehensive Content Management System (CMS) services, empowering you to take control of your digital content effortlessly. Our CMS solutions are designed to meet the diverse needs of businesses, from simple blogs to complex enterprise websites, providing flexibility, efficiency, and ease of management.'
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