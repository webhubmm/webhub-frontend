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
                    <div className='flex justify-between items-center mb-6'>
                        <h3 style={{ color: course.color }}>
                            {course.title}
                        </h3>
                        <div className="flex gap-2">
                            <h4>Lessons - {course.total}</h4>
                            <h4>Projects - {course.projects.length}</h4>
                        </div>
                    </div>
                    <br />
                    <Link href={course.youtube} className='primary-btn'>
                        Learn More 
                    </Link>
                </div>
            </div>
  )
}

export default CourseCard