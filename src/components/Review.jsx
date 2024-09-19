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
                <span className="font-medium">•</span> {t("smokedFish")}
              </li>
              <li>
                <span className="font-medium">•</span> {t("indianCrepe")}
              </li>
              <li>
                <p className="font-medium mb-2">{t("miniTatin")} :</p>
                <ul className="pl-6 space-y-1">
                  <li>
                    <span className="font-medium">•</span> {t("topinambour")}
                  </li>
                  <li>
                    <span className="font-medium">•</span> {t("cassava")}
                  </li>
                  <li>
                    <span className="font-medium">•</span> {t("yam")}
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  <span className="font-medium">•</span> {t("mushroom")}
                </p>
                <ul className="pl-6 space-y-1 mt-1">
                  <li>
                    <span className="font-medium">•</span> {t("garlicButter")}
                  </li>
                  <li>
                    <span className="font-medium">•</span>{" "}
                    {t("rwandanMeatballs")}
                  </li>
                  <li>
                    <span className="font-medium">•</span>{" "}
                    {t("rwandanIndianSamosa")}
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
            {/* <p className="text-lg font-semibold mb-4 text-gray-800">
              {t("entries")}
            </p> */}
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>
                <span className="font-medium">•</span> {t("miniFishFillets")}
              </li>
              <li>
                <span className="font-medium">•</span> {t("nicoiseSalad")}
              </li>
              <li>
                <span className="font-medium">•</span> {t("pastaSalad")}
              </li>
              <li>
                <span className="font-medium">•</span> {t("eggplantCheese")}
              </li>
              <li>
                <span className="font-medium">•</span> {t("kenyanSalad")}
              </li>
            </ul>

            <p className="text-lg font-semibold mb-4 text-gray-800">
              {t("dishe")}
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>
                <span className="font-medium">•</span>{" "}
                {t("vealSweetbreadCroquette")}
              </li>
              <li>
                <span className="font-medium">•</span>{" "}
                {t("smokedSweetPotatoCroquette")}
              </li>
              <li>
                <span className="font-medium">•</span> {t("wholeLamb")}
              </li>
              <li>
                <span className="font-medium">•</span> {t("rwandanBbqGoat")}
              </li>
              <li>
                <span className="font-medium">•</span> {t("greatLakesFish")}
              </li>
              <li>
                <span className="font-medium">•</span> {t("pondu")}
              </li>
              <li>
                <span className="font-medium">•</span> {t("chiliSinCarne")}
              </li>
              <li>
                <span className="font-medium">•</span> {t("rwandanCarbonnades")}
              </li>
              <li>
                <span className="font-medium">•</span>{" "}
                {t("greenBananasChicken")}
              </li>
              <li>
                <span className="font-medium">•</span> {t("sauteedPotatoes")}
              </li>
              <li>
                <span className="font-medium">•</span> {t("rwandanPilafRice")}
              </li>
            </ul>

            {/* <p className="text-lg font-semibold mb-4 text-gray-800">
              {t("desserts")}
            </p> */}
            <ul className="space-y-3 text-gray-700">
              <li>
                <span className="font-medium">•</span> {t("plantainLollipops")}
              </li>
              <li>
                <span className="font-medium">•</span> {t("rwandanFlagCake")}
              </li>
              <li>
                <span className="font-medium">•</span> {t("miniImperialCrepes")}
              </li>
              <li>
                <span className="font-medium">•</span> {t("greatLakesDonuts")}
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

        <div className="mt-2  ">
          <p className="text-lg font-semibold mb-4 -mt-20 text-gray-800">
            2. {t("drinkService")} <br />
            {/* {t("drinkDescription")} */}
          </p>
          <div className="flex">
            <div className="left-side flex-grow pr-10">
              <ul className="space-y-3 text-gray-700">
                <li>
                  <span className="font-medium">•</span> {t("localBeers")}
                </li>
                <li>
                  <span className="font-medium">•</span> {t("homemadeSangria")}
                </li>
                <li>
                  <span className="font-medium">•</span> {t("virginMojito")}
                </li>
                <li>
                  <span className="font-medium">•</span> {t("water")}
                </li>
                <li>
                  <span className="font-medium">•</span> {t("softDrink")}
                </li>
                <li>
                  <span className="font-medium">•</span> {t("redWine")}
                </li>
                <li>
                  <span className="font-medium">•</span> {t("whiteWine")}
                </li>
                <li>
                  <span className="font-medium">•</span> {t("bananaLiqueur")}
                </li>
                <li>
                  <span className="font-medium">•</span> {t("coffee")}
                </li>
                <li>
                  <span className="font-medium">•</span> {t("tea")}
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

        <div className="mt-10 ">
          <p className="text-lg font-semibold mb-4 text-gray-800">
            3. {t("produit")} <br />
            {/* {t("drinkDescription")} */}
          </p>
          <div className="flex">
            <div className="left-side flex-grow pr-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
