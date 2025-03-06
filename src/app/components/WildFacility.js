import React from "react";
import LeftHeading from "./heading/LeftHeading";
import Image from "next/image";
import wifi from "@/app/asset/wifi.svg";
import kitchen from "@/app/asset/kitchen.svg";
import car from "@/app/asset/car.svg";
import washer from "@/app/asset/washer.svg";

function WildFacility() {
  return (
    <>
      <div className="container py-16 md:py-20">
        <LeftHeading title="What this place offers" />
        <div className="mt-14">
          <div className="grid grid-cols-1 gap-9 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
            <div className="flex items-center justify-center gap-4 rounded-2xl border border-border-teritary p-9">
              <Image src={wifi} alt="wifi" />
              <p className="text-xl font-semibold">Wifi</p>
            </div>
            <div className="flex items-center justify-center gap-4 rounded-2xl border border-border-teritary p-9">
              <Image src={kitchen} alt="wifi" />
              <p className="text-xl font-semibold">Kitchen</p>
            </div>
            <div className="flex items-center justify-center gap-4 rounded-2xl border border-border-teritary p-9">
              <Image src={car} alt="wifi" />
              <p className="text-xl font-semibold">Free street parking</p>
            </div>
            <div className="flex items-center justify-center gap-4 rounded-2xl border border-border-teritary p-9">
              <Image src={washer} alt="wifi" />
              <p className="text-xl font-semibold">Washer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WildFacility;
