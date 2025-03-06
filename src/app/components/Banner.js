"use client";
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
      <div className="relative flex h-full items-center justify-center bg-[url('./asset/banner-img.png')] bg-cover bg-center pb-12 pt-32 after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:bg-overlay-bg lg:pb-40 lg:pt-72">
        <div className="container z-10 flex flex-col justify-center text-white">
          <div className="flex justify-center">
            <h1 className="max-w-[390px] text-center text-4xl font-bold !leading-snug lg:max-w-[417px] lg:text-5xl">
              Your Love Story Deserves the Best{" "}
            </h1>
          </div>
          <div>
            <div
              ref={dropdownRef}
              className="mx-auto mt-9 grid w-full max-w-5xl grid-cols-1 justify-center gap-3 rounded-xl bg-white px-4 py-6 text-primary-text shadow-md md:grid-cols-2 lg:mt-12 lg:flex lg:justify-between lg:gap-0 lg:rounded-full lg:px-6 lg:py-3.5"
            >
              {/* <!-- Occasion --> */}
              <div className="border-1 relative rounded-3xl border border-border-color lg:rounded-none lg:border-b-0 lg:border-l-0 lg:border-r lg:border-t-0">
                <button
                  onClick={() => toggleDropdown(1)}
                  className="flex w-full items-center rounded-md px-5 py-3.5 md:px-5 lg:px-4 lg:py-2"
                >
                  <span className="mr-5">
                    <FaRegHeart size={18} />
                  </span>
                  <span className="flex w-full justify-between">
                    Occasion <RiArrowDownSLine className="ml-2" size={18} />
                  </span>
                </button>
                {openDropdown === 1 && (
                  <div className="absolute z-50 mt-2 w-full rounded-lg border bg-white shadow-lg">
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 hover:bg-primary-bg hover:text-white"
                    >
                      Option A
                    </a>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 hover:bg-primary-bg hover:text-white"
                    >
                      Option B
                    </a>
                  </div>
                )}
              </div>

              {/* <!-- Scenery --> */}
              <div className="border-1 relative rounded-3xl border border-border-color lg:rounded-none lg:border-b-0 lg:border-l-0 lg:border-r lg:border-t-0">
                <button
                  onClick={() => toggleDropdown(2)}
                  className="flex w-full items-center rounded-md px-5 py-3.5 md:px-5 lg:px-4 lg:py-2"
                >
                  <span className="mr-5">
                    <FaRegSmileBeam size={18} />
                  </span>
                  <span className="flex w-full justify-between">
                    Scenary <RiArrowDownSLine className="ml-2" size={18} />
                  </span>
                </button>
                {openDropdown === 2 && (
                  <div className="absolute z-50 mt-2 w-full rounded-lg border bg-white shadow-lg">
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 hover:bg-primary-bg hover:text-white"
                    >
                      Option A
                    </a>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 hover:bg-primary-bg hover:text-white"
                    >
                      Option B
                    </a>
                  </div>
                )}
              </div>

              {/* <!-- Check-In --> */}
              <div className="border-1 relative rounded-3xl border border-border-color lg:rounded-none lg:border-b-0 lg:border-l-0 lg:border-r lg:border-t-0">
                <button
                  onClick={() => toggleDropdown(3)}
                  className="flex w-full items-center rounded-md px-5 py-3.5 md:px-5 lg:px-4 lg:py-2"
                >
                  <span className="mr-5">
                    <LuCalendar size={18} />
                  </span>
                  <span className="flex w-full justify-between">
                    Check-In <RiArrowDownSLine className="ml-2" size={18} />
                  </span>
                </button>
                {openDropdown === 3 && (
                  <div className="absolute z-50 mt-2 w-full rounded-lg border bg-white shadow-lg">
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 hover:bg-primary-bg hover:text-white"
                    >
                      Option A
                    </a>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 hover:bg-primary-bg hover:text-white"
                    >
                      Option B
                    </a>
                  </div>
                )}
              </div>

              {/* <!-- Number of Nights --> */}
              <div className="border-1 relative rounded-3xl border border-border-color lg:rounded-none lg:border-b-0 lg:border-l-0 lg:border-r lg:border-t-0">
                <button
                  onClick={() => toggleDropdown(4)}
                  className="flex w-full items-center rounded-md px-5 py-3.5 md:px-5 lg:px-4 lg:py-2"
                >
                  <span className="mr-5">
                    <BsCloudMoon size={18} />
                  </span>
                  <span className="flex w-full justify-between">
                    Number of Nights{" "}
                    <RiArrowDownSLine className="ml-2" size={18} />
                  </span>
                </button>
                {openDropdown === 4 && (
                  <div className="absolute mt-2 w-full rounded-lg border bg-white shadow-lg">
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 hover:bg-primary-bg hover:text-white"
                    >
                      Option A
                    </a>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 hover:bg-primary-bg hover:text-white"
                    >
                      Option B
                    </a>
                  </div>
                )}
              </div>

              {/* <!-- Search Button --> */}
              <button className="flex items-center justify-center gap-2 rounded-full border-2 border-primary-bg bg-primary-bg px-5 py-3.5 text-white transition-all delay-300 hover:bg-transparent hover:text-primary-bg md:px-5 lg:ml-16 lg:px-4 lg:py-2">
                <span>
                  <IoSearch />
                </span>{" "}
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
