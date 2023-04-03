import React from 'react'
import { useState } from 'react'
import img1 from '../assets/1.png';
import img2 from '../assets/clouds.png'
import sound from '../assets/flip.mp3'


import "../styles/Home.css"


const Home =() => {
  
  function play(){
    new Audio (sound).play()
  }

  return (
    
    <div className ="home" >
      <div>
        <img className ="cir "src={img1} alt=""/>

      </div>
       
      <div>
        <img className ="cl "src={img2} alt="" />
      </div> 
      
       <div className ="about ">

        <h2>Hi,I am <a>Saumya</a></h2>
        <div className='prompt'>
          <p>
            I <a >design</a>, <a>sketch</a> and <a>paint</a>. 
            
          </p>
          
        </div>
        <div className='OogaBooga'>
          <p>
          I'm a product designer based in New Delhi, India aspiring to  
          deliver smooth end-to-end UX/UI design for software products. I'm passionate 
          about improving the lives of others through design and am constantly looking 
          to learn new things everyday.
          </p>
        </div>
       </div>
      
       

       <div className = "Skills">
        <h1> How am I helping my clients? </h1>
        <ol className="list">
          <li className="item">
            <h2><a>With the Best Approach</a>,</h2>
            <span>
              I design with a passion to create the best product and/or service by meticulously
              catering to every need demanded. I generate designs iteratively, presenting multiple
              versions at every stage to have the client on board.
            </span>
          </li>
          <li className="item">
            <h2><a>the Best Tools</a> </h2>
            <span>
              I am proficient in using design tools like Figma, Adobe Illustrator, Adobe InDesign
              and Adobe Xd. 
            </span>
            <span>
              I have also now picked up on the basic essentials of web development to create dynamic sites
              like this one using HTML, CSS and JavaScript libraries like React, Material UI.
            </span>
          </li>
          <li className="item">
            <h2><a>&...  </a></h2>
            <span>I often begin my illustration work with a single hand drawn sketch! 
                  I am proficient in sketching and painting since 12 years!
                  And if nothing else works, I wish some of my song choices can help you 
                  throughout your day better! 
            </span>
          </li>
          </ol>
        
       </div>
          
        
    </div>
  )
}

export default Home