import React from "react";


const Dishes = () => {
  return (
    <div className="cooking course pt-20">
      <div
        className="h-96
         bg-cover bg-center flex flex-col justify-center items-center lg:px-32 px-5 "
        style={{
          backgroundImage:
            "url('http://swingncook.be/wp-content/uploads/2022/01/90dff0b2-6159-4863-8f66-436ff9bb5b68_1_105_c-1.jpeg')",
        }}
      >
        <h1 className="text-4xl font-semibold text-white text-center pt-24 pb-10">
          COURS POUR POTAGER
          <br /> ET JARDIN DEPUIS SON IMPLANTATION
          <br /> ET ENTRETIENT
        </h1>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="pt-20 mb-10">
          <h3 className="text-3xl font-bold text-green-600 mb-4">
            Cours pour la récolte été, automne,2024-2025
          </h3>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="left-side">
            <p className="text-gray-700 mb-4">
              Epices: Aromates ex: basilic Légumes biologiques si possible Cours<br />
              de +-6 demi-journées dans environ 3 mois, entre semences et
              récoltes
            </p>
            <p className="text-gray-700 mb-4">
              Explication des modèles de potager traditionnelle ou en carré.
              cours offert<br /> Choix parmi les différents potager : pour tisanes et
              infusions, pour légumes perpétuels<br /> pour les aromatiques, pour les
              enfants, pour barbecue
            </p>
          </div>
          <div className="right-side">
            <p className="text-gray-700 mb-4">
              Conseil sur la culture des légumes selon les goûts, saisons, son<br />
              métabolisme, sa cuisinecuisine à plusieurs choix parmi la
              française<br /> belge, méditerranéenne, africain Centre - Est.2-3h
              Explications, conseils sur<br /> les fleurs et arbres de saisons ou de
              toute l'année et exotiques. cours offert
            </p>
            <p className="text-gray-700 mb-4 ">
              TARIF: 38 à 58 € par heure de cours particuliers ou travaux à
              domicile. Cuisinière diplômée<br /> à Bruxelles Ancienne étudiante en
              Biochimie Ancienne éleveuse de lapins<br /> Hobbie-vente Maraîchage
              potager et jardinier; Cours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dishes;
