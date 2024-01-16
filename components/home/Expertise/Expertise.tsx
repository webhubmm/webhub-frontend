import React from 'react'
import ExpertiseCard from './ExpertiseCard'
import Reveal from '@/components/Utils/Reveal'

const Expertise = () => {

    const data = [
        {
            number: '01',
            title: "Discovery",
            body: "Embark on a transformative journey with our Discovery expertise. Through rigorous analysis, we unravel the intricacies of your business, unveiling challenges, and aspirations. This phase sets the foundation for a tailored roadmap, aligning technology with your vision."
        },
        {
            number: '02',
            title: "Strategy",
            body: "In the Strategy realm, we craft blueprints for success. Meticulously aligning business goals with cutting-edge technology, we plan for seamless execution. Our strategic approach ensures that your software or web solution is not just efficient but also aligned with your overarching objectives."
        },
        {
            number: '05',
            title: "Web Design",
            body: "Elevate your online presence with our Web Design prowess. Our Discovery-driven process unveils your brand essence and user expectations, guiding the creation of visually stunning and user-centric websites. From concept to execution, we craft digital experiences that resonate with your audience.            "
        },
        {
            number: '03',
            title: "Websites",
            body: "Immerse your brand in the digital landscape with our Websites expertise. Through meticulous planning and creative execution, we deliver online platforms that reflect your brand identity and foster meaningful connections with your audience."
        },
        {
            number: '04',
            title: "Mobile Apps",
            body: "Unlock the potential of the mobile world with our Mobile Apps expertise. From concept to deployment, our strategic approach ensures the development of user-centric, scalable, and feature-rich mobile applications. Join us in shaping the future of mobile technology."
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