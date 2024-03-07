import React from "react";

const ConsultancyService = () => {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-10 my-5 lg:my-10">
      <h1 className="text-3xl lg:text-3xl text-[#263238] font-medium text-center mb-6 lg:mb-12" data-aos="fade-up">Our Consultancy Services</h1>

      <div className="grid md:grid-cols-2 lg:md:grid-cols-4 gap-10">
        {/* Service 1 */}
        <div className="bg-gray-100 py-8 px-10 rounded-lg shadow-md" data-aos="fade-right">
          <h2 className="text-xl text-[red] font-semibold mb-4">Strategy Consulting</h2>
          <p className="text-gray-700 text-center">
            Our strategy consulting services help businesses develop effective strategies to achieve their goals and overcome challenges.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-gray-100 py-8 px-10 rounded-lg shadow-md" data-aos="fade-up">
          <h2 className="text-xl text-[red] font-semibold mb-4">Technology Consulting</h2>
          <p className="text-gray-700 text-center">
            We provide technology consulting to help organizations leverage the latest technologies and optimize their IT infrastructure.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-gray-100 py-8 px-10 rounded-lg shadow-md" data-aos="fade-left">
          <h2 className="text-xl text-[red] font-semibold mb-4">Financial Consulting</h2>
          <p className="text-gray-700 text-center">
            Our financial consulting services assist businesses in managing their finances effectively and making informed financial decisions.
          </p>
        </div>

        {/* Service 4 */}
        <div className="bg-gray-100 py-8 px-10 rounded-lg shadow-md" data-aos="fade-up">
          <h2 className="text-xl text-[red] font-semibold mb-4">Printing Press</h2>
          <p className="text-gray-700 text-center">
            Our printing press consultancy services help businesses optimize their printing processes and improve print quality and efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConsultancyService;
