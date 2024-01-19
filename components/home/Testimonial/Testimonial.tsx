"use client";

import React from 'react'
import TestimonialCard from './TestimonialCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Reveal from '@/components/Utils/Reveal';

const Testimonial = () => {
    const data = [
        {
            id: 1,
            name: "Gio",
            role: "CEO",
            company: "GTX",
            image: "/images/gio.webp",
            message: "Exceptional software service! robust functionality exceeded expectations. The founder's visionary approach is evident in its efficiency. Highly recommend!"
        },
        {
            id: 2,
            name: "Pone Myat",
            role: "CTO",
            company: "Vital tech",
            image: "/images/ponemyat.webp",
            message: "We have been worked together for many projects and their teams have excellent tech skills and take full responsibility. Their work flow is very unique."
        },
        {
            id: 3,
            name: "Shine Lin Zaw",
            role: "CEO",
            company: "Pyay yadanar",
            image: "/images/shine.webp",
            message: "The service is outstandingly patient and friendly, creating a positive user experience. Additionally, the budget-friendly pricing adds to the appeal , making it a top choice for service."
        },
    ]
    
    var settings = {
        centerMode: true,
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        centerPadding: "10px",
        arrows: true,
        // autoplay: true,
        // pauseOnHover: true,
        speed: 1000,
        // autoplaySpeed: 2000,
        // cssEase: "linear",
        responsive: [
            {
                breakpoint: 1228,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                }
            }
        ]
    };

  return (
    <>
        <div id='testimonial' className='w-full flex justify-center items-center'>
            <section id='learn' className='container mx-auto px-4 section-spacing relative'>
                <div className="">
                    <Reveal>
                        <h2 className="gradient-title px-2 md:p-0">
                                Testimonial
                        </h2>
                    </Reveal>
                    <Slider {...settings}>
                        {
                            data.map((item,index) => (
                                <TestimonialCard data={item} key={index} />
                            ))
                        }
                    </Slider>
                </div>
            </section>
        </div>
    </>
  )
}

export default Testimonial