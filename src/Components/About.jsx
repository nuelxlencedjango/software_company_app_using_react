import React from "react";
import abt from '../assets/informationT3.jpeg';
import why_us from '../assets/informationT2.jpeg';
import { useLocation } from 'react-router-dom';

const About =() => {

  const location = useLocation();
  
  return (
    <div>
      {/* About us text */}
      <div className="px-4 lg:px-14 py-10 md:py-20 max-w-screen-2x1 mx-auto my-8 bg-neutralSilver" id="about">
        <div className="flex justify-center items-center h-full">
          <h2 className="text-4xl text-neutralDGrey font-semibold md:w-4/5 py-5 md:py-14 welcom">Welcome to Raddotech</h2>
        </div>
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="md:w-1/2 mx-auto">
            <div className="h-64 md:h-auto overflow-hidden">
              <img src={abt} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:w-1/2 mx-auto">
            <p className="md:w-4/5 text-neutralGrey mb-8">
              At Raddotech, we are passionate about leveraging technology to transform ideas into innovative solutions.
              With years of experience in software development, our team specializes in creating cutting-edge
              applications, robust web services, and efficient data solutions tailored to meet the unique needs of
              our clients.
            </p>
            <h2 className="text-2xl text-neutralDGrey font-semibold">Our Mission</h2>
            <p className="md:w-4/5 text-neutralGrey mb-8 py-5">
              Our mission is to empower businesses and individuals by providing them with top-notch software solutions
              that drive growth, enhance efficiency, and streamline operations. We strive to exceed expectations and
              deliver excellence in every project we undertake.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* Why Choose Raddotech */}
      <div className="px-4 lg:px-20 py-0 max-w-screen-2x1 mx-auto my-0">
        <div className="flex justify-center items-center h-full">
          <h2 className="text-4xl text-neutralDGrey font-semibold md:w-4/5 py-0">Why Choose Raddotech?</h2>
        </div>
        <p className="md:w-5/6 text-neutralGrey mb-8 py-5 mb-3">
          Whether you're a startup looking to build your first app, a business in need of a comprehensive web solution,
          or an organization seeking to harness the power of data, Raddotech is here to partner with you on your journey
          towards success.
        </p>
      </div>

      {/* Innovative Approach */}
      <div className="px-4 lg:px-14 py-0 max-w-screen-2x1 mx-auto my-8 flex flex-col md:flex-row justify-between items-center gap-12 bg-neutralSilver mb-25" style={{ marginBottom: '100px' }}>
        <div className="md:w-1/2 mx-auto order-2 md:order-1">
          <h4 className="text-2xl text-neutralDGrey font-semibold">Innovative Approach</h4>
          <p className="md:w-4/5 text-neutralGrey py-2 mb-">
            We embrace innovation and stay ahead of the curve by adopting the latest technologies and best
            practices in software development.
          </p>
          <h4 className="text-2xl text-neutralDGrey font-semibold">Client-Centric Focus</h4>
          <p className="md:w-4/5 text-neutralGrey py-2 mb-3">
            Our dedicated team collaborates closely with clients to understand their objectives, challenges, and
            vision, ensuring that we deliver solutions that align with their goals and exceed their expectations.
          </p>
          <h4 className="text-2xl text-neutralDGrey font-semibold">Quality Assurance</h4>
          <p className="md:w-4/5 text-neutralGrey py-2 mb-3">
            Quality is at the forefront of everything we do. We adhere to stringent quality standards and rigorous
            testing processes to ensure that our solutions are reliable, secure, and perform optimally.
          </p>
        </div>
        <div className="md:w-1/2 mx-auto order-1 md:order-2">
          <img src={why_us} alt="" className="w-full h-auto md:h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default About;
