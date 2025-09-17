import React from "react";
import { FaRegHeart } from "react-icons/fa6";

function PackagesInclude(props) {
  return (
    <>
      <div className="flex items-start gap-2.5">
        <div className="h-5 w-5">
          <FaRegHeart size={18} className="mt-1 text-primary-bg" />
        </div>
        <p className="text-xl text-primary-text">{props.title}</p>
      </div>
    </>
  );
}

export default PackagesInclude;
