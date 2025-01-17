import React from 'react'

const HighlightedText = (props) => {
  return (
    <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>
      {props.children}
    </span>
  )
}

export default HighlightedText
