// i18n.js

// Import necessary dependencies
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationFR from "./fr.json";
import translationEN from "./eng.json";


i18n
  .use(initReactI18next) 
  .init({
    resources: {
      fr: {
        translation: translationFR, 
      },
      en: {
        translation: translationEN, 
      },
    },
    lng: "fr", 
    fallbackLng: "fr", 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
