import React from 'react'
import FacilityCard from './FacilityCard'
import facility1 from '@/app/asset/facility1.svg'
import facility2 from '@/app/asset/facility2.svg'
import facility3 from '@/app/asset/facility3.svg'
import Heading from '../heading/Heading'

function facility() {
  return (
    <>
    <div className='container md:py-16 py-8'>
    <Heading heading={"We are not afraid to be “different”"} subheading={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim"} />
    <div className='grid md:grid-cols-3 grid-cols-1 place-items-center md:pt-7 pt-3 gap-16'>
    <FacilityCard image={facility1} title="Handpicked Destinations" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore" />
    <FacilityCard image={facility2} title="Everything is Included" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore" />
    <FacilityCard image={facility3} title="You set the pace" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore" />
    </div>
    </div>
    </>
  )
}

export default facility
