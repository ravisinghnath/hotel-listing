import Image from "next/image";
import Heading from "../heading/Heading";
// import CollectionCard from "./collection";
import CollectionCard from "./CollectionCard";
import collection1 from "@/app/asset/collection1.svg";
import collection2 from "@/app/asset/collection2.svg";
import collection3 from "@/app/asset/collection3.svg";
import Link from "next/link";

export default function collection() {
  return (
    <>
      <div className="container py-12 lg:py-16">
        <Heading
          heading={"Explore our Collection"}
          subheading={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim"
          }
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <CollectionCard
            image={collection1}
            collection="Wild Collection"
            starting="Starting from"
            place="Uga Jungle Beach"
            rating="4.8"
            price="10,000 LKR"
          />
          <CollectionCard
            image={collection2}
            collection="Wild Collection"
            starting="Starting from"
            place="Uga Jungle Beach"
            rating="4.8"
            price="10,000 LKR"
          />
          <CollectionCard
            image={collection3}
            collection="Wild Collection"
            starting="Starting from"
            place="Uga Jungle Beach"
            rating="4.8"
            price="10,000 LKR"
          />
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <CollectionCard
            image={collection1}
            collection="Wild Collection"
            starting="Starting from"
            place="Uga Jungle Beach"
            rating="4.8"
            price="10,000 LKR"
          />
          <CollectionCard
            image={collection2}
            collection="Wild Collection"
            starting="Starting from"
            place="Uga Jungle Beach"
            rating="4.8"
            price="10,000 LKR"
          />
          <CollectionCard
            image={collection3}
            collection="Wild Collection"
            starting="Starting from"
            place="Uga Jungle Beach"
            rating="4.8"
            price="10,000 LKR"
          />
        </div>
        <div className="mx-auto mt-14 flex justify-center lg:mt-16">
          <Link
            href="/"
            className="mb-6 rounded-full border-2 border-primary-bg bg-primary-bg px-10 py-3 text-center text-main-bg transition-all delay-300 hover:bg-transparent hover:text-primary-bg"
          >
            Explore more
          </Link>
        </div>
      </div>
    </>
  );
}
