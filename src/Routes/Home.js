import React from 'react'
import PopularMenu from '../Components/Products/PopularMenu'
import HeroSection from '../Components/Home/HeroSection'
import HomeServices from '../Components/Home/HomeServices'
import Testimonials from '../Components/Home/Testimonials'

const Home = () => {
  return ( 
    <div>
      <HeroSection />
      <HomeServices />
      <PopularMenu />
      <Testimonials />
    </div>    
  )
}

export default Home