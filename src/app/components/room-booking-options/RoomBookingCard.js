import React from "react";
import OfferImageSlider from "@/app/components/offers/OfferImageSlider";
import Image from "next/image";
import m2 from "@/app/asset/m2.svg";
import sea from "@/app/asset/sea.svg";
import balcony from "@/app/asset/balcony.svg";
import bed from "@/app/asset/bed.svg";
import kingBed from "@/app/asset/king-bed.svg";
import Link from "next/link";

function RoomBookingCard() {
  return (
    <>
      <div className="mt-8">
        <div className="border-1 flex flex-wrap rounded-2xl border border-border-secondary lg:flex-nowrap">
          <div className="w-full max-w-full lg:max-w-[460px] xl:max-w-[575px]">
            <OfferImageSlider className="!rounded-none" />
          </div>
          <div className="w-full">
            <div className="flex w-full flex-wrap justify-between gap-4 border border-l-0 border-r-0 border-t-0 border-b-border-secondary px-4 md:px-7">
              <h3 className="pt-4 text-xl font-semibold text-primary-text md:py-7">
                Deluxe Ocean View Room
              </h3>
              <h3 className="pb-4 text-xl font-semibold text-primary-bg md:py-7">
                From 10,000 LKR
              </h3>
            </div>
            <div className="px-4 py-5 md:px-7">
              <p className="text-lg text-secondary-text">
                Deluxe rooms boast an enviable position within our Tangalle
                beach resort, with views of the Indian Ocean from multiple
                vantage points. Let the fresh ocean breeze cool you through open
                glass doors. Unwin
              </p>
              <div className="mt-6 md:mt-12">
                <h6 className="text-lg font-semibold text-primary-text">
                  Features
                </h6>
                <div className="mt-4 flex flex-wrap justify-between gap-8 xl:flex-nowrap">
                  <div className="flex w-full flex-col gap-8 md:gap-11">
                    <div className="grid w-full grid-cols-2 gap-12 md:grid-cols-3">
                      <div className="flex items-center gap-2.5">
                        <Image src={m2} className="h-8 w-8" alt="feature" />
                        <p className="text-lg text-secondary-text">60m2</p>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Image src={sea} className="h-8 w-8" alt="feature" />
                        <p className="text-lg text-secondary-text">
                          Sea Facing
                        </p>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Image
                          src={balcony}
                          className="h-8 w-8"
                          alt="feature"
                        />
                        <p className="text-lg text-secondary-text">Balcony</p>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Image src={bed} className="h-8 w-8" alt="feature" />
                        <p className="text-lg text-secondary-text">King Bed</p>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Image
                          src={kingBed}
                          className="h-8 w-8"
                          alt="feature"
                        />
                        <p className="text-lg text-secondary-text">King Bed</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full xl:max-w-48">
                    <Link
                      href="/"
                      className="mb-6 block rounded-full border-2 border-primary-bg bg-primary-bg px-4 py-3 text-center font-medium text-main-bg transition-all delay-300 hover:bg-transparent hover:text-primary-bg"
                    >
                      Book Now
                    </Link>
                    <Link
                      href="/"
                      className="mb-6 mt-4 block rounded-full border-2 border-primary-bg bg-transparent px-4 py-3 text-center font-medium text-primary-bg transition-all delay-300 hover:bg-primary-bg hover:text-white"
                    >
                      View Room Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomBookingCard;
