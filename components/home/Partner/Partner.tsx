import Reveal from '@/components/Utils/Reveal'
import React from 'react'

const Partner = () => {
  return (
    <>
    <section id="partner" className='section-spacing w-full text-center flex flex-col justify-center items-center gap-10'>
        <Reveal>
            <>
                <div className='gradient-title title'>
                    Our Partner
                </div>
                <div className="container mx-auto px-5 py-2">
                    <div className="-m-1 flex flex-wrap md:-m-2 flex-col sm:flex-row justify-center items-center">
                        <div className="flex w-full sm:w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2 border-gray-900 border flex justify-center items-center flex-col gap-5">
                                <img
                                alt="gallery"
                                className="block h-[60%] w-[60%] rounded-none object-cover object-center"
                                src="/images/pyay-yadanar.webp" />
                                <div>
                                    <h2 className='text-white text-3xl euro-extd'>Pyay Yadanar</h2>
                                    <p className='text-gray-400 mt-2'>
                                        Networking Service
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full sm:w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2 border-gray-900 border flex justify-center items-center flex-col gap-5">
                                <img
                                alt="gallery"
                                className="block h-[60%] w-[60%] rounded-none object-cover object-center"
                                src="/images/lumi.webp" />
                                <div>
                                    <h2 className='text-white text-3xl euro-extd'>Lumi</h2>
                                    <p className='text-gray-400 mt-2'>
                                        Logo & Graphic Design Service
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full sm:w-1/3 flex-wrap">
                            <div className="w-full p-1 md:p-2 border-gray-900 border flex justify-center items-center flex-col gap-5">
                                <img
                                alt="gallery"
                                className="block h-[60%] w-[60%] rounded-none object-cover object-center"
                                src="/images/vital-tech.webp" />
                                <div>
                                    <h2 className='text-white text-3xl euro-extd'>Vital Tech</h2>
                                    <p className='text-gray-400 mt-2'>
                                        Infra Service
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </Reveal>
    </section>
    </>
  )
}

export default Partner