import React from 'react';
import './Gallery.css';
import img1 from './images/1.jpeg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpeg';
import img4 from './images/4.jpeg';
import img5 from './images/5.webp';
import img6 from './images/6.jpg';

function Gallery() {
  return (
    <>
      <div class="gallery1">
      <div>
        <h3>ANTONY</h3>
        <p class="galleryHeader1">GALLERY</p>
      </div>  
     </div>
     <div class="gallery2">
     <img src={img1} alt="#" width="300" height="350"></img>
     <img src={img2} alt="#" width="300" height="350"></img>
     <img src={img3} alt="#" width="300" height="350"></img>
     <img src={img4} alt="#" width="300" height="350"></img>
     <img src={img5} alt="#" width="300" height="350"></img>
     <img src={img6} alt="#" width="300" height="350"></img>
     </div>
     <div class="button">
      <a href='#'><div>MORE</div></a>
     </div>
    </>
  )
}

export default Gallery