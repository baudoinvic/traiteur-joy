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
          Entrons en Contact
        </h1>
        <p className="text-xl text-gray-200 text-center relative z-10 mb-12 max-w-3xl px-6">
          Vous avez une question ou besoin de conseils ? Nous sommes là pour
          vous aider. Remplissez le formulaire ci-dessous et commençons une
          conversation qui pourrait mener à une brillance culinaire.
        </p>
      </div>

      <div
        id="formulaire-contact"
        className="container mx-auto px-4 py-20 -mt-48 relative z-20"
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 bg-brightColor text-white p-12">
            <h2 className="text-4xl font-bold mb-6">
              Nous Serions Ravis de Vous Entendre
            </h2>
            <p className="text-lg mb-8">
              Que vous soyez novice en cuisine ou chef chevronné, votre voyage
              avec nous commence ici. Partagez vos pensées, et créons ensemble
              quelque chose d'extraordinaire.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <IoLocationOutline className="text-4xl text-white opacity-80" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Notre Adresse</h3>
                  <p className="text-sm leading-relaxed opacity-80">
                    Rue Joseph Stevens 28, 1000 Bruxelles
                    <br />
                    TVA 0744.562.496
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MdOutlineMailOutline className="text-4xl text-white opacity-80" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Écrivez-nous</h3>
                  <p className="text-sm opacity-80">traiteurjoy@gmail.com</p>
                  <a
                    href="mailto:traiteurjoy@gmail.com"
                    className="text-sm font-medium underline hover:text-gray-200 transition-colors inline-block mt-2"
                  >
                    Envoyer un Email
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaPhoneAlt className="text-3xl text-white opacity-80" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Appelez-nous</h3>
                  <p className="text-sm opacity-80">+32 498 77 82 91</p>
                  <a
                    href="tel:+32498778291"
                    className="text-sm font-medium underline hover:text-gray-200 transition-colors inline-block mt-2"
                  >
                    Appeler Maintenant
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 p-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Envoyez-nous un Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstname"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="Firstname"
                    name="Firstname"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-brightColor focus:bg-white focus:ring-0"
                    placeholder="ex: Marie"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="Lastname"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="Lastname"
                    name="Lastname"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-brightColor focus:bg-white focus:ring-0"
                    placeholder="ex: Dupont"
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
                  Adresse Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-brightColor focus:bg-white focus:ring-0"
                  placeholder="vous@example.com"
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Numéro de Téléphone
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-brightColor focus:bg-white focus:ring-0"
                  placeholder="ex: +32 598 80 83 21"
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Votre Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-brightColor focus:bg-white focus:ring-0"
                  placeholder="Parlez-nous de vos rêves culinaires..."
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brightColor text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-brightColor-dark transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brightColor focus:ring-offset-2"
              >
                Envoyer le Message
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
