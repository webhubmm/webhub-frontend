"use client";

import React, { useState } from 'react'
import AccordionItem from './AccordionItem';
import Reveal from '@/components/Utils/Reveal';

const faqs = [
  {
    id: 1,
    question: 'How much cost for a project?',
    answer: "Our project costs vary based on factors like scope, complexity, and specific requirements. We tailor pricing to ensure fair and transparent agreements, considering your project's unique needs."
  },
  {
    id: 2,
    question: 'How long does a project take ?',
    answer: 'Project timelines depend on complexity and scope. We strive for efficient delivery without compromising quality. Detailed discussions during the Discovery phase allow us to provide accurate timelines.'
  },
  {
    id: 3,
    question: 'Which tech stack do we use?',
    answer: "Our tech stack is diverse and adaptable, tailored to each project's needs. We leverage cutting-edge technologies and frameworks to ensure optimal performance and scalability."
  },
  {
    id: 4,
    question: 'How are we?',
    answer: 'We are a dedicated team of professionals passionate about delivering innovative solutions. Learn more about our values, expertise, and commitment on our "About Us" page.'
  },
  {
    id: 5,
    question: 'Do you have after-sale service?',
    answer: 'Absolutely. Our commitment extends beyond project completion. We offer comprehensive after-sale services, including maintenance, updates, and ongoing support to ensure your digital solution remains optimal.'
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