"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import CustomerCard from "./CustomerCard";
import profile from "@/app/asset/customer-profile.svg";

function CustomerSlider() {
  return (
    <div>
      <div className="w-full mx-auto z-50 my-10">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="customer-review"
          margin={20}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
        >
          {/* Slides */}
          <SwiperSlide className="">
            <CustomerCard
              image={profile}
              title="98 Acres Resort and Spa"
              detail="Wild Collection"
              content="“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua “"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CustomerCard
              image={profile}
              title="98 Acres Resort and Spa"
              detail="Wild Collection"
              content="“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua “"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CustomerCard
              image={profile}
              title="98 Acres Resort and Spa"
              detail="Wild Collection"
              content="“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua “"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CustomerCard
              image={profile}
              title="98 Acres Resort and Spa"
              detail="Wild Collection"
              content="“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua “"
            />
          </SwiperSlide>
        </Swiper>

        {/* Custom Navigation Buttons */}
        {/* <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div> */}
      </div>
    </div>
  );
}

export default CustomerSlider;
