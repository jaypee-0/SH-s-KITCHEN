import React from 'react'
import './Footer.scss'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div id="footer" className="mt-5 pb-4">
      <div className="container borderX py-4 d-flex flex-column justify-content-center flex-md-row">        
          <div className="sh-kitchen display-muted col-10 col-md-3">
            SH's KITCHEN
          </div>
          <div className="col-10 col-md-3 ">
            <h3>Contact Us</h3>
            <p>Call: (234) 703-940-4944</p>
            <p>shkitchen@gmail.com</p>
            <p>Address: Somewhere in the sky</p>
            <p>Planet Earth, Solar System</p>
          </div>             
          <div className="col-10 col-md-3 ">
            <h3>Terms</h3>
            <p>Privacy Policy</p>
            <p>Terms & Condition</p>
          </div>
          <div className="col-10 col-md-3 ">
            <h3>Subscribe to our newsletter</h3>  
            <form>
              <input type="text"  placeholder="Enter your email address" /><FA icon="fa-paper-plane" />
            </form>
          </div>             
      </div>      
      <div className='hr container'>
        <h5>2022&copy; <span className='yellowColor'>SH's Kitchen.</span> All Rights Reserved</h5>
      </div>
    </div>
  )
}

export default Footer