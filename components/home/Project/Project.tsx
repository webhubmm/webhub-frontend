import React from 'react'
import Image from 'next/image'
import Reveal from '@/components/Utils/Reveal'

const Project = () => {

  return (
    <section id='project' className='section-spacing'>
        <div className='container mx-auto px-4'>
            <Reveal>
                <div className="flex justify-center md:justify-start">
                    <h1 className="gradient-title">
                        Projects
                    </h1>
                </div>
            </Reveal>
            <Reveal>
                <div className="project  container mx-auto px-4 justify-center">
                    <div className='relative'>
                        <div className={`title subtitle`}>
                            Binary Boss , Electronic Ecommerce Shop
                        </div>
                    </div>
                    <div className="img-container box-1">
                        <Image
                            src="/images/project-1.png"
                            width={700}
                            height={400}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
            </Reveal>
            <Reveal>
                <div className="project container mx-auto px-4 justify-center">
                    <div className='relative'>
                        <div className={`title subtitle`}>
                            Fashion King , a ecommerce store
                        </div>
                    </div>
                    <div className="img-container box-2">
                        <Image
                            src="/images/project-2.png"
                            width={700}
                            height={400}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
            </Reveal>

            <Reveal>
                <div className="project container mx-auto px-4 justify-center">
                    <div className='relative'>
                        <div className={`title subtitle`}>
                            Thai Stock Lottery Engine
                        </div>
                    </div>
                    <div className="img-container box-1">
                        <Image
                            src="/images/project-2.png"
                            width={700}
                            height={400}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
            </Reveal>

            {/* <Reveal>
                <div className="w-full flex justify-center md:justify-end">
                    <a href="/" className="link">See More Projects</a>
                </div>
            </Reveal> */}
        </div>
    </section>
  )
}

export default Project