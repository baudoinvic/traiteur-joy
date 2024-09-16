import React from "react";
import Button from "../layouts/Button";
import img from "../assets/img/about.png";
import food from "../assets/img/food.jpg";
import food1 from "../assets/img/food1.jpg";
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
        {/* <span className="text-lg md:text-2xl lg:text-3xl font-bold md:text-left">
          Explorez des plats délicieux
          <br className="hidden md:inline" /> et des saveurs uniques
        </span> */}
        <span className="text-lg md:text-2xl lg:text-3xl font-bold md:text-left">
          {t("explorezPlats")}
          <br className="hidden md:inline" />
          {t("saveursUniques")}
        </span>
      </div>
      <div className="pt-20">
        <div class="flex flex-col lg:flex-row items-center justify-center">
          <div class="flex flex-col justify-left ml-4 sm:mr-10 lg:mr-0 lg:ml-12">
            <span class="block text-left text-3xl font-bold text-gray-800 mb-4">
              Création d'Expériences
              <br /> Culinaires Exceptionnelles
            </span>
            <span class="text-gray-500 block text-left text-base mb-4 lg:mt-10">
              Nos créations culinaires sont méticuleusement préparées
              <br class="hidden lg:inline" />
              pour satisfaire une variété de goûts et de préférences.
              <br class="hidden lg:inline" />
              Notre équipe de cuisine collabore étroitement pour créer des plats
              innovants
              <br class="hidden lg:inline" />
              et un dévouement à l'excellence culinaire qui reflètent notre
              passion pour la nourriture
            </span>
          </div>

          <img
            src={food1}
            class="w-full lg:w-2/5 mt-8 lg:mt-0 ml-0 lg:ml-12 rounded-lg"
          ></img>
        </div>
      </div>
      ----
      <div className="pt-15">
        <div class="flex flex-col-reverse lg:flex-row items-center justify-center">
          <img src={food} class="w-full lg:w-2/5 mt-8 lg:mt-0 rounded-lg"></img>

          <div class="flex flex-col justify-left ml-4 sm:ml-8 lg:ml-12 mt-8 lg:mt-0">
            <span class="block text-left text-3xl font-bold text-gray-800 mb-4">
              Création de Moments
              <br class="hidden lg:inline" />
              Culinaires Délicieux
            </span>
            <span class="block text-left text-base text-gray-500 mb-4">
              Nous sommes experts dans la création d'expériences gastronomiques
              inoubliables
              <br class="hidden lg:inline" />
              De nos menus soigneusement conçus à notre présentation créative
              <br class="hidden lg:inline" />
              nous nous engageons à rendre chaque repas mémorable. Que ce soit
              nos plats savoureux
              <br class="hidden lg:inline" />
              notre objectif est de ravir vos papilles
            </span>
          </div>
        </div>
      </div>
      <div className="py-16 mt-20">
        <div className="max-w-6xl mx-auto px-5 lg:px-0">
          <h2 className="text-4xl font-bold text-center mb-12">
            Notre Expertise Culinaire
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4 text-brightColor">
                <i className="fas fa-utensils"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cuisine Raffinée</h3>
              <p className="text-gray-600">
                Découvrez nos plats élaborés avec passion, mêlant tradition et
                innovation culinaire.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4 text-brightColor">
                <i className="fas fa-wine-glass-alt"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sélection de Vins</h3>
              <p className="text-gray-600">
                Notre cave propose une gamme exquise de vins soigneusement
                choisis pour accompagner vos mets.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4 text-brightColor">
                <i className="fas fa-concierge-bell"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Service Personnalisé
              </h3>
              <p className="text-gray-600">
                Notre équipe attentionnée s'assure que chaque visite soit une
                expérience mémorable.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/about">
              <button className="bg-brightColor text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
                En Savoir Plus
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full md:w-4/5 mx-auto px-4 md:px-0 flex flex-col md:flex-row mb-20 pt-10">
        <span className="mb-6 md:mb-0 md:w-3/5 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 mb-4 leading-tight">
            Collaborons pour donner vie à vos idées
          </h2>
          <p className="text-lg  text-gray-700">
            Bonjour ! C'est le meilleur moyen de nous contacter pour collaborer
            sur votre nouveau projet. Si vous avez des questions, n'hésitez pas
            à nous joindre via notre adresse e-mail officielle ou notre numéro
            de téléphone. Nous avons hâte d'avoir de vos nouvelles et d'explorer
            ensemble de nouvelles opportunités passionnantes.
          </p>
        </span>
        <Link
          to="/contact"
          className="flex items-center justify-center md:ml-auto w-full md:w-2/5"
        >
          <button className="bg-brightColor text-white font-bold py-4 px-8 rounded-full shadow-md transform hover:scale-110 transition-transform duration-300 w-full md:w-auto">
            Contactez-nous
            <i className="fas fa-arrow-right ml-3"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
