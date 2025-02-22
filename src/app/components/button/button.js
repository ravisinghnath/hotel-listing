import Link from "next/link"


export default function button(props){
    return(
        <>
            <Link href='/' className="text-main-bg text-center font-medium px-10 py-3 rounded-full bg-primary-bg transition-all delay-300 border-2 border-primary-bg hover:bg-transparent hover:text-primary-bg mb-6">
           {props.title}
          </Link>
        </>
    )
}