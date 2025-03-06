import React from "react";
import Link from "next/link";

function ButtonOutline(props) {
  return (
    <>
      <Link
        href="/"
        className="mb-6 inline-flex rounded-full border-2 border-primary-bg bg-transparent px-10 py-3 text-center font-medium text-primary-bg transition-all delay-300 hover:bg-primary-bg hover:text-white"
      >
        {props.title}
      </Link>
    </>
  );
}

export default ButtonOutline;
