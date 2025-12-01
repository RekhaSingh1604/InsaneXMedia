import React from 'react'
import '../style/Services.css'
import { GrInstagram } from "react-icons/gr";
import { TiTick } from "react-icons/ti";
import { IoMdVideocam } from "react-icons/io";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';

const Services = () => {
   useEffect(() => {
            AOS.init({ duration: 1000, once: true }); 
          }, []);
  return (
   <section className='main_section'>
    <div className='heading'>
      <h1 data-aos="fade-up">Compreshensive Digital Solution</h1>
      <p data-aos="fade-up" data-aos-delay="200">From social media management to website development, we provide end-to-end digital solutions that help your brand thrive in the digital landscape.</p>
    </div>

    <div className='services_box_display'>
      <p className='box_services' data-aos="flip-right">
        <p style={{color:'pink',fontSize:"2.3rem"}}><GrInstagram /></p>
        <p style={{fontWeight:'700', color:'white', fontSize:'2rem'}}>Socail Media Management & Marketing</p>
        <p style={{color:'#9CA3af',fontSize:'29px',marginBottom:'20px'}}>Comperhensive socila media strategy and management acrooss all platform to grow your presence and engage your audience.</p>
        <a style={{color:'greenyellow',fontSize:'2rem',marginBottom:'30px'}}>Starting from $500/month</a>
        <p style={{color:'#fff',fontWeight:'500',marginTop:'20px',marginBottom:'30px'}}>What's Include:</p>
        <p><TiTick color='green'/> Content Strategy & planing</p>
        <p><TiTick color='green'/> Daily Post Mangement</p>
        <p><TiTick color='green'/> Hashtag Research & Optimization</p>
        <p><TiTick color='green'/> Analytics & Performance Reports</p>

      </p>

        <p className='box_services' data-aos="flip-right" data-aos-delay="200">
        <p style={{color:'pink',fontSize:"2.3rem"}}><IoMdVideocam /></p>
        <p style={{fontWeight:'700', color:'white', fontSize:'2rem',marginBottom:'30px'}}>Video Editing  & Produnction</p>
        <p style={{color:'#9CA3af',fontSize:'29px',marginBottom:'20px',marginTop:'30px',fontWeight:'300'}}>Comperhensive socila media strategy and management acrooss all platform to grow your presence and engage your audience.</p>
        <a style={{color:'greenyellow',fontSize:'2rem',marginBottom:'30px'}}>Starting from $500/month</a>
        <p style={{color:'#fff',fontWeight:'500',marginTop:'20px',marginBottom:'30px'}}>What's Include:</p>
        <p><TiTick color='green'/> Content Strategy & planing</p>
        <p><TiTick color='green'/> Daily Post Mangement</p>
        <p><TiTick color='green'/> Hashtag Research & Optimization</p>
        <p><TiTick color='green'/> Analytics & Performance Reports</p>

      </p>

        <p className='box_services' data-aos="flip-right" data-aos-delay="600">
        <p style={{color:'pink',fontSize:"2.3rem"}}><GrInstagram /></p>
        <p style={{fontWeight:'700', color:'white', fontSize:'2rem',marginBottom:'30px'}}>Graphic Design</p>
        <p style={{color:'#9CA3af',fontSize:'29px',marginBottom:'20px'}}>Creative graphic design solutions including logos, branding materials, social media graphics, and marketing collateral</p>
        <a style={{color:'greenyellow',fontSize:'2rem',marginBottom:'30px'}}>Starting from $500/month</a>
        <p style={{color:'#fff',fontWeight:'500',marginTop:'20px',marginBottom:'30px'}}>What's Include:</p>
        <p><TiTick color='green'/> Content Strategy & planing</p>
        <p><TiTick color='green'/> Daily Post Mangement</p>
        <p><TiTick color='green'/> Hashtag Research & Optimization</p>
        <p><TiTick color='green'/> Analytics & Performance Reports</p>

      </p>


      
    </div>

   </section>
  )
}

export default Services
