"use client";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";

function CustomerCard(props) {
  return (
    <>
      <div className="border-1 rounded-3xl border p-5 md:p-8">
        <div className="flex items-center gap-4">
          <Image
            src={props.image}
            alt="profile_image"
            width="74"
            height="74"
            className="rounded-full"
          />
          <div>
            <p className="text-base font-semibold md:text-lg">{props.title}</p>
            <p className="mt-2 text-sm text-secondary-text md:text-base">
              {props.detail}
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-8">
          <p className="text-base md:text-xl">{props.content}</p>
        </div>
        <div className="mt-6 flex justify-between md:mt-9">
          <p className="text-sm text-secondary-text md:text-base">
            8:30PM - Jan 5, 2023{" "}
          </p>
          <div className="flex gap-1">
            <FaStar className="text-tertiary-text" size={16} />
            <FaStar className="text-tertiary-text" size={16} />
            <FaStar className="text-tertiary-text" size={16} />
            <FaStar className="text-tertiary-text" size={16} />
            <FaStar className="text-tertiary-text" size={16} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerCard;
