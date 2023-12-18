import React from 'react'
import ExpertiseCard from './ExpertiseCard'
import Reveal from '@/components/Utils/Reveal'

const Expertise = () => {

    const data = [
        {
            number: '01',
            title: "Discovery",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi debitis numquam, quisquam porro unde exercitationem, quas voluptates atque labore nisi temporibus harum quae quidem."
        },
        {
            number: '02',
            title: "Strategy",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi debitis numquam, quisquam porro unde exercitationem, quas voluptates atque labore nisi temporibus harum quae quidem."
        },
        {
            number: '03',
            title: "Websites",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi debitis numquam, quisquam porro unde exercitationem, quas voluptates atque labore nisi temporibus harum quae quidem."
        },
        {
            number: '04',
            title: "Mobile Apps",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi debitis numquam, quisquam porro unde exercitationem, quas voluptates atque labore nisi temporibus harum quae quidem."
        },
        {
            number: '05',
            title: "Web Design",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi debitis numquam, quisquam porro unde exercitationem, quas voluptates atque labore nisi temporibus harum quae quidem."
        },
    ]

  return (
    <section id='expertise' className='section-spacing'>
        <div className="container mx-auto px-4">
            <Reveal>
                <h2 className="gradient-title text-center">
                        Our Expertise
                </h2>
            </Reveal>
            <div className="expertise-box">
                {
                    data.map((card,index) => (
                        <ExpertiseCard
                            key={index}
                            title={card.title}
                            content={card.body}
                            number={card.number}
                        />
                    )) 
                }
            </div>
        </div>
    </section>
  )
}

export default Expertise