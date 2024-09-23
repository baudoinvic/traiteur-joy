import React from "react";

import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useTranslation} from "react-i18next";
function Contact() {

 const { t, i18n} = useTranslation();

    const [formData, setFormData] = useState({
    Firstname: "",
    Lastname: "",
    email: "",
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
        url: "http://localhost:5000/api/contact",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: JSON.stringify(formData),
      });

      console.log("Response Data:", response.data);
      toast.success("Thank you for your feedback");
    
       setFormData({
         Firstname: "",
         Lastname: "",
         email: "",
         message: "",
       });

       document.getElementById("firstname").focus();



    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error);
      toast.error("Failed to send message. Please try again later.");
    }
}
  return (
    <div className="contact-page bg-gray-100 pt-20">
      <div
        className="hero-section h-screen bg-cover bg-center flex flex-col justify-center items-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white text-center relative z-10 mb-6 leading-tight">
          {t("contact.hero.title")}
        </h1>
        <p className="text-xl text-gray-200 text-center relative z-10 mb-12 max-w-3xl px-6">
          {t("contact.hero.description")}
        </p>
      </div>

      <div
        id="formulaire-contact"
        className="container mx-auto px-4 py-20 -mt-48 relative z-20"
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 bg-brightColor text-white p-12">
            <h2 className="text-4xl font-bold mb-6">
              {t("contact.info.title")}
            </h2>
            <p className="text-lg mb-8">{t("contact.info.description")}</p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <IoLocationOutline className="text-4xl text-white opacity-80" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t("contact.address.title")}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-80">
                    {t("contact.address.line1")}
                    <br />
                    {t("contact.address.line2")}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MdOutlineMailOutline className="text-4xl text-white opacity-80" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t("contact.email.title")}
                  </h3>
                  <p className="text-sm opacity-80">
                    {t("contact.email.address")}
                  </p>
                  <a
                    href="mailto:traiteurjoy@gmail.com"
                    className="text-sm font-medium underline hover:text-gray-200 transition-colors inline-block mt-2"
                  >
                    {t("contact.email.action")}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaPhoneAlt className="text-3xl text-white opacity-80" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t("contact.phone.title")}
                  </h3>
                  <p className="text-sm opacity-80">
                    {t("contact.phone.number")}
                  </p>
                  <a
                    href="tel:+32498778291"
                    className="text-sm font-medium underline hover:text-gray-200 transition-colors inline-block mt-2"
                  >
                    {t("contact.phone.action")}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 p-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              {t("contact.form.title")}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstname"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t("contact.form.firstname")}
                  </label>
                  <input
                    type="text"
                    id="Firstname"
                    name="Firstname"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-brightColor focus:bg-white focus:ring-0"
                    placeholder={t("contact.form.firstnamePlaceholder")}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="Lastname"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t("contact.form.lastname")}
                  </label>
                  <input
                    type="text"
                    id="Lastname"
                    name="Lastname"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-brightColor focus:bg-white focus:ring-0"
                    placeholder={t("contact.form.lastnamePlaceholder")}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-brightColor focus:bg-white focus:ring-0"
                  placeholder={t("contact.form.emailPlaceholder")}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-brightColor focus:bg-white focus:ring-0"
                  placeholder={t("contact.form.messagePlaceholder")}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brightColor text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-brightColor-dark transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brightColor focus:ring-offset-2"
              >
                {t("contact.form.submit")}
              </button>
            </form>
            <ToastContainer className="pt-40" />
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default Contact;
