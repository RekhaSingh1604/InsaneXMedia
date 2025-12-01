import React from 'react'
import '../style/four.css'
import { FaRegHeart } from "react-icons/fa";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import { IoIosSettings } from "react-icons/io";
import { RiLoader2Fill } from "react-icons/ri";

const Four = () => {

      useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // duration = animation speed
      }, []);

  return (
    <section className='main_section'>
        <div className='four_container'>
        <h1>Why Choose Us</h1>
        <p>We transform your digital presence through creativity, innovation, and strategic excellence.</p>
        </div>

        {/* display box */}
        <div className='box_four'>
            <div className='box_like' data-aos="fade-up">
                <p style={{color:'greenyellow'}}><FaRegHeart /></p>
                <p style={{color:'white', fontSize:'30px',marginTop:'20px'}}>Passionate Creative Team</p>
                <p style={{marginTop:'20px'}}>Our team brings creativity and passion to every project, ensuring exceptional reasults that exceed expection</p>
            </div>


            <div className='box_like' data-aos="fade-up" data-aos-delay="200">
                <p style={{color:'greenyellow'}}><IoIosSettings /></p>
                <p style={{color:'white', fontSize:'30px',marginTop:'20px'}}>Customized Digital Solution</p>
                <p style={{marginTop:'20px'}}>Our team brings creativity and passion to every project, ensuring exceptional reasults that exceed expection</p>
            </div>

            <div className='box_like'  data-aos="fade-up" data-aos-delay="400">
                <p style={{color:'greenyellow'}}><FaRegHeart /></p>
                <p style={{color:'white', fontSize:'30px',marginTop:'20px'}}>Passionate Creative Team</p>
                <p style={{marginTop:'20px'}}>Our team brings creativity and passion to every project, ensuring exceptional reasults that exceed expection</p>
            </div>

            <div className='box_like'  data-aos="fade-up" data-aos-delay="600">
                <p style={{color:'greenyellow'}}><RiLoader2Fill /></p>
                <p style={{color:'white', fontSize:'30px',marginTop:'20px'}}>Passionate Creative Team</p>
                <p style={{marginTop:'20px'}}>Our team brings creativity and passion to every project, ensuring exceptional reasults that exceed expection</p>
            </div>
        </div>
    </section>
  )
}

export default Four
