"use client";
import React from "react";
import Heading from "../heading/Heading";
import CustomerSlider from "./CustomerSlider";

function CustomerReview() {
  return (
    <>
      <div className="container py-12 lg:py-16">
        <Heading
          heading={"Customers Review"}
          subheading={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          }
        />
        <div className="mt-20">
          <CustomerSlider />
        </div>
      </div>
    </>
  );
}

export default CustomerReview;
