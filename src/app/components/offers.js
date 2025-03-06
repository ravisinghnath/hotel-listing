"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Heading from "./heading/Heading";
import collection1 from "@/app/asset/collection1.svg";
import Image from "next/image";

export default function Offers() {
  const resorts = [
    {
      id: 1,
      collection: "Wild Collection",
      title: "98 Acres Resort and Spa",
      rating: 5,
      price: "10,000 LKR",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio. nim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      images: [
        "./asset/collection1.svg",
        "/asset/collection1.svg",
        "/asset/collection1.svg",
        "/asset/collection1.svg",
        "/asset/collection1.svg",
        "/asset/collection1.svg",
        "/asset/collection1.svg",
        "/asset/collection1.svg",
      ],
    },
    {
      id: 2,
      collection: "Beach Collection",
      title: "Tangalle Bay Resort",
      rating: 4,
      price: "15,000 LKR",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio. nim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      images: [
        "/asset/collection1.svg",
        "/asset/collection1.svg",
        "/asset/collection1.svg",
        "/asset/collection1.svg",
      ],
    },
    {
      id: 3,
      collection: "Mountain Collection",
      title: "Ella Rock Hideaway",
      rating: 5,
      price: "12,500 LKR",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio. nim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      images: [
        "/asset/collection1.svg",
        "/asset/collection1.svg",
        "/asset/collection1.svg",
        "/asset/collection1.svg",
      ],
    },
    {
      id: 4,
      collection: "Luxury Collection",
      title: "Yala Safari Lodge",
      rating: 5,
      price: "18,000 LKR",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio. nim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      images: [
        "/asset/collection1.svg",
        "/asset/collection1.svg",
        "/asset/collection1.svg",
        "/asset/collection1.svg",
      ],
    },
  ];

  // Active slide index for main slider
  const [activeIndex, setActiveIndex] = useState(0);

  // Render star ratings
  const renderStars = (rating) => {
    return Array(5)
      .fill()
      .map((_, i) => (
        <span
          key={i}
          className={`text-yellow-400 text-sm ${i < rating ? "" : "opacity-30"}`}
        >
          ★
        </span>
      ));
  };

  return (
    <>
      <Heading
        heading={"Explore our Collection"}
        subheading={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim"
        }
      />
      <div className="bg-secondary-bg pt-10">
        <div className="container">
          <div className="max-w-6xl mx-auto px-4 mt-16">
            {/* Main Resort Slider */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{
                clickable: true,
                renderBullet: function (index, className) {
                  return `<span class="${className} ${index === activeIndex ? "bg-red-600" : "bg-gray-300"}" style="width: 8px; height: 8px;"></span>`;
                },
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="resort-slider"
            >
              {resorts.map((resort) => (
                <SwiperSlide key={resort.id}>
                  <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden">
                    {/* Image Slider (nested) */}
                    <div className="w-full md:w-1/2 relative">
                      <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={{
                          nextEl: ".image-swiper-button-next",
                          prevEl: ".image-swiper-button-prev",
                        }}
                        pagination={{
                          clickable: true,
                          el: ".image-swiper-pagination",
                          renderBullet: function (index, className) {
                            return `<span class="${className} bg-white" style="width: 6px; height: 6px; opacity: 0.7"></span>`;
                          },
                        }}
                        nested={true}
                        className="h-80 md:h-full"
                      >
                        {resort.images.map((image, index) => (
                          <SwiperSlide key={index}>
                            <img
                              src={image || `/api/placeholder/600/400`}
                              alt={`${resort.title} view ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </SwiperSlide>
                        ))}

                        {/* Custom image slider navigation */}
                        <div className="image-swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-50 hover:bg-opacity-80 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all">
                          <svg
                            className="w-4 h-4 text-gray-800"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </div>
                        <div className="image-swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-50 hover:bg-opacity-80 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all">
                          <svg
                            className="w-4 h-4 text-gray-800"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>

                        {/* Custom image slider pagination */}
                        <div className="image-swiper-pagination absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-2"></div>
                      </Swiper>
                    </div>

                    {/* Resort Details */}
                    <div className="w-full md:w-1/2 p-6 flex flex-col">
                      <div className="text-gray-600 text-sm mb-1">
                        {resort.collection}
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {resort.title}
                      </h2>

                      <div className="flex mb-3">
                        {renderStars(resort.rating)}
                      </div>

                      <div className="mb-4">
                        <div className="text-sm text-gray-500">
                          Starting from
                        </div>
                        <div className="text-xl font-bold text-red-600">
                          {resort.price}
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm flex-grow">
                        {resort.description}
                      </p>

                      <div className="mt-6">
                        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded transition-colors">
                          View Offer
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom main slider pagination */}
            <div className="flex justify-center gap-2 mt-6">
              {resorts.map((_, index) => (
                <span
                  key={index}
                  className={`inline-block w-2 h-2 rounded-full cursor-pointer transition-all ${index === activeIndex ? "bg-red-600 scale-110" : "bg-gray-300"}`}
                  onClick={() => {
                    const mainSwiper =
                      document.querySelector(".resort-slider").swiper;
                    mainSwiper.slideTo(index);
                  }}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
