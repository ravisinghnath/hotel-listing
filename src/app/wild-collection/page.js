import WildBreadcrumb from "@/app/components/breadcrumb/WildBreadcrumb"
import RoomGallery from "@/app/components/room-detail/RoomGallery"
import Header from '@/app/components/Header'

export default function page(){
    return(
        <>
        <Header  />
        <div className="md:pt-20 pt-16">
		<WildBreadcrumb />
        </div>
        <RoomGallery />
        </>
    )
}