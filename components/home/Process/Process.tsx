"use client";

import React, { useState } from 'react'
import AccordionItem from './AccordionItem';
import Reveal from '@/components/Utils/Reveal';

const process = [
  {
    id: 1,
    question: 'Design',
    answer: 'In the Design phase, we ideate and create a blueprint, emphasizing user experience, aesthetics, and functionality, setting the foundation for a visually compelling and user-centric project.'
  },
  {
    id: 2,
    question: 'Development',
    answer: 'Development breathes life into the design. Our skilled team translates concepts into functional code, constructing the backbone of your digital solution with precision and efficiency.'
  },
  {
    id: 3,
    question: 'Testing',
    answer: 'Rigorous testing ensures reliability. Every element undergoes scrutiny to identify and resolve issues, ensuring a seamless and robust user experience before the project moves forward.'
  },
  {
    id: 4,
    question: 'Production',
    answer: 'Transitioning from testing to production, we deploy your project for public access. This phase involves fine-tuning and optimizing, ensuring a smooth launch and operational efficiency.'
  },
  {
    id: 5,
    question: 'Maintanence',
    answer: 'Post-launch, our commitment continues with ongoing maintenance. We monitor performance, address emerging issues, and implement updates, ensuring your digital solution operates optimally throughout its lifecycle.'
  },
]

const Process = () => {

  const [activeIndex, setActiveIndex] = useState<any>(0);

  const handleItemClick = (index : number) => {
    if (index === activeIndex) {
      setActiveIndex(null); 
    } else {
      setActiveIndex(index); 
    }
  };

  return (
    <section id="process" className='container-fluid mx-auto'>
            <div className="w-full">
              <div className='flex justify-center items-center flex-col gap-20'>
                  <Reveal>
                    <>
                      <div className='gradient-title title'>
                          Our Process
                      </div>
                      <ul className='process-box'>
                        {
                          process.map((data,index) => (
                            <AccordionItem
                                key={index} 
                                data={data} 
                                isActive={index === activeIndex} 
                                onClick={() => handleItemClick(index)}
                            />
                          ))
                        }
                      </ul>
                    </>
                  </Reveal>
              </div>
            </div>
    </section>
  )
}

export default Process