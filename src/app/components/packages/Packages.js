import React from "react";
import LeftHeading from "../heading/LeftHeading";
import { FaHeart } from "react-icons/fa";
import PackagesInclude from "./PackagesInclude";
import Button from "../button/Button";
import Link from "next/link";

function Packages() {
  return (
    <>
      <div className="container py-14">
        <LeftHeading title="Packages" />
        <div className="mt-8 rounded-2xl border border-border-pink">
          <div className="grid grid-cols-1 flex-wrap gap-8 rounded-2xl bg-secondary-bg px-8 py-9 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center md:block md:items-start md:justify-start">
              <LeftHeading title="Cupid’s Getway Package" />
              <div className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-pink-bg px-3 py-2">
                <span>
                  <FaHeart className="text-primary-bg" />
                </span>
                <span className="text-lg font-semibold text-primary-bg">
                  1 Night
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex gap-1">
                <span className="text-4xl font-semibold text-primary-bg">
                  10,000
                </span>
                <span className="text-sm font-semibold text-primary-bg">
                  LKR
                </span>
              </div>
              <p className="font-medium">/ Night / Couple</p>
            </div>
          </div>
          <div className="p-8">
            <p className="text-secondary-text">
              Deluxe rooms boast an enviable position within our Tangalle beach
              resort, with views of the Indian Ocean from multiple vantage
              points. Let the fresh ocean breeze cool you through open glass
              doors. Unwin Explore the island’s rainforests, pilgrimage sites
              and fishing ports. Dine cliffside, embark on surf adventures, or
              retreat to the sanctuary of Anantara Spa with award-winning
              Ayurvedic
            </p>
            <div className="mt-10">
              <div>
                <h5 className="mb-7 text-lg font-semibold">Package Incudes:</h5>
                <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
                  <PackagesInclude title="Welcome Flower Bouquet" />
                  <PackagesInclude title="Welcome Flower Bouquet" />
                </div>
                <div className="mt-7 grid grid-cols-1 gap-7 lg:grid-cols-3">
                  <PackagesInclude title="Half-board Meal Plan" />
                  <PackagesInclude title="Breakfast-on-Bed" />
                </div>
                <div className="mt-7 grid grid-cols-1 gap-7 lg:grid-cols-3">
                  <PackagesInclude title="Candle-lit Dinner on the first night" />
                  <PackagesInclude title="5% Discount on Couples’ Massage" />
                </div>
              </div>
            </div>
            <div className="mt-14 justify-end md:flex">
              <Link
                href="/"
                className="mb-6 block rounded-full border-2 border-primary-bg bg-primary-bg px-10 py-3 text-center font-medium text-main-bg transition-all delay-300 hover:bg-transparent hover:text-primary-bg md:inline-flex"
              >
                Check Availability
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Packages;
