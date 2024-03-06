import React from "react";
import { Footer } from "flowbite-react";

import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import logo from "../assets/gwyat.jpeg";

const MyFooter = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="">
        <div className="max-w-screen-xl mx-auto grid gap-8 grid-cols-2 px-4 md:px-0 py-6 lg:py-8 md:grid-cols-4 text-center">
        <div className="">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Address
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                920 W Villa Maria Rd
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                Bryan, TX 77807
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                +1 (214) 862-2086
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                raddotech.@gmail.com
                </a>
              </li>

            </ul>
          </div>
          <div className="">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Our Services
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className=" hover:underline">
                Software Products Development
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                Product Designs
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                Data Engineering & AI Solution
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                Graphic Designs
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Quick Links
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                Products
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                Services
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                Corporate Responsibility
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Contact Us
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                +1 (214) 862-2086
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  raddotech.@gmail.com
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
         
            </ul>
          </div>
         
        </div>
        <div className="bg-gray-100 dark:bg-gray-700">
          <div className="max-w-screen-xl mx-auto px-4 py-6 md:px-0 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
              © 2023 <a href="">Raddotech</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
            
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fillRule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
            
               
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
