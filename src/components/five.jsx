import React from 'react'
import '../style/five.css'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import { PiYoutubeLogoFill } from "react-icons/pi";
import { IoColorPaletteSharp } from "react-icons/io5";
import { AiOutlineLaptop } from "react-icons/ai";
import { FaCircleCheck } from "react-icons/fa6";
import  { useState } from "react";
import {
  LineChart,
  Line,
//   BarChart,
  Bar,
//   PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const COLORS = ["#0088FE", "#00C49F", "#FF8042"];
const generateRandomData = () => {
  return [
    { month: "Jan", sales: Math.floor(Math.random() * 5000) },
    { month: "Feb", sales: Math.floor(Math.random() * 5000) },
    { month: "Mar", sales: Math.floor(Math.random() * 5000) },
    { month: "Apr", sales: Math.floor(Math.random() * 5000) },
    { month: "May", sales: Math.floor(Math.random() * 5000) },
  ];
};
const generateRandomBarData = () => {
  return [
    { name: "Product A", qty: Math.floor(Math.random() * 20) },
    { name: "Product B", qty: Math.floor(Math.random() * 20) },
    { name: "Product C", qty: Math.floor(Math.random() * 20) },
    { name: "Product D", qty: Math.floor(Math.random() * 20) },
  ];
};
const generateRandomPieData = () => {
  const completed = Math.floor(Math.random() * 100);
  const pending = Math.floor(Math.random() * (100 - completed));
  const failed = 100 - completed - pending;
  return [
    { name: "Completed", value: completed },
    { name: "Pending", value: pending },
    { name: "Failed", value: failed },
  ];
};
const Five = () => {

  const [activeChart, setActiveChart] = useState("line");
    const [lineData, setLineData] = useState(generateRandomData());

    useEffect(() => {
        const interval = setInterval(() => {
          setLineData(generateRandomData());
        //   setBarData(generateRandomBarData());
        //   setPieData(generateRandomPieData());
        }, 2000);
    
        return () => clearInterval(interval);
      }, []);
    useEffect(() => {
          AOS.init({ duration: 1000, once: true }); // duration = animation speed
        }, []);
  return (
    <main className='main_five'>
        <p className='five_text'>
            <h1 style={{marginBottom:'0px',fontSize:'6rem'}} data-aos="fade-up">Transform your digital presence</h1>
            <p data-aos="fade-up" data-aos-delay="100">We transform your digital presence through creativity, innovation, and strategic excellence. Our mission is to make your brand unforgettable in the digital world.</p>
        </p>

    <div className='display_five'>
    <div className="card" data-aos="fade-up">
    <div className='under'>
    <h3>Platforms</h3>
      
      <div className="bar">
         {/* data-aos="fade-right"> */}
        <span>Facebook</span>
        <div className="progress">
          <div className="progress-fill facebook" data-aos="fade-right"></div>
        </div>
      </div>

      <div className="bar">
        {/* data-aos="fade-up" */}
        <span>Instagram</span>
        <div className="progress">
          <div className="progress-fill instagram" data-aos="fade-right" data-aos-delay="200"></div>
        </div>
      </div>

      <div className="bar" >
        <span>TikTok</span>
        <div className="progress">
          <div className="progress-fill tiktok" data-aos="fade-right" data-aos-delay="400"></div>
        </div>
      </div>

      <div className="bar" >
        <span>Snapchat</span>
        <div className="progress">
          <div className="progress-fill snapchat" data-aos="fade-right" data-aos-delay="600"></div>
        </div>
      </div>
       <p>growth</p>
      <p className="growth">+23%</p>
      </div>
      <div className='text_containe'>
        <h1>Social Media Mangement & Marketing</h1>
        <p style={{fontSize:'20px',fontWeight:'200',color:'gray'}}>Comprehensive social media strategies that build engagement, grow your audience, and drive meaningful results across all platforms.</p>
      </div>
    </div>

        <div className="card" data-aos="fade-up">
            <div className='under'>
              <p className='editor'>
                <p style={{color:'red', fontSize:'30px'}}><PiYoutubeLogoFill /></p>
                <div className='editor_text' style={{fontSize:'30px'}}>
                  <p style={{marginBottom:'0px', marginTop:'0px',fontSize:'25px'}}>Video Editor</p>
                  <p style={{marginBottom:'0px', marginTop:'0px', fontSize:'20px',color:'grey', fontWeight:'100'}}>Timeline View</p>
                </div>
              </p>

      <p className='duration'>
        <p style={{marginTop:'0px',marginBottom:'0px', color:'grey'}}>Duartion</p>
        <p style={{color:'red',display:'flex',justifyContent:'flex-end', marginLeft:'500px'}}>2:45</p>
      </p>


       <p className='duration'>
        <p style={{marginTop:'0px',marginBottom:'0px',color:'grey',fontSize:'20px'}}>Resolution</p>
        <p style={{color:'green',marginLeft:'470px'}}>4k</p>
      </p>

       <p className='duration'>
        <p style={{color:'gray',fontSize:'20px'}}>FPS</p>
        <p style={{color:'green',marginLeft:'530px'}}>60</p>
      </p>
       <p className='duration'>
        <p style={{color:'gray',fontSize:'20px'}}>Quality</p>
        <p style={{color:'green', marginLeft:'464px'}}>Professional</p>
      </p>
       <p className='duration'>
        <p style={{color:'gray' ,fontSize:'20px'}}>Duartion</p>
        <p style={{color:'green',marginLeft:'490px'}}>2:45</p>
      </p>
    
      </div>
      <div className='text_containe'>
        <h1>Video Editing & Production</h1>
<p style={{fontSize:'20px',fontWeight:'200',color:'gray'}}>Professional video editing and production services that bring your vision to life with stunning visuals and compelling storytelling.</p>      </div>
    </div>
      
    </div>



    <section className='design_tool_display'>
      <p className='box_boder_design' data-aos="fade-up">
        <p className='under_design'>
          <p className='display_icon_text'>
             <p style={{color:'green', fontSize:'33px'}}><IoColorPaletteSharp /></p>
             <p style={{color:'grey',fontSize:'26px'}}>Design Tools</p>
          </p>

        <h1 className='color_typro'>
          <p className='background'>
            <p style={{marginTop:'0px',marginBottom:'0px'}}>Color</p>
            <div className='display_color'>
            <p className='red'></p>            
            <p className='yellow'></p>
            <p className='green'></p>
            <p className='orange'></p>
            </div>

          </p>

             <p className='background'>
            <p style={{marginTop:'0px',marginBottom:'0px',color:'black',fontSize:'24px'}}>Typography</p>
           <p style={{marginTop:'0px',marginBottom:'0px',fontSize:'23px',fontWeight:'100',}}>Modern</p>

          </p>
        </h1>

        <p className='width_input'></p>
         <p className='width_input2'></p>
         <p className='width_inputGreen'></p>
        </p>

        <h1 className='five_green'>Graphic Design</h1>
        <p style={{color:'grey',fontSize:'24px'}}>Creative graphic design solutions that capture your brand's essence and communicate your message with visual impact.</p>
      </p>


         <p className='box_boder_design' data-aos="fade-up" data-aos-delay="200">
        <p className='under_design' style={{marginTop:'0px'}}>
          <p className='display_icon_text'>
             <p style={{color:'green', fontSize:'33px'}}><AiOutlineLaptop /></p>
             <p style={{color:'grey',fontSize:'26px'}}>Web Development</p>
          </p>

        <h1 className='color_typro'>
          <p className='background'>
            <p style={{marginTop:'0px',marginBottom:'0px',fontWeight:'100',color:'grey' , fontSize:'23px'}}>Frontend</p>
           <p style={{marginTop:'0px',marginBottom:'0px',fontWeight:"300",fontSize:"20px"}}>React</p>

          </p>

             <p className='background'>
            <p style={{marginTop:'0px',marginBottom:'0px',color:'black',fontSize:'24px'}}>Backend </p>
           <p style={{marginTop:'0px',marginBottom:'0px',fontSize:'23px',fontWeight:'100',}}>Nodejs</p>

          </p>
        </h1>

        <p className='width_input'></p>
         <p className='width_input2'></p>
         <p className='width_inputGreen'></p>
        </p>

        <h1 className='five_green'>Website Design & Development
</h1>
        <p style={{color:'grey',fontSize:'24px'}}>Custom website design and development that creates powerful online experiences and drives conversions for your business.</p>
      </p>

         <p className='box_boder_design' data-aos="fade-up" data-aos-delay="400">
        <p className='under_design'>
          <p className='display_icon_text'>
             <p style={{color:'green', fontSize:'33px'}}><IoColorPaletteSharp /></p>
             <p style={{color:'grey',fontSize:'26px'}}>Personal Brand</p>
          </p>

        <h1 className='color_typro'>
          <p className='background'>
            <p style={{marginTop:'0px',marginBottom:'0px',fontWeight:'100',fontSize:'24px', color:'grey'}}>Identity</p>
            <p style={{marginTop:'0px',marginBottom:'0px',fontWeight:'100',fontSize:'22px'}}>Authentic</p>

          </p>

             <p className='background'>
            <p style={{marginTop:'0px',marginBottom:'0px',color:'black',fontSize:'24px'}}>Voice</p>
           <p style={{marginTop:'0px',marginBottom:'0px',fontSize:'23px',fontWeight:'100',}}>Unique</p>

          </p>
        </h1>

        <p className='width_input'></p>
         <p className='width_input2'></p>
         <p className='width_inputGreen'></p>
        </p>

        <h1 className='five_green'>Personal Branding</h1>
        <p style={{color:'grey',fontSize:'24px'}}>Strategic personal branding that capture  and communicate your message with visual impact.</p>
      </p>
    </section>


{/* graph wla section */}

      <article className='graph_section' data-aos="fade-up">
        <h1>Your Competitive Edges</h1>
        <p>See how insaneXmedia outperforms the competition with our data-driven approch and proven results. </p>
    </article>

<div className='display_text_graph'>
  <div className='text_only'>
  <section className='display_with_graph' data-aos="fade-right">
    <div className='approch'>
      <p><FaCircleCheck /></p>
    </div>
    <p className='data'>
      <h1 style={{marginBottom:'0px', marginTop:'0px',fontWeight:'500',fontSize:'26px'}}>Strategic + Data-Driven Approch</h1>
      <p style={{marginBottom:'0px', marginTop:'0px',fontSize:'26px',color:'gray'}}>Result-focused campagins backed by analytics and  market insight</p>
    </p>
  </section>

  <section className='display_with_graph' data-aos="fade-right" data-aos-delay="200">
    <div className='approch'>
      <p><FaCircleCheck /></p>
    </div>
    <p className='data'>
      <h1 style={{marginBottom:'0px', marginTop:'0px',fontWeight:'500',fontSize:'26px'}}>Strategic + Data-Driven Approch</h1>
      <p style={{marginBottom:'0px', marginTop:'0px',fontSize:'26px',color:'gray'}}>Result-focused campagins backed by analytics and  market insight</p>
    </p>
  </section>

  <section className='display_with_graph' data-aos="fade-right" data-aos-delay="600">
    <div className='approch'>
      <p><FaCircleCheck /></p>
    </div>
    <p className='data'>
      <h1 style={{marginBottom:'0px', marginTop:'0px',fontWeight:'500',fontSize:'26px'}}>Fastest 24/7 Client</h1>
      <p style={{marginBottom:'0px', marginTop:'0px',fontSize:'26px',color:'gray'}}>Round-the-clock communication and immediate response time</p>
    </p>
  </section>

  <section className='display_with_graph' data-aos="fade-right" data-aos-delay="800">
    <div className='approch'>
      <p><FaCircleCheck /></p>
    </div>
    <p className='data'>
      <h1 style={{marginBottom:'0px', marginTop:'0px',fontWeight:'500',fontSize:'26px'}}>Integrated Marketing Platform</h1>
      <p style={{marginBottom:'0px', marginTop:'0px',fontSize:'26px',color:'gray'}}>Sameless coordination across all digital channela and tools</p>
    </p>
  </section>

  <section className='display_with_graph' data-aos="fade-right" data-aos-delay="900">
    <div className='approch'>
      <p><FaCircleCheck /></p>
    </div>
    <p className='data'>
      <h1 style={{marginBottom:'0px', marginTop:'0px',fontWeight:'500',fontSize:'26px'}}>Portolio Featured on Linkedln</h1>
      <p style={{marginBottom:'0px', marginTop:'0px',fontSize:'26px',color:'gray'}}>Enhaned visiblilty and credibilty in profrssional network</p>
    </p>
  </section>
</div>
 <div className='graph' style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>Performance Comparsion</h1>

      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        {/* <button onClick={() => setActiveChart("line")} style={{ margin: "5px" }}>
          Line Chart
        </button> */}
        {/* <button onClick={() => setActiveChart("bar")} style={{ margin: "5px" }}>
          Bar Chart
        </button>
        <button onClick={() => setActiveChart("pie")} style={{ margin: "5px" }}>
          Pie Chart
        </button> */}
      </div>

      <div style={{ width: "100%", height: 400 }}>
        {activeChart === "line" && (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} animationDuration={1000} />
            </LineChart>
          </ResponsiveContainer>
        )}

        {/* {activeChart === "bar" && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="qty" fill="#82ca9d" animationDuration={1000} />
            </BarChart>
          </ResponsiveContainer>
        )} */}

        {/* {activeChart === "pie" && (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
                animationDuration={1000}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        )} */}
      </div>
    </div>
    </div>


    </main>
  )
}

export default Five;
