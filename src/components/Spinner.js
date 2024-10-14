import React from "react";
import { FaPersonRunning } from "react-icons/fa6";

const Spinner = () => {
  const scrollToHeader = () => {
    const header = document.getElementById("header");
    if (header) {
      header.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="fixed p-4 transition duration-300 rounded-full shadow-lg cursor-pointer right-4 bottom-4 bg-blue-950 hover:bg-blue-700"
      onClick={scrollToHeader}
      aria-label="Scroll to header"
    >
      <FaPersonRunning className="text-4xl font-bold text-white" />
    </div>
  );
};

export default Spinner;
