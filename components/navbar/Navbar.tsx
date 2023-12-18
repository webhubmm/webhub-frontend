"use client";

import React from 'react'
import Image from 'next/image'
import { BiMenu, BiX } from "react-icons/bi";
import { motion } from 'framer-motion'
import { MdLanguage } from "react-icons/md";
import { CiDark } from "react-icons/ci";

const Navbar = () => {

    const [open, setOpen] = React.useState(false)

    const [scrollY, setScrollY] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
        setScrollY(window.scrollY);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };

    }, []);


  return (
    <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 150 }}
        className={(scrollY > 200 || open) ? 'nav-bg' : ''}>
        <div className='navbar container mx-auto px-4'>
            <div className="flex justify-between nav-brand items-center">
                <a href="/">
                    <Image 
                        src="/images/logo.png" 
                        width={40} 
                        height={70} 
                        alt="Webhub"
                        style={{
                            objectFit: 'cover', 
                        }}
                        priority />
                </a>
                {/* <div className='text-white toggle-btn text-5xl' onClick={() => {
                        setOpen(!open)
                }}>
                    {
                        open ? <BiX /> : <BiMenu />
                    }
                </div> */}
            </div>
            <ul className='flex items-center'>
                <li>
                    <a className='text-white'>
                        Contact Us
                    </a>
                </li>
                <li>
                    <button className='text-white text-3xl ms-3 mt-1'>
                        <MdLanguage />
                    </button>
                </li>
                <li>
                    <button className='text-white text-3xl ms-3 mt-1'>
                        <CiDark />
                    </button>
                </li>
            </ul>
        </div>
    </motion.nav>
  )
}

export default Navbar