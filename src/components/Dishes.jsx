import React from "react";
import { Link } from "react-router-dom";
import dish from "../assets/img/dish.jpeg";
import { useTranslation } from "react-i18next";

const Dishes = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <div className="cooking-course pt-20">
      <div
        className="hero-section h-96 bg-cover bg-center flex flex-col justify-center items-center lg:px-32 px-5 relative"
        style={{
          backgroundImage: `url(${dish})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="text-4xl md:text-5xl lg:text-2xl font-bold text-white text-center pt-24 pb-10 relative z-10 leading-tight">
          {t("dishes.hero.title1")}
          <br className="hidden md:block" /> {t("dishes.hero.title2")}
          <br className="hidden md:block" /> {t("dishes.hero.title3")}
        </h1>
      </div>

      <div id="courses" className="container mx-auto px-4 py-16">
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center text-brightColor">
            {t("dishes.explore.title")}
          </h3>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            {t("dishes.explore.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h4 className="text-2xl font-semibold text-brightColor mb-4">
              {t("dishes.garden.title")}
            </h4>
            <ul className="text-gray-700 space-y-3 list-disc list-inside">
              <li>{t("dishes.garden.item1")}</li>
              <li>{t("dishes.garden.item2")}</li>
              <li>{t("dishes.garden.item3")}</li>
              <li>{t("dishes.garden.item4")}</li>
            </ul>
            <p className="mt-6 text-gray-700">
              {t("dishes.garden.description")}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h4 className="text-2xl font-semibold text-brightColor mb-4">
              {t("dishes.kitchen.title")}
            </h4>
            <ul className="text-gray-700 space-y-3 list-disc list-inside">
              <li>{t("dishes.kitchen.item1")}</li>
              <li>{t("dishes.kitchen.item2")}</li>
              <li>{t("dishes.kitchen.item3")}</li>
              <li>{t("dishes.kitchen.item4")}</li>
            </ul>
            <p className="mt-6 text-gray-700">
              <span className="font-semibold">{t("dishes.kitchen.rate")}:</span>{" "}
              {t("dishes.kitchen.rateDescription")}
            </p>
          </div>
        </div>

        <div className="fish-course ">
          <h1 className="text-4xl md:text-5xl lg:text-2xl font-bold  text-center pt-24 pb-10 relative z-10 leading-tight">
            {t("dishes.fish.title1")}
            <br className="hidden md:block" /> {t("dishes.fish.title2")}
          </h1>
          <p className="text-xl  text-center text-gray-600 ">
            {t("dishes.fish.description")}
          </p>
        </div>

        <div id="fish-courses" className="container mx-auto px-4 py-16">
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center text-brightColor">
              {t("dishes.techniques.title")}
            </h3>
            <p className="text-gray-600 text-center max-w-3xl mx-auto">
              {t("dishes.techniques.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h4 className="text-2xl font-semibold text-brightColor mb-4">
                {t("dishes.basic.title")}
              </h4>
              <ul className="text-gray-700 space-y-3 list-disc list-inside">
                <li>{t("dishes.basic.item1")}</li>
                <li>{t("dishes.basic.item2")}</li>
                <li>{t("dishes.basic.item3")}</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h4 className="text-2xl font-semibold text-brightColor mb-4">
                {t("dishes.signature.title")}
              </h4>
              <ul className="text-gray-700 space-y-3 list-disc list-inside">
                <li>{t("dishes.signature.item1")}</li>
                <li>{t("dishes.signature.item2")}</li>
                <li>{t("dishes.signature.item3")}</li>
                <li>{t("dishes.signature.item4")}</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h4 className="text-2xl font-semibold text-brightColor mb-4">
                {t("dishes.specialties.title")}
              </h4>
              <ul className="text-gray-700 space-y-3 list-disc list-inside">
                <li>{t("dishes.specialties.item1")}</li>
                <li>{t("dishes.specialties.item2")}</li>
                <li>{t("dishes.specialties.item3")}</li>
                <li>{t("dishes.specialties.item4")}</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-gray-100 rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                <h4 className="text-2xl font-bold text-brightColor mb-4">
                  {t("dishes.instructor.title")}
                </h4>
                <p className="text-gray-700 mb-6">
                  {t("dishes.instructor.description")}
                </p>
                <ul className="text-gray-700 space-y-2 list-disc list-inside">
                  <li>{t("dishes.instructor.item1")}</li>
                  <li>{t("dishes.instructor.item2")}</li>
                  <li>{t("dishes.instructor.item3")}</li>
                </ul>
              </div>
              <div className="md:w-1/3 text-center">
                <p className="text-2xl font-bold text-gray-800 mb-4">
                  {t("dishes.rate.title")}
                </p>
                <p className="text-4xl font-bold text-brightColor mb-6">
                  {t("dishes.rate.price")}
                </p>
                <p className="text-gray-600 mb-6">
                  {t("dishes.rate.perSession")}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-brightColor border-2 border-brightColor rounded-full text-lg font-semibold hover:bg-brightColor hover:text-white transition duration-300"
            >
              {t("dishes.contact")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dishes;
