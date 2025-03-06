import Link from "next/link";
import React from "react";

function Help() {
  return (
    <>
      <div className="bg-primary-bg p-20">
        <div className="flex flex-col justify-center items-center text-white text-center">
          <h1 className="md:text-4xl text-3xl font-semibold">
            How we can help?
          </h1>
          <p className="mt-6 md:text-lg text-sm md:leading-7 leading-6  max-w-md w-full">
            Our experts are a filled-form away to provide complete seclusion for
            your Love Story
          </p>
          <Link
            href="#"
            className="mt-8 font-medium text-primary-bg bg-white md:px-8 px-14 py-3 rounded-full transition-all delay-200 border-2 border-primary-bg hover:bg-transparent hover:border-white hover:text-white"
          >
            View Details
          </Link>
        </div>
      </div>
    </>
  );
}

export default Help;
