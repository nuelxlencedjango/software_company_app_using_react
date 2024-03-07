import React from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';




const Contact_Us = () => {
  return (
    <div>
      <h1 className="text-3xl lg:text-3xl text-[#263238] reach-out font-medium text-center mb-2">Reach Out To Us Today!</h1>
      <div className="mx-4 flex py-10 flex-col md:flex-row justify-center items-start">
>>>>>>> f548218b323f109bb26f0daae915acd5fe6a1d9e
        {/* Address Section */}
        <div className="bg-[#cf2e2e] text-white py-12 w-full md:w-1/3 mb-8 mx-2 hover:bg-blue-300 
        cursor-pointer h-72 flex justify-center items-center" data-aos="fade-left">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">Address</h2>
            <p className="text-white">1920 W Villa Maria Rd</p>
            <p className="text-white">Bryan, TX 77807</p>
            <p className="text-white">USA</p>
          </div>
        </div>

        {/* Phone Numbers Section */}
        <div className="bg-[#000] text-white py-12 w-full md:w-1/3 mb-8 mx-2 hover:bg-green-300 
        cursor-pointer h-72 flex justify-center items-center" data-aos="fade-right">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">Phone Numbers</h2>
            <p className="text-white">Main Office: 123-456-7890</p>
            <p className="text-white">Support: 987-654-3210</p>
          </div>
        </div>

        {/* Emails and Messages Section[#E5E7EB] */}
        <div className="bg-yellow-300 py-10 px-3 h-full w-full md:w-1/3 mb-8 mx-2 flex flex-col 
        justify-between contact-form" data-aos="fade-up">
          <div className="text-center">
            <h2 className="text-2xl text-white font-semibold mb-4">
              Contact Us
            </h2>
            <p className="text-white">We'll get back to you within 24hrs</p>
          </div>
            <form className="w-full max-w-md mx-auto mt-4">
              <div className="flex flex-col">
                <div className="mb-4">
                  {/* <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Your Name
                  </label> */}
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Your Full name"
                  />
                </div>
                <div className="mb-4">
                  {/* <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Your Email
                  </label> */}
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="mb-4">
                  {/* <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label> */}
                  <textarea
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20 resize-none"
                    id="message"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
              </div>
              <div className="text-center mb-4">
                <button className="bg-[red] hover:bg-[#000] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Send Message
                </button>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact_Us;
