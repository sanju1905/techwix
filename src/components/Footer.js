import React from "react";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#010717] text-white flex flex-wrap flex-col">
      <div className="flex flex-wrap justify-between p-5">
        {/* Company Description Section */}
        <div className="flex flex-col flex-wrap w-1/4 gap-8">
          <div className="text-3xl font-bold text-blue-500 cursor-pointer">
            Techwix
          </div>
          <div className="cursor-default">
            Accelerate innovation with world-class tech teams. We’ll match you to
            an entire remote team of incredible freelance talent.
          </div>
          <div className="flex flex-wrap gap-3">
            <FaSquareXTwitter className="text-2xl transition-transform rounded cursor-pointer hover:scale-110 hover:text-blue-500" />
            <FaInstagramSquare className="text-2xl transition-transform rounded cursor-pointer hover:scale-110 hover:text-blue-500" />
            <FaFacebook className="text-2xl transition-transform rounded cursor-pointer hover:scale-110 hover:text-blue-500" />
          </div>
        </div>

        {/* Useful Links Section */}
        <div className="flex flex-col flex-wrap gap-3">
          <div className="text-2xl font-bold cursor-default">Useful Links</div>
          <div>
            <ul className="leading-loose">
              <li className="transition-transform cursor-pointer hover:scale-110 hover:text-blue-500">Home</li>
              <li className="transition-transform cursor-pointer hover:scale-110 hover:text-blue-500">About Company</li>
              <li className="transition-transform cursor-pointer hover:scale-110 hover:text-blue-500">Our Services</li>
              <li className="transition-transform cursor-pointer hover:scale-110 hover:text-blue-500">Why Choose Us</li>
              <li className="transition-transform cursor-pointer hover:scale-110 hover:text-blue-500">Contact Us</li>
            </ul>
          </div>
        </div>

        {/* Our Services Section */}
        <div className="flex flex-col flex-wrap gap-3">
          <div className="text-2xl font-bold cursor-default">Our Services</div>
          <div>
            <ul className="leading-loose">
              <li className="transition-transform cursor-pointer hover:scale-110 hover:text-blue-500">
                Infrastructure Technology
              </li>
              <li className="transition-transform cursor-pointer hover:scale-110 hover:text-blue-500">
                Blockchain Technology
              </li>
              <li className="transition-transform cursor-pointer hover:scale-110 hover:text-blue-500">
                Advanced Technology
              </li>
              <li className="transition-transform cursor-pointer hover:scale-110 hover:text-blue-500">
                Data Management
              </li>
              <li className="transition-transform cursor-pointer hover:scale-110 hover:text-blue-500">
                Security Management
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="flex flex-col flex-wrap gap-3">
          <div className="text-2xl font-bold cursor-default">Contact Information</div>
          <div>
            <ul className="leading-loose">
              <li className="transition-transform cursor-pointer hover:scale-110 hover:text-blue-500">
                +91 123 456 789
              </li>
              <li className="transition-transform cursor-pointer hover:scale-110 hover:text-blue-500">
                info@example.com
              </li>
              <li className="transition-transform cursor-pointer hover:scale-110 hover:text-blue-500">
                90 East 65th Street, NY
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Copyright Section */}
      <hr />
      <div className="text-center p-9">
        <h1 className="text-white">Copyright 2024 Techwix All Rights Reserved</h1>
      </div>
    </div>
  );
};

export default Footer;
