import React from 'react';
import './Header.css';
function Header() {
  return (
    <>
      <nav class="top-nav">
    <a class="active" href="/">
    <div class="logo">
      <h2 class="logo">ANTONY</h2>
    </div>
    </a>
    <input id="menu-toggle" type="checkbox" />
  <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
      <li><a class="nav-link" href="/">HOME</a></li> 
      <li><a class="nav-link" href="/About">ABOUT ME</a></li>
      <li><a class="nav-link" href="/Filmography">FILMOGRAPHY</a></li>
      <li><a class="nav-link" href="/Gallery">GALLERY</a></li> 
      <li><a class="nav-link" href="/ContactUs">CONTACT US</a></li>
    </ul>
    <div class="menu topings">
     <i class="fa-brands fa-facebook"></i>
     <i class="fa-brands fa-instagram"></i>
     <i class="fa-brands fa-twitter"></i>
     <i class="fa-brands fa-youtube"></i>
    </div>
  </nav>
    </>
  )
}

export default Header