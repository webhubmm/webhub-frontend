import React from 'react'
import Image from 'next/image'
import Reveal from '@/components/Utils/Reveal'

const Project = () => {

  return (
    <section id='project' className='section-spacing'>
        <div className='container mx-auto px-4'>
            <Reveal>
                <h1 className="gradient-title">
                    Projects
                </h1>
            </Reveal>
            <Reveal>
                <div className="project  container mx-auto px-4 justify-center">
                    <div className='relative'>
                        <div className={`title subtitle`}>
                            Pyay Yadanar , Networking Service
                        </div>
                    </div>
                    <div className="img-container box-1">
                        <Image
                            src="/images/project-1.webp"
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
                            GTX , Digital Exchange Web3 Company
                        </div>
                    </div>
                    <div className="img-container box-2">
                        <Image
                            src="/images/project-2.webp"
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
                            MTK , Lottery Game Engine
                        </div>
                    </div>
                    <div className="img-container box-1">
                        <Image
                            src="/images/project-3.webp"
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