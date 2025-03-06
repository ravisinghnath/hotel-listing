import React from "react";
import Header from "../components/Header";
import RoomGallerySlider from "../components/room-detail/RoomGallerySlider";
import WildBreadcrumb from "@/app/components/breadcrumb/WildBreadcrumb";
import DeluxeRoomDetail from "../components/deluxe-room/DeluxeRoomDetail";
import RoomAmenities from "../components/RoomAmenities";
import Packages from "../components/packages/Packages";

function page() {
  return (
    <div>
      <Header />
      <div className="pt-16 md:pt-20">
        <WildBreadcrumb />
      </div>
      <RoomGallerySlider />
      <DeluxeRoomDetail />
      <RoomAmenities />
      <Packages />
    </div>
  );
}

export default page;
