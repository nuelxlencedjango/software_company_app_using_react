import React, { useEffect, useState } from "react";
import logo from '../assets/raddotech-logo-x1.png';
import { Link } from "react-router-dom";


{/* react icons */}
import { FaXmark, FaBars } from "react-icons/fa6";

import AOS from 'aos';
import 'aos/dist/aos.css'


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    
    //set toggle menu
    const toggleMenu =() =>{
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() =>{
        const handleScroll = () =>{
            if(window.scrollY > 100){
                setIsSticky(true);
            }else{
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll',handleScroll);
        return () =>{
            window.addEventListener('scroll', handleScroll);
        }

    });

  
    // navbar links
    const navItems =[
       
        {link: "Home", path:"/"},
        {link: "Products", path:"/products"},
        {link: "Services", path:"/services"},
        {link: "About", path:"/about"},
        // {link: "Career", path:"/careers"},
        {link: "Contact", path:"/contact_us"},
    ]

    return(
       <header className="max-w-full bg-white md:bg-transparent fixed top-0 left-0 right-0" data-aos="fade-right"> 
        <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" :""}`}> 
            <div className="flex justify-between items-center text-base gap-8">
                <a href="/" className="text-2xl font-semibold flex items-center space-x-3">
                    <img src={logo} alt="" width="205px" height="52px" className="inline-block items-center" />
                </a>

               {/* nav items for large screens */}
               <ul className="md:flex space-x-12 hidden">
                {
                    navItems.map(({link, path}) => <Link to={path} spy={true} smooth={true} offset={-100} key={path}
                   className="block text-base text-gray-900 hover:text-neutralBlue first:font-semibold" > {link}</Link>
                   
                   )
                }
                </ul>

                {/* btn for large devices */}
                <div className="space-x-12 hidden lg:flex items-center">
                    {/*<a href="/" className="hidden lg:flex items-center text-s hover:text-gray-900">Get In Touch</a>*/}
                    <button className="bg-neutralBlue text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">Contact Us</button>
                </div>
                {/* menu btn for mobile devices */}
                <div className="md:hidden">
                    <button 
                    onClick={toggleMenu}
                    className='text-neutralDGrey focus:outline-none focus:text-gray-500'>
                        {
                            isMenuOpen ? (<FaXmark className='h-6 w-6' />) : (<FaBars className='h-6 w-6' />)
                        }
                    </button>
                </div>
            </div>
            {/* nav items for mobile devices */}
            <div className={`space-y-4 px-4 mt-16 py-7 bg-neutralBlue ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                    navItems.map(({link, path}) => <Link to={path} spy={true} smooth={true} offset={-100}
                    key={path} className='block cursor-pointer text-base text-[white] hover:text-[#000] first:font-medium'>{link}</Link>)
                }

            </div>
        </nav>

       </header>
    )
}


export default Navbar; 

