import Reveal from '@/components/Utils/Reveal'
import Image from 'next/image'
import React from 'react'

const TestimonialCard = ({data}:{data: any}) => {
  return (
    <>
        <Reveal>
            <div className="flex flex-col mx-4 my-6 shadow-sm">
                <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 testimonial-card-bg">
                    <p className="relative px-6 py-1 text-lg italic text-center para-text">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                            <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                            <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                        </svg>{data.message}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
                            <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                            <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                        </svg>
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
                    <Image 
                        width={0}
                        height={0}
                        sizes='100%'
                        src="/images/user.webp" alt="webhub" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full z-30" />
                    <p className="text-xl font-semibold leadi euro-extd main-text-color">{data.name}</p>
                    <p className="text-sm  main-text-color">{data.role+" at "+data.company}</p>
                </div>
            </div>
        </Reveal>
    </>
  )
}

export default TestimonialCard