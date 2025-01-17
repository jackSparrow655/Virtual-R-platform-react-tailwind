import React from 'react'

const ReviewComponents = ({item}) => {
  return (
    <div className='box-border w-[350px] flex flex-col gap-2 rounded-md p-3'>
      <div className='text-neutral-400 text-[13px]'>{item.text}</div>
      <div className='flex flex-row'>
        <div className='h-full w-1/6 p-2'>
            <img className='rounded-full' src={item.image} alt="user image" />
        </div>
        <div className='flex flex-col gap-0'>
            <h3 className='text-[15px] text-neutral-200'>{item.user}</h3>
            <h4 className='text-xs text-neutral-500'>{item.company}</h4>
        </div>
      </div>
    </div>
  )
}

export default ReviewComponents
