import React from 'react'
import '../style/Six.css'
import logo from '../assets/ixm.png'

// Correct icon imports ✅
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Six = () => {
  return (
    <main className='fotter'>
      {/* Newsletter Section */}
      {/* <hr />
      <div className='display_fotter'>
        <h1>Stay Ahead of the Curve</h1>
        <p>
          Get exclusive insights, brand strategies, and growth tips delivered to your inbox weekly.
        </p>
        <input 
          type="email" 
          placeholder="Enter your Email" 
          className="input_fotter"
        />
      </div>
      <hr /> */}

      {/* Main Footer */}
      <footer className="footer">
        <div className="footer-container">

          {/* Left Side */}
          <div className="footer-left">
            <img src={logo} alt="logo" className="footer-logo" />
            <p className="footer-text">
              insaneXmedia is a dynamic digital agency dedicated to elevating brands 
              through creative, passion-driven digital solutions. 
              We specialize in social media marketing, personal branding, 
              video editing, graphic design, and web development.
            </p>

            <div className="footer-socials">
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaFacebook /></a>
            </div>
          </div>

          {/* Middle Section */}
          <div className="footer-services">
            <h3 style={{marginBottom:'40px',marginLeft:'30px'}}>Services</h3>
            <ul style={{marginLeft:'40px', fontSize:'23px'}}>
              <li >Social Media Management & Marketing</li>
              <li>Video Editing & Production</li>
              <li>Graphic Design</li>
              <li>Website Design & Development</li>
              <li>Personal Branding</li>
              <li>Digital Strategy & Consulting</li>
            </ul>
          </div>

          {/* Right Side */}
          <div className="footer-contact">
            <h3>Get In Touch</h3>
            <p><MdEmail /> info@insaneXmedia.com</p>
            <p><MdPhone /> +91 8252140091</p>
            <p><MdLocationOn /> Los Angeles, CA</p>

            <button className="footer-btn">Start Your Project</button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2025 insaneXmedia. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default Six
