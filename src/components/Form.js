import React, { useState } from "react";
import image1 from "../public/img/imag2.svg";
import { TbBrandGmail } from "react-icons/tb";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState(""); // Initialize with an empty string

  const generateEmailUrl = (name, email, phoneNumber, service, message) => {
    const encodedName = encodeURIComponent(name);
    const encodedEmail = encodeURIComponent(email);
    const encodedPhoneNumber = encodeURIComponent(phoneNumber);
    const encodedService = encodeURIComponent(service);
    const encodedMessage = encodeURIComponent(message);

    return `https://mail.google.com/mail/?view=cm&fs=1&to=sanjaykandula3@gmail.com&su=Enquiry%20About%20Your%20Services&body=Hello%2C%0D%0A%0D%0AName%3A%20${encodedName}%0D%0AEmail%3A%20${encodedEmail}%0D%0APhone%20Number%3A%20${encodedPhoneNumber}%0D%0ASelected%20Service%3A%20${encodedService}%0D%0AMessage%3A%20${encodedMessage}%0D%0A%0D%0AThank%20you!`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailContent = generateEmailUrl(
      name,
      email,
      phoneNumber,
      service,
      message
    );

    // Redirect to the email URL
    window.open(emailContent, "_blank");
  };

  return (
    <div
      className="flex flex-wrap items-center justify-center gap-5 bg-[#F8F8F8]"
      id="contact"
    >
      <div className="w-[30rem] p-6 m-5">
        <img src={image1} alt="Contact" className="h-[20rem] w-full" />
      </div>

      <div className="w-[30rem] p-6 m-5 leading-loose">
        <div>
          <h1 className="text-4xl font-bold text-gray-600">
            Request A{" "}
            <span className="text-4xl text-blue-500">Call Back</span>
          </h1>
        </div>
        <div className="mt-5">
          <p className="font-semibold text-gray-500">
            If you have any questions or need further assistance, please fill
            out the form below, and one of our representatives will reach out to
            you shortly. We are committed to providing you with the best
            possible support.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-5 mt-5">
            <input
              type="text"
              placeholder="Name*"
              className="w-full p-3 bg-white border rounded-lg shadow-sm outline-none focus:border-blue-400"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email Id*"
              className="w-full p-3 bg-white border rounded-lg shadow-sm outline-none focus:border-blue-500"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-5">
            <input
              type="text"
              placeholder="Phone Number*"
              className="w-full p-3 bg-white border rounded-lg shadow-sm outline-none focus:border-blue-400"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mt-5">
            <select
              className="w-full p-3 text-gray-500 bg-white border rounded-lg shadow-sm outline-none focus:border-blue-400"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            >
              <option value="" disabled hidden>
                Choose a service
              </option>
              <option value="Introduction to Programming">
                Website Service
              </option>
              <option value="Advanced Data Structures and Algorithms">
                App Development
              </option>
              <option value="Frontend Web Development">
                Database Management
              </option>
              <option value="Backend Server Development">
                UI & UX Service 
              </option>
            </select>
          </div>
          <div className="mt-5">
            <textarea
              type="text"
              placeholder="Message"
              className="w-full p-3 bg-white border rounded-lg shadow-sm outline-none focus:border-blue-400"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="transition-transform duration-700 w-[10rem] ease-in-out hover:scale-110 bg-blue-400 hover:bg-blue-950 border rounded-full p-3 text-white font-bold"
            >
              Send Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
