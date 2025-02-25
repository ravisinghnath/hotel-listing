"use client"
import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import Link from 'next/link';
import LeftHeading from '@/app/components/heading/LeftHeading';
import RoomGallerySlider from './RoomGallerySlider';

function RoomDetail() {
 

  return (
    <>
        <RoomGallerySlider />
        <div className="container">
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
        </div>
        
      
     
    </>
  )
}

export default RoomDetail
