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
          <div className="grid grid-cols-2 gap-2.5 h-full relative">
            <Image
              src={Room1}
              alt="Room_image"
              className="w-full h-full object-cover"
            />
            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <Image src={Room2} alt="Room_image" className="w-full" />
                <Image src={Room3} alt="Room_image" className="w-full mt-2.5" />
              </div>
              <div>
                <Image src={Room4} alt="Room_image" className="w-full" />
                <Image src={Room5} alt="Room_image" className="w-full mt-2.5" />
              </div>
            </div>

            <div className="absolute right-5 bottom-5">
              <Link
                href="#"
                onClick={() => setIsOpen(true)}
                className="hidden md:block bg-white text-primary-text px-5 py-2 rounded-full transition-all delay-200 text-lg font-semibold hover:bg-black hover:text-white"
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
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            {/* <OfferImageSlider /> */}
            <RoomSlider />
            <Link
              href="#"
              onClick={() => setIsOpen(false)}
              className="mt-5 inline-flex bg-primary-bg text-white text-primary-bg px-8 py-1 rounded-full transition-all delay-200 text-lg font-semibold border-2 border-primary-bg hover:bg-transparent hover:text-primary-bg"
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
