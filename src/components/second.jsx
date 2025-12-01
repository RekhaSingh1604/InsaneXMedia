import React from 'react'
import '../style/second.css'
import { MdOutlineStarRate } from "react-icons/md";
import One from '../assets/one.jpg'
import Two from '../assets/two.jpg'
import Eight from '../assets/eight.jpg'
import Seven from '../assets/seven.jpg'
import Six from '../assets/six.jpg'
import Five from '../assets/five.jpg'
import Four from '../assets/four.jpg'
import Thrre from '../assets/thrre.jpg'
const second = () => {
  return (
   <main className='main_container'>
    <div className='display_container'>
        <h1>Transform Your Digital Presence</h1>
        <p>MAKE YOUR BRAND UNFORGETTABLE</p>

    <div className='Sec_button'>
        <button>Socail media</button>
        <button>Video Editing</button>
        <button>Grapic design</button>
        <button>Web Development</button>
      <button style={{width:'260px'}}>Personal Banding</button>
    </div>

    <div className='project'>
        <button style={{height:'8vh', fontSize:"23px"}}>Start Your Project</button>
    </div>

{/* project 500+ */}
{/* <div className='button_project'> */}
<div className='button50'>
    <button className='button_project_sec'>
        <p style={{marginTop:'32px'}}><MdOutlineStarRate /></p>
        <div className='text'>
        <h1>500+ project</h1>
        <p>Successfully Deliverd</p>
        </div>
    </button>


         <button className='button_project_sec'>
        <p style={{marginTop:'32px'}}><MdOutlineStarRate /></p>
        <div className='text'>
            <h1>98+ satisfication</h1>
            <p>Client success rated</p>
        </div>
        </button>
</div>

<div className='deliverd'>
    <p className='delived_block'>
        <p style={{color:'white',marginBottom:'0px'}}>500+</p>
        <p style={{fontSize:'28px', marginTop:'0px',fontWeight:'400'}}>Project Delivered</p>
    </p>

     <p className='delived_block'>
        <p style={{color:'white',marginBottom:'0px'}} >500+</p>
        <p style={{fontSize:'28px', marginTop:'0px',fontWeight:'400'}}>Project Delivered</p>
    </p>

     <p className='delived_block'>
        <p style={{color:'white',marginBottom:'0px',fontSize:'32px',transition:'3s'}}>98%</p>
        <p  style={{fontSize:'28px', marginTop:'0px', fontWeight:'400'}}>Client Satisfcation</p>
    </p>
</div>

    </div>



    {/* right side*/}
    <div className='righ_side_box'>
  <div className="marquee">
    <div className="marquee-track">
      <img style={{width:'8vw',height:'16vh', objectFit:'cover'}} src={One} alt="one"/>
      <img style={{width:'8vw',height:'16vh', objectFit:'cover'}} src={Thrre} alt="thrre"/>
      <img style={{width:'8vw',height:'16vh', objectFit:'cover'}} src={Two} alt="two"/>
      <img style={{width:'8vw',height:'16vh', objectFit:'cover'}} src={Four} alt="four"/>
      <img style={{width:'8vw',height:'16vh', objectFit:'cover'}} src={Five} alt="five"/>
      <img style={{width:'8vw',height:'16vh', objectFit:'cover'}} src={Six} alt="six"/>
      <img style={{width:'8vw',height:'16vh', objectFit:'cover'}} src={Seven} alt="seven"/>
      <img style={{width:'8vw',height:'16vh', objectFit:'cover'}} src={Eight} alt="eight"/>

      <img style={{width:'8vw',height:'16vh', objectFit:'cover'}} src={One} alt="one"/>
      <img style={{width:'8vw',height:'16vh', objectFit:'cover'}} src={Thrre} alt="thrre"/>
      <img  style={{width:'8vw',height:'16vh', objectFit:'cover'}} src={Two} alt="two"/>
      <img style={{width:'8vw',height:'16vh', objectFit:'cover'}} src={Four} alt="four"/>
      <img style={{width:'8vw',height:'16vh', objectFit:'cover'}} src={Five} alt="five"/>
      <img style={{width:'8vw',height:'16vh', objectFit:'cover'}} src={Six} alt="six"/>
      <img style={{width:'8vw',height:'16vh', objectFit:'cover'}} src={Seven} alt="seven"/>
      <img style={{width:'8vw',height:'16vh', objectFit:'cover'}} src={Eight} alt="eight"/>
    </div>
  </div>

  <div className='creator'>
    <h1><span>100+</span> Happy Creators</h1>
  </div>

  <div className="marquee2">
    <div className="marquee-track reverse">
      <img style={{width:'8vw',height:'16vh', objectFit:'cover'}} src={One} alt="one"/>
      <img style={{width:'8vw',height:'16vh', objectFit:'cover'}}  src={Thrre} alt="thrre"/>
      <img style={{width:'8vw',height:'16vh', objectFit:'cover'}}src={Two} alt="two"/>
      <img style={{width:'8vw',height:'16vh', objectFit:'cover'}} src={Four} alt="four"/>
      <img style={{width:'8vw',height:'16vh', objectFit:'cover'}} src={Five} alt="five"/>
      <img style={{width:'8vw',height:'16vh', objectFit:'cover'}}src={Six} alt="six"/>
      <img style={{width:'8vw',height:'16vh', objectFit:'cover'}} src={Seven} alt="seven"/>
      <img style={{width:'8vw',height:'16vh', objectFit:'cover'}} src={Eight} alt="eight"/>

      <img style={{width:'8vw',height:'16vh', objectFit:'cover'}} src={One} alt="one"/>
      <img style={{width:'8vw',height:'16vh', objectFit:'cover'}} src={Thrre} alt="thrre"/>
      <img style={{width:'8vw',height:'16vh', objectFit:'cover'}} src={Two} alt="two"/>
      <img style={{width:'8vw',height:'16vh', objectFit:'cover'}} src={Four} alt="four"/>
      <img style={{width:'8vw',height:'16vh', objectFit:'cover'}} src={Five} alt="five"/>
      <img style={{width:'8vw',height:'16vh', objectFit:'cover'}} src={Six} alt="six"/>
      <img style={{width:'8vw',height:'16vh', objectFit:'cover'}} src={Seven} alt="seven"/>
      <img style={{width:'8vw',height:'16vh', objectFit:'cover'}} src={Eight} alt="eight"/>
    </div>
  </div>

</div>

   </main>
  )
}

export default second
