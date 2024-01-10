import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <>
      <div class="footer">
         <div class="quick">
           <h4>QUICK LINKS</h4>
           <a href='#'>About me</a>
           <a href='#'>Filmography</a>
           <a href='#'>Gallery</a>
         </div>
         <div class="quick">
           <h4>CONTACT ME</h4>
           <p>antony@gmail.com</p>
         </div>
         <div class="quick">
           <h4>FOLLOW ME</h4>
           <a href='#'>Youtube</a>
           <a href='#'>Instagram</a>
           <a href='#'>Facebook</a>
         </div>
      </div>
      <div class="footer1">
        <p>© 2023 All Rights Reserved</p>
      </div>
    </>
  )
}

export default Footer