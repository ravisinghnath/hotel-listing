import Image from "next/image";
import React from "react";
import Link from "next/link";

function InspiationCard(props) {
  return (
    <>
      <div>
        <Image
          src={props.image}
          alt="card_image"
          className="rounded-2xl w-full"
        />
        <h4 className="text-xl font-semibold mt-5">{props.heading}</h4>
        <p className="text-base font-medium text-secondary-text mt-2.5">
          {props.subhead}
        </p>
        <p className="text-base mt-6 md:max-w-80 max-w-full w-full text-primary-text">
          {props.content}
        </p>
        <Link
          href="#"
          className="inline-flex text-main-bg text-center px-8 py-3 mt-6 font-medium rounded-full bg-primary-bg transition-all delay-300 border-2 border-primary-bg hover:bg-transparent hover:text-primary-bg mb-6"
        >
          {props.button}
        </Link>
      </div>
    </>
  );
}

export default InspiationCard;
