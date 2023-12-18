import Reveal from '@/components/Utils/Reveal'
import React from 'react'

const About = () => {
  return (
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
                      Lorem ipsum dolor sit amet <a href="" className="link">Web Design</a> adipisicing elit. Corporis aperiam, vel <a href="" className="link">Mobile App</a> suscipit est perferendis ratione!
                      Lorem ipsum dolor sit amet <a href="" className="link">Maintainence</a> adipisicing elit. Corporis aperiam, vel <a href="" className="link">Content Management</a> suscipit est perferendis ratione!
                    </p>
              </Reveal>
            </div>
      </section>
  )
}

export default About