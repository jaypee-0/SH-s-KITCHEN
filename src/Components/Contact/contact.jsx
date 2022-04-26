import React from 'react';
import Contactimg from "../../Assets/contactimg.jpg";
import "./contact.scss";

function contact() {
  return (
    <div className='contacts'>
        <div className='leftside'
        style={{ backgroundImage: `url(${Contactimg})` }}>
    </div>
    <div className='rightside'>
        <div className='top'>
            <h1>
                <strong>Contact Us</strong> 
            </h1>
            <p> 0728990011</p>
        </div>
        <div className='bottom'>
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
    </div>

    </div>
  )
}

export default contact