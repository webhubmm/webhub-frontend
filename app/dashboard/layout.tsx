"use client"

import AdminNavbar from '@/components/admin-navbar/AdminNavbar'
import AdminSidebar from '@/components/admin-sidebar/AdminSidebar'
import React, { useEffect, useState } from 'react'
import { ThemeProvider } from "@material-tailwind/react";
import { SidebarContext } from '@/contexts/AdminSidebarContext';
import { useContext } from 'react';
import { usePathname } from 'next/navigation';

const Layout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {

    const { state, dispatch } = useContext(SidebarContext);
    const [screenWidth, setScreenWidth] = useState(0)
    const pathname = usePathname()

    useEffect(() => {
      setScreenWidth(prev => window.innerWidth)
    }, [])

    useEffect(() => {
      if(window.innerWidth < 768){
        dispatch({type: "CLOSE"})
      }
    }, [pathname])


  return (
        <ThemeProvider> 
          <div className="flex relative">
              <div className={`transition duration-500 w-2/3 sm:w-64 ${state.open ? '' : 'absolute top-0 left-[-100%]'}`}>
                <AdminSidebar />
              </div>
              <div className='w-full flex-1'>
                <AdminNavbar />
                  <div className={ screenWidth > 768 ? 'p-4 md:p-12' : `p-4 md:p-12 ${state.open ? 'opacity-0' : 'opacity-1'}`}>
                    {children}
                  </div>
              </div>
          </div>
        </ThemeProvider>

  )
}

export default Layout