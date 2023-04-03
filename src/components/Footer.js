import React from 'react';
import "../styles/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import{
    faBehance,
    faGithub,
    faLinkedin,
    faInstagram,
    faSpotify
} from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (
    <div className = "footer">
        
        <div className socialMedia> 
            <h3 className ="social-title">Let's Connect!</h3>
            <h4 className ="social-sub">Get in touch for opportunities or just say hi!</h4>
            <a href = "https://www.behance.net/saumyatiwari10"
            className = "behance social">
            <FontAwesomeIcon icon ={faBehance} size= "2x" />
            </a>

            <a href = "https://www.instagram.com/artsychokee/"
            className = "instagram social">
            <FontAwesomeIcon icon ={faInstagram} size= "2x" />
            </a>
            
            <a href = "https://www.linkedin.com/in/saumya-tiwari-186baa229/"
            className = "LinkedIn social">
            <FontAwesomeIcon icon ={faLinkedin} size= "2x" />
            </a>

            <a href = "https://github.com/saumyadesigns"
            className = "github social">
            <FontAwesomeIcon icon ={faGithub} size= "2x" />
            </a>

            <a href = "https://spotify.link/p628B4mcHyb"
            className = "spotify social">
            <FontAwesomeIcon icon ={faSpotify} size= "2x" />
            </a>
            
        </div>
        <p> &copy; 2023 saumyadesigns.github.io </p>
    </div>
  )
}

export default Footer