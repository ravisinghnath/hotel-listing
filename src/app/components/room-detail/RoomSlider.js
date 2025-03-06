"use client";
// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Room1 from "@/app/asset/room1.svg";
import Room2 from "@/app/asset/room2.svg";
import Room3 from "@/app/asset/room3.svg";
import Room4 from "@/app/asset/room4.svg";
import Room5 from "@/app/asset/room5.svg";

function RoomSlider() {
  return (
    <div>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        loop={true}
        modules={[Pagination]}
        className="roomSlider"
      >
        <SwiperSlide>
          <Image
            src={Room1}
            className="h-80 w-full object-cover"
            alt="room_images"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Room2}
            className="h-80 w-full object-cover"
            alt="room_images"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Room3}
            className="h-80 w-full object-cover"
            alt="room_images"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Room4}
            className="h-80 w-full object-cover"
            alt="room_images"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Room5}
            className="h-80 w-full object-cover"
            alt="room_images"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Room1}
            className="h-80 w-full object-cover"
            alt="room_images"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Room2}
            className="h-80 w-full object-cover"
            alt="room_images"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Room3}
            className="h-80 w-full object-cover"
            alt="room_images"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default RoomSlider;
