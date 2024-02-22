
import React from 'react';
import { Carousel } from 'flowbite-react';
import company from '../assets/hero-img.png';
import computer from '../assets/about-1.jpg';
import money from '../assets/telcom.webp';

import Product from './Product';   
import Services from './Services';
import About from './About';
import Blogs from './Blogs';
import Newsletter from './Newsletter';



const Home = () =>{

return(
    <div className='bg-neutralSliver' id='home'>
       <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen navbar-container' style={{ paddingTop: '50px' }}>

       
        <Carousel className="w-full max-auto">
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
              <button className="btn-primary">Register</button>
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
     <Product />   
     <Services />
     <About />
     <Blogs />
     <Newsletter />

    </div>   
)
}

export default Home;

