
'use client'
import { useState, useEffect, useRef } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegSmileBeam } from "react-icons/fa";
import { LuCalendar } from "react-icons/lu";
import { BsCloudMoon } from "react-icons/bs";

export default function Banner() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const dropdownRef = useRef(null);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            <div className="bg-[url('./asset/banner-img.png')] flex justify-center items-center h-full bg-cover bg-center lg:pt-72 pt-32 lg:pb-40 pb-12 relative after:absolute after:bg-overlay-bg after:top-0 after:left-0 after:bottom-0 after:right-0">
                <div className="container z-10 text-white flex flex-col justify-center">
                    <div className="flex justify-center">
                        <h1 className="lg:text-5xl text-4xl font-bold lg:max-w-[417px] max-w-[390px] !leading-snug text-center">Your Love Story Deserves the Best </h1>
                    </div>
                    <div>
                        <div ref={dropdownRef} className="lg:flex lg:justify-between grid md:grid-cols-2  grid-cols-1 gap-3 lg:gap-0 justify-center bg-white text-primary-text px-4 lg:px-6 py-6 lg:py-3.5 lg:rounded-full rounded-xl shadow-md max-w-5xl w-full  mx-auto lg:mt-12 mt-9">

                            {/* <!-- Occasion --> */}
                            <div className="relative lg:border-r lg:border-t-0 lg:border-b-0 lg:border-l-0 lg:rounded-none border border-border-color border-1 rounded-3xl">
                                <button
                                    onClick={() => toggleDropdown(1)}
                                    className="lg:px-4 md:px-5 px-5 lg:py-2 py-3.5 rounded-md flex items-center w-full"
                                >
                                    <span className="mr-5"><FaRegHeart size={18} /></span>
                                    <span className="flex justify-between w-full">
                                        Occasion <RiArrowDownSLine className="ml-2" size={18} /></span>
                                </button>
                                {openDropdown === 1 && (
                                    <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg z-50">
                                        <a href="#" className="block px-4 py-2 hover:bg-primary-bg hover:text-white rounded-lg">Option A</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-primary-bg hover:text-white rounded-lg">Option B</a>
                                    </div>
                                )}
                            </div>

                            {/* <!-- Scenery --> */}
                            <div className="relative lg:border-r lg:border-t-0 lg:border-b-0 lg:border-l-0 lg:rounded-none border border-border-color border-1 rounded-3xl">
                                <button
                                    onClick={() => toggleDropdown(2)}
                                    className="lg:px-4 md:px-5 px-5 lg:py-2 py-3.5 rounded-md flex items-center w-full"
                                >
                                    <span className="mr-5"><FaRegSmileBeam size={18} /></span>
                                    <span className="flex justify-between w-full">
                                        Scenary <RiArrowDownSLine className="ml-2" size={18} /></span>
                                </button>
                                {openDropdown === 2 && (
                                    <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg z-50">
                                        <a href="#" className="block px-4 py-2 hover:bg-primary-bg hover:text-white rounded-lg">Option A</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-primary-bg hover:text-white rounded-lg">Option B</a>
                                    </div>
                                )}
                            </div>

                            {/* <!-- Check-In --> */}
                            <div className="relative lg:border-r lg:border-t-0 lg:border-b-0 lg:border-l-0 lg:rounded-none border border-border-color border-1 rounded-3xl">
                                <button
                                    onClick={() => toggleDropdown(3)}
                                    className="lg:px-4 md:px-5 px-5 lg:py-2 py-3.5 rounded-md flex items-center w-full"
                                >
                                    <span className="mr-5"><LuCalendar size={18} /></span>
                                    <span className="flex justify-between w-full">
                                        Check-In <RiArrowDownSLine className="ml-2" size={18} /></span>
                                </button>
                                {openDropdown === 3 && (
                                    <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg z-50">
                                        <a href="#" className="block px-4 py-2 hover:bg-primary-bg hover:text-white rounded-lg">Option A</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-primary-bg hover:text-white rounded-lg">Option B</a>
                                    </div>
                                )}
                            </div>

                            {/* <!-- Number of Nights --> */}
                            <div className="relative lg:border-r lg:border-t-0 lg:border-b-0 lg:border-l-0 lg:rounded-none border border-border-color border-1 rounded-3xl">
                                <button
                                    onClick={() => toggleDropdown(4)}
                                    className="lg:px-4 md:px-5 px-5 lg:py-2 py-3.5 rounded-md flex items-center w-full"
                                >
                                    <span className="mr-5"><BsCloudMoon size={18} /></span>
                                    <span className="flex justify-between w-full">
                                        Number of Nights <RiArrowDownSLine className="ml-2" size={18} /></span>
                                </button>
                                {openDropdown === 4 && (
                                    <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg">
                                        <a href="#" className="block px-4 py-2 hover:bg-primary-bg hover:text-white rounded-lg">Option A</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-primary-bg hover:text-white rounded-lg">Option B</a>
                                    </div>
                                )}
                            </div>

                            {/* <!-- Search Button --> */}
                            <button className="flex items-center gap-2 justify-center text-white lg:px-4 md:px-5 px-5 lg:py-2 py-3.5 lg:ml-16 rounded-full bg-primary-bg transition-all delay-300 border-2 border-primary-bg hover:bg-transparent hover:text-primary-bg">
                                <span><IoSearch /></span> Search
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}