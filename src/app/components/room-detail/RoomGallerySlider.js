"use client";
import React from "react";
import Room1 from "@/app/asset/room1.svg";
import Room2 from "@/app/asset/room2.svg";
import Room3 from "@/app/asset/room3.svg";
import Room4 from "@/app/asset/room4.svg";
import Room5 from "@/app/asset/room5.svg";
import Image from "next/image";
import { useState, useEffect } from "react";
import RoomSlider from "./RoomSlider";
import Link from "next/link";

function RoomGallerySlider() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsOpen(true);
    }
  }, []);

  return (
    <div>
      <div className="container">
        <div className="hidden md:block">
          <div className="relative grid h-full grid-cols-2 gap-2.5">
            <Image
              src={Room1}
              alt="Room_image"
              className="h-full w-full object-cover"
            />
            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <Image src={Room2} alt="Room_image" className="w-full" />
                <Image src={Room3} alt="Room_image" className="mt-2.5 w-full" />
              </div>
              <div>
                <Image src={Room4} alt="Room_image" className="w-full" />
                <Image src={Room5} alt="Room_image" className="mt-2.5 w-full" />
              </div>
            </div>

            <div className="absolute bottom-5 right-5">
              <Link
                href="#"
                onClick={() => setIsOpen(true)}
                className="hidden rounded-full bg-white px-5 py-2 text-lg font-semibold text-primary-text transition-all delay-200 hover:bg-black hover:text-white md:block"
              >
                See all images
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <RoomSlider />
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
          {/* Modal Content */}
          <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
            {/* <OfferImageSlider /> */}
            <RoomSlider />
            <Link
              href="#"
              onClick={() => setIsOpen(false)}
              className="mt-5 inline-flex rounded-full border-2 border-primary-bg bg-primary-bg px-8 py-1 text-lg font-semibold text-primary-bg text-white transition-all delay-200 hover:bg-transparent hover:text-primary-bg"
            >
              Close
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default RoomGallerySlider;
