import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <section class=" py-16">
        <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-8 md:mb-0">
              <img
                src="http://localhost:5173/src/assets/img/img2.jpg"
                alt="Restaurant Image"
                class="rounded-lg shadow-lg"
              ></img>
            </div>
            <div class="md:w-1/2 md:pl-8">
              <h2 class="text-3xl font-bold mb-4">À propos de Traiteur Joy</h2>
              <p class="text-gray-700 mb-6">
                Bienvenue chez Traiteur Joy, où nous célébrons l'art de la
                gastronomie fine et des expériences culinaires exceptionnelles.
                Notre restaurant est un travail d'amour, né d'une passion pour
                créer des moments inoubliables à travers des saveurs exquises et
                un service impeccable.
              </p>
              <p class="text-gray-700 mb-8">
                Chez Traiteur Joy, nous croyons que le repas ne consiste pas
                seulement à satisfaire la faim, mais à s'immerger dans un voyage
                sensoriel qui titille le palais et ravit les sens. Nos chefs
                talentueux élaborent méticuleusement chaque plat, en utilisant
                uniquement les ingrédients les plus fins et les plus frais,
                garantissant que chaque bouchée soit un chef-d'œuvre de saveur
                et de présentation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
