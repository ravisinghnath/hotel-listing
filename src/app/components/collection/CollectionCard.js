import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";

export default function CollectionCard(props) {
  return (
    <>
      <div>
        <Image
          src={props.image}
          height="265"
          className="w-full rounded-t-xl"
          alt="collection_card"
        />
        <div className="mt-5 flex items-center justify-between text-secondary-text">
          <p>{props.collection}</p>
          <p>{props.starting}</p>
        </div>
        <div className="mt-2.5 flex items-center justify-between">
          <div className="flex flex-wrap gap-3.5 text-lg font-medium">
            <h5>{props.place}</h5>
            <p className="flex items-center gap-1 text-tertiary-text">
              {props.rating}{" "}
              <span>
                <FaStar size={14} />
              </span>{" "}
            </p>
          </div>
          <div>
            <p className="text-xl font-medium text-primary-bg">{props.price}</p>
          </div>
        </div>
      </div>
    </>
  );
}
