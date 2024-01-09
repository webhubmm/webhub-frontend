"use client"

import Reveal from '@/components/Utils/Reveal'
import React from 'react'
import { motion } from 'framer-motion';

interface ExpertiseCardProps {
    title: string,
    number: string,
    content: string
}

const ExpertiseCard = ({title,number,content}: ExpertiseCardProps) => {
  return (
    <>
        <Reveal>
            <motion.div className="expertise-item"
            >
                <div className="title">
                    <span className='gradient-title'>{number}</span> {title}
                </div>
                <div className="content">
                    {content}
                </div>
            </motion.div>
        </Reveal>
    </>
  )
}

export default ExpertiseCard