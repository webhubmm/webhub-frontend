"use client"

import '@/styles/globals.css'
// import type { Metadata } from 'next'
import { SidebarContextProvider } from '@/contexts/AdminSidebarContext';
import Navbar from '@/components/navbar/Navbar';
import { useEffect, useState } from 'react';
import {motion} from 'framer-motion'
import Footer from '@/components/Footer/Footer';

// export const metadata: Metadata = {
//   title: 'WEBHUB Myanmar',
//   description: 'WEBHUB Myanmar leads software development services ...',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove",mouseMove)

    return () => {
      window.removeEventListener("mousemove",mouseMove)
    }
  },[])

  const cursorVariants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
    }
  }

  return (
    <SidebarContextProvider>
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {/* <motion.div className="cursor"
          variants={cursorVariants}
          animate="default"
        ></motion.div> */}
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>

    </SidebarContextProvider>

  )
}
