import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
import Button from '../small-components/Button'
import VideoContainer from '../small-components/VideoContainer'
import HighlightedText from '../small-components/HighlightedText'

const HeroSection = () => {
  return (
    <div className="flex flex-col item-center mt-6 lg:mt-20">
        <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
            Virtual R build tools <HighlightedText>for developpers</HighlightedText>
        </h1>
        <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt, consectetur dolores facilis dolor ducimus dicta quasi, illo ipsum iusto atque ex! Mollitia aperiam cumque nesciunt quaerat numquam officiis molestiae?</p>
        <div className='mx-auto mt-10 flex gap-10'>
            <Button content={"start for free"} isHighlight={true} />
            <Button content={"documentation"} />
        </div>
        <div className='flex mt-10 justify-center gap-5'>
            <VideoContainer videoSource={video1} />
            <VideoContainer videoSource={video2} />
        </div>
    </div>
  )
}

export default HeroSection
