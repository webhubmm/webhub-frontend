"use client"

import React, { useEffect, useRef } from 'react'
import {motion, useAnimation, useInView} from 'framer-motion'

interface Props {
    children: JSX.Element,
    width ?: "fit-content" | '100%'
}

const Reveal = ({
    children,
    width = "fit-content"
}: Props) => {

    const ref = useRef(null)
    const isViewIn = useInView(ref)
    const mainControls = useAnimation()

    useEffect(() => {
        if(isViewIn){
            mainControls.start("visible")
        }
        else{
            mainControls.start("hidden")
        }
    },[isViewIn])

  return (
    <div ref={ref} style={{ width: width }} className=''>
        <motion.div
            variants={{ 
                hidden: {
                    opacity: 0,
                    scale: .7
                },
                visible: {
                    opacity: 1,
                    scale: 1,
                },
             }}
             initial="hidden"
             animate={mainControls}
             exit={{ opacity: 0, scale: .7 }}
             transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    </div>
  )
}

export default Reveal