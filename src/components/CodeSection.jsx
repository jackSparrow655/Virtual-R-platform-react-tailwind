import React from 'react'
import HighlightedText from '../small-components/HighlightedText'
import codeImage from '../assets/code.jpg'
import CheckListItem from '../small-components/CheckListItem'
import { checklistItems } from '../constants'

const CodeSection = () => {
  return (
    <div className='w-[80%] mx-auto text-center' id='workflow'>
      <h1 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 lg:mb-10 md:mb-6 tracking-wide' >Accelerate your <HighlightedText >coding workflow</HighlightedText> </h1>
      <div className='md:flex md:flex-row flex flex-col  md:gap-4'>
        <div className='md:w-1/2 w-full flex items-center p-2'>
            <img className='y-auto md:scale-y-125 lg:scale-y-100' src={codeImage} alt="code image"  />
        </div>
        <div className='md:w-1/2 mt-2 md:mt-4 lg:mt-10 flex flex-col gap-4 md:gap-8 p-3'>
            {checklistItems.map((item, index) => (
                <CheckListItem key={index} item={item} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default CodeSection
