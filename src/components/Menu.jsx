
import React from "react";
import DishesCard from "../layouts/DishesCard";
import { useTranslation } from "react-i18next"; 

const Menu = () => {

const { t, i18n } = useTranslation();
  return (
    
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