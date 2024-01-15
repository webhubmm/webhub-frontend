import { CourseProps } from '@/types/course'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CourseCard = ({course}: {course: CourseProps}) => {
  return (
            <div className="course-card">
                <Image 
                    src={course.image} 
                    alt="webhub"
                    width={0}
                    height={0}
                    sizes='100%'
                    style={{height: '55%',
                        width: '100%',
                        objectFit: 'cover'  }}
                />
                <div className="content">
                    <div className='flex flex-col md:flex-row justify-between items-center mb-6'>
                        <h3 style={{ color: course.color }}>
                            {course.title}
                        </h3>
                        <div className="flex gap-2">
                            <h4>Lessons - {course.total}</h4>
                            <h4>Projects - {course.projects}</h4>
                        </div>
                    </div>
                    <div className='flex justify-center md:justify-start'>
                        <Link href={course.youtube} target='_blank' className='primary-btn'>
                            Learn More 
                        </Link>
                    </div>
                </div>
            </div>
  )
}

export default CourseCard