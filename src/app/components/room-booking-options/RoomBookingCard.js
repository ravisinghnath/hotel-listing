import React from 'react'
import OfferImageSlider from '@/app/components/offers/OfferImageSlider';
import Image from 'next/image';
import m2 from '@/app/asset/m2.svg';
import sea from '@/app/asset/sea.svg';
import balcony from '@/app/asset/balcony.svg';
import bed from '@/app/asset/bed.svg';
import kingBed from '@/app/asset/king-bed.svg';
import Link from 'next/link';

function RoomBookingCard() {
    return (
        <>
            <div className='mt-8'>
                <div className='flex border border-1 border-border-secondary rounded-2xl flex-wrap lg:flex-nowrap'>
                    <div className='lg:max-w-[460px] xl:max-w-[575px] max-w-full w-full'>
                        <OfferImageSlider className="!rounded-none" />
                    </div>
                    <div className='w-full'>
                        <div className='flex gap-4 flex-wrap justify-between w-full border-b-border-secondary border border-t-0 border-r-0 border-l-0 md:px-7 px-4'>
                            <h3 className='text-xl font-semibold text-primary-text md:py-7 pt-4'>Deluxe Ocean View Room</h3>
                            <h3 className='text-xl font-semibold md:py-7 text-primary-bg pb-4'>From 10,000 LKR</h3>
                        </div>
                        <div className='md:px-7 px-4 py-5'>
                            <p className='text-lg text-secondary-text'>Deluxe rooms boast an enviable position within our Tangalle beach resort, with views of the Indian Ocean from multiple vantage points. Let the fresh ocean breeze cool you through open glass doors. Unwin</p>
                            <div className='md:mt-12 mt-6'>
                                <h6 className='text-lg text-primary-text font-semibold'>Features</h6>
                                <div className='mt-4 flex gap-8 flex-wrap xl:flex-nowrap justify-between'>
                                    <div className='flex flex-col md:gap-11 gap-8 w-full'>
                                        <div className='grid md:grid-cols-3 grid-cols-2 w-full gap-12'>
                                            <div className='flex items-center gap-2.5'>
                                                <Image src={m2} className='w-8 h-8' alt='feature' />
                                                <p className='text-secondary-text text-lg'>60m2</p>
                                            </div>
                                            <div className='flex items-center gap-2.5'>
                                                <Image src={sea} className='w-8 h-8' alt='feature' />
                                                <p className='text-secondary-text text-lg'>Sea Facing</p>
                                            </div>
                                            <div className='flex items-center gap-2.5'>
                                                <Image src={balcony} className='w-8 h-8' alt='feature' />
                                                <p className='text-secondary-text text-lg'>Balcony</p>
                                            </div>
                                            <div className='flex items-center gap-2.5'>
                                                <Image src={bed} className='w-8 h-8' alt='feature' />
                                                <p className='text-secondary-text text-lg'>King Bed</p>
                                            </div>
                                            <div className='flex items-center gap-2.5'>
                                                <Image src={kingBed} className='w-8 h-8' alt='feature' />
                                                <p className='text-secondary-text text-lg'>King Bed</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='xl:max-w-48 w-full'>
                                        <Link href='/' className=" block text-main-bg text-center font-medium px-4 py-3 rounded-full bg-primary-bg transition-all delay-300 border-2 border-primary-bg hover:bg-transparent hover:text-primary-bg mb-6">
                                            Book Now
                                        </Link>
                                        <Link href='/' className="mt-4 block text-primary-bg text-center font-medium px-4 py-3 rounded-full bg-transparent transition-all delay-300 border-2 border-primary-bg hover:bg-primary-bg hover:text-white mb-6">
                                            View Room Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RoomBookingCard
