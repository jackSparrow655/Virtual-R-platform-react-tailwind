import React from 'react'
import { CircleCheck } from 'lucide-react';
import Button from './Button';
import HighlightedText from './HighlightedText';

const PricingSmallComponents = ({item}) => {
  return (
    <div className='box-border p-5 w-[250px] flex flex-col gap-2 border rounded-md border-neutral-500'>
      <h2 className='text-xl tracking-wide'>{item.title} <span className='text-xs'>{item.title == "Pro" &&  <HighlightedText>(Most Populer)</HighlightedText>}</span></h2>
      <h2 className='text-2xl'>{item.price} <sub className='text-sm text-neutral-500'>/month</sub> </h2>
      <div className='flex flex-col gap-3'>
        {item.features.map((el, index) => (
            <div key={index} className='flex gap-2'>
                <CircleCheck className='size-5' />
                <p className='text-[13px]'>{el}</p>
            </div>
        ))}
      </div>
      <Button content={"Subscribe"} isHighlight={false} changingColor={true} />
    </div>
  )
}

export default PricingSmallComponents
