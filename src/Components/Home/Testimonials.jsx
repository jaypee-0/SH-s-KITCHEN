import React from 'react'
import Carousel from 'react-elastic-carousel'
import testimony from './data/testimonials.json'
import './Testimonials.scss'

const Testimonials = () => {
  return (
    <div id="" className='container'>
      <div id="clients">
          <div className="text-center">  
            <h2 className="py-5">What Customers say 😤</h2>   
              <div id="carousel">  
                <Carousel itemsToShow={1} showArrows={false}>
                  {
                    testimony.map((testimony) => {
                      return (
                          <div key={ testimony.id } className="d-flex flex-row">
                            <div className='d-flex'>
                            <div className='col-6 foodimagecol justify-content-end'>
                            <img className="foodimage py-3" src={ testimony.food } alt="" />
                            </div>
                            <div className='col-6 align-self-center'>
                              <div className='d-flex flex-row'>
                            <img className='dpimage' src={ testimony.dp } alt="" />
                                <div className='ms-3 flex-column align-self-center'>
                            <h1>{ testimony.name }</h1>
                            <h5 className='d-flex'>{ testimony.location }</h5>
                                </div>
                              </div>
                              <div className='d-flex w-575 w-md-50'>
                            <cite className='mt-3'>"{ testimony.text }"</cite>

                              </div>
                            </div>
                            </div>
                          </div>
                      )
                    })
                  }
                </Carousel>                 
              </div>                   
          </div>
        </div>
    </div>
  )
}

export default Testimonials