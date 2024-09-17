
import React from "react";
import DishesCard from "../layouts/DishesCard";
import { useTranslation } from "react-i18next"; 

const Menu = () => {

    const { t, i18n } = useTranslation();

  return (
    // <div
    //   className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-3 pt-16 lg:pt-20 bg-cover bg-center"
    //   style={{
    //     backgroundImage:
    //       "url('https://img.freepik.com/premium-photo/colorful-various-herbs-spices-cooking-dark-background_370312-476.jpg')",
    //   }}
    // >
    //   <h1 className="text-2xl lg:text-3xl font-semibold text-center lg:pt-8 pt-24 pb-10 text-brightColor shadow-lg">
    //     TRAITEUR JOY MENU
    //   </h1>
    //   <div className="flex justify-center lg:space-x-60 space-x-4 font-bold text-base lg:text-lg text-brightColor mb-5 lg:mb-10">
    //     <p>Recettes</p>
    //     <p>Portion par élève</p>
    //     <p>EUROS</p>
    //   </div>

    //   <div className="bg-black bg-opacity-50 p-5 rounded-lg max-w-4xl w-full mb-10">
    //     <p className="mt-5 text-sm lg:text-base mb-10 text-white leading-6 lg:leading-8 text-left">
    //       Betterave rouge en purée pour la bolognaise (10g)
    //       <span className="dots">…………………………………………</span>+-0.10
    //       <br />
    //       <br />
    //       Ketchup maison (15g)<span className="dots">…………………………………………</span>
    //       +-0.10
    //       <br />
    //       <br />
    //       Samoussa croquant végétarien (40gr)
    //       <span className="dots">…………………………………………</span>+-0.40
    //       <br />
    //       <br />
    //       Smoothie pomme-canelle-avoine-noix (Avec ou sans miel bio) (200ml)
    //       <span className="dots">…………………………………………</span>1.20
    //       <br />
    //       <br />
    //       Smoothie pomme-poire-chataigne (Avec ou sans miel bio) (200ml)
    //       <span className="dots">…………………………………………</span>1.20
    //       <br />
    //       <br />
    //       Carottes en gâteau-crémé (30g)
    //       <span className="dots">…………………………………………</span>+-0.50
    //       <br />
    //       Carotte avec chaux blanc citronnelle (60g) pour la carbonnade
    //       <span className="dots">…………………………………………</span>+-0.40
    //       <br />
    //       Céleri rave en potage (200ml)
    //       <span className="dots">…………………………………………</span>+-0.80
    //       <br />
    //       Champignon Stroganoff (60gr) viande ge
    //       <span className="dots">…………………………………………</span>+-1.35
    //       <br />
    //       Chicon coupés aux raisins secs-miel bio (60g) (poulet)
    //       <span className="dots">…………………………………………</span>+-1.50
    //       <br />
    //       Chou blanc à la grecque (40g)
    //       <span className="dots">…………………………………………</span>+-0.40
    //       <br />
    //       Chou de Bruxelles en mousse (40g)
    //       <span className="dots">…………………………………………</span>+-0.90
    //       <br />
    //       Chou frisé fumés coupés pour saucisses (60g)
    //       <span className="dots">…………………………………………</span>+-0.70
    //       <br />
    //       Chou rave en Rémoulade (60g)
    //       <span className="dots">…………………………………………</span>+-0.95
    //       <br />
    //       Chou rouge-miel bio (60g)
    //       <span className="dots">…………………………………………</span>+-1.20
    //       <br />
    //       Chou vert en potage aux 2 jambons (200ml)
    //       <span className="dots">…………………………………………</span>+-0.60
    //       <br />
    //       Cresson en velouté (200ml)
    //       <span className="dots">…………………………………………</span>+-0.80
    //       <br />
    //       Germes de Soja en rouleau de printemps frais (50g)
    //       <span className="dots">…………………………………………</span>+-1.10
    //       <br />
    //       Mâches en salades et maïs doux (50gr)
    //       <span className="dots">…………………………………………</span>+-0.80
    //       <br />
    //       Navet et Provinçale pour couscous (60g)
    //       <span className="dots">…………………………………………</span>+-1.40
    //       <br />
    //       Oignon (Soupe à l'oignon) (200ml)
    //       <span className="dots">…………………………………………</span>+-1.90
    //       <br />
    //       Pannais sauce coco (pour carbonnade de dinde)
    //       <span className="dots">…………………………………………</span>+-1.50
    //       <br />
    //       Pleurotes en crème (pour steak; 50gr par pers)
    //       <span className="dots">…………………………………………</span>+-1.80
    //       <br />
    //       Poireau sauce truffée (60g) pour poisson
    //       <span className="dots">…………………………………………</span>+-1.30
    //       <br />
    //       Poireau façon carbonara (60g)
    //       <span className="dots">…………………………………………</span>+-1.10
    //       <br />
    //       Potimaron en velouté (250ml)
    //       <span className="dots">…………………………………………</span>+-1.50
    //       <br />
    //       Topinambour en mousse (60g)
    //       <span className="dots">…………………………………………</span>+-0.50
    //       <br />
    //       Poire cuite en sirop crème anglaise (60g)
    //       <span className="dots">…………………………………………</span>+-1.20
    //       <br />
    //       Pomme roulée en pâte feuilletée ou sablé (80g)
    //       <span className="dots">…………………………………………</span>+-1.20
    //       <br />
    //       Pommes, Crêpes normandes (100g)
    //       <span className="dots">…………………………………………</span>+-1.70
    //     </p>
    //   </div>
    // </div>

    <div
      className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-3 pt-16 lg:pt-20 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/colorful-various-herbs-spices-cooking-dark-background_370312-476.jpg')",
      }}
    >
      <h1 className="text-2xl lg:text-3xl font-semibold text-center lg:pt-8 pt-24 pb-10 text-brightColor shadow-lg">
        {t("TRAITEUR_JOY_MENU")}
      </h1>
      <div className="flex justify-center lg:space-x-60 space-x-4 font-bold text-base lg:text-lg text-brightColor mb-5 lg:mb-10">
        <p>{t("Recettes")}</p>
        <p>{t("Portion par élève")}</p>
        <p>{t("EUROS")}</p>
      </div>
      <div className="bg-black bg-opacity-50 p-5 rounded-lg max-w-4xl w-full mb-10">
        <p className="mt-5 text-sm lg:text-base mb-10 text-white leading-6 lg:leading-8 text-left">
          {t("Betterave_puree")}
          <br />
          <br />
          {t("Ketchup_maison")}
          <br />
          <br />
          {t("Samoussa_croquant")}
          <br />
          <br />
          {t("Smoothie_pomme_canelle")}
          <br />
          <br />
          {t("Smoothie_pomme_poire")}
          <br />
          <br />
          {t("Carottes_gateau")}
          <br />
          <br />
          {t("Carotte_carbonnade")}
          <br />
          <br />
          {t("Celeri_potage")}
          <br />
          <br />
          {t("Champignon_Stroganoff")}
          <br />
          <br />
          {t("Chicon_raisins")}
          <br />
          <br />
          {t("Chou_blanc_grecque")}
          <br />
          <br />
          {t("Chou_Bruxelles_mousse")}
          <br />
          <br />
          {t("Chou_frise_saucisses")}
          <br />
          <br />
          {t("Chou_rave_Remoulade")}
          <br />
          <br />
          {t("Chou_rouge_miel")}
          <br />
          <br />
          {t("Chou_vert_potage")}
          <br />
          <br />
          {t("Cresson_veloute")}
          <br />
          <br />
          {t("Germes_Soja_rouleau")}
          <br />
          <br />
          {t("Maches_salades")}
          <br />
          <br />
          {t("Navet_Provincale")}
          <br />
          <br />
          {t("Oignon_soupe")}
          <br />
          <br />
          {t("Panais_sauce_coco")}
          <br />
          <br />
          {t("Pleurotes_creme")}
          <br />
          <br />
          {t("Poireau_sauce_truffee")}
          <br />
          <br />
          {t("Poireau_carbonara")}
          <br />
          <br />
          {t("Potimaron_veloute")}
          <br />
          <br />
          {t("Topinambour_mousse")}
          <br />
          <br />
          {t("Poire_sirop")}
          <br />
          <br />
          {t("Pomme_pate_feuilletee")}
          <br />
          <br />
          {t("Pommes_crepes_normandes")}
          <br />
        </p>
      </div>
    </div>
  );
};

export default Menu;