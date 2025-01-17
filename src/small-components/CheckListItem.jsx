import React from 'react'
import { CircleCheck } from 'lucide-react';

const CheckListItem = ({item}) => {
  return (
    <div className='flex gap-2 md:gap-5 lg:gap-6 p-2'>
      <div className='text-green-400 ' ><CircleCheck/></div>
      <div className='flex flex-col items-start gap-1'>
        <h3 className='text-[12px] md:text-sm lg:text-xl'>{item.title}</h3>
        <p className='md:text-sm lg:text-[15px] text-neutral-500 text-start' >{item.description}</p>
      </div>
    </div>
  )
}

export default CheckListItem
