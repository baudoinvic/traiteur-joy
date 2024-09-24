import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import { useTranslation } from "react-i18next"; 

const Review = () => {

   const { t, i18n } = useTranslation();

  return (
    // <div className="min-h-screen flex flex-col items-center justify-center md:px-32 px-5 pt-20">
    //   <h3 className="text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10 text-brightColor">
    //     {t("servicesFood")}
    //   </h3>
    //   <p className="font-semibold">{t("dishesDescription")}</p>

    //   <div className="mt-10 max-w-4xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
    //     <div className="flex">
    //       <div className="left-side flex-grow pr-10">
    //         <p className="text-lg font-semibold mb-4">1. {t("Nourriture")}</p>
    //         <ul className="space-y-4 text-gray-700">
    //           <li>
    //             <span className="font-medium">•</span> {t("smokedFish")} - 3 € /
    //             4200 RWF
    //           </li>
    //           <li>
    //             <span className="font-medium">•</span> {t("indianCrepe")} - 3 €
    //             / 4200 RWF
    //           </li>
    //           <li>
    //             <p className="font-medium mb-2">{t("miniTatin")}:</p>
    //             <ul className="pl-6 space-y-1">
    //               <li>
    //                 <span className="font-medium">•</span> {t("topinambour")} -
    //                 1 € / 1400 RWF
    //               </li>
    //               <li>
    //                 <span className="font-medium">•</span> {t("cassava")} - 1 €
    //                 / 1400 RWF
    //               </li>
    //               <li>
    //                 <span className="font-medium">•</span> {t("yam")} - 2 € /
    //                 2800 RWF
    //               </li>
    //             </ul>
    //           </li>
    //           <li>
    //             <p>
    //               <span className="font-medium">•</span> {t("mushroom")} - 2 € /
    //               2800 RWF
    //             </p>
    //             <ul className="pl-6 space-y-1 mt-1">
    //               <li>
    //                 <span className="font-medium">•</span> {t("garlicButter")} -
    //                 2 € / 2800 RWF
    //               </li>
    //               <li>
    //                 <span className="font-medium">•</span>{" "}
    //                 {t("rwandanMeatballs")} - 2 € / 2800 RWF
    //               </li>
    //               <li>
    //                 <span className="font-medium">•</span>{" "}
    //                 {t("rwandanIndianSamosa")} - 2 € / 2800 RWF
    //               </li>
    //             </ul>
    //           </li>
    //         </ul>
    //       </div>

    //       <div className="right-side w-32 text-right">

    //       </div>
    //     </div>
    //   </div>

    //   <div className="mt-10 max-w-4xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
    //     <div className="flex">
    //       <div className="left-side flex-grow pr-10">
    //         <ul className="space-y-3 text-gray-700 mb-6">
    //           <li>
    //             <span className="font-medium">•</span> {t("miniFishFillets")} -
    //             2,4 € / 3360 RWF
    //           </li>
    //           <li>
    //             <span className="font-medium">•</span> {t("nicoiseSalad")} - 2 €
    //             / 2800 RWF
    //           </li>
    //           <li>
    //             <span className="font-medium">•</span> {t("pastaSalad")} - 1,4 €
    //             / 1960 RWF
    //           </li>
    //           <li>
    //             <span className="font-medium">•</span> {t("eggplantCheese")} - 4
    //             € / 5600 RWF
    //           </li>
    //           <li>
    //             <span className="font-medium">•</span> {t("kenyanSalad")} - 1 €
    //             / 1400 RWF
    //           </li>
    //         </ul>

    //         <p className="text-lg font-semibold mb-4 text-gray-800">
    //           {t("dishe")}
    //         </p>
    //         <ul className="space-y-3 text-gray-700 mb-6">
    //           <li>
    //             <span className="font-medium">•</span>{" "}
    //             {t("vealSweetbreadCroquette")} - 3 € / 4200 RWF
    //           </li>
    //           <li>
    //             <span className="font-medium">•</span>{" "}
    //             {t("smokedSweetPotatoCroquette")} - 1 € / 1400 RWF
    //           </li>
    //           <li>
    //             <span className="font-medium">•</span> {t("wholeLamb")} - 8 € /
    //             11200 RWF
    //           </li>
    //           <li>
    //             <span className="font-medium">•</span> {t("rwandanBbqGoat")} - 6
    //             € / 8400 RWF
    //           </li>
    //           <li>
    //             <span className="font-medium">•</span> {t("greatLakesFish")} - 8
    //             € / 11200 RWF
    //           </li>
    //           <li>
    //             <span className="font-medium">•</span> {t("pondu")} - 1 € / 1400
    //             RWF
    //           </li>
    //           <li>
    //             <span className="font-medium">•</span> {t("chiliSinCarne")} -
    //             0,6 € / 840 RWF
    //           </li>
    //           <li>
    //             <span className="font-medium">•</span> {t("rwandanCarbonnades")}{" "}
    //             - 1,4 € / 1960 RWF
    //           </li>
    //           <li>
    //             <span className="font-medium">•</span>{" "}
    //             {t("greenBananasChicken")} - 6 € / 8400 RWF
    //           </li>
    //           <li>
    //             <span className="font-medium">•</span> {t("sauteedPotatoes")} -
    //             0,6 € / 840 RWF
    //           </li>
    //           <li>
    //             <span className="font-medium">•</span> {t("rwandanPilafRice")} -
    //             1,4 € / 1960 RWF
    //           </li>
    //         </ul>

    //         <ul className="space-y-3 text-gray-700">
    //           <li>
    //             <span className="font-medium">•</span> {t("plantainLollipops")}{" "}
    //             - 1,2 € / 1680 RWF
    //           </li>
    //           <li>
    //             <span className="font-medium">•</span> {t("rwandanFlagCake")} -
    //             6 € / 8400 RWF
    //           </li>
    //           <li>
    //             <span className="font-medium">•</span> {t("miniImperialCrepes")}{" "}
    //             - 1,6 € / 2240 RWF
    //           </li>
    //           <li>
    //             <span className="font-medium">•</span> {t("greatLakesDonuts")} -
    //             0,4 € / 560 RWF
    //           </li>
    //         </ul>
    //       </div>

    //     </div>

    //     <div className="mt-32">
    //       <p className="text-lg font-semibold mb-4 -mt-20 text-gray-800">
    //         2. {t("drinkService")} <br />
    //       </p>
    //       <div className="flex">
    //         <div className="left-side flex-grow pr-10">
    //           <ul className="space-y-3 text-gray-700">
    //             <li>
    //               <span className="font-medium">•</span> {t("localBeers")} - 8 €
    //               / 11200 RWF
    //             </li>
    //             <li>
    //               <span className="font-medium">•</span> {t("homemadeSangria")}{" "}
    //               - 6 € / 8400 RWF
    //             </li>
    //             <li>
    //               <span className="font-medium">•</span> {t("virginMojito")} - 5
    //               € / 7000 RWF
    //             </li>
    //             <li>
    //               <span className="font-medium">•</span> {t("water")} - 2 € /
    //               2800 RWF
    //             </li>
    //             <li>
    //               <span className="font-medium">•</span> {t("softDrink")} - 2 €
    //               / 2800 RWF
    //             </li>
    //             <li>
    //               <span className="font-medium">•</span> {t("redWine")} - 12 € /
    //               16800 RWF
    //             </li>
    //             <li>
    //               <span className="font-medium">•</span> {t("whiteWine")} - 12 €
    //               / 16800 RWF
    //             </li>
    //             <li>
    //               <span className="font-medium">•</span> {t("bananaLiqueur")} -
    //               5 € / 7000 RWF
    //             </li>
    //             <li>
    //               <span className="font-medium">•</span> {t("coffee")} - 5 € /
    //               7000 RWF
    //             </li>
    //             <li>
    //               <span className="font-medium">•</span> {t("tea")} - 3 € / 4200
    //               RWF
    //             </li>
    //           </ul>
    //         </div>

    //       </div>
    //     </div>

    //     <div className="mt-10">
    //       <p className="text-lg font-semibold mb-4 text-gray-800">
    //         3. {t("produit")} <br />
    //       </p>
    //       <div className="flex"></div>
    //     </div>
    //   </div>
    // </div>

    <div className="min-h-screen flex flex-col items-center justify-center md:px-32 px-5 pt-20">
      <h3 className="text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10 text-brightColor">
        {t("servicesFood")}
      </h3>
      <p className="font-semibold">{t("dishesDescription")}</p>

      <div className="mt-10 max-w-4xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
        <p className="text-lg font-semibold mb-4">1. {t("Nourriture")}</p>
        <ul className="space-y-4 text-gray-700">
          <li className="flex justify-between">
            <span>
              <span className="font-medium">•</span> {t("smokedFish")}
            </span>
            <span>3 € / 4200 RWF</span>
          </li>
          <li className="flex justify-between">
            <span>
              <span className="font-medium">•</span> {t("indianCrepe")}
            </span>
            <span>3 € / 4200 RWF</span>
          </li>
          <li>
            <p className="font-medium mb-2">{t("miniTatin")}:</p>
            <ul className="pl-6 space-y-1">
              <li className="flex justify-between">
                <span>
                  <span className="font-medium">•</span> {t("topinambour")}
                </span>
                <span>1 € / 1400 RWF</span>
              </li>
              <li className="flex justify-between">
                <span>
                  <span className="font-medium">•</span> {t("cassava")}
                </span>
                <span>1 € / 1400 RWF</span>
              </li>
              <li className="flex justify-between">
                <span>
                  <span className="font-medium">•</span> {t("yam")}
                </span>
                <span>2 € / 2800 RWF</span>
              </li>
            </ul>
          </li>
          <li>
            <p className="flex justify-between">
              <span>
                <span className="font-medium">•</span> {t("mushroom")}
              </span>
              <span>2 € / 2800 RWF</span>
            </p>
            <ul className="pl-6 space-y-1 mt-1">
              <li className="flex justify-between">
                <span>
                  <span className="font-medium">•</span> {t("garlicButter")}
                </span>
                <span>2 € / 2800 RWF</span>
              </li>
              <li className="flex justify-between">
                <span>
                  <span className="font-medium">•</span> {t("rwandanMeatballs")}
                </span>
                <span>2 € / 2800 RWF</span>
              </li>
              <li className="flex justify-between">
                <span>
                  <span className="font-medium">•</span>{" "}
                  {t("rwandanIndianSamosa")}
                </span>
                <span>2 € / 2800 RWF</span>
              </li>
            </ul>
          </li>
        </ul>

        <ul className="space-y-3 text-gray-700 mb-6 mt-6">
          <li className="flex justify-between">
            <span>
              <span className="font-medium">•</span> {t("miniFishFillets")}
            </span>
            <span>2,4 € / 3360 RWF</span>
          </li>
          <li className="flex justify-between">
            <span>
              <span className="font-medium">•</span> {t("nicoiseSalad")}
            </span>
            <span>2 € / 2800 RWF</span>
          </li>
          <li className="flex justify-between">
            <span>
              <span className="font-medium">•</span> {t("pastaSalad")}
            </span>
            <span>1,4 € / 1960 RWF</span>
          </li>
          <li className="flex justify-between">
            <span>
              <span className="font-medium">•</span> {t("eggplantCheese")}
            </span>
            <span>4 € / 5600 RWF</span>
          </li>
          <li className="flex justify-between">
            <span>
              <span className="font-medium">•</span> {t("kenyanSalad")}
            </span>
            <span>1 € / 1400 RWF</span>
          </li>
        </ul>

        <p className="text-lg font-semibold mb-4 text-gray-800">{t("dishe")}</p>
        <ul className="space-y-3 text-gray-700 mb-6">
          <li className="flex justify-between">
            <span>
              <span className="font-medium">•</span>{" "}
              {t("vealSweetbreadCroquette")}
            </span>
            <span>3 € / 4200 RWF</span>
          </li>
          <li className="flex justify-between">
            <span>
              <span className="font-medium">•</span>{" "}
              {t("smokedSweetPotatoCroquette")}
            </span>
            <span>1 € / 1400 RWF</span>
          </li>
          <li className="flex justify-between">
            <span>
              <span className="font-medium">•</span> {t("wholeLamb")}
            </span>
            <span>8 € / 11200 RWF</span>
          </li>
          <li className="flex justify-between">
            <span>
              <span className="font-medium">•</span> {t("rwandanBbqGoat")}
            </span>
            <span>6 € / 8400 RWF</span>
          </li>
          <li className="flex justify-between">
            <span>
              <span className="font-medium">•</span> {t("greatLakesFish")}
            </span>
            <span>8 € / 11200 RWF</span>
          </li>
          <li className="flex justify-between">
            <span>
              <span className="font-medium">•</span> {t("pondu")}
            </span>
            <span>1 € / 1400 RWF</span>
          </li>
          <li className="flex justify-between">
            <span>
              <span className="font-medium">•</span> {t("chiliSinCarne")}
            </span>
            <span>0,6 € / 840 RWF</span>
          </li>
          <li className="flex justify-between">
            <span>
              <span className="font-medium">•</span> {t("rwandanCarbonnades")}
            </span>
            <span>1,4 € / 1960 RWF</span>
          </li>
          <li className="flex justify-between">
            <span>
              <span className="font-medium">•</span> {t("greenBananasChicken")}
            </span>
            <span>6 € / 8400 RWF</span>
          </li>
          <li className="flex justify-between">
            <span>
              <span className="font-medium">•</span> {t("sauteedPotatoes")}
            </span>
            <span>0,6 € / 840 RWF</span>
          </li>
          <li className="flex justify-between">
            <span>
              <span className="font-medium">•</span> {t("rwandanPilafRice")}
            </span>
            <span>1,4 € / 1960 RWF</span>
          </li>
        </ul>

        <ul className="space-y-3 text-gray-700">
          <li className="flex justify-between">
            <span>
              <span className="font-medium">•</span> {t("plantainLollipops")}
            </span>
            <span>1,2 € / 1680 RWF</span>
          </li>
          <li className="flex justify-between">
            <span>
              <span className="font-medium">•</span> {t("rwandanFlagCake")}
            </span>
            <span>6 € / 8400 RWF</span>
          </li>
          <li className="flex justify-between">
            <span>
              <span className="font-medium">•</span> {t("miniImperialCrepes")}
            </span>
            <span>1,6 € / 2240 RWF</span>
          </li>
          <li className="flex justify-between">
            <span>
              <span className="font-medium">•</span> {t("greatLakesDonuts")}
            </span>
            <span>0,4 € / 560 RWF</span>
          </li>
        </ul>

        <div className="mt-10">
          <p className="text-lg font-semibold mb-4 text-gray-800">
            2. {t("drinkService")}
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex justify-between">
              <span>
                <span className="font-medium">•</span> {t("localBeers")}
              </span>
              <span>8 € / 11200 RWF</span>
            </li>
            <li className="flex justify-between">
              <span>
                <span className="font-medium">•</span> {t("homemadeSangria")}
              </span>
              <span>6 € / 8400 RWF</span>
            </li>
            <li className="flex justify-between">
              <span>
                <span className="font-medium">•</span> {t("virginMojito")}
              </span>
              <span>5 € / 7000 RWF</span>
            </li>
            <li className="flex justify-between">
              <span>
                <span className="font-medium">•</span> {t("water")}
              </span>
              <span>2 € / 2800 RWF</span>
            </li>
            <li className="flex justify-between">
              <span>
                <span className="font-medium">•</span> {t("softDrink")}
              </span>
              <span>2 € / 2800 RWF</span>
            </li>
            <li className="flex justify-between">
              <span>
                <span className="font-medium">•</span> {t("redWine")}
              </span>
              <span>12 € / 16800 RWF</span>
            </li>
            <li className="flex justify-between">
              <span>
                <span className="font-medium">•</span> {t("whiteWine")}
              </span>
              <span>12 € / 16800 RWF</span>
            </li>
            <li className="flex justify-between">
              <span>
                <span className="font-medium">•</span> {t("bananaLiqueur")}
              </span>
              <span>5 € / 7000 RWF</span>
            </li>
            <li className="flex justify-between">
              <span>
                <span className="font-medium">•</span> {t("coffee")}
              </span>
              <span>5 € / 7000 RWF</span>
            </li>
            <li className="flex justify-between">
              <span>
                <span className="font-medium">•</span> {t("tea")}
              </span>
              <span>3 € / 4200 RWF</span>
            </li>
          </ul>
        </div>

        <div className="mt-10">
          <p className="text-lg font-semibold mb-4 text-gray-800">
            3. {t("produit")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
