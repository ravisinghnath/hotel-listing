import CelebrationCard from "./CelebrationCard"
import Heading from "../heading/Heading";
import celebration1 from '@/app/asset/celebration1.svg';
import celebration2 from '@/app/asset/celebration2.svg';
import celebration3 from '@/app/asset/celebration3.svg';
import CelebrationCard from "./CelebrationCard";



export default function celebration(){
    return(
        <>
            <div className="container lg:py-16 py-12">
                <Heading heading={"Your Perfect Celebration Awaits"} subheading={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim"} />
                <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                <CelebrationCard image={celebration1} heading={"Honeymoon/ Minimoon"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ncididunt ut labore et dolore "} />
                <CelebrationCard image={celebration2} heading={"Babymoon"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ncididunt ut labore et dolore "} />
                <CelebrationCard image={celebration3} heading={"Anniversarymoon"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ncididunt ut labore et dolore "} />
                </div>
            </div>
        </>
    )
}