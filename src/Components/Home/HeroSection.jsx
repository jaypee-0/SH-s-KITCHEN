import React from 'react'
import '../Home/HeroSection.scss'
import Button from '../Button/Button'
import png from './images/hero.png'

const HeroSection = () => {
  return (
    <div id='homeHero'>
      <div className='container d-flex flex-column-reverse flex-md-row py-4'>
        <div className="col-12 col-md-6 justify-content-center d-flex flex-column">
          <span className='pb-5'>
          <Button buttonStyle="btn--outline">Food dey for you</Button>
          </span>
          <h2 className='py-3'>Welcome to <span className='yellowColor'>SH's </span> Kitchen, we are thrilled to serve you</h2>
          <p>Need food and a good place to eat? Welcome to our humble place where you can eat good food peacefully.</p>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img className='d-none d-sm-block heroImage' src={png} alt="heroImage" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection;