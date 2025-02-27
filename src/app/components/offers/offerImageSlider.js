
"use client";
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slide1 from '@/app/asset/offer-slide1.svg'
import Image from 'next/image';

function offerImageSlider() {
  return (
    <div>
        <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        className='offer'
        loop={true}>
        <SwiperSlide>
        <Image src={slide1} alt='Slide 1' className="rounded-lg w-full" />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={slide1} alt='Slide 1' className="rounded-lg w-full" />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={slide1} alt='Slide 1' className="rounded-lg w-full" />
        </SwiperSlide>
      </Swiper>      
    </div>
  )
}

export default offerImageSlider
