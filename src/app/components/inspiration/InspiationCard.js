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
          className="w-full rounded-2xl"
        />
        <h4 className="mt-5 text-xl font-semibold">{props.heading}</h4>
        <p className="mt-2.5 text-base font-medium text-secondary-text">
          {props.subhead}
        </p>
        <p className="mt-6 w-full max-w-full text-base text-primary-text md:max-w-80">
          {props.content}
        </p>
        <Link
          href="#"
          className="mb-6 mt-6 inline-flex rounded-full border-2 border-primary-bg bg-primary-bg px-8 py-3 text-center font-medium text-main-bg transition-all delay-300 hover:bg-transparent hover:text-primary-bg"
        >
          {props.button}
        </Link>
      </div>
    </>
  );
}

export default InspiationCard;
