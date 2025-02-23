"use client"
import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import Link from 'next/link';
import LeftHeading from '@/app/components/heading/LeftHeading';
import Room1 from '@/app/asset/room1.svg'
import Room2 from '@/app/asset/room2.svg'
import Room3 from '@/app/asset/room3.svg'
import Room4 from '@/app/asset/room4.svg'
import Room5 from '@/app/asset/room5.svg'
import Image from 'next/image';
import { useState, useEffect } from "react";
import OfferImageSlider from '../offers/OfferImageSlider';


function RoomDetail() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsOpen(true);
    }
  }, []);

  return (
    <>
      <div className="container">
        <div className='hidden md:block'>
          <div className='grid grid-cols-2 gap-2.5 h-full relative'>
            <Image src={Room1} alt='Room_image' className='w-full h-full object-cover' />
            <div className='grid grid-cols-2 gap-2.5'>
              <div>
                <Image src={Room2} alt='Room_image' className='w-full' />
                <Image src={Room3} alt='Room_image' className='w-full mt-2.5' />
              </div>
              <div>
                <Image src={Room4} alt='Room_image' className='w-full' />
                <Image src={Room5} alt='Room_image' className='w-full mt-2.5' />
              </div>
            </div>

            <div className='absolute right-5 bottom-5'>
              <Link href="#" onClick={() => setIsOpen(true)} className="hidden md:block bg-white text-primary-text px-5 py-2 rounded-full transition-all delay-200 text-lg font-semibold hover:bg-black hover:text-white">See all images</Link>
            </div>
          </div>
        </div>
        <div className='md:hidden'>
          <OfferImageSlider />
        </div>
        <div className='md:py-11 py-5'>
          <p className='text-primary-bg font-medium'>Wild Collection</p>
          <h4 className='mt-2.5 text-2xl font-semibold'>Anantara Peace Haven</h4>
          <div className='mt-3 flex gap-2 items-center'>
            <FaLocationDot className='text-primary-bg' size={14} />
            <p className='text-sm text-secondary-text'>Tangalle, Hambanthota</p>
            <div className='flex'>
              <Link href='#'><FaStar className='text-star-color' size={14} /></Link>
              <Link href='#'><FaStar className='text-star-color' size={14} /></Link>
              <Link href='#'><FaStar className='text-star-color' size={14} /></Link>
              <Link href='#'><FaStar className='text-star-color' size={14} /></Link>
              <Link href='#'><FaStar className='text-star-color' size={14} /></Link>
            </div>
          </div>
          <div className='py-10'>
            <LeftHeading title="Why we selected this property" />
            <p className='md:mt-8 mt-4 text-secondary-text text-lg leading-8'>Explore the island’s rainforests, pilgrimage sites and fishing ports. Dine cliffside, embark on surf adventures, or retreat to the sanctuary of Anantara Spa with award-winning Ayurvedic treatments.  Explore the island’s rainforests, pilgrimage sites and fishing ports. Dine cliffside, embark on surf adventures, or retreat to the sanctuary of Anantara Spa with award-winning Ayurvedic treatments.</p>
            <p className='mt-8 text-secondary-text text-lg leading-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>

        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
            {/* Modal Content */}
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
              <OfferImageSlider />
              <Link href="#" onClick={() => setIsOpen(false)} className="mt-5 inline-flex bg-primary-bg text-white text-primary-bg px-8 py-1 rounded-full transition-all delay-200 text-lg font-semibold border-2 border-primary-bg hover:bg-transparent hover:text-primary-bg">Close</Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default RoomDetail
