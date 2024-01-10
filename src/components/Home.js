import React from 'react'
import './Home.css';
import MovieCoursel from "./MovieCoursel";
import first from './images/111.jpeg';
import second from './images/222.jpeg';
import third from './images/333.jpeg';
import fourth from './images/444.jpeg';
import fifth from './images/555.jpeg';
import sixth from './images/666.jpg';

function Home() {
  return (
    <>
     <div class="home1">
      <div class="home-img">
      <div>
        <p class="header1">ACTION</p>
        <h4 class="hero">Hero</h4>
      </div>
      </div>  
     </div>
     <div class="home2">
       <div><h2>ABOUT ME</h2></div>
       <div><p class="para1">My name is  Antony aka Bob Antony. I weigh 185 lbs and stand 6 
       feet 3 inches tall. I have a bachelor’s degree in English Literature and a master degree
        in Human Resources Management from the University of Texas, US.I was the captain of the
         university volleyball team, and athletic teams.<a href='#' class="anchor1">Read more</a></p></div>
     </div>
     <MovieCoursel/>
     <div class="home3">
       <p>22 FEB 1966</p>
       <h4>BORN IN NEW YORK, US</h4>
       <p>Babu Antony was born in New york, of US, as the son of Mr.T.J Antony and Mariy Antony</p>
     </div>
     <div class="home4">
       <div>
         <p>New FILM</p>
         <h4>LATEST TRAILERS</h4>
       </div>
       <div class="film">
         <div>
          <img src={first} alt="Girl in a jacket" width="300" height="350"></img>
          <p>X-men First Class</p>
         </div>
         <div>
          <img src={second} alt="Girl in a jacket" width="300" height="350"   ></img>
          <p>X2 United</p>
         </div>
         <div>
          <img src={third} alt="Girl in a jacket" width="300" height="350"></img>
          <p>X-men Origins</p>
         </div>
         <div>
          <img src={fourth} alt="Girl in a jacket" width="300" height="350"></img>
          <p>X-men Apocalips</p>
         </div>
         <div>
          <img src={fifth} alt="Girl in a jacket" width="300" height="350"></img>
          <p>X-men days of future past</p>
         </div>
         <div>
          <img src={sixth} alt="Girl in a jacket" width="300" height="350"></img>
          <p>X-men future of</p>
         </div>
       </div>
     </div>
     <div class="home5">
      <p>ANTONY</p>
      <h4>SCHOOL OF MARTIAL ARTS USA</h4>
      <p>What everybody ought to know about taking the martial arts… Martial arts classes and training can be one of the best experiences you can have for yourself, your child, or that your family can enjoy together. What can make the martial arts so special is that they’re about more than just learning self-defense and fighting skills. The Confidence, Self-discipline, and the Control you or your child will develop from good Martial Arts collapseses, can last for a lifetime.</p>
     </div>
     <div class="home6">
       <div><h4>ANTONY FAMILY</h4></div>
       <div class="family-img-para">
        <div class="family-para"><p>In December 2014, he began dating Swedish actress Alicia Vikander, with whom he had worked on the film The Light Between Oceans. They married in a private ceremony in Ibiza on 14 October 2017. They later moved to Portugal, where they reside in Lisbon. They have a son, born in 2021.</p></div>
        <div class="img2"></div>
       </div>
     </div>
    </>
  )
}

export default Home