import React from "react";
import { FaRegHeart } from "react-icons/fa6";

function PackagesInclude(props) {
  return (
    <>
      <div className="flex gap-2.5 items-start">
        <div className=" w-5 h-5">
          <FaRegHeart size={18} className="text-primary-bg mt-1" />
        </div>
        <p className="text-xl text-primary-text">{props.title}</p>
      </div>
    </>
  );
}

export default PackagesInclude;
