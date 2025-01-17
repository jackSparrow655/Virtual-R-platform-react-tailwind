import React from 'react'
import HighlightedText from './HighlightedText'

const FeatureComponents = ({item}) => {
  return (
    <div className='flex gap-4  max-w-96 max-h-28 p-2 bg-neutral-900 rounded-md border'>
      <div className='flex items-start justify-center'>
      <item.icon className="text-red-600"/>
      </div>
      <div className='flex flex-col gap-1'>
        <h3 className='text-l md:text-xl font-semibold'>{item.text}</h3>
        <p className='text-xs md:text-sm text-neutral-500'>{item.description}</p>
      </div>
    </div>
  )
}

export default FeatureComponents
