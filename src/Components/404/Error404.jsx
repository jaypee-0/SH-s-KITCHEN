import React from 'react'
import './Error404.scss'
import { Link } from 'react-router-dom'
import spilledCoffee from './image/spilledCoffee.png'

const Error404 = () => {
  return (
    <div id='error' className='vh-100 justify-content-center align-items-center container d-flex flex-column'>
        <img className='' src={spilledCoffee} alt="" />
        <h2 className='my-3'>404 ERROR</h2>
        <h5 className='mb-5 text-center'>Whatever you're looking for is not here</h5>
        <Link to='/'>        
        <div className='px-4 py-3 button'>BACK TO HOME</div>
        </Link>
    </div>
  )
}

export default Error404