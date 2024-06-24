import React from "react";
import { Link } from "react-router-dom";


const Dishes = () => {
  return (
   

    <div className="cooking-course pt-20">
      <div
        className="hero-section h-96 bg-cover bg-center flex flex-col justify-center items-center lg:px-32 px-5 relative"
        style={{
          backgroundImage:
            "url('http://swingncook.be/wp-content/uploads/2022/01/90dff0b2-6159-4863-8f66-436ff9bb5b68_1_105_c-1.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="text-4xl md:text-5xl lg:text-2xl font-bold text-white text-center pt-24 pb-10 relative z-10 leading-tight">
          COURS POUR POTAGER
          <br className="hidden md:block" /> ET JARDIN DEPUIS SON
          <br className="hidden md:block" /> IMPLANTATION ET ENTRETIENT
        </h1>
      </div>

      <div id="courses" className="container mx-auto px-4 py-16">
        <div className="mb-16">
          {/* <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center text-brightColor">
            Cours pour la récolte été, automne, 2024-2025
          </h3> */}
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Rejoignez-nous pour une expérience unique d'apprentissage dans le
            monde passionnant du jardinage et de la cuisine. Nos cours vous
            guideront de la graine à l'assiette.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h4 className="text-2xl font-semibold text-brightColor mb-4">
              Potager & Épices
            </h4>
            <ul className="text-gray-700 space-y-3 list-disc list-inside">
              <li>Épices et aromates (ex: basilic)</li>
              <li>Légumes biologiques si possible</li>
              <li>+-6 demi-journées sur 3 mois</li>
              <li>De la semence à la récolte</li>
            </ul>
            <p className="mt-6 text-gray-700">
              Explication des modèles de potager traditionnel ou en carré. Choix
              parmi différents types : tisanes, légumes perpétuels, aromatiques,
              pour enfants, et barbecue.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h4 className="text-2xl font-semibold text-brightColor mb-4">
              Cuisine & Jardin
            </h4>
            <ul className="text-gray-700 space-y-3 list-disc list-inside">
              <li>Conseil sur la culture selon préférences</li>
              <li>Cuisine française, belge, méditerranéenne, africaine</li>
              <li>2-3h d'explications et conseils</li>
              <li>Fleurs, arbres de saison et exotiques</li>
            </ul>
            <p className="mt-6 text-gray-700">
              <span className="font-semibold">TARIF:</span> 38 à 58 € par heure.
              Cours particuliers ou travaux à domicile. Par une cuisinière
              diplômée à Bruxelles, ancienne étudiante en Biochimie et éleveuse.
            </p>
          </div>
        </div>

        <div className="fish-course ">
          <h1 className="text-4xl md:text-5xl lg:text-2xl font-bold  text-center pt-24 pb-10 relative z-10 leading-tight">
            COURS DE FUMAGE ET
            <br className="hidden md:block" /> PRÉPARATION DE POISSONS
          </h1>
          <p className="text-xl  text-center text-gray-600 ">
            Maîtrisez l'art délicat du fumage et découvrez des techniques
            <br />
            professionnelles pour sublimer vos plats de poissons.
          </p>
        </div>

        <div id="fish-courses" className="container mx-auto px-4 py-16">
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center text-brightColor">
              Techniques et Recettes au Programme
            </h3>
            <p className="text-gray-600 text-center max-w-3xl mx-auto">
              De la sélection du poisson à la présentation finale, chaque étape
              est une opportunité d'apprendre et de se perfectionner.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h4 className="text-2xl font-semibold text-brightColor mb-4">
                Techniques de Base
              </h4>
              <ul className="text-gray-700 space-y-3 list-disc list-inside">
                <li>Fumage à chaud du saumon frais (+-55% moins cher)</li>
                <li>Habillage de divers poissons</li>
                <li>Préparation de fruits de mer (ex: crevettes grises)</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h4 className="text-2xl font-semibold text-brightColor mb-4">
                Plats Signature
              </h4>
              <ul className="text-gray-700 space-y-3 list-disc list-inside">
                <li>Gâteau de saumon</li>
                <li>Œufs de cabillaud et tarama</li>
                <li>Kefta de poissons</li>
                <li>Asperges au saumon fumé, sauce truffe noire</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h4 className="text-2xl font-semibold text-brightColor mb-4">
                Spécialités & Accords
              </h4>
              <ul className="text-gray-700 space-y-3 list-disc list-inside">
                <li>Mousse de chou-fleur au curry (pour crevettes)</li>
                <li>Calamars grillés ou frits</li>
                <li>Sauces maison : verte, tartare</li>
                <li>Garnitures : concombre, tomate, olives</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-gray-100 rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                <h4 className="text-2xl font-bold text-brightColor mb-4">
                  Votre Instructrice
                </h4>
                <p className="text-gray-700 mb-6">
                  Forte d'un parcours unique alliant cuisine, biochimie, et
                  élevage, votre instructrice apporte une perspective
                  multidimensionnelle à chaque cours. Son expérience en
                  maraîchage et jardinage garantit une compréhension approfondie
                  des ingrédients, de la terre à l'assiette.
                </p>
                <ul className="text-gray-700 space-y-2 list-disc list-inside">
                  <li>Cuisinière diplômée à Bruxelles</li>
                  <li>Ancienne étudiante en Biochimie</li>
                  <li>Expérience en élevage et maraîchage</li>
                </ul>
              </div>
              <div className="md:w-1/3 text-center">
                <p className="text-2xl font-bold text-gray-800 mb-4">Tarif</p>
                <p className="text-4xl font-bold text-brightColor mb-6">
                  38€ - 58€
                </p>
                <p className="text-gray-600 mb-6">par session</p>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <a
              href="contact"
              className="inline-block px-8 py-4 bg-white text-brightColor border-2 border-brightColor rounded-full text-lg font-semibold hover:bg-brightColor hover:text-white transition duration-300"
            >
              contact nous pur plus d'infos
            </a>

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dishes;
