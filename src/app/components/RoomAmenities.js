"use client";
import React from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import LeftHeading from "./heading/LeftHeading";
// import { ChevronDown } from "lucide-react";

function RoomAmenities() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div>
      <div className="container">
        <div className="w-full">
          {/* Accordion Item 1 */}
          <div>
            <button
              className="flex w-full items-center gap-5 p-4 transition"
              onClick={() => toggleSection("section1")}
            >
              {openSection === "section1" ? (
                <FaMinus className="h-5 w-5" />
              ) : (
                <FaPlus className="h-5 w-5" />
              )}
              <LeftHeading title="Room amenities" />
            </button>
            <div
              className={`overflow-hidden transition-all delay-100 ${
                openSection === "section1" ? "h-full bg-white p-4" : "max-h-0"
              }`}
            >
              <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                <div className="">
                  <h4 className="text-lg font-bold text-secondary-text">
                    Bedroom & Living Spaces
                  </h4>
                  <ul className="mt-8 list-disc pl-6 text-secondary-text">
                    <li className="mt-4">Air Conditioning</li>
                    <li className="mt-4">Ceiling Fan</li>
                    <li className="mt-4">Connecting Rooms</li>
                    <li className="mt-4">Dining Room</li>
                    <li className="mt-4">HD Smart TV w/ Cable</li>
                    <li className="mt-4">In-Room Electronic Safe</li>
                    <li className="mt-4">Iron & Ironing Board</li>
                    <li className="mt-4">King-Size Bed (Four-Poster)</li>
                    <li className="mt-4">Living Room</li>
                    <li className="mt-4">Outlets 110 - 240 Volts</li>
                    <li className="mt-4">Sitting Area</li>
                    <li className="mt-4">Telephone</li>
                  </ul>
                </div>
                <div className="">
                  <h4 className="text-lg font-bold text-secondary-text">
                    Bathroom & Laundry
                  </h4>
                  <ul className="mt-8 list-disc pl-6 text-secondary-text">
                    <li className="mt-4">Bathtub</li>
                    <li className="mt-4">Hair Dryer</li>
                    <li className="mt-4">His & Hers Bath Vanities</li>
                    <li className="mt-4">Make-up Mirror</li>
                    <li className="mt-4">Plush His & Hers Robes</li>
                    <li className="mt-4">Red Lane Spa Amenity Kit</li>
                    <li className="mt-4">Slippers</li>
                  </ul>
                </div>
                <div className="">
                  <h4 className="text-lg font-bold text-secondary-text">
                    Food & Drinks
                  </h4>
                  <ul className="mt-8 list-disc pl-6 text-secondary-text">
                    <li className="mt-4">Coffee and Tea Maker</li>
                    <li className="mt-4">Microwave</li>
                    <li className="mt-4">
                      Refrigerator w/ Water, Juice & Sodas
                    </li>
                    <li className="mt-4">Robert Mondavi Wine Varietal</li>
                    <li className="mt-4">Stocked w/ beer and wine</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomAmenities;
