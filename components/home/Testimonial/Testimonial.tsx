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
            name: "Alex",
            role: "CEO",
            company: "GMAT",
            image: "https://source.unsplash.com/50x50/?portrait?1",
            message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores ut qui similique quis minus, repellendus nobis delectus sint iusto. Provident!"
        },
        {
            id: 2,
            name: "Nyan Min Htet",
            role: "CEO",
            company: "2D3D",
            image: "https://source.unsplash.com/50x50/?portrait?1",
            message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores ut qui similique quis minus, repellendus nobis delectus sint iusto. Provident!"
        },
        {
            id: 3,
            name: "Mark Nale",
            role: "CEO",
            company: "AKEX",
            image: "https://source.unsplash.com/50x50/?portrait?1",
            message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores ut qui similique quis minus, repellendus nobis delectus sint iusto. Provident!"
        },
        {
            id: 4,
            name: "PMT",
            role: "CTO",
            company: "Vital Tech",
            image: "https://source.unsplash.com/50x50/?portrait?1",
            message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores ut qui similique quis minus, repellendus nobis delectus sint iusto. Provident!"
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