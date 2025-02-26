import React from 'react'
import LeftHeading from '../heading/LeftHeading'
import { FaHeart } from "react-icons/fa";
import PackagesInclude from './PackagesInclude';
import Button from '../button/Button';
import Link from 'next/link';

function Packages() {
    return (
        <>
            <div className="container py-14">
                <LeftHeading title='Packages' />
                <div className='mt-8 border border-border-pink rounded-2xl'>
                    <div className='bg-secondary-bg px-8 py-9 rounded-2xl grid md:grid-cols-2 grid-cols-1  gap-8 flex-wrap'>
                        <div className='md:block flex flex-col md:justify-start justify-center md:items-start items-center'>
                            <LeftHeading title='Cupid’s Getway Package' />
                            <div className='mt-5 px-3 py-2 inline-flex gap-2.5 items-center bg-pink-bg rounded-full'>
                                <span><FaHeart className='text-primary-bg' /></span>
                                <span className='text-primary-bg text-lg font-semibold'>1 Night</span>
                            </div>
                        </div>
                        <div className='flex flex-col md:items-end items-center'>
                            <div className='flex gap-1'>
                                <span className='text-primary-bg text-4xl font-semibold'>10,000</span>
                                <span className='text-sm text-primary-bg font-semibold'>LKR</span>
                            </div>
                            <p className='font-medium'>/ Night / Couple</p>
                        </div>
                    </div>
                    <div className='p-8'>
                        <p className='text-secondary-text'>Deluxe rooms boast an enviable position within our Tangalle beach resort, with views of the Indian Ocean from multiple vantage points. Let the fresh ocean breeze cool you through open glass doors. Unwin Explore the island’s rainforests, pilgrimage sites and fishing ports. Dine cliffside, embark on surf adventures, or retreat to the sanctuary of Anantara Spa with award-winning Ayurvedic</p>
                        <div className='mt-10'>
                            <div>
                                <h5 className='text-lg font-semibold mb-7'>Package Incudes:</h5>
                                <div className='grid lg:grid-cols-3 grid-cols-1 gap-7'>
                                    <PackagesInclude title='Welcome Flower Bouquet' />
                                    <PackagesInclude title='Welcome Flower Bouquet' />
                                </div>
                                <div className='grid lg:grid-cols-3 grid-cols-1 mt-7 gap-7'>
                                    <PackagesInclude title='Half-board Meal Plan' />
                                    <PackagesInclude title='Breakfast-on-Bed' />
                                </div>
                                <div className='grid lg:grid-cols-3 grid-cols-1 mt-7 gap-7'>
                                    <PackagesInclude title='Candle-lit Dinner on the first night' />
                                    <PackagesInclude title='5% Discount on Couples’ Massage' />
                                </div>
                            </div>
                        </div>
                        <div className='mt-14 md:flex justify-end'>
                            <Link href='/' className="md:inline-flex block text-main-bg text-center font-medium px-10 py-3 rounded-full bg-primary-bg transition-all delay-300 border-2 border-primary-bg hover:bg-transparent hover:text-primary-bg mb-6">
                                Check Availability
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Packages
