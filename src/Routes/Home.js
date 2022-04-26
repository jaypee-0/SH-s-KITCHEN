import React from 'react'
import PopularMenu from '../Components/Products/PopularMenu'
import HeroSection from '../Components/Home/HeroSection'
import HomeServices from '../Components/Home/HomeServices'
import Testimonial from '../Components/Testimonial/Testimonial'

const Home = () => {
  return ( 
    <div>
      <HeroSection />
      <HomeServices />
      <PopularMenu />
      <Testimonial />
    </div>    
  )
}

export default Home