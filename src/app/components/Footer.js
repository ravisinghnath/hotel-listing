"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/asset/logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { RiTiktokFill } from "react-icons/ri";

export default function Footer() {
  return (
    <>
      <div className="container py-6 lg:py-8">
        <div className="grid grid-cols-1 justify-between gap-12 text-secondary-text md:grid-cols-2">
          <div className="max-w-lg">
            <Link href="#">
              <Image src={logo} className="max-w-40" alt="" />
            </Link>
            <p className="py-5 text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <ul className="flex items-center gap-8">
              <li>
                <Link href="#">
                  <FaFacebookF
                    className="font-medium text-secondary-text transition-all delay-300 ease-in-out hover:scale-150 hover:text-primary-bg"
                    size={16}
                  />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <IoLogoInstagram
                    className="font-medium text-secondary-text transition-all delay-300 ease-in-out hover:scale-150 hover:text-primary-bg"
                    size={16}
                  />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <RiTiktokFill
                    className="font-medium text-secondary-text transition-all delay-300 ease-in-out hover:scale-150 hover:text-primary-bg"
                    size={16}
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex w-full flex-wrap justify-start gap-20 md:flex-nowrap md:justify-end">
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/"
                  className="transition-all delay-300 ease-in-out hover:text-primary-bg"
                >
                  Scenery
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all delay-200 ease-in-out hover:text-primary-bg"
                >
                  Places to Stay
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all delay-200 ease-in-out hover:text-primary-bg"
                >
                  Offers
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/"
                  className="transition-all delay-200 ease-in-out hover:text-primary-bg"
                >
                  Scenery
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all delay-200 ease-in-out hover:text-primary-bg"
                >
                  Places to Stay
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all delay-200 ease-in-out hover:text-primary-bg"
                >
                  Offers
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/"
                  className="transition-all delay-200 ease-in-out hover:text-primary-bg"
                >
                  Scenery
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all delay-200 ease-in-out hover:text-primary-bg"
                >
                  Places to Stay
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all delay-200 ease-in-out hover:text-primary-bg"
                >
                  Offers
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t pt-5">
          <p className="text-secondary-text">
            © Lexro Leisureway. All rights reserved
          </p>
        </div>
      </div>
    </>
  );
}
