import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./contact.scss";
import FAQ from '../FAQ/FAQ';

function ContactUs() {
  return (
    <div className='contacts'>
        <div className='leftside'>
            <h1>
                <strong>Want To Contact Us?</strong> 
            </h1>
            <p><CallIcon /> 0728990011
            <br />
            <LocationOnIcon />Jacaranda, Close, Lagos.
            </p>

            <h2> Have any questions for us? Send us a message!</h2>
            <form id="contact-form" method="POST">
                <label htmlFor='name'>Full Name</label>
                <input name="names" placeholder='Enter full name...' type="text" />
                <label htmlFor='email'>Email</label>
                <input name='email' placeholder='Enter email address...' type="email" />
                <label htmlFor='message'>Messages</label>
                <textarea 
                    rows="6"
                    placeholder='Enter message...'
                    name='message'
                    required >
                </textarea>
                <button type='submit'> Send Message</button>
            </form>
      </div>
      
      <div className='rightside'>
          <FAQ />
      </div>
    </div>
  )
}

export default ContactUs