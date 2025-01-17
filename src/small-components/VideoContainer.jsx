import React from 'react'

const VideoContainer = ({videoSource}) => {
  return (
    <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400'>
        <source src={videoSource} type='video/mp4'/>
        your browser does not support the video tag
    </video>
  )
}

export default VideoContainer
