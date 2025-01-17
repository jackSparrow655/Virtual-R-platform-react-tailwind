import React from 'react'
import HighlightedText from '../small-components/HighlightedText'
import { features } from '../constants'
import FeatureComponents from '../small-components/FeatureComponents'

const FeatureSection = () => {
  return (
    <div className=' w-11/12 mx-auto relative mt-20 border-b border-neutral-800 h-auto'>
      <div className='text-center'>
        <span className='bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase'>feature</span>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide'>Easily Build <HighlightedText>your code</HighlightedText> </h2>
      </div>
      <div className='flex flex-wrap mt-10 lg:mt-20 gap-3 justify-center'>
        {features.map((item, index) => (
            <FeatureComponents key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

export default FeatureSection
