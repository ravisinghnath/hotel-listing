import Image from "next/image";
import React from "react";

function FacilityCard(props) {
  return (
    <>
      <div className="flex w-full max-w-xs flex-col items-center justify-center text-center">
        <Image src={props.image} alt="image" className="" />
        <h5 className="mt-5 w-full max-w-32 text-lg font-semibold">
          {props.title}
        </h5>
        <p className="mt-7 text-base text-secondary-text">{props.content}</p>
      </div>
    </>
  );
}

export default FacilityCard;
