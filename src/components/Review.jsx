import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import { useTranslation } from "react-i18next"; 

const Review = () => {

   const { t, i18n } = useTranslation();

  return (
 

    <div className="min-h-screen flex flex-col items-center justify-center md:px-32 px-5 pt-20">
      <h3 className="text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10 text-brightColor">
        {t("servicesFood")}
      </h3>
      <p className="font-semibold">{t("dishesDescription")}</p>

      <div className="mt-10 max-w-4xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
        <div className="flex">
          <div className="left-side flex-grow pr-10">
            <p className="text-lg font-semibold mb-4">1. {t("Nourriture")}</p>
            <ul className="space-y-4 text-gray-700">
              <li>
                <span className="font-medium">•</span> {t("smokedFish")} - 3 € /
                4200 RWF
              </li>
              <li>
                <span className="font-medium">•</span> {t("indianCrepe")} - 3 €
                / 4200 RWF
              </li>
              <li>
                <p className="font-medium mb-2">{t("miniTatin")}:</p>
                <ul className="pl-6 space-y-1">
                  <li>
                    <span className="font-medium">•</span> {t("topinambour")} -
                    1 € / 1400 RWF
                  </li>
                  <li>
                    <span className="font-medium">•</span> {t("cassava")} - 1 €
                    / 1400 RWF
                  </li>
                  <li>
                    <span className="font-medium">•</span> {t("yam")} - 2 € /
                    2800 RWF
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  <span className="font-medium">•</span> {t("mushroom")} - 2 € /
                  2800 RWF
                </p>
                <ul className="pl-6 space-y-1 mt-1">
                  <li>
                    <span className="font-medium">•</span> {t("garlicButter")} -
                    2 € / 2800 RWF
                  </li>
                  <li>
                    <span className="font-medium">•</span>{" "}
                    {t("rwandanMeatballs")} - 2 € / 2800 RWF
                  </li>
                  <li>
                    <span className="font-medium">•</span>{" "}
                    {t("rwandanIndianSamosa")} - 2 € / 2800 RWF
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="right-side w-32 text-right">
          
          </div>
        </div>
      </div>

      <div className="mt-10 max-w-4xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
        <div className="flex">
          <div className="left-side flex-grow pr-10">
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>
                <span className="font-medium">•</span> {t("miniFishFillets")} -
                2,4 € / 3360 RWF
              </li>
              <li>
                <span className="font-medium">•</span> {t("nicoiseSalad")} - 2 €
                / 2800 RWF
              </li>
              <li>
                <span className="font-medium">•</span> {t("pastaSalad")} - 1,4 €
                / 1960 RWF
              </li>
              <li>
                <span className="font-medium">•</span> {t("eggplantCheese")} - 4
                € / 5600 RWF
              </li>
              <li>
                <span className="font-medium">•</span> {t("kenyanSalad")} - 1 €
                / 1400 RWF
              </li>
            </ul>

            <p className="text-lg font-semibold mb-4 text-gray-800">
              {t("dishe")}
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>
                <span className="font-medium">•</span>{" "}
                {t("vealSweetbreadCroquette")} - 3 € / 4200 RWF
              </li>
              <li>
                <span className="font-medium">•</span>{" "}
                {t("smokedSweetPotatoCroquette")} - 1 € / 1400 RWF
              </li>
              <li>
                <span className="font-medium">•</span> {t("wholeLamb")} - 8 € /
                11200 RWF
              </li>
              <li>
                <span className="font-medium">•</span> {t("rwandanBbqGoat")} - 6
                € / 8400 RWF
              </li>
              <li>
                <span className="font-medium">•</span> {t("greatLakesFish")} - 8
                € / 11200 RWF
              </li>
              <li>
                <span className="font-medium">•</span> {t("pondu")} - 1 € / 1400
                RWF
              </li>
              <li>
                <span className="font-medium">•</span> {t("chiliSinCarne")} -
                0,6 € / 840 RWF
              </li>
              <li>
                <span className="font-medium">•</span> {t("rwandanCarbonnades")}{" "}
                - 1,4 € / 1960 RWF
              </li>
              <li>
                <span className="font-medium">•</span>{" "}
                {t("greenBananasChicken")} - 6 € / 8400 RWF
              </li>
              <li>
                <span className="font-medium">•</span> {t("sauteedPotatoes")} -
                0,6 € / 840 RWF
              </li>
              <li>
                <span className="font-medium">•</span> {t("rwandanPilafRice")} -
                1,4 € / 1960 RWF
              </li>
            </ul>

            <ul className="space-y-3 text-gray-700">
              <li>
                <span className="font-medium">•</span> {t("plantainLollipops")}{" "}
                - 1,2 € / 1680 RWF
              </li>
              <li>
                <span className="font-medium">•</span> {t("rwandanFlagCake")} -
                6 € / 8400 RWF
              </li>
              <li>
                <span className="font-medium">•</span> {t("miniImperialCrepes")}{" "}
                - 1,6 € / 2240 RWF
              </li>
              <li>
                <span className="font-medium">•</span> {t("greatLakesDonuts")} -
                0,4 € / 560 RWF
              </li>
            </ul>
          </div>

         
        </div>

        <div className="mt-32">
          <p className="text-lg font-semibold mb-4 -mt-20 text-gray-800">
            2. {t("drinkService")} <br />
          </p>
          <div className="flex">
            <div className="left-side flex-grow pr-10">
              <ul className="space-y-3 text-gray-700">
                <li>
                  <span className="font-medium">•</span> {t("localBeers")} - 8 €
                  / 11200 RWF
                </li>
                <li>
                  <span className="font-medium">•</span> {t("homemadeSangria")}{" "}
                  - 6 € / 8400 RWF
                </li>
                <li>
                  <span className="font-medium">•</span> {t("virginMojito")} - 5
                  € / 7000 RWF
                </li>
                <li>
                  <span className="font-medium">•</span> {t("water")} - 2 € /
                  2800 RWF
                </li>
                <li>
                  <span className="font-medium">•</span> {t("softDrink")} - 2 €
                  / 2800 RWF
                </li>
                <li>
                  <span className="font-medium">•</span> {t("redWine")} - 12 € /
                  16800 RWF
                </li>
                <li>
                  <span className="font-medium">•</span> {t("whiteWine")} - 12 €
                  / 16800 RWF
                </li>
                <li>
                  <span className="font-medium">•</span> {t("bananaLiqueur")} -
                  5 € / 7000 RWF
                </li>
                <li>
                  <span className="font-medium">•</span> {t("coffee")} - 5 € /
                  7000 RWF
                </li>
                <li>
                  <span className="font-medium">•</span> {t("tea")} - 3 € / 4200
                  RWF
                </li>
              </ul>
            </div>
           
          </div>
        </div>

        <div className="mt-10">
          <p className="text-lg font-semibold mb-4 text-gray-800">
            3. {t("produit")} <br />
          </p>
          <div className="flex"></div>
        </div>
      </div>
    </div>
  );
};

export default Review;
