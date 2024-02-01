import React, {useEffect, useState } from "react";
import logo from '../assets/gwyat.jpeg';


import { Link } from 'react-scroll';
import { FaXmark, FaBars } from 'react-icons/fa6';


const Navigations =() =>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);


    // toggle menu
    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }
    useEffect(() => {
        const handleScroll = ()=>{
            if(window.scrollY > 100){
                setIsSticky(true);
            } else{
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll',handleScroll);

        // cleanup function
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    // navigation array
    const navItems =[
        {Link: "Home", path: "Home"},
        {Link: "Services", path: "Services"},
        {Link: "Products", path: "Product"},
        {Link: "About", path: "About_us"},
        {Link: "Insights", path: "Insights"},
        {Link: "Careers", path: "Carrers"},
       
        {Link: "Blog", path: "blog"},
        {Link: "Contact", path: "Contact_us"},

    ];

    return(
        <header className={`w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 ${isSticky ? 'sticky' : ''}`}>

            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border bg-white duration-300" : ""}`}>

                
                <div className='flex jusify-between items-center text-base gap-8'>

                    <a href="" className="text-2xl font-semibold flex items-center space-x-3">
                        <img className="w-8 inline-block items-center" src={logo} 
                        alt="" /><span className="text-[#000]"> Raddotech </span></a>
           
                        {/* nav items for large devices */}
                        <ul className='md:flex space-x-8 hidden'>
                            {
                               navItems.map(({ Link, path }) => (
                               <li key={path} className='block text-base text-neutralBlue hover:text-gray-900 font-semibold first:font-medium'>
                               <Link to={path} spy={true} smooth={true} offset={-100}>
                                <a href="">{Link}</a>
                               </Link>
                              </li>

                              
                               ))
                            }
                        </ul>

             {/* btn for large device */}     
             <div className="space-x-12 hidden lg:flex items-center">
                {/*<a href="/" className="hidden lg:flex items-center text-brandPrimary 
                hover:text-gray-900">Login</a>*/}
                <button className="bg-[red] text-white py-2 px-4 transition-all duration-300 rounded
                hover:bg-neutralDGray">Get In Touch</button>
                </div>  

                {/* menu btn for toggle mobile device */}  
                <div className='md:hidden'>
                    <button onClick={toggleMenu}
                    className='text-neutralDGrey focus:outline-none focus:text-gray-500'>
                        {
                            isMenuOpen ? (<FaXmark className='h-6 w-6'/> ) :(<FaBars
                                className="h-6 w-6" />)
                        }
                    </button>
                    </div>       
                </div>

                {/* nav items for mobile devices */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${ isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`} >
                {
                   navItems.map(({ Link, path }) => (
                    <li key={path} className='block text-base text-neutralBlue hover:text-white first:font-medium'>
                     <Link to={path} spy={true} smooth={true} offset={-100}>
                        <a href="">{Link}</a>
                        </Link>
                        </li>
                        ))
                }

                </div>
            </nav>

        </header>
    
    );
};



export default Navigations

