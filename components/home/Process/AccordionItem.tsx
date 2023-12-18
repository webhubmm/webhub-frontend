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
        <li onClick={() => onClick(data.id)} className={`${isActive ? 'active' : ''}`} style={{ zIndex: 0 }}>
            <div className="process-number">
                <h1>
                    {"0" + data.id}
                </h1>
            </div>
            <div className="process-title">
                <h2>{data.question}</h2>
            </div>
            <div className="process-content">
                <p>
                    {data.answer}
                </p>
            </div>
        </li>
    </>
  )
}

export default AccordionItem