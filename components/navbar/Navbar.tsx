"use client";

import React from 'react'
import '../../styles/navbar.css'
import Image from 'next/image'
import { BiMenu, BiX } from "react-icons/bi";

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
    <nav className={(scrollY > 100 || open) ? 'bg-primary' : ''}>
        <div className='navbar container'>
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
                <div className='text-white toggle-btn text-5xl' onClick={() => {
                        setOpen(!open)
                }}>
                    {
                        open ? <BiX /> : <BiMenu />
                    }
                </div>
            </div>
            <ul className={open ? 'nav-active' : ''}>
                <li>
                    <a href="">
                        About Us
                    </a>
                </li>
                <li>
                    <a href="">
                        Services
                    </a>
                </li>
                <li>
                    <a href="">
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="">
                        FAQ's
                    </a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar