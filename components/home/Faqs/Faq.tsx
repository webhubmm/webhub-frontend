"use client";

import React, { useState } from 'react'
import AccordionItem from './AccordionItem';
import Reveal from '@/components/Utils/Reveal';

const faqs = [
  {
    id: 1,
    question: 'How can I help ?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga similique voluptate reiciendis quisquam perspiciatis veritatis corporis vero corrupti? Dolorem, veritatis!'
  },
  {
    id: 2,
    question: 'How can I help ?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga similique voluptate reiciendis quisquam perspiciatis veritatis corporis vero corrupti? Dolorem, veritatis!'
  },
  {
    id: 3,
    question: 'How can I help ?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga similique voluptate reiciendis quisquam perspiciatis veritatis corporis vero corrupti? Dolorem, veritatis!'
  },
  {
    id: 4,
    question: 'How can I help ?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga similique voluptate reiciendis quisquam perspiciatis veritatis corporis vero corrupti? Dolorem, veritatis!'
  },
  {
    id: 5,
    question: 'How can I help ?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga similique voluptate reiciendis quisquam perspiciatis veritatis corporis vero corrupti? Dolorem, veritatis!'
  },
]

const Faq = () => {

  const [activeIndex, setActiveIndex] = useState<any>(0);

  const handleItemClick = (index : any) => {
    if (index === activeIndex) {
      setActiveIndex(null); 
    } else {
      setActiveIndex(index); 
    }
  };

  return (
    <section id="faq">
        <Reveal>
          <div className="faq-container  container mx-auto px-4 justify-center">
              <div className='relative'>
                  <div className='gradient-title title'>
                      Frequently Ask Questions
                  </div>
              </div>
              <div className="faq-box">
                  {
                    faqs.map((data,index) => (
                      <AccordionItem
                        key={index} 
                        data={data} 
                        isActive={index === activeIndex} 
                        onClick={() => handleItemClick(index)}
                      />
                    ))
                  }
              </div>
          </div>
        </Reveal>

    </section>
  )
}

export default Faq