import React from 'react'
import Header from '@/app/components/Header'
import RoomGallerySlider from '@/app/components/room-detail/RoomGallerySlider'
import WildBreadcrumb from "@/app/components/breadcrumb/WildBreadcrumb"
import DeluxeRoomDetail from '@/app/components/deluxe-room/DeluxeRoomDetail'
import RoomAmenities from '@/app/components/RoomAmenities'
import Packages from '@/app/components/packages/Packages'
import BookingForm from '@/app/components/BookingForm'
import Help from '@/app/components/Help'
import Footer from '@/app/components/Footer'



function page() {
  return (
    <div>
      <Header />
      <div className="md:pt-20 pt-16">
        <WildBreadcrumb />
      </div>
      <RoomGallerySlider />
      <DeluxeRoomDetail />
      <RoomAmenities />
      <Packages />
      <BookingForm />
      <Help />
      <Footer />
    </div>
  )
}

export default page
