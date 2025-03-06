"use client";
import { useState, useEffect } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { RiTiktokFill } from "react-icons/ri";
import logo from "@/app/asset/logo.svg";
import Image from "next/image";
import Link from "next/link";
// import Breadcrumbs from '@mui/material/Breadcrumbs';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div className="bg-head-bg">
        <div className="container flex items-center justify-center gap-14 py-2.5 md:justify-end md:py-0">
          <div className="flex items-center gap-2.5">
            <p className="text-sm font-medium text-secondary-text">
              Message us on{" "}
            </p>
            <Link
              href="#"
              className="flex items-center gap-2.5 text-sm font-medium text-secondary-text"
            >
              <span>
                <FaWhatsapp className="font-medium" />
              </span>{" "}
              +94 777 265 262
            </Link>
          </div>

          <nav className="hidden py-3 text-sm text-secondary-text md:block">
            <ul className="flex items-center space-x-5">
              <li>
                <Link
                  href="/"
                  className="relative text-xs font-medium transition-all delay-200 after:absolute after:top-0 after:px-2 after:content-['/'] hover:text-primary-bg"
                >
                  Home
                </Link>
              </li>
              {/* <li>/</li> */}
              <li>
                <Link
                  href="/"
                  className="relative text-xs font-medium transition-all delay-200 after:absolute after:top-0 after:px-2 after:content-['/'] hover:text-primary-bg"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="text-xs font-medium transition-all delay-200 hover:text-primary-bg"
                >
                  Post Title
                </Link>
              </li>
            </ul>
          </nav>
          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li>
                <Link href="#">
                  <FaFacebookF
                    className="font-medium text-secondary-text"
                    size={14}
                  />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <IoLogoInstagram
                    className="font-medium text-secondary-text"
                    size={14}
                  />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <RiTiktokFill
                    className="font-medium text-secondary-text"
                    size={14}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`fixed left-0 z-20 w-full transition-all duration-75 ${
          isScrolled
            ? "top-0 bg-white shadow-md"
            : "top-[35px] bg-white lg:top-[38px]"
        }`}
      >
        <nav className="bg-main-bg shadow-md">
          <div className="container mx-auto flex w-full items-center justify-between py-3.5 max-md:relative">
            {/* Mobile Menu Button */}
            <button
              className="text-gray-700 md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <RxCross2 size={28} className="text-primary-bg" />
              ) : (
                <IoMenuSharp size={28} className="text-primary-bg" />
              )}
            </button>
            {/* Logo */}
            <Link
              href="/"
              className="max-md:-translate-Y-1/2 flex items-center max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2"
            >
              <Image src={logo} className="w-44 md:w-56" alt="" />
            </Link>
            {/* Desktop Menu */}
            <ul className="hidden items-center space-x-11 md:flex">
              <li>
                <Link
                  href="/sceneries"
                  className="font-medium text-secondary-text hover:text-primary-bg"
                >
                  Sceneries
                </Link>
              </li>
              <li>
                <Link
                  href="/places"
                  className="font-medium text-secondary-text hover:text-primary-bg"
                >
                  Places to Stay
                </Link>
              </li>
              <li>
                <Link
                  href="/offers-menu"
                  className="font-medium text-secondary-text hover:text-primary-bg"
                >
                  Offers
                </Link>
              </li>
              <li>
                <Link
                  href="/wild-collection"
                  className="font-medium text-secondary-text hover:text-primary-bg"
                >
                  Wild collection
                </Link>
              </li>
              {/* Quote Button */}
              <li>
                <Link
                  href="#"
                  className="hidden rounded-full border-2 border-primary-bg bg-primary-bg px-5 py-2 text-white transition-all delay-200 hover:bg-transparent hover:text-primary-bg md:block"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="border-t border-gray-200 bg-white pb-5 md:hidden">
              <Link
                href="/sceneries"
                className="block px-5 py-3 text-center text-gray-700 hover:bg-gray-100"
              >
                Sceneries
              </Link>
              <Link
                href="/places"
                className="block px-4 py-3 text-center text-gray-700 hover:bg-gray-100"
              >
                Places to Stay
              </Link>
              <Link
                href="/offers"
                className="block px-4 py-3 text-center text-gray-700 hover:bg-gray-100"
              >
                Offers
              </Link>
              <Link
                href="#"
                className="mx-4 mb-6 mt-3 block rounded-full border-2 border-primary-bg bg-primary-bg px-4 py-3 text-center text-main-bg transition-all delay-300 hover:bg-transparent hover:text-primary-bg"
              >
                Get a Quote
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
