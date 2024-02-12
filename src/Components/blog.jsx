import React from "react";
import mobile from '../assets/mobile3.jpg';
import mob3 from '../assets/mobile2.jpg';


const Blog = () =>{
    return(
        <div>
            {/* about us text */}
            <div className="px-4 lg:px-14 py-20 max-w-screen-2x1 mx-auto my-8" id="blog">
                <div className="md:w-9/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <div>
                        <img src={mobile} alt="" className="mobile"/>
                    </div>
                    <div className="md:w-/5 mx-auto">
                        <h2 className="text-4x1 text-neutralDGrey font-semibold mb-4 md:w-4/5">
                            The unseen of three years at raddotech
                        </h2>
                        <p className="md:w-4/4 text-sm text-neutralGrey mb-8">
                            Lorem ipsum  sit amet consectetur adipisicing elit. Dolorum, optio. Totam aspernatur, veritatis cum nihil ipsum pariatur sunt rerum maxime enim officia suscipit corporis ad repudiandae eius quod ut nisi. Officiis, aliquam provident suscipit non laboriosam molestiae qui ea? Ad nesciunt amet ipsam dignissimos numquam enim officia consequuntur aperiam aliquid?
                        </p>
                        <button className="btn-primary">Learn More</button>
                    </div>
                </div>

            </div>
            {/* company stats */}
            <div className="px-4 lg:px-14 max-w-screen-2x1 mx-auto bg-neutralSilver py-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="md:w-1/3">
                        <img src={mob3} alt="" />
                    </div>


                    {/* stats */}
                      <div className="md:w-3/4 mx-auto">
                            <div className=""> 
                                 <p className="md:w-5/5 text-md text-neutralGrey mb-8 leading-7">Lorem ipsum dolor sit amet, consectetur adipisicing 
                                    elit. Eaque earum modi et? Perferendis, earum 
                                    incidunt! Odit consequatur, autem corporis 
                            
                                    provident iusto magnam, animi sed illo laboriosam 
                                    ipsum, earum alias sit dicta modi in architecto 
                                    explicabo adipisci! Alias veniam debitis soluta.</p>
                                  <h5 className="text-brandPrimary text-xl font-semibold mb-2">Tim Smith</h5>
                                  <p className="text-base text-neutralGrey mb-8">British Dragon Boat Racing Association</p>  
                                  <div>
                                    <div className="flex items-center gap-8 flex-wrap">
                                        <img src="/src/assets/logo1" alt="" className="cursor-pointer"/>
                                        <img src="/src/assets/logo1" alt="" className="cursor-pointer"/>
                                        <img src="/src/assets/logo1" alt="" className="cursor-pointer"/>
                                        <img src="/src/assets/logo1" alt="" className="cursor-pointer"/>
                                        <img src="/src/assets/logo1" alt="" className="cursor-pointer"/>

                                        <div className="flex items-center gap-8">
                                            <a href="/" className="font-bold text-brandPrimary hover:text-neutral-700">
                                                Meet Our Customers{" "}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11"
                                                fill="none" className="inline-block ml-2">
                                                    <path d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                                                    stroke="#4CAF4F" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                  </div>

                            </div>
                          
                        </div>
                        
                    </div>
                </div>
            </div>
            

        
    )
}

export default Blog;