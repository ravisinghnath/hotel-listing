import React from 'react'
import Link from 'next/link'

function ButtonOutline(props) {
  return (
    <>
      <Link href='/' className="inline-flex text-primary-bg text-center font-medium px-10 py-3 rounded-full bg-transparent transition-all delay-300 border-2 border-primary-bg hover:bg-primary-bg hover:text-white mb-6">
           {props.title}
        </Link>
    </>
  )
}

export default ButtonOutline
