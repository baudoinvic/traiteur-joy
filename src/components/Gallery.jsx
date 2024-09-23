
import React from "react";
import pic2 from "../assets/img/pic2.jpg";
import pic3 from "../assets/img/pic3.jpg";
import pic4 from "../assets/img/pic4.jpg";
import pic5 from "../assets/img/pic5.jpg";
import pic6 from "../assets/img/pic6.jpg";
import pic7 from "../assets/img/pic7.jpg";
import pic8 from "../assets/img/pic8.jpg";
import pic9 from "../assets/img/pic9.jpg";
import pic10 from "../assets/img/pic10.jpg";
import pic11 from "../assets/img/pic11.jpg";
import pic12 from "../assets/img/pic12.jpg";
import pic13 from "../assets/img/pic13.jpg";
import pic14 from "../assets/img/pic14.jpg";
import pic15 from "../assets/img/pic15.jpg";
import pic16 from "../assets/img/pic16.jpg";
import pic17 from "../assets/img/pic17.jpg";
import { useTranslation } from "react-i18next"; 

const Gallery = () => {

   const { t, i18n } = useTranslation();


  return (
    <div className="pt-40 px-8 py-16">
      <h1 className="text-center text-4xl mb-8 text-brightColor">
      
        {t("galery")}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <img
          src={pic2}
          alt="pic2"
          className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        />
        <img
          src={pic3}
          alt="pic3"
          className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        />
        <img
          src={pic4}
          alt="pic4"
          className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        />
        <img
          src={pic5}
          alt="pic5"
          className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        />
        <img
          src={pic6}
          alt="pic6"
          className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        />
        <img
          src={pic7}
          alt="pic7"
          className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        />
        <img
          src={pic8}
          alt="pic8"
          className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        />
        <img
          src={pic9}
          alt="pic9"
          className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        />
        <img
          src={pic10}
          alt="pic10"
          className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        />
        <img
          src={pic11}
          alt="pic11"
          className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        />
        <img
          src={pic12}
          alt="pic12"
          className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        />
        <img
          src={pic13}
          alt="pic13"
          className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        />
        <img
          src={pic14}
          alt="pic14"
          className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        />
        <img
          src={pic15}
          alt="pic15"
          className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        />
        <img
          src={pic16}
          alt="pic16"
          className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        />
        <img
          src={pic17}
          alt="pic17"
          className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Gallery;