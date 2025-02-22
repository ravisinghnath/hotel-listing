"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Heading from "../heading/heading";


export default function Inspiration() {

  return (
    <>
      <div className="container">
        <Heading className="!flex !justify-start !text-left !items-start" heading={"Explore our Collection"} subheading={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim"} />
        </div>
      <div className="overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="investigation"
        breakpoints={{
          320: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 }, // Show 4 items on large screens
        }}
      >
        <SwiperSlide className="bg-red-500 text-white p-10 text-center rounded-lg">Slide 1</SwiperSlide>
        <SwiperSlide className="bg-blue-500 text-white p-10 text-center rounded-lg">Slide 2</SwiperSlide>
        <SwiperSlide className="bg-green-500 text-white p-10 text-center rounded-lg">Slide 3</SwiperSlide>
        <SwiperSlide className="bg-yellow-500 text-white p-10 text-center rounded-lg">Slide 4</SwiperSlide>
        <SwiperSlide className="bg-purple-500 text-white p-10 text-center rounded-lg">Slide 5</SwiperSlide>
        <SwiperSlide className="bg-pink-500 text-white p-10 text-center rounded-lg">Slide 6</SwiperSlide>
        <SwiperSlide className="bg-purple-500 text-white p-10 text-center rounded-lg">Slide 5</SwiperSlide>
        <SwiperSlide className="bg-pink-500 text-white p-10 text-center rounded-lg">Slide 6</SwiperSlide>
      </Swiper>
      </div>

    </>
  );
};


