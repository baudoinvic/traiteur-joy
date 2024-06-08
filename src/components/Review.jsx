import React from "react";
import ReviewCard from "../layouts/ReviewCard";
// import img1 from "../assets/img/pic1.png";
// import img2 from "../assets/img/pic2.png";
// import img3 from "../assets/img/pic3.png";

const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5 pt-20">
      <h3 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10 text-brightColor">
        Services Nourriture
      </h3>
      <p className="font-semibold">
        plats proposé par la Cheffe sont en et sont de +-21.8 euros par personne
      </p>

      <div className="mt-10 max-w-4xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
        <div className="flex">
          <div className="left-side flex-grow pr-10">
            <p className="text-lg font-semibold mb-4">Amuses Bouches</p>
            <ul className="space-y-4 text-gray-700">
              <li>
                <span className="font-medium">•</span> Poisson fumé, haricots
                vert vinaigrette à la truffe
              </li>
              <li>
                <span className="font-medium">•</span> Crêpe indien, guacamole
                d'avocat beurre, salami de poulet
              </li>
              <li>
                <p className="font-medium mb-2">
                  Mini tatin de racines de légumes oubliés :
                </p>
                <ul className="pl-6 space-y-1">
                  <li>
                    <span className="font-medium">•</span> Topinambour
                    accompagné de haricots secs sans peau
                  </li>
                  <li>
                    <span className="font-medium">•</span> Manioc accompagné de
                    haricots sans peau
                  </li>
                  <li>
                    <span className="font-medium">•</span> Igname accompagné de
                    houmous de petits pois secs
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  <span className="font-medium">•</span> Champignon crème de
                  cacahuète et anchois de Kivu, pâte de manioc
                </p>
                <ul className="pl-6 space-y-1 mt-1">
                  <li>
                    <span className="font-medium">•</span> Beurre persillée et
                    mini sandwich
                  </li>
                  <li>
                    <span className="font-medium">•</span> Mini boulettes à la
                    rwandaise
                  </li>
                  <li>
                    <span className="font-medium">•</span> Samboussa
                    rwandais-indiens
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="right-side w-32 text-right">
            <p className="text-lg font-semibold mb-4 invisible">Prix</p>
            <ul className="space-y-4 text-gray-800">
              <li>1,5 €</li>
              <li>1,5 €</li>
              <li>
                <p className="invisible mb-2">Prix</p>
                <ul className="space-y-1">
                  <li>0,5 €</li>
                  <li>0,5 €</li>
                  <li>1 €</li>
                </ul>
              </li>
              <li>
                <p>1 €</p>
                <ul className="space-y-1 mt-1">
                  <li>1 €</li>
                  <li>1 €</li>
                  <li>1 €</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 max-w-4xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
        <div className="flex">
          <div className="left-side flex-grow pr-10">
            <p className="text-lg font-semibold mb-4 text-gray-800">Entrées</p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>
                <span className="font-medium">•</span> Mini filets de poisson
                frits, sauce tartare
              </li>
              <li>
                <span className="font-medium">•</span> Salade niçoise
              </li>
              <li>
                <span className="font-medium">•</span> Salade de pâtes
              </li>
              <li>
                <span className="font-medium">•</span> Aubergines –fromage à
                l'italienne
              </li>
              <li>
                <span className="font-medium">•</span> Salade Kenyane épicée
              </li>
            </ul>

            <p className="text-lg font-semibold mb-4 text-gray-800">Plats</p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>
                <span className="font-medium">•</span> Croquette de ris de veau
              </li>
              <li>
                <span className="font-medium">•</span> Croquette de patates
                douces fumées
              </li>
              <li>
                <span className="font-medium">•</span> Agneau entier cuit en
                papillotte
              </li>
              <li>
                <span className="font-medium">•</span> Chèvre barbecue à la
                rwandaise
              </li>
              <li>
                <span className="font-medium">•</span> Poissons grands lacs
                frits en crème provinçale, oignon frits
              </li>
              <li>
                <span className="font-medium">•</span> Pondu, feuille de manioc
                – jus de viande (plat équatorienne)
              </li>
              <li>
                <span className="font-medium">•</span> Chili sin carne à la
                rwandaise (plat ancestrale rwandais) végétarien
              </li>
              <li>
                <span className="font-medium">•</span> Carbonnades rwandaises
                (traditionnelle belge-français revisité à la rwandaise)
              </li>
              <li>
                <span className="font-medium">•</span> Bananes vertes, poulet
                jaune (igisafuriya plat traditionnelle rwandais)
              </li>
              <li>
                <span className="font-medium">•</span> Pomme de terre sautées
                (végétarien)
              </li>
              <li>
                <span className="font-medium">•</span> Riz pilaf rwandais /
                indien
              </li>
            </ul>

            <p className="text-lg font-semibold mb-4 text-gray-800">
              Entremet & Desserts
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>
                <span className="font-medium">•</span> Sucettes de bananes
                plantains frits, fromage
              </li>
              <li>
                <span className="font-medium">•</span> Gâteau au drapeau
                rwandais
              </li>
              <li>
                <span className="font-medium">•</span> Mini crêpes impérial,
                avec purée de fruits exotiques de saison ou caramel
              </li>
              <li>
                <span className="font-medium">•</span> Beignets des grands lacs
              </li>
            </ul>
          </div>

          <div className="right-side w-24 text-right">
            <p className="text-2xl font-bold mb-6 invisible">Prix</p>

            <p className="text-lg font-semibold mb-4 invisible">Prix</p>
            <ul className="space-y-3 text-gray-800 mb-6">
              <li>1,2 €</li>
              <li>1 €</li>
              <li>0,7 €</li>
              <li>2 €</li>
              <li>0,5 €</li>
            </ul>

            <p className="text-lg font-semibold mb-4 invisible">Prix</p>
            <ul className="space-y-3 text-gray-800 mb-6">
              <li>1,5 €</li>
              <li>0,5 €</li>
              <li>4 €</li>
              <li>3 €</li>
              <li>4 €</li>
              <li>0,5 €</li>
              <li>0,3 €</li>
              <li>0,7 €</li>
              <li>3 €</li>
              <li>0,3 €</li>
              <li>0,7 €</li>
            </ul>

            <p className="text-lg font-semibold mb-4 invisible">Prix</p>
            <ul className="space-y-3 text-gray-800">
              <li>0,6 €</li>
              <li>3 €</li>
              <li>0,8 €</li>
              <li>0,2 €</li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-lg font-semibold mb-4 text-gray-800">
            Service Boissons <br />Sélection conseillée par la cheffe, revient à 16
            euros par personne
          </p>
          <div className="flex">
            <div className="left-side flex-grow pr-10">
              <ul className="space-y-3 text-gray-700">
                <li>
                  <span className="font-medium">•</span> Bierres locales (2) et
                  ou belges (1)
                </li>
                <li>
                  <span className="font-medium">•</span> Sangria fait maison
                  (Apéritif alcoolisé)
                </li>
                <li>
                  <span className="font-medium">•</span> Virgin Mojito (Apéritif
                  sans alcool)
                </li>
                <li>
                  <span className="font-medium">•</span> Eau (0.5 l)
                </li>
                <li>
                  <span className="font-medium">•</span> Soft
                </li>
                <li>
                  <span className="font-medium">•</span> Vin Rouge
                </li>
                <li>
                  <span className="font-medium">•</span> Vin Blanc
                </li>
                <li>
                  <span className="font-medium">•</span> Liqueur de banane
                  ancestrale digestive
                </li>
                <li>
                  <span className="font-medium">•</span> Café
                </li>
                <li>
                  <span className="font-medium">•</span> Thé nature ou citroné
                </li>
              </ul>
            </div>
            <div className="right-side w-24 text-right">
              <ul className="space-y-3 text-gray-800">
                <li>4 €</li>
                <li>3 €</li>
                <li>2,5 €</li>
                <li>1 €</li>
                <li>1 €</li>
                <li>6 €</li>
                <li>6 €</li>
                <li>2,5 €</li>
                <li>2,5 €</li>
                <li>1,5 €</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
