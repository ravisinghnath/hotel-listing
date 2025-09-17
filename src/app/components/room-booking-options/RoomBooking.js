import React from "react";
import LeftHeading from "../heading/LeftHeading";
import RoomBookingCard from "./RoomBookingCard";

function RoomBooking() {
  return (
    <>
      <div className="container">
        <LeftHeading title="Rooms" className="!pb-8" />
        <RoomBookingCard />
        <RoomBookingCard />
        <RoomBookingCard />
      </div>
    </>
  );
}

export default RoomBooking;
