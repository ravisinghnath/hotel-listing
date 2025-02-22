import Image from "next/image";
import Heading from "../heading/Heading";
// import CollectionCard from "./collection";
import CollectionCard from "./CollectionCard";
import collection1 from '@/app/asset/collection1.svg'
import collection2 from '@/app/asset/collection2.svg'
import collection3 from '@/app/asset/collection3.svg'
import Link from "next/link";



export default function collection(){
    return(
        <>
           <div className="container lg:py-16 py-12">
           <Heading heading={"Explore our Collection"} subheading={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim"} />
           <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
           {/* <Image src={collection1} height="265" className="rounded-t-xl" alt="Collection_img" /> */}
           <CollectionCard image={collection1} collection="Wild Collection" starting="Starting from" place="Uga Jungle Beach" rating="4.8" price="10,000 LKR"  />
           <CollectionCard image={collection2} collection="Wild Collection" starting="Starting from" place="Uga Jungle Beach" rating="4.8" price="10,000 LKR"  />
           <CollectionCard image={collection3} collection="Wild Collection" starting="Starting from" place="Uga Jungle Beach" rating="4.8" price="10,000 LKR"  />
           </div>
           <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mt-16">
           <CollectionCard image={collection1} collection="Wild Collection" starting="Starting from" place="Uga Jungle Beach" rating="4.8" price="10,000 LKR"  />
           <CollectionCard image={collection2} collection="Wild Collection" starting="Starting from" place="Uga Jungle Beach" rating="4.8" price="10,000 LKR"  />
           <CollectionCard image={collection3} collection="Wild Collection" starting="Starting from" place="Uga Jungle Beach" rating="4.8" price="10,000 LKR"  />
           </div>
           <div className="flex justify-center mx-auto lg:mt-16 mt-14">
           <Link href='/' className="text-main-bg text-center px-10 py-3 rounded-full bg-primary-bg transition-all delay-300 border-2 border-primary-bg hover:bg-transparent hover:text-primary-bg mb-6">
           Explore more
          </Link>
          </div>


           </div> 
        </>
    )
}