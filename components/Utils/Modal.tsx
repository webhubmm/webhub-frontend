import React from 'react'
import { motion } from 'framer-motion';
import { BiX } from 'react-icons/bi';

const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 4,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

const Modal = ({label,content, setIsOpen}:{label: string,content: string, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <div className='modalDialog'>
        <motion.div
            onClick={(e) => e.stopPropagation()}  
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className='modalStyle'
            >
            <div className="flex justify-between items-center">
                <h1 className='text-white text-xl euro-extd'>{label}</h1>
                <button className='bg-none border-none' onClick={() => setIsOpen(false)}>
                    <BiX style={{ color: 'white', fontSize: '25px' }} />
                </button>
            </div>
            <p className='text-gray-500 mt-6'>
                {content}
            </p>
        </motion.div>
    </div>
  )
}

export default Modal