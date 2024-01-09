"use client";

import React from 'react'
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <>
        <section id='banner' className='section-spacing'>
            <div className="container mx-auto px-4 text-center">
                        <motion.h1 className="main-title"
                            initial={{ opacity: 0, scale:0 }}    
                            animate={{ opacity: 1, scale:1 }} 
                            exit={{ opacity: 0, scale:0 }}    
                            transition={{ type: 'spring', stiffness: 500 }}  
                        >
                            Webhub
                        </motion.h1>
                        <motion.h2 className="subtitle"
                            initial={{ opacity: 0, scale:0 }}    
                            animate={{ opacity: 1, scale:1 }}  
                            exit={{ opacity: 0, scale:0 }}    
                            transition={{ type: 'spring', stiffness: 500 }}  
                        >
                            Boost your <span className='primary-text-color euro-extd'>productivity</span> with our services 
                        </motion.h2>
            </div>
        </section>
    </>
  )
}

export default Banner