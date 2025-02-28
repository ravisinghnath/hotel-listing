import React from 'react'
import PackageDetail from './packages/PackageDetail'
import Link from 'next/link'

function BookingForm() {
    return (
        <>
            <div className='container '>
                <div className='border border-border-pink rounded-2xl md:mb-16 mb-11'>
                    <PackageDetail title='1 Night' price='10,000' unit='LKR' subtitle='/ Night / Couple' />
                    <div className='md:p-8 p-6'>
                        <p className='text-secondary-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                        <div className='mt-6'>
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                                <div>
                                    <label htmlFor="Name" className='text-label-color'>Name</label>
                                    <input type="text" className='mt-1.5 w-full form-control border border-input-border p-3 focus:outline-none focus:ring-0 rounded-2xl' placeholder='' />
                                </div>
                                <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                                    <div className=''>
                                        <label htmlFor="Name" className='mb-1.5 text-label-color'>Contact No</label>
                                        <input type="text" className='mt-1.5 w-full form-control border border-input-border p-3 focus:outline-none focus:ring-0 rounded-2xl' placeholder='' />
                                    </div>
                                    <div>
                                        <label htmlFor="Name" className='mb-1.5 text-label-color'>Email</label>
                                        <input type="text" className='mt-1.5 w-full form-control border border-input-border p-3 focus:outline-none focus:ring-0 rounded-2xl' placeholder='' />
                                    </div>
                                </div>
                            </div>
                            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-3.5 gap-5'>
                                <div>
                                    <label htmlFor="Occasion" className='text-label-color'>Occasion</label>
                                    <select className='mt-1.5 text-secondary-text  w-full form-control border border-input-border p-3 focus:outline-none focus:ring-0 rounded-2xl'>
                                        <option value="" className='text-secondary-text'>Occasion</option>
                                        <option value="">Honeymoon</option>
                                        <option value="">Honeymoon</option>
                                        <option value="">Honeymoon</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="Occasion" className='text-label-color'>Request Date</label>
                                    <select className='mt-1.5 text-secondary-text  w-full form-control border border-input-border p-3 focus:outline-none focus:ring-0 rounded-2xl'>
                                        <option value="" className='text-secondary-text'>Date</option>
                                        <option value="">Date</option>
                                        <option value="">Date</option>
                                        <option value="">Date</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="Occasion" className='text-label-color'>Flexibility</label>
                                    <select className='mt-1.5 text-secondary-text  w-full form-control border border-input-border p-3 focus:outline-none focus:ring-0 rounded-2xl'>
                                        <option value="" className='text-secondary-text'>I have a strict date</option>
                                        <option value="">I have a strict date</option>
                                        <option value="">I have a strict date</option>
                                        <option value="">I have a strict date</option>
                                    </select>
                                </div>
                            </div>
                            <div className='grid md:grid-cols-1 lg:grid-cols-2 grid-cols-1 mt-3.5'>
                                <div>
                                    <label htmlFor="Custom Request" className='text-label-color'>Custom Request</label>
                                    <textarea className='mt-1.5 w-full form-control border border-input-border p-3 focus:outline-none focus:ring-0 rounded-2xl' rows={2}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className='mt-11 md:flex justify-end'>
                            <Link href='/' className="md:inline-flex block text-main-bg text-center font-medium px-10 py-3 rounded-full bg-primary-bg transition-all delay-300 border-2 border-primary-bg hover:bg-transparent hover:text-primary-bg mb-6">
                            Submit the Request
                            </Link>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default BookingForm
