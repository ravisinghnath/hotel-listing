export default function Heading(props) {
  return (
    <>
      <div className="mx-auto mb-10 flex w-full max-w-2xl flex-col items-center justify-center md:mb-12">
        <h2 className="text-center text-2xl font-bold text-primary-bg md:text-4xl">
          {props.heading}
        </h2>
        <p className="mt-5 text-center text-secondary-text">
          {props.subheading}
        </p>
      </div>
    </>
  );
}
