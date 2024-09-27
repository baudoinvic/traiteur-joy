import React from "react";
import funy from "../assets/img/funy.jpg";
import { useTranslation } from "react-i18next"; 

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-16 pt-20">
        <h1 className="text-4xl lg:text-5xl text-brightColor text-right mb-4 transform hover:scale-105 transition-transform duration-300">
          <span className="text-right mr-40">{t("aPropos")}</span>
        </h1>

        <div className="flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-16">
          <div className="lg:w-1/2 relative group">
            <img
              src={funy}
              alt="Restaurant Image"
              className="rounded-lg shadow-xl transform transition duration-500 group-hover:scale-105 group-hover:shadow-2xl"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-lg"></div>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              {t("passionGastronomie")}
              <span className="text-brightColor"> {t("gastronomieFine")}</span>
            </h2>


            <p className="text-gray-700 leading-relaxed mb-6 transition-opacity duration-500 hover:opacity-80">
              {t("bienvenue")}
            </p>

            <blockquote className="border-l-4 border-purple-500 pl-4 py-2 mb-6 bg-purple-100 bg-opacity-50 rounded-r-lg shadow-inner">
              <p className="text-gray-800 italic">{t("citation")}</p>
            </blockquote>

            <p className="text-gray-700 leading-relaxed transition-opacity duration-500 hover:opacity-80">
              {t("croyance")}

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
