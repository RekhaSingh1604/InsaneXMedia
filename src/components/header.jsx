import React from 'react'
import '../style/header.css'
import ixm from '../assets/ixm.png'
// import About from './About'
import { Link } from 'react-router-dom'
const header = () => {
  return (
    <div className='hello'>
    <section className='header' style={{paddingTop:'10px'}}>
        <div className='top_header'>
            <img src={ixm} alt=''/>
            <div className='tag'>
                <a>Home</a>
                <a><Link  to="/about" style={{fontWeight:'700',color:'grey', textDecoration:'none'}}>About us</Link></a>
                <a><Link  to="/contact" style={{fontWeight:'700',color:'grey', textDecoration:'none'}}>Contact</Link></a>
                <a><Link  to="/services" style={{fontWeight:'700',color:'grey', textDecoration:'none'}}>Services</Link></a>
            </div>

        <button className="codepen-button"><span>Get Started</span></button>
        </div>

    </section>
    </div>
  )
}

export default header
