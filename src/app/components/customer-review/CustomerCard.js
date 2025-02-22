
'use client'
import Image from 'next/image'
import React from 'react'
import { FaStar } from "react-icons/fa6";

function CustomerCard(props) {
  return (
    <>
    <div className='md:p-8 p-5 border border-1 rounded-3xl'>
    <div className='flex gap-4 items-center'>
    <Image src={props.image} alt='profile_image' width="74" height="74" className='rounded-full' />
    <div>
    <p className='md:text-lg text-base font-semibold'>{props.title}</p>
    <p className='text-secondary-text md:text-base text-sm mt-2'>{props.detail}</p>
    </div>
    </div>
    <div className='md:mt-8 mt-5'>
        <p className='md:text-xl text-base'>{props.content}</p>
    </div>
    <div className='flex justify-between md:mt-9 mt-6'>
    <p className='text-secondary-text md:text-base text-sm'>8:30PM - Jan 5, 2023 </p>
    <div className='flex gap-1'>
    <FaStar className='text-tertiary-text' size={16} />
    <FaStar className='text-tertiary-text' size={16} />
    <FaStar className='text-tertiary-text' size={16} />
    <FaStar className='text-tertiary-text' size={16} />
    <FaStar className='text-tertiary-text' size={16} />
    </div>
    </div>
    </div>
      
    </>
  )
}

export default CustomerCard
