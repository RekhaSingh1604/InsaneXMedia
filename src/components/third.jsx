import React from 'react'
import '../style/third.css'
import One from '../assets/one.jpg'
import Two from '../assets/two.jpg'
import Thrre from '../assets/thrre.jpg'
import Four from '../assets/four.jpg'
import Five from '../assets/five.jpg'
import Six from '../assets/six.jpg'
import Seven from '../assets/seven.jpg'
import Eight from '../assets/eight.jpg'
import { FaSearch } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Third = () => {

    useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // duration = animation speed
  }, []);

  return (
    <div className='third_container'>
      <div className='card_container'>
        <h1>Trusted by Leading Brands</h1>
        <p>We've helped these brands achieve their digital goals</p>
      </div>



      {/* <div className='marquee3'>
        <marquee>
          <img style={{ width: '20vw', height: '25vh', objectFit: 'cover', marginRight: '20px' ,borderRadius:'20px'}} src={One} alt='one' />
          <img style={{ width: '20vw', height: '25vh', objectFit: 'cover', marginRight: '20px',borderRadius:'20px' }} src={Five} alt='one' />
          <img style={{ width: '20vw', height: '25vh', objectFit: 'cover', marginRight: '20px',borderRadius:'20px' }} src={Thrre} alt='one' />
          <img style={{ width: '20vw', height: '25vh', objectFit: 'cover', marginRight: '20px',borderRadius:'20px' }} src={Two} alt='two' />
          <img style={{ width: '20vw', height: '25vh', objectFit: 'cover', marginRight: '20px',borderRadius:'20px' }} src={Four} alt='one' />
          <img style={{ width: '20vw', height: '25vh', objectFit: 'cover', marginRight: '20px',borderRadius:'20px' }} src={Five} alt='one' />
          <img style={{ width: '20vw', he5ght: '25vh', objectFit: 'cover', marginRight: '20px',borderRadius:'20px' }} src={Six} alt='one' />
          <img style={{ width: '20vw', height: '25vh', objectFit: 'cover', marginRight: '20px',borderRadius:'20px' }} src={Seven} alt='one' />
          <img style={{ width: '20vw', height: '25vh', objectFit: 'cover', marginRight: '20px',borderRadius:'20px' }} src={Eight} alt='one' />
          <img style={{ width: '20vw', height: '25vh', objectFit: 'cover', marginRight: '20px' ,borderRadius:'20px'}} src={One} alt='one' />
          <img style={{ width: '20vw', height: '25vh', objectFit: 'cover', marginRight: '20px',borderRadius:'20px' }} src={Five} alt='one' />
          <img style={{ width: '20vw', height: '25vh', objectFit: 'cover', marginRight: '20px',borderRadius:'20px' }} src={Thrre} alt='one' />
          <img style={{ width: '20vw', height: '25vh', objectFit: 'cover', marginRight: '20px',borderRadius:'20px' }} src={Two} alt='two' />
         
        </marquee>
      </div> */}
  <div className="marquee3">
  <div className="marquee-track">
    <img src={One} alt="one" />
    <img src={Five} alt="five" />
    <img src={Thrre} alt="thrre" />
    <img src={Two} alt="two" />
    <img src={Four} alt="four" />
    <img src={Six} alt="six" />
    <img src={Seven} alt="seven" />
    <img src={Eight} alt="eight" />

    {/* Duplicate images for infinite loop effect */}
    <img src={One} alt="one" />
    <img src={Five} alt="five" />
    <img src={Thrre} alt="thrre" />
    <img src={Two} alt="two" />
    <img src={Four} alt="four" />
    <img src={Six} alt="six" />
    <img src={Seven} alt="seven" />
    <img src={Eight} alt="eight" />
  </div>
</div>


      <div className='work'>
        <h1>How we work</h1>
        <p>Our proven 3-step process ensures your marketing campaigns are strategic, creative, and results-driven. We transform your digital presence through creativity, innovation, and strategic excellence.</p>
      </div>

      <div className='box_display'>
        <main className='display' data-aos="fade-up">
          <p className='display_icon_text'>
            <p style={{fontSize:'43px', color:'grey',fontWeight:'600'}}>01</p>
            <p><FaSearch /></p>
          </p>

          <p>Research & Strategy</p>
          <p style={{fontSize:'22px',marginTop:'0px',color:'grey'}}>We analyze your market, competitors, and audience
            to create a data-driven marketing strategy that 
            aligns with your business goals.</p>
        </main>


         <main className='display'  data-aos="fade-up" data-aos-delay="200">
          <p className='display_icon_text'>
            <p style={{fontSize:'43px', color:'grey',fontWeight:'600'}}>01</p>
            <p><FaSearch /></p>
          </p>

          <p>Research & Strategy</p>
          <p style={{fontSize:'22px',marginTop:'0px',color:'grey'}}>We analyze your market, competitors, and audience
            to create a data-driven marketing strategy that 
            aligns with your business goals.</p>
        </main>

         <main className='display' data-aos="fade-up" data-aos-delay="400">
          <p className='display_icon_text'>
            <p style={{fontSize:'43px', color:'grey',fontWeight:'600'}}>01</p>
            <p><FaSearch /></p>
          </p>

          <p>Research & Strategy</p>
          <p style={{fontSize:'22px',marginTop:'0px',color:'grey'}}>We analyze your market, competitors, and audience
            to create a data-driven marketing strategy that 
            aligns with your business goals.</p>
        </main>
      </div>
    </div>
  )
}

