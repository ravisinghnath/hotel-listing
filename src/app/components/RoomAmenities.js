'use client'
import React from 'react'
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import LeftHeading from './heading/LeftHeading';
// import { ChevronDown } from "lucide-react";

function RoomAmenities() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div>
      <div className="container">
        <div className="w-full ">
          {/* Accordion Item 1 */}
          <div>
            <button
              className="flex gap-5 items-center w-full p-4 transition"
              onClick={() => toggleSection("section1")}
            >

              {openSection === "section1" ? <FaMinus className="w-5 h-5" /> : <FaPlus className="w-5 h-5" />}
              <LeftHeading title='Room amenities' />
            </button>
            <div
              className={`overflow-hidden transition-all delay-100 ${openSection === "section1" ? "h-full p-4 bg-white" : "max-h-0"
                }`}
            >
              <div className='grid md:grid-cols-3 grid-cols-1 gap-10'>
                <div className=''>
                  <h4 className='text-lg text-secondary-text font-bold'>Bedroom & Living Spaces</h4>
                  <ul className='mt-8 text-secondary-text list-disc pl-6'>
                    <li className='mt-4 '>Air Conditioning</li>
                    <li className='mt-4'>Ceiling Fan</li>
                    <li className='mt-4'>Connecting Rooms</li>
                    <li className='mt-4'>Dining Room</li>
                    <li className='mt-4'>HD Smart TV w/ Cable</li>
                    <li className='mt-4'>In-Room Electronic Safe</li>
                    <li className='mt-4'>Iron & Ironing Board</li>
                    <li className='mt-4'>King-Size Bed (Four-Poster)</li>
                    <li className='mt-4'>Living Room</li>
                    <li className='mt-4'>Outlets 110 - 240 Volts</li>
                    <li className='mt-4'>Sitting Area</li>
                    <li className='mt-4'>Telephone</li>
                  </ul>
                </div>
                <div className=''>
                  <h4 className='text-lg text-secondary-text font-bold'>Bathroom & Laundry</h4>
                  <ul className='mt-8 text-secondary-text list-disc pl-6'>
                    <li className='mt-4 '>Bathtub</li>
                    <li className='mt-4'>Hair Dryer</li>
                    <li className='mt-4'>His & Hers Bath Vanities</li>
                    <li className='mt-4'>Make-up Mirror</li>
                    <li className='mt-4'>Plush His & Hers Robes</li>
                    <li className='mt-4'>Red Lane Spa Amenity Kit</li>
                    <li className='mt-4'>Slippers</li>
                  </ul>
                </div>
                <div className=''>
                  <h4 className='text-lg text-secondary-text font-bold'>Food & Drinks</h4>
                  <ul className='mt-8 text-secondary-text list-disc pl-6'>
                    <li className='mt-4 '>Coffee and Tea Maker</li>
                    <li className='mt-4'>Microwave</li>
                    <li className='mt-4'>Refrigerator w/ Water, Juice & Sodas</li>
                    <li className='mt-4'>Robert Mondavi Wine Varietal</li>
                    <li className='mt-4'>Stocked w/ beer and wine</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomAmenities
