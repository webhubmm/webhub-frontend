"use client";

import React, { useState } from 'react'
import AccordionItem from './AccordionItem';
import Reveal from '@/components/Utils/Reveal';

const process = [
  {
    id: 1,
    question: 'Design',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga similique voluptate reiciendis quisquam perspiciatis veritatis corporis vero corrupti? Dolorem, veritatis!'
  },
  {
    id: 2,
    question: 'Development',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga similique voluptate reiciendis quisquam perspiciatis veritatis corporis vero corrupti? Dolorem, veritatis!'
  },
  {
    id: 3,
    question: 'Testing',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga similique voluptate reiciendis quisquam perspiciatis veritatis corporis vero corrupti? Dolorem, veritatis!'
  },
  {
    id: 4,
    question: 'Production',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga similique voluptate reiciendis quisquam perspiciatis veritatis corporis vero corrupti? Dolorem, veritatis!'
  },
  {
    id: 5,
    question: 'Maintanence',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga similique voluptate reiciendis quisquam perspiciatis veritatis corporis vero corrupti? Dolorem, veritatis!'
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