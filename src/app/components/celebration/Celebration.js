import CelebrationCard from "./CelebrationCard";
import Heading from "../heading/Heading";
import celebration1 from "@/app/asset/celebration1.svg";
import celebration2 from "@/app/asset/celebration2.svg";
import celebration3 from "@/app/asset/celebration3.svg";

export default function Celebration() {
  return (
    <>
      <div className="container py-12 lg:py-16">
        <Heading
          heading={"Your Perfect Celebration Awaits"}
          subheading={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim"
          }
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <CelebrationCard
            image={celebration1}
            heading={"Honeymoon/ Minimoon"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ncididunt ut labore et dolore "
            }
          />
          <CelebrationCard
            image={celebration2}
            heading={"Babymoon"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ncididunt ut labore et dolore "
            }
          />
          <CelebrationCard
            image={celebration3}
            heading={"Anniversarymoon"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ncididunt ut labore et dolore "
            }
          />
        </div>
      </div>
    </>
  );
}
