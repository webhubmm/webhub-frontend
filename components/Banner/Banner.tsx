import React from 'react'
import '../../styles/banner.css'
import { BiMailSend } from 'react-icons/bi'

const Banner = () => {
  return (
    <>
        <section id='banner' className='section-spacing'>
            <div className="container">
                <h1 className="main-title">
                    Webhub
                </h1>
                <h2 className="subtitle">
                    Boost your <span className='primary-text-color euro-extd'>productivity</span> with our services 
                </h2>
            </div>
        </section>
    </>
  )
}

export default Banner