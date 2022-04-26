import React from 'react'
import PopularMenu from '../Components/Products/PopularMenu'
import HeroSection from '../Components/Home/HeroSection'
import HomeServices from '../Components/Home/HomeServices'


const Home = () => {
  return ( 
    <div>
      <HeroSection />
      <HomeServices />
      <PopularMenu />
   
    </div>    
  )
}

export default Home