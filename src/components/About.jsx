import React from 'react'
import logo from '../assets/hosting.jpg';
import { IoMdLock } from "react-icons/io";
import '../style/About.css';
import aboutImg from '../assets/bout.png';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';


const About = () => {
  useEffect(() => {
          AOS.init({ duration: 1000, once: true }); 
        }, []);
  return (
    <>
      <section className='main_conatiner'>
        <div className='display_About'>
          <div className='left_box'>
            <h1  data-aos="fade-right">insanexmedia.com</h1>
            <p className='domain' data-aos="fade-right" data-aos-delay="200">Your domain is expired. Renew the domain to <br/>activate the website</p>
            <p className='website' data-aos="fade-right" data-aos-delay="600">Website content is unavailable due to the fact that domain has expired. Renew your domain in order to see your website online.</p>
            <p style={{color:'rgb(39, 39, 75)', fontSize:'2.5rem', fontWeight:'bold'}}>What's next?</p>

            <div className='box_About_display'>
              <div className='width_About  data-aos="fade-right" data-aos-delay="200"'>
                <p style={{color:'rgb(39,39,75)',fontSize:'25px', fontWeight:'bold'}}>Save Your Domain</p>
                <p style={{color:'gray', fontSize:'26px'}}>Don't lose your domain. Log in to your Hostinger account to renew your domain.</p>
                <a className='link_about' href='#'>Renew now</a>
              </div>

              <div className='width_About' data-aos="fade-right" data-aos-delay="400">
                <p style={{color:'rgb(39,39,75)',fontSize:'25px', fontWeight:'bold'}}>Get a new domain starting from $0.99</p>
                <p style={{color:'gray', fontSize:'27px'}}>Use our domain checker tool to find the perfect name for your online project.</p>
                <a className='link_about' href='#'>Get new Domain</a>
              </div>
            </div>
          </div>

          <div className='right_box'>
            <img  data-aos="fade-up" data-aos-delay='200' src={aboutImg} alt='about'/>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;
