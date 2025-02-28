import React from 'react'
import LeftHeading from '../heading/LeftHeading'
import PackagesInclude from './PackagesInclude';
import Link from 'next/link';
import PackageDetail from './PackageDetail';

function Packages() {
    return (
        <>
            <div className="container py-14">
                <LeftHeading title='Packages' />
                <div className='mt-8 border border-border-pink rounded-2xl'>
                    <PackageDetail title='1 Night' price='10,000' unit='LKR' subtitle='/ Night / Couple' />
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
