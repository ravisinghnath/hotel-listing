import React from 'react'
import Link from "next/link"

function Breadcrumb(props) {
  return (
    <>
      <div className="bg-white flex items-center flex-wrap my-6">
    <ul className="flex items-center">
	<li className="inline-flex items-center">
	  <Link href="#" className="text-secondary-text hover:text-primary-bg">
      {props.title}
	  </Link>
	  <svg className="w-5 h-auto fill-current mx-4 text-secondary-text" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
	</li>
	<li className="inline-flex items-center">
	  <Link href="#" className="text-secondary-text hover:text-primary-bg">
      {props.subtitle}
	  </Link>
	  <svg className="w-5 h-auto fill-current mx-4 text-secondary-text" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
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
