
import '@/styles/globals.css'
// import type { Metadata } from 'next'
import { SidebarContextProvider } from '@/contexts/AdminSidebarContext';
import Navbar from '@/components/navbar/Navbar';
// import { useEffect, useState } from 'react';
// import {motion} from 'framer-motion'
import Footer from '@/components/Footer/Footer';
import { Metadata } from 'next';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';

export const metadata: Metadata = {
  title: 'WEBHUB Myanmar',
  description: 'a dedicated team of professionals with a passion for creating exceptional digital experiences. ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // const [mousePosition, setMousePosition] = useState({
  //   x: 0,
  //   y: 0
  // })

  // useEffect(() => {
  //   const mouseMove = (e: any) => {
  //     setMousePosition({
  //       x: e.clientX,
  //       y: e.clientY
  //     })
  //   }

  //   window.addEventListener("mousemove",mouseMove)

  //   return () => {
  //     window.removeEventListener("mousemove",mouseMove)
  //   }
  // },[])

  // const cursorVariants = {
  //   default: {
  //     x: mousePosition.x - 20,
  //     y: mousePosition.y - 20,
  //   }
  // }

  return (
    <SidebarContextProvider>
    <html lang="en">
      <body suppressHydrationWarning={true}> 
        <GoogleAnalytics ga_id='G-2XJPD67KQG' />
        {/* style={{ cursor: 'none' }} */}
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
