import React from "react";

function LeftHeading(props) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-primary-text lg:text-3xl">
        {props.title}
      </h2>
    </div>
  );
}

export default LeftHeading;
