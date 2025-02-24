import React from 'react'
import Link from "next/link"
import { FaAngleRight } from "react-icons/fa6";

function Breadcrumb(props) {
  return (
    <>
      <div className="bg-white flex items-center flex-wrap my-6">
    <ul className="flex items-center flex-wrap">
	<li className="inline-flex items-center">
	  <Link href="#" className="text-secondary-text hover:text-primary-bg underline text-sm">
      {props.title}
	  </Link>
	  <FaAngleRight className='text-secondary-text lg:mx-4 mx-2' size={11} />
	</li>
	<li className="inline-flex items-center">
	  <Link href="#" className="text-secondary-text hover:text-primary-bg underline text-sm">
      {props.subtitle}
	  </Link>
	  <FaAngleRight className='text-secondary-text lg:mx-4 mx-2' size={11} />
	</li>
	<li className="inline-flex items-center">
	  <Link href="#" className="text-secondary-text hover:text-primary-bg underline text-sm">
      {props.subsubtitle}
	  </Link>
	</li>
  </ul>
      </div>   
    </>
  )
}

export default Breadcrumb
