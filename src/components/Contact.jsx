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
          Have a project in mind that you think we’d be a great <br />
          fit for it? We’d love to know what you’re thinking
        </span>
      </div>

      <div className=" flex items-center justify-center mt-10">
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
      <br />
      <br />

      <div className="flex flex-col md:flex-row justify-between mt-8 ml-10 mr-10">
        <div className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-md mb-4 md:mb-0 md:mr-4">
          <h1 className="text-xl md:text-2xl font-semibold mb-2">Address</h1>
          <IoLocationOutline className="text-3xl md:text-4xl text-gray-600" />
          <span className="text-sm md:text-base">KG 460 street</span>
        </div>

        <div className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-md mb-4 md:mb-0 md:mx-4">
          <h1 className="text-xl md:text-2xl font-semibold mb-2">Email Us</h1>
          <MdOutlineMailOutline className="text-3xl md:text-4xl text-gray-600" />
          <span className="text-sm md:text-base">
            info@fabtechhub.gmail.com
          </span>
        </div>

        <div className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-md">
          <h1 className="text-xl md:text-2xl font-semibold mb-2">Call Us</h1>
          <FaPhoneAlt className="text-3xl md:text-4xl text-gray-600" />
          <span className="text-sm md:text-base">+250783012138</span>
        </div>
      </div>

      <div className="items-center p-4 mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d30607.79514638295!2d30.066595630129367!3d-1.9550632439832505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssp rwanda!5e0!3m2!1sen!2srw!4v1663256798141!5m2!1sen!2srw"
          width="100%"
          height="600px"
        />
      </div>
    </div>
  );
}

export default Contact;
