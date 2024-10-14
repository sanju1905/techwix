import React from "react";
import blackteam from "../public/img/blackteam.jpg";
import blueteam from "../public/img/blueteam.jpg";

const Who = () => {
  return (
    <div id="about" className="flex flex-wrap content-center gap-2 p-5 m-2 mt-10 ">
      {/* Text Section */}
      <div className="flex flex-col justify-between rounded p-3 shadow-lg bg-white border-blue-500 leading-loose w-[800px] max-w-full">
  <div className="mb-4">
    <p className="text-xl text-blue-500">Who we are</p>
  </div>
  <div className="mb-6">
    <h1 className="text-5xl font-bold leading-tight">
      Highly Tailored IT Design, Management & Support Services.
    </h1>
  </div>
  <div className="mb-6">
    <p className="text-md">
      Accelerate innovation with world-class tech teams. We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.
    </p>
  </div>
  <div className="flex gap-4">
    <div>
      <p className="font-bold">Sunil</p>
      <p>CEO, Techwix</p>
    </div>
    <div>
      <p>Call to ask any question</p>
      <p className="font-bold text-blue-500">0123-456-7890</p>
    </div>
  </div>
</div>


      {/* Image Section */}
      <div className="relative bg-white shadow-lg">
        {/* Blue Team Image */}
        <div className="bg-white shadow-lg">
          <img src={blueteam} alt="Blue Team" className="w-full h-auto rounded" />
        </div>

        {/* Black Team Image */}
        <div className="absolute bottom-5 left-0 w-[90%] p-2 bg-white shadow-xl">
          <img src={blackteam} alt="Black Team" className="rounded" />
        </div>
      </div>
    </div>
  );
};

export default Who;
