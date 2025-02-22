'use client'
import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { RiTiktokFill } from "react-icons/ri";
import logo from '@/app/asset/logo.svg'
import Image from "next/image";
import Link from "next/link";
// import Breadcrumbs from '@mui/material/Breadcrumbs';

function header() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
    <div className="bg-head-bg">
    <div className="container flex md:justify-end justify-center items-center gap-14 py-2.5 md:py-0">
    <div className="flex items-center gap-2.5">
      <p className="text-secondary-text font-medium text-sm">Message us on </p>
      <Link href="#" className="flex items-center text-secondary-text gap-2.5 font-medium text-sm"><span><FaWhatsapp className="font-medium" /></span> +94 777 265 262</Link>
    </div>
    
    <nav className="text-secondary-text text-sm py-3 hidden md:block">
  <ul className="flex items-center space-x-5">
    <li>
      <Link href="/" className="hover:text-primary-bg text-xs font-medium transition-all delay-200 relative after:absolute after:content-['/'] after:px-2 after:top-0">Home</Link>
    </li>
    {/* <li>/</li> */}
    <li>
      <Link href="/" className="hover:text-primary-bg text-xs font-medium transition-all delay-200 relative after:absolute after:content-['/'] after:px-2 after:top-0">Blog</Link>
    </li>
   
    <li>
      <Link href="/" className="hover:text-primary-bg text-xs font-medium transition-all delay-200">Post Title</Link>
    </li>
  </ul>
    </nav>
    <div className="hidden md:block">
    <ul className="flex gap-8 items-center">
    <li><Link href="#"><FaFacebookF className="text-secondary-text font-medium" size={14} /></Link></li>
    <li><Link href="#"><IoLogoInstagram className="text-secondary-text font-medium" size={14} /></Link></li>
    <li><Link href="#"><RiTiktokFill className="text-secondary-text font-medium" size={14} /></Link></li>
    </ul>
    </div>
    </div>
    </div>
    <div>
    </div>
    <nav className="bg-main-bg shadow-md">
      <div className="container mx-auto  py-3.5 flex justify-between items-center w-full max-md:relative">
       {/* Mobile Menu Button */}
       <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <RxCross2 size={28} className="text-primary-bg" /> : <IoMenuSharp size={28} className="text-primary-bg" />}
        </button>
        {/* Logo */}
        <a href="/" className="flex items-center max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2 max-md:-translate-Y-1/2">
          <Image src={logo} className="w-44 md:w-56" alt="" />
        </a>
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-11">
         <li><a href="#" className="text-secondary-text hover:text-primary-bg font-medium">Sceneries</a></li>
         <li><a href="#" className="text-secondary-text hover:text-primary-bg font-medium">Places to Stay</a></li>
         <li><a href="#" className="text-secondary-text hover:text-primary-bg font-medium">Offers</a></li>
            {/* Quote Button */}
        <li><Link href="#" className="hidden md:block bg-primary-bg text-white px-5 py-2 rounded-full transition-all delay-200 border-2 border-primary-bg hover:bg-transparent hover:text-primary-bg">Get a Quote</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 pb-5">
          <a href="#" className="block px-5 py-3 text-gray-700 hover:bg-gray-100 text-center">Sceneries</a>
          <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 text-center">Places to Stay</a>
          <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 text-center">Offers</a>
          <a href="#" className="block text-main-bg text-center px-4 py-3 rounded-full mx-4 mt-3 bg-primary-bg transition-all delay-300 border-2 border-primary-bg hover:bg-transparent hover:text-primary-bg mb-6">
            Get a Quote
          </a>
        </div>
      )}
    </nav>
    </div>
  )
}

export default header
