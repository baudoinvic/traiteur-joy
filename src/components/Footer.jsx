import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import traite from "../assets/img/traite.png";
import { Link } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import {
  
  FaPhoneAlt,
} from "react-icons/fa";
import { useState } from "react";
import { useTranslation } from "react-i18next";


const Footer = () => {
 const {t, i18n} = useTranslation();
 
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let token = localStorage.getItem("token");
      console.log("Newsletter Subscription Email:", email);

      const response = await axios({
        url: "https://auction-website-auji.onrender.com/api/v1/subscriptions",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: JSON.stringify({ email }),
      });

      console.log("Subscription Response Data:", response.data);
      toast.success("Merci de vous être abonné à notre newsletter");
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error);
      toast.error("Failed to subscribe. Please try again later.");
    }
  }


  return (
   
    <div className="bg-gray-900 text-white rounded-t-3xl mt-8 md:mt-0 shadow-2xl">
      <div className="container mx-auto p-8 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <img
                src={traite}
                alt="Logo Traiteur Joy"
                className="w-16 h-auto rounded-full shadow-lg"
              />
              <h1 className="font-bold text-2xl text-brightColor">
                {t("title")}
              </h1>
            </div>
            <p className="text-gray-300">{t("description")}</p>

            <div>
              <p className="text-lg font-semibold mb-3">{t("followUs")}</p>
              <form
                onSubmit={handleSubmit}
                action="/abonnement"
                method="post"
                className="flex flex-col space-y-3"
              >
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleChange}
                  placeholder={t("email")}
                  required
                  className="px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-brightColor"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-brightColor text-white rounded-lg font-semibold hover:bg-brightColor-dark transition duration-300 shadow-md"
                >
                  {t("subscribe")}
                </button>
              </form>
              <ToastContainer />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brightColor mb-6">
              {t("navigation")}
            </h2>
            <nav className="space-y-3">
              <Link
                to="/home"
                className="block text-gray-300 hover:text-brightColor transition duration-300"
              >
                {t("home")}
              </Link>
              <Link
                to="/about"
                className="block text-gray-300 hover:text-brightColor transition duration-300"
              >
                {t("aboutUs")}
              </Link>
              <Link
                to="/menu"
                className="block text-gray-300 hover:text-brightColor transition duration-300"
              >
                {t("menu")}
              </Link>
              <Link
                to="/contact"
                className="block text-gray-300 hover:text-brightColor transition duration-300"
              >
                {t("contactUs")}
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brightColor mb-6">
              {t("importantLinks")}
            </h2>
            <nav className="space-y-3">
              <Link
                to="/review"
                className="block text-gray-300 hover:text-brightColor transition duration-300"
              >
                {t("generalMenu")}
              </Link>
              <Link
                to="/dishes"
                className="block text-gray-300 hover:text-brightColor transition duration-300"
              >
                {t("cookingClasses")}
              </Link>
              <Link
                to="/gallery"
                className="block text-gray-300 hover:text-brightColor transition duration-300"
              >
                {t("gallery")}
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brightColor mb-6">
              {t("contacte")}
            </h2>
            <nav className="space-y-4">
              <a
                href={`mailto:${t("email")}`}
                className="block text-gray-300 hover:text-brightColor transition duration-300 flex items-center"
              >
                <MdOutlineMailOutline className="text-2xl mr-3" />
                {t("email")}
              </a>
              <a
                href={`tel:${t("phone")}`}
                className="block text-gray-300 hover:text-brightColor transition duration-300 flex items-center"
              >
                <FaPhoneAlt className="text-xl mr-3" />
                {t("phone")}
              </a>
              <a
                href="https://goo.gl/maps/yourAddress"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-brightColor transition duration-300 flex items-start"
              >
                <IoLocationOutline className="text-2xl mr-3 mt-1" />
                <span>{t("address")}</span>
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">{t("copyright")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
