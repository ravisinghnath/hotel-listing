import React from 'react'

function LeftHeading(props) {
  return (
    <div>
      <h2 className='lg:text-3xl text-xl font-semibold text-primary-text'>{props.title}</h2>
    </div>
  )
}

export default LeftHeading
