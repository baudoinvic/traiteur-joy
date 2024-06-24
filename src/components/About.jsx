import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";
import funy from "../assets/img/funy.jpg";

const About = () => {
  return (
   
    <div className="min-h-screen  py-16 lg:py-24 ">
      <div className="container mx-auto px-4 lg:px-16 pt-20">
        <h1 className="text-4xl lg:text-5xl  text-brightColor text-right mb-12 transform hover:scale-105 transition-transform duration-300">
          <span className="text-right mr-40">À propos de Traiteur Joy</span>
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
              Une Passion pour la{" "}
              <span className="text-brightColor">Gastronomie Fine</span>
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6 transition-opacity duration-500 hover:opacity-80">
              Bienvenue chez Traiteur Joy, où nous célébrons l'art de la
              gastronomie fine et des expériences culinaires exceptionnelles.
              Notre restaurant est un travail d'amour, né d'une passion pour
              créer des moments inoubliables à travers des saveurs exquises et
              un service impeccable.
            </p>

            <blockquote className="border-l-4 border-purple-500 pl-4 py-2 mb-6 bg-purple-100 bg-opacity-50 rounded-r-lg shadow-inner">
              <p className="text-gray-800 italic">
                "Chaque repas est un voyage sensoriel qui titille le palais et
                ravit les sens."
              </p>
            </blockquote>

            <p className="text-gray-700 leading-relaxed transition-opacity duration-500 hover:opacity-80">
              Chez Traiteur Joy, nous croyons que le repas ne consiste pas
              seulement à satisfaire la faim. C'est une immersion dans un monde
              de saveurs. Nos chefs talentueux élaborent méticuleusement chaque
              plat, en utilisant uniquement les ingrédients les plus fins et les
              plus frais, garantissant que chaque bouchée soit un chef-d'œuvre.
            </p>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {[
            { title: "Ingrédients Frais", icon: "🌿" },
            { title: "Chefs Talentueux", icon: "👨‍🍳" },
            { title: "Ambiance Chaleureuse", icon: "🕯️" },
          ].map(({ title, icon }) => (
            <div
              key={title}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <p className="text-4xl mb-4">{icon}</p>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {title}
              </h3>
              <p className="text-gray-600">
                Une partie intégrante de l'expérience Traiteur Joy.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
