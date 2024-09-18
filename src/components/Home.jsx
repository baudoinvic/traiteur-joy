import React from "react";
import Button from "../layouts/Button";
import img from "../assets/img/about.png";
import pic2 from "../assets/img/pic2.jpg";
import pic5 from "../assets/img/pic5.jpg";
import { Link } from "react-router-dom";
import funy from "../assets/img/funy.jpg";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t, i18n } = useTranslation(); 
  return (
    <div className="landing-page">
      <div className="landing-page">
        <div className="min-h-[95vh] flex flex-col justify-center items-start lg:items-start lg:px-32 px-5 bg-[url('./assets/img/pic21.jpg')] bg-cover bg-center bg-no-repeat relative">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="w-full lg:w-2/3 space-y-8 z-10 text-white">
            <h1 className="font-bold text-5xl lg:text-7xl leading-tight">
              {t("Traiteur")} <span className="text-brightColor">Joy</span>
            </h1>
            <p className="text-lg lg:text-xl font-light max-w-2xl">
              {t(
                "Nous sommes là pour vous servir des plats délicieux, accompagnés de boissons raffinées. Nous servons toujours des plats savoureux à nos clients."
              )}
            </p>
            <div className="mt-10">
              <Link to="/menu">
                <button className="group relative overflow-hidden px-8 py-4 bg-brightColor rounded-full text-lg font-semibold transition duration-300">
                  <span className="absolute inset-0 w-full h-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  <span className="relative group-hover:text-brightColor transition duration-300">
                    {t("Voir notre menu")}
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Continue updating the rest of the text similarly */}
      </div>
      <div className="mt-20 px-5 lg:px-16 mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="lg:w-1/2">
            <img
              src={funy}
              alt="Concept gastronomique"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="lg:w-1/2 space-y-6 text-left">
            <p className="text-gray-700 leading-relaxed">
              {t("conceptGastronomique")}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t("partagerPassion")}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t("cuisineFraiche")}
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-20">
        <span className="text-lg md:text-2xl lg:text-3xl font-bold md:text-left">
          {t("explorezPlats")}
          <br className="hidden md:inline" />
          {t("saveursUniques")}
        </span>
      </div>
      <div className="pt-20">
        <div class="flex flex-col lg:flex-row items-center justify-center">
          <div className="flex flex-col justify-left ml-4 sm:mr-10 lg:mr-0 lg:ml-12">
            <span className="block text-left text-3xl font-bold text-gray-800 mb-4">
              {t("creationExperiences")}
              <br />
              {t("culinairesExceptionnelles")}
            </span>
            <span className="text-gray-500 block text-left text-base mb-4 lg:mt-10">
              {t("creationsCulinaires")}
              <br className="hidden lg:inline" />
              {t("satisfaireVariete")}
              <br className="hidden lg:inline" />
              {t("equipeCuisine")}
              <br className="hidden lg:inline" />
              {t("devouementExcellence")}
            </span>
          </div>

          <img
            src={pic2}
            class="w-full lg:w-2/5 mt-8 lg:mt-0 ml-0 lg:ml-12 rounded-lg"
          ></img>
        </div>
      </div>
      ----
     
      <div>
        <div className="pt-15">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center">
            <img
              src={pic5}
              className="w-full lg:w-2/5 mt-8 lg:mt-0 rounded-lg"
              alt="Food"
            />

            <div className="flex flex-col justify-left ml-4 sm:ml-8 lg:ml-12 mt-8 lg:mt-0">
              <span className="block text-left text-3xl font-bold text-gray-800 mb-4">
                {t("creationMoments")}
                <br className="hidden lg:inline" />
                {t("culinairesDelicieux")}
              </span>
              <span className="block text-left text-base text-gray-500 mb-4">
                {t("expertsCreation")}
                <br className="hidden lg:inline" />
                {t("menusConcus")}
                <br className="hidden lg:inline" />
                {t("engagementRepas")}
                <br className="hidden lg:inline" />
                {t("objectifPapilles")}
              </span>
            </div>
          </div>
        </div>
        <div className="py-16 mt-20">
          <div className="max-w-6xl mx-auto px-5 lg:px-0">
            <h2 className="text-4xl font-bold text-center mb-12">
              {t("notreExpertiseCulinaire")}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-4 text-brightColor">
                  <i className="fas fa-utensils"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("cuisineRaffinee")}
                </h3>
                <p className="text-gray-600">{t("platsElabores")}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-4 text-brightColor">
                  <i className="fas fa-wine-glass-alt"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("selectionVins")}
                </h3>
                <p className="text-gray-600">{t("cavePropose")}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-4 text-brightColor">
                  <i className="fas fa-concierge-bell"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("servicePersonnalise")}
                </h3>
                <p className="text-gray-600">{t("equipeAttentionnee")}</p>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link to="/about">
                <button className="bg-brightColor text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
                  {t("enSavoirPlus")}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-4/5 mx-auto px-4 md:px-0 flex flex-col md:flex-row mb-20 pt-10">
          <span className="mb-6 md:mb-0 md:w-3/5 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 mb-4 leading-tight">
              {t("collaboronsIdees")}
            </h2>
            <p className="text-lg text-gray-700">{t("bonjourContact")}</p>
          </span>
          <Link
            to="/contact"
            className="flex items-center justify-center md:ml-auto w-full md:w-2/5"
          >
            <button className="bg-brightColor text-white font-bold py-4 px-8 rounded-full shadow-md transform hover:scale-110 transition-transform duration-300 w-full md:w-auto">
              {t("contactezNous")}
              <i className="fas fa-arrow-right ml-3"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
