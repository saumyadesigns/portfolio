import React from 'react'
import "../styles/About.css"
import self from '../assets/2.png'
import sound from '../assets/scribble.mp3'

function About() {
  function play(){
    new Audio (sound).play()
  }
  
  return (
    
    <div className='abt'>

        <div>
        <img className ="me "src={self} alt="" onClick={play}/>

        </div>
      <h2><a>A little bit about myself. </a></h2>
        <div className='prompt'>
          <p>
            I am Saumya, a second year Computer Science and Design 
            Engineering student at Indraprastha Institute of Information Technology.<br></br>
            <br></br>
            Always eager to pick up a pencil and a sketchbook since I was three, I now harbour a deep  
            passion for creativity and try my best to express art as an object of critical thinking. 

            I'm constantly learning new things everyday and love meeting people who are motivated and unafraid of
            sharing their ideas with the world. <br></br>
            <br></br>
            Most of my knowledge in design is self-taught, which I believe to be one of my
            best traits, the ability to be completely independent in my learnings and work ethic. 

            When it comes to UI/UX,I am very much a big-picture thinker and enjoy working on products end to end, from ideation all the way 
            to development. I am trying my hand at creating evocative artwork through Processing and Arduino through coursework. 
            <br></br>
            <br></br>
            And although all such new journeys seem extremely daunting, I hope to live through them vicariously.
          </p>
        </div>
    </div>
  )
}

export default About