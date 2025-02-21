'use client'
import Image from "next/image";
import Link from "next/link";
import logo from '@/app/asset/logo.svg'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { RiTiktokFill } from "react-icons/ri";

export default function footer(){
    return(
        <>
        <div className="container lg:py-8 py-6">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-12 justify-between text-secondary-text">
        <div className="max-w-lg">
        <Link href='#'><Image src={logo} className="max-w-40" alt="" /></Link>
        <p className="py-5 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <ul className="flex gap-8 items-center">
        <li><Link href="#"><FaFacebookF className="text-secondary-text font-medium hover:text-primary-bg hover:scale-150 transition-all ease-in-out delay-300" size={16} /></Link></li>
        <li><Link href="#"><IoLogoInstagram className="text-secondary-text font-medium hover:text-primary-bg hover:scale-150 transition-all ease-in-out delay-300" size={16} /></Link></li>
        <li><Link href="#"><RiTiktokFill className="text-secondary-text font-medium hover:text-primary-bg hover:scale-150 transition-all ease-in-out delay-300" size={16} /></Link></li>
        </ul>
        
        </div>
        <div className="flex md:justify-end justify-start flex-wrap md:flex-nowrap gap-20 w-full">
        <ul className="flex flex-col gap-4">
            <li>
                <Link href='/' className="hover:text-primary-bg transition-all delay-300 ease-in-out">Scenery</Link>
            </li>
            <li>
                <Link href='/' className="hover:text-primary-bg transition-all delay-200 ease-in-out">Places to Stay</Link>
            </li>
            <li>
                <Link href='/' className="hover:text-primary-bg transition-all delay-200 ease-in-out">Offers</Link>
            </li>

        </ul>
        <ul className="flex flex-col gap-4">
            <li>
                <Link href='/' className="hover:text-primary-bg transition-all delay-200 ease-in-out">Scenery</Link>
            </li>
            <li>
                <Link href='/' className="hover:text-primary-bg transition-all delay-200 ease-in-out">Places to Stay</Link>
            </li>
            <li>
                <Link href='/' className="hover:text-primary-bg transition-all delay-200 ease-in-out">Offers</Link>
            </li>
        </ul>
        <ul className="flex flex-col gap-4">
            <li>
                <Link href='/' className="hover:text-primary-bg transition-all delay-200 ease-in-out">Scenery</Link>
            </li>
            <li>
                <Link href='/' className="hover:text-primary-bg transition-all delay-200 ease-in-out">Places to Stay</Link>
            </li>
            <li>
                <Link href='/' className="hover:text-primary-bg transition-all delay-200 ease-in-out">Offers</Link>
            </li>
        </ul>

        </div>

        </div>
        <div className="border-t pt-5 mt-10">
        <p className="text-secondary-text">© Lexro Leisureway. All rights reserved</p>
        </div>
        </div>
        </>
    )
}