import React from 'react'
import {testimonials} from '../constants'
import ReviewComponents from '../small-components/ReviewComponents'

const ReviewSection = () => {
  return (
    <div className='w-9/12 mx-auto flex flex-col' id='review'>
      <h1 className='text-4xl md:text-5xl lg:text-6xl text-center my-5 md:my-10 lg:my-20 '>What People Are Saying</h1>
      <div className='flex flex-row flex-wrap justify-center gap-5'>
        {
            testimonials.map((item, index) => (
                <ReviewComponents item={item} key={index}/>
            ))
        }
      </div>
    </div>
  )
}

export default ReviewSection
