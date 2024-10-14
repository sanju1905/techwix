import React from "react";
import Ban from "../public/img/TECW0001.jpg";

const Banner = () => {
  return (
    <div className="relative bg-gray-800" id="header">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={Ban}
          alt="Technology Consultancy"
          className="hidden object-cover w-full h-full md:block"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative flex flex-col w-full gap-5 p-5 p-10 lg:w-1/2">
        <div className="mt-20 text-2xl font-semibold text-white">
          Technology Related Consultancy
        </div>
        <div className="text-5xl font-bold leading-tight text-white">
          We Transform Ideas into Technology
        </div>
        <div className="text-xl font-normal text-gray-100">
          We provide the most responsive and functional IT design for companies
          and businesses worldwide.
        </div>
        <div className="p-3 bg-[#1981E3] w-48 text-xl font-semibold rounded text-white text-center hover:bg-black cursor-pointer ">
          Read More
        </div>
    
      </div>
    </div>
  );
};

export default Banner;
