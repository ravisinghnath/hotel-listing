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
      <div className="container md:py-20 py-16">
        <LeftHeading title="What this place offers" />
        <div className="mt-14">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-5 gap-9">
            <div className="flex gap-4 items-center justify-center p-9 border border-border-teritary rounded-2xl">
              <Image src={wifi} alt="wifi" />
              <p className="text-xl font-semibold">Wifi</p>
            </div>
            <div className="flex gap-4 items-center justify-center p-9 border border-border-teritary rounded-2xl">
              <Image src={kitchen} alt="wifi" />
              <p className="text-xl font-semibold">Kitchen</p>
            </div>
            <div className="flex gap-4 items-center justify-center p-9 border border-border-teritary rounded-2xl">
              <Image src={car} alt="wifi" />
              <p className="text-xl font-semibold">Free street parking</p>
            </div>
            <div className="flex gap-4 items-center justify-center p-9 border border-border-teritary rounded-2xl">
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
