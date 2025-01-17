import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import CodeSection from './components/CodeSection'
import PricingComponent from './components/PricingComponent'
import ReviewSection from './components/ReviewSection'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection/>
      </div>
      <FeatureSection />
      <CodeSection/>
      <PricingComponent/>
      <ReviewSection/>
    </>
  )
}

export default App
