import React from "react";
import point from "../public/img/point.png";
import lock from "../public/img/cloud.png";
import bulb from "../public/img/bulb.png";
import cloud from '../public/img/lock.png'
const Services = () => {
  return (
    <div className="flex flex-wrap  justify-between p-5 gap-7 bg-[#010F31]" id="services">
      <div className=" flex flex-col gap-7 border-2 h-auto w-[300px]  p-10 rounded transition-transform hover:scale-110 cursor-pointer bg-white shadow-lg">
        <div>
          <img src={point} className="text-blue-300" />
        </div>
        <div>
          <h1 className="text-xl font-bold">Infrastructure Technology</h1>
        </div>
        <div>
          <p>
            Accelerate innovation with world-class tech teams We’ll match you to
            an entire
          </p>
        </div>
        <div>
          <button className="h-auto p-2 font-bold text-green-500 transition-transform hover:scale-110">Read More</button>
        </div>
      </div>

      <div className=" flex flex-col flex-wrap gap-7 border-2 h-auto w-[300px]  p-10 rounded transition-transform hover:scale-110 cursor-pointer bg-white shadow-lg">
        <div>
          <img src={lock} className="text-blue-300" />
        </div>
        <div>
          <h1 className="text-xl font-bold">IT Consultancy & solution</h1>
        </div>
        <div>
          <p>
          Accelerate innovation with world-class tech teams We’ll match you to an entire
          </p>
        </div>
        <div>
          <button className="h-auto p-2 font-bold text-green-500 transition-transform hover:scale-110">Read More</button>
        </div>
      </div>


      <div className=" flex flex-col flex-wrap gap-7 border-2 h-auto w-[300px]  p-10 rounded transition-transform hover:scale-110 cursor-pointer bg-white shadow-lg">
        <div>
          <img src={bulb} className="text-blue-300" />
        </div>
        <div>
          <h1 className="text-xl font-bold">Cloud managed services</h1>
        </div>
        <div>
          <p>
          Accelerate innovation with world-class tech teams We’ll match you to an entire
          </p>
        </div>
        <div>
          <button className="h-auto p-2 font-bold text-green-500 transition-transform hover:scale-110">Read More</button>
        </div>
      </div>



      <div className=" flex flex-wrap flex-col gap-7 border-2 h-auto w-[300px]  p-10 rounded transition-transform hover:scale-110 cursor-pointer bg-white shadow-lg">
        <div>
          <img src={cloud} className="text-blue-300" />
        </div>
        <div>
          <h1 className="text-xl font-bold">Blockchain technology</h1>
        </div>
        <div>
          <p>
          Accelerate innovation with world-class tech teams We’ll match you to an entire
          </p>
        </div>
        <div>
          <button className="h-auto p-2 font-bold text-green-500 transition-transform hover:scale-110">Read More</button>
        </div>
      </div>



    </div>
  );
};

export default Services;
