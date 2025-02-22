"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import InspiationCard from "./InspiationCard";
import slide1 from '@/app/asset/ins_slide1.svg'
import Link from "next/link";


export default function Inspiration() {

  return (
    <>
    <div className="bg-teritary-bg">
      <div className="container">
      <div className="flex justify-between items-end gap-5 flex-wrap py-16">
      <div className="">
      <h2 className="text-primary-bg md:text-4xl text-2xl text-left font-bold max-w-sm md:!leading-[51px] leading-9">Inspiration for your next getaway</h2>
      <p className="text-secondary-text mt-6 text-lg font-medium max-w-2xl">Discover exclusive offers across Lifestyle Retreats properties and enjoy bespoke experiences by staying at one of our destinations.</p>
      </div>
      <div className="max-w-80 w-full">
      <Link href='/' className="text-xl text-primary-bg font-semibold">VIEW ALL</Link>
      </div>
      </div>
      </div>
      <div className="overflow-hidden px-6">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        spaceBetween={40}
        navigation={{ clickable: true }}
        loop={true}
        className="investigation"
        breakpoints={{
          320: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 }, // Show 4 items on large screens
        }}
      >
        <SwiperSlide className="">
        <InspiationCard image={slide1} heading='98 Acres Resort and Spa' subhead='Wild Collection' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' button='Learn more' />
        </SwiperSlide>
        <SwiperSlide>
        <InspiationCard image={slide1} heading='98 Acres Resort and Spa' subhead='Wild Collection' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' button='Learn more' />
        </SwiperSlide>
        <SwiperSlide>
        <InspiationCard image={slide1} heading='98 Acres Resort and Spa' subhead='Wild Collection' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' button='Learn more' />
        </SwiperSlide>
        <SwiperSlide>
        <InspiationCard image={slide1} heading='98 Acres Resort and Spa' subhead='Wild Collection' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' button='Learn more' />
        </SwiperSlide>
        <SwiperSlide>
        <InspiationCard image={slide1} heading='98 Acres Resort and Spa' subhead='Wild Collection' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' button='Learn more' />
        </SwiperSlide>
        <SwiperSlide>
        <InspiationCard image={slide1} heading='98 Acres Resort and Spa' subhead='Wild Collection' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' button='Learn more' />
        </SwiperSlide>
        <SwiperSlide>
        <InspiationCard image={slide1} heading='98 Acres Resort and Spa' subhead='Wild Collection' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' button='Learn more' />
        </SwiperSlide>
        <SwiperSlide>
        <InspiationCard image={slide1} heading='98 Acres Resort and Spa' subhead='Wild Collection' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' button='Learn more' />
        </SwiperSlide>
      </Swiper>
      </div>
      </div>
    </>
  );
};


