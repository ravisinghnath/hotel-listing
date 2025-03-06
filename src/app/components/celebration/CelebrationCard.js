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
          <h4 className="mt-6 text-lg font-semibold text-primary-bg md:mt-7 md:text-xl">
            {props.heading}
          </h4>
          <p className="mt-3.5 w-full text-primary-text md:mt-4 md:max-w-md">
            {props.content}
          </p>
        </div>
      </div>
    </>
  );
}
