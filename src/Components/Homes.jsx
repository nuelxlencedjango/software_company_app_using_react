
import React, { useEffect } from 'react';
import { Carousel } from 'flowbite-react';


import company from '../assets/hero-img.png';
import computer from '../assets/about-1.jpg';
import money from '../assets/telcom.webp';

import Services from './Services';
import Consult from  './Consultancy';
import Framework from  './Framework2';
import Contact_Us from './Contact_Us';


const Home = () =>{

return(
    <div className='bg-neutralSliver' id='home'>
       <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen navbar-container' style={{ paddingTop: '50px' }}>

       
        <Carousel className="w-full max-auto" data-aos="fade-up">
          <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-12">
  
            <div className="w-full md:w-1/2">
                <img src={company} alt="" className="carousel-image w-full h-auto"
                      style={{ maxWidth: "100%", height: "auto" }} />
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="text-xl md:text-3xl mb-3 text-neutralDGrey leading-snug car-h1">
                Innovate your business with <span className="text-red leading-snug"> Raddotech</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Unlock new horizons with our cutting-edge software solutions. At Raddotech, we blend creativity with 
                technology to drive innovation. Explore our range of products and services tailored to meet your 
                evolving business needs. Let's innovate together and stay ahead in the digital age.
              </p>
              <button className="btn-primary">Contact Us Today!</button>
            </div>
          </div>


          <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2">
                <img src={computer} alt="" className="carousel-image w-full h-auto"
                      style={{ maxWidth: "100%", height: "auto" }} />
            </div>

            <div className="w-full md:w-1/2">
              <h1 className="text-xl md:text-3xl mb-3 text-neutralDGrey leading-snug car-h1">
              We make business <span className="text-red leading-snug"> processes seamless!</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
              Experience the power of digital transformation with Raddotech. 
              From streamlining operations to enhancing customer experiences, our 
              solutions empower businesses to thrive in today's dynamic landscape. Discover 
              how our expertise and innovation can propel your organization towards success. 
              Transform your business with Raddotech.
              </p>
              <button className="btn-primary">Reach out to us now!</button>
            </div>
          </div>
          <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2">
                <img src={money} alt="" className="carousel-image w-full h-auto"
                      style={{ maxWidth: "100%", height: "auto" }} />
            </div>

            <div className="w-full md:w-1/2">
              <h1 className="text-xl md:text-3xl mb-3 text-neutralDGrey leading-snug car-h1">
              Bring your ideas <span className="text-red leading-snug"> To life with just a call away</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
              Forge stronger connections and foster collaboration with Raddotech's
                collaborative tools and platforms. Whether it's internal communication or 
                engaging with customers, we provide seamless solutions that bring people 
                together. Enhance teamwork, boost productivity, and unlock new possibilities 
                with our suite of collaboration solutions.
              </p>
              <button className="btn-primary">We await your call today!</button>
            </div>
          </div>
             
         </Carousel>

        </div>
        <div className="app">
      <div className="header-container">
        <h1 className="text-4xl text-[#263238] font-medium" data-aos="fade-up">Reasons to Choose Us</h1>
      </div>

      <div className="features-container">
        <div className="feature bg-[#f5f5f5] p-10" data-aos="fade-up">
          <h2 className="text-[#263238]">EXPERIENCE</h2>
          <h3 className="text-center">REAL-WORLD EXPERIENCE FIRST-HAND KNOWLEDGE</h3>
         <p>With each project, our skilled consultants utilize cutting-edge methodologies and expertise accumulated over 
          years of involvement in corporate software development. Notably, both our leadership team and 
          consultants boast rich backgrounds, particularly within the domain of software engineering 
          and technology.</p>
        </div>
        <div className="feature bg-[#f5f5f5] p-10" data-aos="fade-up">
          <h2>FLEXIBILITY</h2>
          <h3  className="text-center">SCALABILITY MEETS FLEXIBILITY</h3>

          <p>Tailored Services: As a privately-owned firm imbued with a robust entrepreneurial ethos, we possess the 
            capacity to tackle intricate, enterprise-scale projects while remaining agile enough to adapt to your 
            unique needs. This affords us the flexibility required to collaborate with clients in innovative and 
            accommodating ways.</p>
        </div>
        <div className="feature bg-[#f5f5f5] p-10" data-aos="fade-up">
          <h2 className="text-[#263238]">EXCEPTIONAL VALUE</h2>
          <h3 className="text-center">EXCEPTIONAL SERVICES AT AN EXCEPTIONAL VALUE</h3>
          <p>Doing more with less is essential in today's economic landscape. Our company's size, expertise, 
            and strategic approach empower us to deliver exceptional value to clients without compromising on the 
            quality of service.</p>
        </div>
        <div className="feature bg-[#f5f5f5] p-10" data-aos="fade-up">
          <h2>RESULTS</h2>
          <h3 className="text-center">RESULTS YOUR BUSINESS NEEDS</h3>
         <p>Our proven track record and results-driven approach ensure that we deliver the outcomes essential for 
          your business. We address your most critical technological and business challenges by merging our 
          established project management proficiency with expertise and a steadfast work ethic.</p>
        </div>
      </div>
    </div>

    

     <Services/>
      <Framework />
      <Consult />
     <Contact_Us />
    </div>   
)
}

export default Home;




