import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const truncateText = (text, limit) => {
  const words = text.split(" ");
  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + "...";
  }
  return text;
};

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Software Products Development",
      description:
        "Revolutionize Your Operations with RaddoTech's Software Products Development. In the ever-evolving landscape of technology, the key to staying competitive lies in the strategic development of software products that not only meet the current demands but also anticipate future challenges. Welcome to RaddoTech, where our Software Products Development services are designed to transform your vision into innovative, reliable, and scalable digital solutions.Why Choose RaddoTech for your  Software Products Development?",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-14 h-14 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Product Designs",
      description:
        "Crafting enjoyable user experiences for your products is crucial. The quality of these experiences often serves as the determining factor in completing transactions, sustaining user engagement, advocating for a product to peers, sharing feedback on social media, fostering customer loyalty through repeat purchases, or potentially exploring offerings from competitors",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-14 h-14 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Data Engineering & AI Solution",
      description:
        "Harnessing the power of large-scale data to enhance operational efficiency, facilitate informed decision-making, and drive overall company growth.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-14 h-14 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Graphic Designs",
      description:
        "Crafting Visual Excellence Graphic design is an artistic and strategic discipline that involves creating visual content to communicate messages effectively. It is a versatile and integral component of various industries, encompassing everything from branding and marketing to web design and print material",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-14 h-14 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
          />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Cybersecurity Consulting",
      description:
        "Implement the appropriate security strategy and practices to safeguard both your business and customers.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-14 h-14 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Software Maintenance and Support",
      description:
        "Software maintenance is the ongoing process of managing and enhancing software applications to ensure they continue to meet evolving business needs and performance standards. This essential phase in the software development life cycle involves various activities aimed at preserving and improving the software's functionality, security, and overall efficiency",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-14 h-14 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
          />
        </svg>
      ),
    },
    {
      id: 7,
      title: "Training And Coaching",
      description:
        "Mastery of popular programming languages such as Python, Java, JavaScript, C++, and others forms the foundation of software development training.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-14 h-14 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
          />
        </svg>
      ),
    },
  ];

  {
    /* company logos */
  }

<<<<<<< HEAD
           
            {/* service cards */}
            <div className="mt-20 md:w-3/4 mx-auto text-center">
       
            <h2 className="text-3xl text-neutralDGrey font-semibold mb-2" data-aos="fade-up">Our Services</h2>
                <p className="text-neutralGrey">.</p>
                <p data-aos="fade-up">As a leading software company, we specialize in crafting tailored solutions to propel businesses 
                    forward. Our multi-competency approach, combined with a focus on enterprise 
                    transformation and technology consulting, allows us to seamlessly integrate 
                    expertise across various industries and business functions. 
                    At Raddotech, we are dedicated to delivering superior value through 
                    innovative and bespoke software solutions.</p>
            
            </div>
            {/* cards */}
            <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
                {
                    services.map(service => <div key={service.id} className="px-4 py-8 text-center md:w-[300px]
                    mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all
                    duration-300 flex items-center justify-center h-full" data-aos="fade-up"> 
                    <div>
                        <div className='bg-[red] mb-4 h-14 w-14 mx-auto rounded-t1-3x1 rounded-br-3x1 rounded-full'>  
                            <i>{service.icon}</i>
                        </div>
                        <h4 className="text-2x1 font-bold text-neutralDGrey mb-2 px-2">{service.title}</h4>

                        <p className="mb-2 text-neutralGrey font-16">{truncateText(service.description,10)}</p>
                        </div>
=======
  return (
    <div
      className="md:px-10 px-4 py-2 max-w-screen-2xl mx-auto my-5 lg:my-10"
      id="service"
    >
      {/* service cards */}
      <div className="mt-20 md:w-3/4 mx-auto text-center">
        <h1 className="text-3xl lg:text-3xl text-[#263238] font-medium" data-aos="fade-up">Our Services</h1>
        <p className="text-neutralGrey">.</p>
        <p data-aos="fade-up">
          As a leading software company, we specialize in crafting tailored
          solutions to propel businesses forward. Our multi-competency approach,
          combined with a focus on enterprise transformation and technology
          consulting, allows us to seamlessly integrate expertise across various
          industries and business functions. At Raddotech, we are dedicated to
          delivering superior value through innovative and bespoke software
          solutions.
        </p>
      </div>
      {/* cards */}
      <div className="mt-14 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px]
                    mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all
                    duration-300 flex items-center justify-center h-full" data-aos="fade-up"
          >
            <div>
              <div className="bg-[red] mb-4 h-14 w-14 mx-auto rounded-full p-10 flex justify-center items-center">
                <i>{service.icon}</i>
              </div>
              <h4 className="text-2x1 font-bold text-neutralDGrey mb-2 px-2">
                {service.title}
              </h4>
>>>>>>> f548218b323f109bb26f0daae915acd5fe6a1d9e

              <p className="mb-2 text-neutralGrey font-16">
                {truncateText(service.description, 10)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/*<div className="text-center my-20">
                
                import company from '../assets/company1.jpg';
                <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">Our Clients</h2>
                <p className="text-neutralGrey">We offer the best services you can imagine.We simply your business operations seemlessly</p>
            
            <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
                <img className="company" src="/src/assets/company1.jpg" alt="" />
                <img className="company" src="/src/assets/company2.jpg" alt="" />
                <img className="company" src="/src/assets/company3.jpg" alt="" />
                <img className="company" src="/src/assets/company4.jpg" alt="" />
                <img className="company" src="/src/assets/company5.jpg" alt="" />
            </div>
            
            </div>*/}
    </div>
  );
};
export default Services;
