import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <>
     <div class="contact1">
      <div>
        <p class="contactHeader1">CONTACT ME</p>
      </div>  
     </div>
     <div class="contact3">
      <div>
        <h3>SOCIAL NETWORK</h3>
        <p>FACEBOOK</p>
        <p>TWITTER</p>
        <p>INSTAGRAM</p>         
      </div>
      <div class="inputHanble">
        <h3>WRITE ME</h3>
        <p>YOUR NAME</p>
        <input class="input1"></input>
        <p>YOUR EMAIL</p>
        <input class="input1"></input>
        <p>SUBJECT</p>
        <input class="input1"></input>
        <p>YOUR MESSAGE</p>
        <input class="input2"></input>
        <a href="#"><div>SUBMIT</div></a>
      </div>
     </div>
    </>
  )
}

export default ContactUs