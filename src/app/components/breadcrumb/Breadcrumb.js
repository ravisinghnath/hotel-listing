import React from 'react'
import Link from "next/link"
import { FaAngleRight } from "react-icons/fa6";

function Breadcrumb(props) {
  return (
    <>
      <div className="bg-white flex items-center flex-wrap my-6">
    <ul className="flex items-center">
	<li className="inline-flex items-center">
	  <Link href="#" className="text-secondary-text hover:text-primary-bg">
      {props.title}
	  </Link>
	  <FaAngleRight className='text-secondary-text mx-4' size={11} />
	</li>
	<li className="inline-flex items-center">
	  <Link href="#" className="text-secondary-text hover:text-primary-bg">
      {props.subtitle}
	  </Link>
	  <FaAngleRight className='text-secondary-text mx-4' size={11} />
	</li>
	<li className="inline-flex items-center">
	  <Link href="#" className="text-secondary-text hover:text-primary-bg">
      {props.subsubtitle}
	  </Link>
	</li>
  </ul>
      </div>   
    </>
  )
}

export default Breadcrumb
