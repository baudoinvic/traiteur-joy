import React from "react";
import Button from "../layouts/Button";
import img from "../assets/img/about.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="landing-page">
   
      <div className="min-h-[95vh] flex flex-col justify-center items-start lg:items-start lg:px-32 px-5 bg-[url('./assets/img/pic21.jpg')] bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="w-full lg:w-2/3 space-y-8 z-10 text-white">
          <h1 className="font-bold text-5xl lg:text-7xl leading-tight">
            Traiteur <span className="text-brightColor">Joy</span>
          </h1>
          <p className="text-lg lg:text-xl font-light max-w-2xl">
            Nous sommes là pour vous servir des plats délicieux, accompagnés de
            boissons raffinées. Nous servons toujours des plats savoureux à nos
            clients.
          </p>
          <div className="mt-10">
            <Link to="/menu">
              <button className="group relative overflow-hidden px-8 py-4 bg-brightColor rounded-full text-lg font-semibold transition duration-300">
                <span className="absolute inset-0 w-full h-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="relative group-hover:text-brightColor transition duration-300">
                  Voir notre menu
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="description mt-20 px-5 lg:px-0 mx-auto w-full lg:w-2/3 xl:w-1/2 text-center">
        <p className="text-gray-500  leading-relaxed">
          J'ai conçu ce concept gastronomique pour vous il y a dix ans ! C'est
          toujours un réel plaisir de vous accueillir chez nous, dans notre loft
          <br /> pour un moment de convivialité en cuisine puis à table autour
          d'un repas que nous préparons ensemble.
        </p>
        <p className="mt-10 text-gray-500  leading-relaxed">
          ✻ Je n'ai pas été formé par un grand chef. L'idée ici est de partager
          une passion. Le plaisir d'être en cuisine m'a été transmis par
          <br /> mon grand-père, mon Nonno. Mes influences ? L'Italie, avant
          tout, ses arômes, ses vins et son huile d'olive pour une cuisine
          simple et authentique.
          <br /> Plus largement, il s'agit d'une cuisine fraîche, colorée et
          saine aux accents méditerranéens, mais aussi de répondre à vos envies
          et aux défis
          <br /> que vous souhaitez me lancer.
        </p>
      </div>
      <div className="text-center mt-10">
        <span className="text-lg md:text-2xl lg:text-3xl font-bold md:text-left">
          Explorez des plats délicieux
          <br className="hidden md:inline" /> et des saveurs uniques
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
            src="http://localhost:5173/src/assets/img/img5.jpg"
            class="w-full lg:w-2/5 mt-8 lg:mt-0 ml-0 lg:ml-12 rounded-lg"
          ></img>
        </div>
      </div>
      ----
      <div className="pt-15">
        <div class="flex flex-col-reverse lg:flex-row items-center justify-center">
          <img
            src="http://localhost:5173/src/assets/img/img2.jpg"
            class="w-full lg:w-2/5 mt-8 lg:mt-0 rounded-lg"
          ></img>

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
      <div className="flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 mt-20">
        <img src={img} alt="img" />

        <div className="space-y-4 lg:pt-14">
          <h1 className="font-semibold text-4xl text-center md:text-start">
            Pourquoi Nous Choisir ?
          </h1>
          <p className="text-gray-500 block">
            Nous croyons que chaque repas doit être une expérience. Notre
            passion pour l'excellence culinaire et notre engagement envers la
            qualité nous ont fait devenir un favori parmi les amateurs de bonne
            cuisine. Voici pourquoi vous devriez nous choisir. Notre menu
            propose un mélange de plats traditionnels et contemporains, élaborés
            avec les meilleurs ingrédients. De nos plats signatures
          </p>
          <p className="text-gray-500 block">
            Notre restaurant est conçu pour offrir un environnement chaleureux
            et accueillant où vous pouvez vous détendre et apprécier votre
            repas. Que vous dîniez en famille, entre amis, ou lors d'un
            rendez-vous romantique, vous vous sentirez comme chez vous.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button title="En Savoir Plus" />
          </div>
        </div>
      </div>
      <div className="ml-4 md:ml-16 mr-4 md:mr-16 p-10 md:p-24 flex flex-col md:flex-row items-center bg-gradient-to-br from-gray-100 to-blue-50 shadow-lg rounded-2xl mt-6 md:mt-12   ">
        <span className="mr-8 md:w-3/5 md:mr-0 md:mt-0 text-center md:text-left ">
          <h2 className="text-2xl md:text-2xl font-extrabold text-gray-800 mb-6 leading-tight">
            Collaborons pour donner vie à vos idées
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            Bonjour ! C'est le meilleur moyen de nous contacter pour collaborer
            sur votre nouveau projet. Si vous avez des questions, n'hésitez pas
            à nous joindre via notre adresse e-mail officielle ou notre numéro
            de téléphone. Nous sommes également actifs sur divers réseaux
            sociaux, alors connectez-vous avec nous sur Facebook, Instagram ou
            LinkedIn. Nous avons hâte d'avoir de vos nouvelles et d'explorer
            ensemble de nouvelles opportunités passionnantes.
          </p>
        </span>
        <Link
          to="/contact"
          className="flex items-center justify-center mt-8 md:mt-0 md:ml-auto w-full md:w-2/5"
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
