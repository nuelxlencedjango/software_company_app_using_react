import React from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'

const truncateText = (text, limit) => {
    const words = text.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return text;
  };
 
  
  
const Products = () =>{
    const blogs =[
        {id:1, 
        title:"Web Applications",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
              </svg>),
              
        text:   'At RaddoTech, we breathe purpose into every line of code, every meticulously crafted solution',
         },
        
         {id:3, 
            icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
          </svg>
          ),   
             title: "E-commerce Apps",
             text: 'Our e-commerce apps are crafted to elevate your brand, engage customers, and drive unparalleled success in the competitive world of online retail.',
           
        
            }, 

        {id:2, 
        icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
      ),  
        title:  "Mobile Apps",
        text:   "At RaddoTech, we don't just create mobile applications; we engineer immersive digital experiences that resonate with your audience. Our mobile apps are a testament to innovation, functionality, and a commitment to delivering solutions that go beyond expectations.",
         }, 

        {id:4, 
            title: "Data Management",    
            icon:  (<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 3c0-.6.4-1 1-1h6c.6 0 1 .4 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-6 8c0-.6.4-1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z"/>   
          </svg>
          ),
           text: "Our system is not just a tool; it's a strategic asset empowering businesses to manage their most valuable resource—people—with precision and innovation.",
           },

         {id:5, 
         title: "HR Management System",    
         icon:  (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
               <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
               </svg>),
        text: "Our system is not just a tool; it's a strategic asset empowering businesses to manage their most valuable resource—people—with precision and innovation.",
       },

        {id:6, 
         icon:  (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                   </svg>),
    
        title: "Graphic Designs",
        text: 'captivating design is the key to making a lasting impressionC',
        },  

        {id:7, 
            icon:  (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                      </svg>),
       
           title: "Hospital Management System",
           text: 'Streamline processes, enhance patient care, and gain valuable insights for informed decision-making. Join us in shaping the future of healthcare management—where precision meets compassion.',
           },    

        {id:8, 
        icon:  (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                       </svg>),
        
        title: "Financial System",
        text: 'At RaddoTech, we redefine the landscape of Web Application Development with our innovative solutions crafted to propel businesses to new heights. Our expertise lies in building and maintaining dynamic web-based applications, tailored with precision to serve a myriad of purposes.',
        },

        {id:9, 
        icon:  (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                           </svg>),
            
        title: "Accounting System",
        text: "Welcome to RaddoTech's Accounting System—a comprehensive solution designed to elevate your financial management to new heights.",
        },
        {id:10, 
        title: "School Manager",    
        icon:  (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
                               <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                               </svg>),
                
           
        text: "Recognizing the unique needs of each educational institution, RaddoTech’s School Management System is fully customizable. Tailor the system to fit your specific workflows, grading systems, and reporting structures. Our goal is to provide a solution that aligns perfectly with your school's operational model.",
        }                     
    ];
    return (
       
        <div className="px-4 lg:px-14 py-[80px] lg:py-[120px] max-w-screen-2x1 mx-auto" id="products">
    
            <div className="text-center md:w-2/2 mx-auto">
                <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-5/5" data-aos="fade-up">
                    We make Exceptional Software Products <span>like</span>
                </h2>
                <p className="md:w-5/6 text-sm text-neutralGrey mb-10 mx-auto" data-aos="fade-up">
                    Transform your business with our exceptional products. 
                    Elevate and expand your operations using our comprehensive software suite, 
                    meticulously crafted to seamlessly manage every aspect of your enterprise. 
                    Leveraging our profound technical expertise and industry knowledge, we engineer 
                    forward-looking solutions to empower your business in achieving its strategic 
                    objectives.
                </p>
            </div>

            {/* Blog posts */}
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between" data-aos="fade-up">
                {blogs.map(blog => (
                    <div key={blog.id} className="relative mb-12 cursor-pointer hover:scale-95 translate-all duration-300" data-aos="fade-up">
                        <div className="bg-cover bg-center h-72 rounded-lg overflow-hidden" style={{ backgroundImage: `url(${blog.image})` }}></div>
                        <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
                            <div className="bg-[red] mb-0 h-10 w-10 mx-auto rounded-t1-3x1 rounded-br-3x1 rounded-full">  
                                <i>{blog.icon}</i>
                            </div>
                            <h3 className="mb-3 text-neutralGrey font-bold">{blog.title}</h3>
                            <p className="mb-2 text-neutralGrey font-16">{truncateText(blog.text, 10)}</p>
                            <div className="flex items-center justify-center gap-8">
                                <a href="/" className="font-bold text-[red] hover:text-neutral-700">
                                    Read more
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11"
                                         fill="none" className="inline-block ml-2">
                                        <path d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                                              stroke="#4CAF4F" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;