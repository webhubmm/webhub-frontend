import React from 'react'
import '../../styles/expertise.css'

interface ExpertiseCardProps {
    title: string,
    number: string,
    content: string
}

const ExpertiseCard = ({title,number,content}: ExpertiseCardProps) => {
  return (
    <>
        <div className="expertise-item">
            <div className="title">
                <span className='gradient-title'>{number}</span> {title}
            </div>
            <div className="content">
                {content}
            </div>
        </div>
    </>
  )
}

export default ExpertiseCard