import React from "react";

const ConsultancyService = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Consultancy Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Service 1 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl text-[red] font-semibold mb-4">Strategy Consulting</h2>
          <p className="text-gray-700">
            Our strategy consulting services help businesses develop effective strategies to achieve their goals and overcome challenges.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl text-[red] font-semibold mb-4">Technology Consulting</h2>
          <p className="text-gray-700">
            We provide technology consulting to help organizations leverage the latest technologies and optimize their IT infrastructure.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl text-[red] font-semibold mb-4">Financial Consulting</h2>
          <p className="text-gray-700">
            Our financial consulting services assist businesses in managing their finances effectively and making informed financial decisions.
          </p>
        </div>

        {/* Service 4 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl text-[red] font-semibold mb-4">Printing Press</h2>
          <p className="text-gray-700">
            Our printing press consultancy services help businesses optimize their printing processes and improve print quality and efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConsultancyService;
