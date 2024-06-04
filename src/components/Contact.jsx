import React from "react";

import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function Contact() {
    const [formData, setFormData] = useState({
    Firstname: "",
    Lastname: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
     const fieldName = e.target.name;

    setFormData({
      ...formData,
      [fieldName]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let token = localStorage.getItem("token");
      console.log("Request Data:", formData);
 

      const response = await axios({
        url: "https://fabtechhub.onrender.com/FabtechHub/contacts/makecontact",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: JSON.stringify(formData),
      });

      console.log("Response Data:", response.data);
      toast.success("Thank you for your feedback");
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error);
      toast.error("Failed to send message. Please try again later.");
    }
}
  return (
    <div className="">
      <div className="text-center  pt-40 ">
        <h2 className="text-4xl font-extrabold mb-6  text-brightColor ">
          Contact Us
        </h2>
        <span className="text-sm md:text-base lg:text-lg ">
          please fill free to fill this form if you have a question <br />
          we are here to help you and guide you as well
        </span>
      </div>

      <div className=" flex items-center justify-center mt-10 ">
        <div className="bg-white p-8 rounded shadow-md w-full md:w-7/6 lg:w-1/2 xl:w-1/3">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium text-gray-600"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="Firstname"
                  name="Firstname"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Your First Name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="Lastname"
                  className="block text-sm font-medium text-gray-600"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="Lastname"
                  name="Lastname"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Your Last Name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Your Email"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-600"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Your Phone Number"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Your Message"
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-brightColor text-white px-4 py-2 rounded-md  w-full"
            >
              Send Message
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
      <div className="flex flex-row items-center mt-16 px-6 space-x-10">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden mb-8">
          <div className="bg-brightColor text-white p-4">
            <h1 className="text-base font-semibold flex items-center">
              <IoLocationOutline className="text-3xl mr-3" />
              Address
            </h1>
          </div>
          <div className="p-6">
            <p className="text-gray-700 text-xs leading-relaxed">
              Rue Joseph Stevens 28
              <br />
              1000 Bruxelles
              <br />
              TVA 0744.562.496
            </p>
          </div>
        </div>

        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden mb-8">
          <div className="bg-brightColor text-white p-4">
            <h1 className="text-base font-semibold flex items-center">
              <MdOutlineMailOutline className="text-3xl mr-3" />
              Email
            </h1>
          </div>
          <div className="p-6">
            <p className="text-gray-700 text-xs">traiteurjoy@gmail.com</p>
            <div className="mt-6 flex items-center text-gray-600 hover:text-green-700 transition-colors">
              <MdOutlineMailOutline className="text-2xl mr-2" />
              <a
                href="mailto:traiteurjoy@gmail.com"
                className="text-xs font-medium"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>

        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-brightColor text-white p-4">
            <h1 className="text-base font-semibold flex items-center">
              <FaPhoneAlt className="text-2xl mr-3" />
              Telephone
            </h1>
          </div>
          <div className="p-6">
            <p className="text-gray-700 text-xs">+32 498 77 82 91</p>
            <div className="mt-6 flex items-center text-purple-600 hover:text-purple-700 transition-colors">
              <FaPhoneAlt className="text-2xl mr-2" />
              <a href="tel:+32498778291" className="text-xs font-medium">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
