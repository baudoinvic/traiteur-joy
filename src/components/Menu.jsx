import React from "react";
import DishesCard from "../layouts/DishesCard";
import menu1 from "../assets/img/menu1.jpg";
import menu2 from "../assets/img/menu2.jpg";
import menu3 from "../assets/img/menu3.jpg";

const Menu = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 pt-20 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/colorful-various-herbs-spices-cooking-dark-background_370312-476.jpg')",
      }}
    >
      {" "}
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10 text-brightColor">
        TRAITEUR JOY MENU
      </h1>
      <div className=" flex justify-center space-x-60 font-bold text-lg text-brightColor">
        <p>Recettes</p>
        <p>Portion par élève</p>
        <p>EUROS</p>
      </div>
      <div className="">
        <p
          className="mt-5 text-base text-white"
          style={{ fontSize: "16px" }}
        >
          Betterave rouge en purée pour la bolognaise (10
          g)………………………………………….......................................+-0.10
          <br />
          <br />
          Ketchup maison
          (15g)………………………………………………………………………………………………....................................................+-0.10
          <br />
          <br />
          Samoussa croquant végétarien
          (40gr)……………………………………………………………….................................................+-0.40
          <br />
          <br />
          Smoothie pomme-canelle-avoine-noix-(Avec ou sans miel bio
          (200ml)……………………….1.20
          <br />
          <br />
          Smoothie pomme-poire-chataigne-(Avec ou sans miel bio (200
          ml)……………………………1.20
          <br />
          <br />
          Carottes en gâteau-crémé (30g)……………………………………………………………………………….+-0.50
          <br />
          Carotte avec chaux blanc citronnelle (60g) pour la
          carbonnade……………………………… +-0.40
          <br />
          Céleri rave en potage (200 ml)..……………………………………………………………………………….+-0.80
          <br />
          Champignon Stroganoff (60 gr) viande
          ge………………………………………………………………..+-1.35
          <br />
          Chicon coupés aux raisins secs-miel bio ( 60 g)(pou
          poulet)…………………………………….+-1.50
          <br />
          Chou blanc à la grecque (40 g)…………………………………………………………………………………+-0.40
          <br />
          Chou de Bruxelles en mousse (40g)…………………………………………………………………………+-0.90
          <br />
          Chou frisé fumés coupés pour saucisses ( 60
          g)……………………………………………………….+-0.70
          <br />
          Chou rave en Rémoulade (60 g)………….…………………………………………………………………..+-0.95
          <br />
          Chou rouge-miel bio (60 g)……………………………………………………………………………….......+-1.20
          <br />
          Chou vert en potage aux 2 jambons(200
          ml)…………………………………………………………..+-0.60
          <br />
          Cresson en velouté (200 ml)……………………………………………………………………………………+-0.80
          <br />
          Germes de Soja en rouleau de printemps frais(50
          g)………………………………………………+-1.10
          <br />
          Mâches en salades et maïs doux(50 gr)…………………………………………………………………..+-0.80
          <br />
          Navet et Provinçale pour couscous
          (60g)………………………………………………………………...+-1.40
          <br />
          Oignon (Soupe à l’oignon)(200 ml)………………………………………………………………………...+- 1.90
          <br />
          Pannais sauce coco (pour carbonnade de
          dinde)(…………………………………………………….+-1.50
          <br />
          Pleurotes en crème (pour steak ;50 gr par
          pers)……………………………………………………….+-1.80
          <br />
          Poireau sauce truffée (60 g) pour
          poisson………………………………………………………………..+-1.30
          <br />
          Poireau façon carbonara(60g)………………………………………………………………………………+- 1.10
          <br />
          Potimaron en velouté (250ml)……………………………………………………………………………..+-1.50{" "}
          <br />
          Topinambour en mousse (60 g)…………..……………………………………………………........... +-
          0.50
          <br />
          Poire cuite en sirop crème anglaise
          (60g)……………………………………………………………...+-1.20
          <br />
          Pomme roulée en pâte feulleuittée ou sablé
          (80g)………………………………………………..+-1.20
          <br />
          Pommes, Crêpes normandes (100g)………………………………………………………………………+-1.70
        </p>
      </div>
    </div>
  );
};

export default Menu;
