import Link from "next/link";

export default function Button(props) {
  return (
    <>
      <Link
        href="/"
        className="mb-6 inline-flex rounded-full border-2 border-primary-bg bg-primary-bg px-10 py-3 text-center font-medium text-main-bg transition-all delay-300 hover:bg-transparent hover:text-primary-bg"
      >
        {props.title}
      </Link>
    </>
  );
}
