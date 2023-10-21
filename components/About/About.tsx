import React from 'react'
import '../../styles/about.css'

const About = () => {
  return (
    <section id="about" className='section-spacing text-center'>
            <div className='w-full md:w-2/3'>
                <h1 className="subtitle">
                    We are a <span className='primary-text-color euro-extd'>software company</span> in Myanmar 
                </h1>
                <p className='para-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dicta aliquam adipisci minima rerum quisquam voluptate architecto ducimus fuga odio.
                </p>
            </div>
            <p className="lead-text w-full md:w-2/3">
                Lorem ipsum dolor sit amet <a href="" className="link">Web Design</a> adipisicing elit. Corporis aperiam, vel <a href="" className="link">Mobile App</a> suscipit est perferendis ratione!
                Lorem ipsum dolor sit amet <a href="" className="link">Maintainence</a> adipisicing elit. Corporis aperiam, vel <a href="" className="link">Content Management</a> suscipit est perferendis ratione!
            </p>
    </section>
  )
}

export default About