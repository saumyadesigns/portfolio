import React from 'react'
import "../styles/Connect.scss"
import emailjs, { sendForm } from '@emailjs/browser'
import { useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
//import { Form } from 'react-router-dom'

const Connect  = () =>  {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
    <div className="container contact-page">
      <div className="text-zone">
        <h1>
          Connect with me!
        </h1>
        <p>
            I am always interested to pick up freelance work 
            beside my studies to expand my knowledge and experience in 
            the field.
            Don't hesitate to contact me if you have any requests, offers,
            questions, or just wish to drop by!
        </p>
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input placeholder="Name" type="text" name="name" required />
              </li>
              <li className="half">
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  required
                />
              </li>
              <li>
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
          </div>
        </div>
       
      <div className="info-map">
          Saumya Designs,
          <br />
          Delhi,
          <br />
          Old Girls Hostel, IIIT Delhi <br />
          Okhla, New Delhi <br />
          <br />
          <span>saumyatiwari510@gmail.com</span>
      </div>
      
        
      </div>
    </> 
  )  
}

export default Connect