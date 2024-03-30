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
    <footer className="bg-white dark:bg-gray-900" data-aos="fade-up">
      <div className="max-w-screen-xl mx-auto px-4 py-6 md:px-0">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-4 md:text-center">
          <div className="text-center"> 
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
                contact@raddotech.com
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center"> 
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
          <div className="text-center"> 
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
          <div className="text-center">
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
                contact@raddotech.com
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
          <div className="max-w-screen-xl mx-auto px-4 py-6 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-300 text-center flex justify-center">
              © 2023 &nbsp; <a href="">Raddotech</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <BsFacebook className="w-4 h-4" />
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <BsTwitter className="w-4 h-4" />
                <span className="sr-only">Twitter page</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
