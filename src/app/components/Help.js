import Link from "next/link";
import React from "react";

function Help() {
  return (
    <>
      <div className="bg-primary-bg p-20">
        <div className="flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-3xl font-semibold md:text-4xl">
            How we can help?
          </h1>
          <p className="mt-6 w-full max-w-md text-sm leading-6 md:text-lg md:leading-7">
            Our experts are a filled-form away to provide complete seclusion for
            your Love Story
          </p>
          <Link
            href="#"
            className="mt-8 rounded-full border-2 border-primary-bg bg-white px-14 py-3 font-medium text-primary-bg transition-all delay-200 hover:border-white hover:bg-transparent hover:text-white md:px-8"
          >
            View Details
          </Link>
        </div>
      </div>
    </>
  );
}

export default Help;
