import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 flex flex-wrap justify-between gap-5 p-6 bg-white shadow-lg">
      <div className="text-2xl font-bold text-blue-800 cursor-pointer">Techwix</div>
      <div>
        <ol className="flex flex-wrap gap-10 text-lg">
          <li>
            <a href="#banner" className="hover:text-blue-800 hover:font-semibold">Home</a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-800 hover:font-semibold">Services</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-800 hover:font-semibold">About us</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-800 hover:font-semibold">Contact us</a>
          </li>
          <li>
            <a href="#testimonals" className="hover:text-blue-800 hover:font-semibold">Testimonials</a>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Navbar;
