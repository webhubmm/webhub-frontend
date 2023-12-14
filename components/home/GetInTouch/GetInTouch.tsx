import React from 'react'
import Marquee from 'react-fast-marquee';
import '../../../styles/get-in-touch.css'
import Link from 'next/link';
const GetInTouch = () => {
  return (
    <>
    <section id="get-in-touch">
        <div className="container-fluid relative">
            <Marquee 
            speed={100}
            autoFill={true}>
                <span className='get-in-touch-title'>W</span>
                <span className='get-in-touch-title'>E</span>
                <span className='get-in-touch-title'>B</span>
                <span className='get-in-touch-title'>H</span>
                <span className='get-in-touch-title'>U</span>
                <span className='get-in-touch-title'>B</span>
                <span className='get-in-touch-title'>M</span>
                <span className='get-in-touch-title'>Y</span>
                <span className='get-in-touch-title'>A</span>
                <span className='get-in-touch-title'>N</span>
                <span className='get-in-touch-title'>M</span>
                <span className='get-in-touch-title'>A</span>
                <span className='get-in-touch-title'>R</span>
            </Marquee>
            <Marquee 
            speed={100}
            autoFill={true}
            direction='right'>
                <span className='get-in-touch-title'>W</span>
                <span className='get-in-touch-title'>E</span>
                <span className='get-in-touch-title'>B</span>
                <span className='get-in-touch-title'>H</span>
                <span className='get-in-touch-title'>U</span>
                <span className='get-in-touch-title'>B</span>
                <span className='get-in-touch-title'>M</span>
                <span className='get-in-touch-title'>Y</span>
                <span className='get-in-touch-title'>A</span>
                <span className='get-in-touch-title'>N</span>
                <span className='get-in-touch-title'>M</span>
                <span className='get-in-touch-title'>A</span>
                <span className='get-in-touch-title'>R</span>
            </Marquee>
            <Link href={'/'} className='primary-btn'>Get Start</Link>
        </div>
    </section>
    </>
  )
}

export default GetInTouch