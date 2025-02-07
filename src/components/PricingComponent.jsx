import React from 'react'
import { pricingOptions } from '../constants'
import PricingSmallComponents from '../small-components/PricingSmallComponents'

const PricingComponent = () => {
  return (
    <div className='w-11/12 mx-auto mt-10' id='price'>
    <h1 className='text-3xl sm:text-5xl lg:text-6xl mt-10 mb-4 lg:mt-20 lg:mb-10 md:mb-6 tracking-wide text-center'>Pricing</h1>
      <div className='flex flex-col md:flex-row gap-3 justify-center items-center w-full'>
        {pricingOptions.map((item, index) => (
            <PricingSmallComponents item={item} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default PricingComponent
