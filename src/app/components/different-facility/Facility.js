import React from "react";
import FacilityCard from "./FacilityCard";
import facility1 from "@/app/asset/facility1.svg";
import facility2 from "@/app/asset/facility2.svg";
import facility3 from "@/app/asset/facility3.svg";
import Heading from "../heading/Heading";

function Facility() {
  return (
    <>
      <div className="container py-8 md:py-16">
        <Heading
          heading={"We are not afraid to be “different”"}
          subheading={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim"
          }
        />
        <div className="grid grid-cols-1 place-items-center gap-16 pt-3 md:grid-cols-3 md:pt-7">
          <FacilityCard
            image={facility1}
            title="Handpicked Destinations"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
          />
          <FacilityCard
            image={facility2}
            title="Everything is Included"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
          />
          <FacilityCard
            image={facility3}
            title="You set the pace"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
          />
        </div>
      </div>
    </>
  );
}

export default Facility;
