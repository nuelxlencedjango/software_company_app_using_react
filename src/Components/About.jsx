import React from "react";
import abt from '../assets/gwyat.jpeg';

const About =() =>{

    return(
        <div>
            {/* about us text */}
            <div className="px-4 lg:px-14 max-w-screen-2x1 mx-auto my-8">
                <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <div>
                        <img src={abt} alt="" />
                    </div>
                    <div className="md:w-3/5 mx-auto">
                        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
                            The unseen of spending three years at raddotech
                        </h2>
                        <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, optio. Totam aspernatur, veritatis cum nihil ipsum pariatur sunt rerum maxime enim officia suscipit corporis ad repudiandae eius quod ut nisi. Officiis, aliquam provident suscipit non laboriosam molestiae qui ea? Ad nesciunt amet ipsam dignissimos numquam enim officia consequuntur aperiam aliquid?
                        </p>
                        <button className="btn-primary">Learn Mire</button>
                    </div>
                </div>

            </div>
            {/* company stats */}
            <div className="px-4 lg:px-14 max-w-screen-2x1 mx-auto bg-neutralSilver py-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="md:w-1/2">
                    <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
                        Helping a local <br /> <span className="text-brandPrimary">business reinvent itself</span>
                        </h2>
                    <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
                        We reached here with our hard work and dedication
                           </p>
                    </div>

                    {/* stats */}
                    <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
                        <div className="space-y-8"> 
                            <div className="flex items-center gap-4">
                                <img src="/src/assets/icons/member.png" alt="" />
                                <div>
                                    <h4 className="text-2x1 text-neutralDGrey font-semibold">245,845</h4>
                                    <p>Members</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src="/src/assets/icons/member.png" alt="" />
                                <div>
                                    <h4 className="text-2x1 text-neutralDGrey font-semibold">2,349</h4>
                                    <p>Members</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8"> 
                            <div className="flex items-center gap-4">
                                <img src="/src/assets/icons/member.png" alt="" />
                                <div>
                                    <h4 className="text-2x1 text-neutralDGrey font-semibold">3410</h4>
                                    <p>Members</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src="/src/assets/icons/member.png" alt="" />
                                <div>
                                    <h4 className="text-2x1 text-neutralDGrey font-semibold">6783</h4>
                                    <p>Members</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;