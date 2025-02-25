import React from 'react'
import Header from '../components/Header'
import RoomGallerySlider from '../components/room-detail/RoomGallerySlider'
import WildBreadcrumb from "@/app/components/breadcrumb/WildBreadcrumb"
import DeluxeRoomDetail from '../components/deluxe-room/DeluxeRoomDetail'



function page() {
  return (
    <div>
      <Header />
      <div className="md:pt-20 pt-16">
        <WildBreadcrumb />
      </div>
      <RoomGallerySlider />
      <DeluxeRoomDetail />
    </div>
  )
}

export default page
