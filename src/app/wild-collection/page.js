import WildBreadcrumb from "@/app/components/breadcrumb/WildBreadcrumb";
import RoomGallery from "@/app/components/room-detail/RoomGallery";
import Header from "@/app/components/Header";
import RoomBooking from "@/app/components/room-booking-options/RoomBooking";
import Help from "@/app/components/Help";
import WildFacility from "../components/WildFacility";
import Footer from "../components/Footer";

export default function page() {
  return (
    <>
      <Header />
      <div className="pt-16 md:pt-20">
        <WildBreadcrumb />
      </div>
      <RoomGallery />
      <RoomBooking />
      <WildFacility />
      <Help />
      <Footer />
    </>
  );
}
