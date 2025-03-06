import Image from "next/image";

export default function CelebrationCard(props) {
  return (
    <>
      <div>
        <Image
          src={props.image}
          height="264"
          className="w-full"
          alt="card_image"
        />
        <div>
          <h4 className="md:text-xl text-lg font-semibold text-primary-bg md:mt-7 mt-6">
            {props.heading}
          </h4>
          <p className="text-primary-text md:max-w-md w-full md:mt-4 mt-3.5">
            {props.content}
          </p>
        </div>
      </div>
    </>
  );
}
