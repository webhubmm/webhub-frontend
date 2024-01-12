import { AnimatePresence, motion } from 'framer-motion';
import React from 'react'

interface AccordionItemProps {
    data: {
        id: number,
        question: string,
        answer: string
    },
    isActive: boolean,
    onClick: (id:number) => void
}

const AccordionItem = ({data,isActive,onClick} : AccordionItemProps) => {
  return (
    <>
        <AnimatePresence>
            <div className={`faq-item ${isActive ? 'active' : ''}`} onClick={() => onClick(data.id)}>
                <div className="faq-question">
                    {data.question}
                </div>
                {
                    isActive && 
                    <motion.div className="faq-answer"
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        exit={{ opacity: 0, scaleY: 0 }}
                        transition={{ duration: .5 }}
                    >
                        <p className='lead-text'>
                            {data.answer}
                        </p>
                    </motion.div>
                }
            </div>
        </AnimatePresence>

    </>
  )
}

export default AccordionItem