import React from "react";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

function Breadcrumb(props) {
  return (
    <>
      <div className="my-6 flex flex-wrap items-center bg-white">
        <ul className="flex flex-wrap items-center">
          <li className="inline-flex items-center">
            <Link
              href="#"
              className="text-sm text-secondary-text underline hover:text-primary-bg"
            >
              {props.title}
            </Link>
            <FaAngleRight
              className="mx-2 text-secondary-text lg:mx-4"
              size={11}
            />
          </li>
          <li className="inline-flex items-center">
            <Link
              href="#"
              className="text-sm text-secondary-text underline hover:text-primary-bg"
            >
              {props.subtitle}
            </Link>
            <FaAngleRight
              className="mx-2 text-secondary-text lg:mx-4"
              size={11}
            />
          </li>
          <li className="inline-flex items-center">
            <Link
              href="#"
              className="text-sm text-secondary-text underline hover:text-primary-bg"
            >
              {props.subsubtitle}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Breadcrumb;
