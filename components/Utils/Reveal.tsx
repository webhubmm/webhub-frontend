"use client"

import React, { useEffect, useRef } from 'react'
import {motion, useAnimation, useInView, useScroll, useTransform} from 'framer-motion'

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

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1","1 1"]
    })

    const scaleProgress = useTransform(scrollYProgress,[0,1],[0.5,1])

    const opacityProgress = useTransform(scrollYProgress,[0,1],[0.6,1])


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
    <motion.div 
        ref={ref} 
        style={{ width: width, scale: scaleProgress, opacity: opacityProgress }}>
        <motion.div
            // variants={{ 
            //     hidden: {
            //         opacity: 0,
            //         scale: .7
            //     },
            //     visible: {
            //         opacity: 1,
            //         scale: 1,
            //     },
            //  }}
            //  initial="hidden"
            //  animate={mainControls}
            //  exit={{ opacity: 0, scale: .7 }}
            //  transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    </motion.div>
  )
}

export default Reveal