'use client'
import { useState,useEffect } from "react";
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
   <div className={`fixed left-0 w-full z-20 transition-all duration-75 ${
          isScrolled ? "top-0 bg-white shadow-md" : "lg:top-[38px] top-[35px] bg-white"
        }`} >
    <nav className="bg-main-bg shadow-md" >
      <div className="container mx-auto  py-3.5 flex justify-between items-center w-full max-md:relative">
       {/* Mobile Menu Button */}
       <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <RxCross2 size={28} className="text-primary-bg" /> : <IoMenuSharp size={28} className="text-primary-bg" />}
        </button>
        {/* Logo */}
        <Link href="/" className="flex items-center max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2 max-md:-translate-Y-1/2">
          <Image src={logo} className="w-44 md:w-56" alt="" />
        </Link>
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-11">
         <li><Link href="/sceneries" className="text-secondary-text hover:text-primary-bg font-medium">Sceneries</Link></li>
         <li><Link href="/places" className="text-secondary-text hover:text-primary-bg font-medium">Places to Stay</Link></li>
         <li><Link href="/offers-menu" className="text-secondary-text hover:text-primary-bg font-medium">Offers</Link></li>
         <li><Link href="/wild-collection" className="text-secondary-text hover:text-primary-bg font-medium">Wild collection</Link></li>
            {/* Quote Button */}
        <li><Link href="#" className="hidden md:block bg-primary-bg text-white px-5 py-2 rounded-full transition-all delay-200 border-2 border-primary-bg hover:bg-transparent hover:text-primary-bg">Get a Quote</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 pb-5">
          <Link href="/sceneries" className="block px-5 py-3 text-gray-700 hover:bg-gray-100 text-center">Sceneries</Link>
          <Link href="/places" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 text-center">Places to Stay</Link>
          <Link href="/offers" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 text-center">Offers</Link>
          <Link href="#" className="block text-main-bg text-center px-4 py-3 rounded-full mx-4 mt-3 bg-primary-bg transition-all delay-300 border-2 border-primary-bg hover:bg-transparent hover:text-primary-bg mb-6">
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
    </div>
    </header>
  )
}

export default Header
