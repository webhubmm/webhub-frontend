import React from 'react'

interface AccordionItemProps {
    data: {
        id: number,
        question: string,
        answer: string
    },
    isActive: boolean,
    onClick: () => React.ChangeEvent<HTMLInputElement>
}

const AccordionItem = ({data,isActive,onClick} : AccordionItemProps) => {
  return (
    <>
        <div className={`faq-item ${isActive ? 'active' : ''}`} onClick={() => onClick(data.id)}>
            <div className="faq-question">
                {data.question}
            </div>
            <div className="faq-answer">
                <p className='lead-text'>
                    {data.answer}
                </p>
            </div>
        </div>
    </>
  )
}

export default AccordionItem