export default Third

// import React, { useEffect } from 'react';
// import '../style/third.css';
// import One from '../assets/one.jpg';
// import Two from '../assets/two.jpg';
// import Thrre from '../assets/thrre.jpg';
// import Four from '../assets/four.jpg';
// import Five from '../assets/five.jpg';
// import Six from '../assets/six.jpg';
// import Seven from '../assets/seven.jpg';
// import Eight from '../assets/eight.jpg';
// import { FaSearch } from "react-icons/fa";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Third = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true }); // 1s animation, run once
//   }, []);

//   return (
//     <div className='third_container'>
//       {/* Section Heading */}
//       <div className='card_container' data-aos="fade-up">
//         <h1>Trusted by Leading Brands</h1>
//         <p>We've helped these brands achieve their digital goals</p>
//       </div>

//       {/* Marquee / Slider */}
//       <div className="marquee3" data-aos="fade-up" data-aos-delay="200">
//         <div className="marquee-track">
//           {[One, Five, Thrre, Two, Four, Six, Seven, Eight, One, Five, Thrre, Two, Four, Six, Seven, Eight].map((img, idx) => (
//             <img key={idx} src={img} alt={`img-${idx}`} />
//           ))}
//         </div>
//       </div>

//       {/* How we work section */}
//       <div className='work' data-aos="fade-up" data-aos-delay="300">
//         <h1>How we work</h1>
//         <p>
//           Our proven 3-step process ensures your marketing campaigns are strategic, creative, and results-driven. 
//           We transform your digital presence through creativity, innovation, and strategic excellence.
//         </p>
//       </div>

//       {/* Boxes */}
//       <div className='box_display'>
//         {[1,2,3].map((i) => (
//           <main className='display' key={i} data-aos="fade-up" data-aos-delay={i*200}>
//             <div className='display_icon_text'>
//               <p style={{fontSize:'43px', color:'grey', fontWeight:'600'}}>
//                 0{i}
//               </p>
//               <p><FaSearch /></p>
//             </div>

//             <p>Research & Strategy</p>
//             <p style={{fontSize:'22px',marginTop:'0px',color:'grey'}}>
//               We analyze your market, competitors, and audience
//               to create a data-driven marketing strategy that 
//               aligns with your business goals.
//             </p>
//           </main>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Third;
