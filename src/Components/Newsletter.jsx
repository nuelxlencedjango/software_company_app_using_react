import React from "react";



const Newsletter = () =>{

    return(
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver p-16" id="news">
            <div className="flex items-center justify-center lg:w-2/5 mx-auto">
                <div className="text-center">
                <h2 className="lg:text-5x1 text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug">
                            The unseen of spending three years at raddotech
                        </h2>
                        <div className="flex items-center justify-center gap-8">
                            <button className="btn-primary text-white">Get A Demo
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" 
                            viewBox="0 0 14 8" fill="none" className="inline-block m1-2">
                            <path d="M10.2503 7.00012L12.7201 4.53039C13.013 4.23749 13.013 3.7626 12.7201 3.4697L10 0.999966M12.5004 4.00004L1.50012 4.00004"
                             stroke="white" stroke-width="1.1" stroke-linecap="around"/>
                            </svg>
                            </button>
                        </div>
                </div>
            </div>
        </div>
    )

}

export default Newsletter;