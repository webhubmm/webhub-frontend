import React from 'react'
import '../../../styles/counter.css'
import Link from 'next/link'

const Counter = () => {
  return (
    <section id='counter' className='section-spacing'>
        <div className="box container">
            <div className='flex flex-col flex-wrap justify-start items-start'>
                <h1 className="gradient-title counter-main-title">
                    We Are
                </h1>
                <h2 className="subtitle">
                  Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Eligendi, perspiciatis.
                </h2>
                <p className="lead-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fugit architecto labore officia, velit numquam. Lorem ipsum dolor sit amet.
                </p>
                <Link href={'/'} className='primary-btn'>Our Team</Link>
            </div>
            <div className='w-full grid grid-cols-2 items-center place-items-center' style={{ gap: '35px' }}>
              <div className='flex flex-col gap-0'>
                  <h1 className="count">
                      5+
                  </h1>
                  <p className="sub-text">
                    Done Project
                  </p>
              </div>
              <div className='flex flex-col gap-0'>
                  <h1 className="count">
                      15+
                  </h1>
                  <p className="sub-text">
                    Happy Client
                  </p>
              </div>
              <div className='flex flex-col gap-0'>
                  <h1 className="count">
                      3+
                  </h1>
                  <p className="sub-text">
                    Years of Exp
                  </p>
              </div>
              <div className='flex flex-col gap-0'>
                  <h1 className="count">
                      3+
                  </h1>
                  <p className="sub-text">
                    Years of Exp
                  </p>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Counter