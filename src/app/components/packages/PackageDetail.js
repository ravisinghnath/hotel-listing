import React from 'react'
import LeftHeading from '../heading/LeftHeading'
import { FaHeart } from "react-icons/fa";

function PackageDetail(props) {
  return (
    <>
    <div className='bg-secondary-bg px-8 py-9 rounded-2xl grid md:grid-cols-2 grid-cols-1  gap-8 flex-wrap'>
                        <div className='md:block flex flex-col md:justify-start justify-center md:items-start items-center'>
                            <LeftHeading title='Cupid’s Getway Package' />
                            <div className='mt-5 px-3 py-2 inline-flex gap-2.5 items-center bg-pink-bg rounded-full'>
                                <span><FaHeart className='text-primary-bg' /></span>
                                <span className='text-primary-bg text-lg font-semibold'>{props.title}</span>
                            </div>
                        </div>
                        <div className='flex flex-col md:items-end items-center'>
                            <div className='flex gap-1'>
                                <span className='text-primary-bg text-4xl font-semibold'>{props.price}</span>
                                <span className='text-sm text-primary-bg font-semibold'>{props.unit}</span>
                            </div>
                            <p className='font-medium'>{props.subtitle}</p>
                        </div>
                    </div>
      
    </>
  )
}

export default PackageDetail
