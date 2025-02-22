import Image from 'next/image'
import React from 'react'

function facilityCard(props) {
  return (
    <>
    <div className='max-w-xs w-full flex flex-col justify-center items-center text-center'>
    <Image src={props.image} alt='image' className='' />
    <h5 className='mt-5 text-lg font-semibold max-w-32 w-full'>{props.title}</h5>
    <p className='mt-7 text-base text-secondary-text'>{props.content}</p>
    </div>
    </>
  )
}

export default facilityCard
