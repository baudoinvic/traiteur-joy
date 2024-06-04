import React from "react";
import Button from "../layouts/Button";
import img from "../assets/img/about.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="landing-page">
      <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat ">
        <div className=" w-full lg:w-2/3 space-y-5">
          <h1 className=" text-white font-semibold text-6xl">
            For the love of delicious food
          </h1>
          <p className=" text-white">
            Come with family & feel the joy of mouthwatering food we always
            serve delicious foods to our customers
          </p>
          <div className="mt-20">
            <Link to="/menu">
              <a
                href=""
                className="inline-block px-8 py-4 bg-white text-brightColor border-2 border-brightColor rounded-full text-lg font-semibold hover:bg-brightColor hover:text-white transition duration-300"
              >
                View our Menu
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="description mt-20 px-5 lg:px-0 mx-auto w-2/4 text-center">
        <p className="text-gray-500 block text-base ">
          I came up with this gourmet concept for you ten years ago! It is
          always a real pleasure to welcome you to our place, in our loft
          <br /> for a moment of conviviality in the kitchen and then at the
          table around a meal we prepare together.
        </p>
        <p className="mt-10 text-gray-500 block text-base ">
          ✻ I wasn't trained by a great chef. The idea here is to share a
          passion. The pleasure of being in the kitchen was passed down to me by
          <br />
          my grandfather, my Nonno. My influences? Italy, first and foremost,
          its aromas, its wines, and its olive oil for simple and genuine
          cuisine.
          <br /> More broadly, it's about fresh, colorful, and healthy cooking
          with Mediterranean accents, but also about fulfilling your desires and
          the challenges
          <br /> you want to present to me.
        </p>
      </div>

      <div className="text-center mt-10">
        <span className="text-lg md:text-2xl lg:text-3xl font-bold md:text-left ">
          Explore Delicious Dishes
          <br className="hidden md:inline" /> and Unique Flavors
        </span>
      </div>

      <div className="" style={{ marginTop: "7rem" }}>
        <div class="flex flex-col lg:flex-row items-center justify-center">
          <div class="flex flex-col justify-left mr-10 lg:mr-0 lg:ml-12">
            <span class="block text-left text-3xl font-bold text-gray-800 mb-4 ">
              Crafting Exceptional
              <br /> Culinary Experiences
            </span>
            <span class="text-gray-500 block text-left text-base mb-4 lg:mt-10">
              Our culinary creations are meticulously prepared
              <br class="hidden lg:inline" />
              to satisfy a variety of tastes and preferences.
              <br class="hidden lg:inline" />
              Our kitchen team collaborates closely to create innovative dishes
              <br class="hidden lg:inline" />
              and dedication to culinary excellence that reflect our passion for
              food
            </span>
          </div>

          <img
            src="http://localhost:5173/src/assets/img/img5.jpg"
            class="w-full lg:w-2/5 mt-8 lg:mt-0 ml-0 lg:ml-12 rounded-lg"
          ></img>
        </div>
      </div>

      <div className="" style={{ marginTop: "7rem" }}>
        <div class="flex flex-col-reverse lg:flex-row items-center justify-center">
          <img
            src="http://localhost:5173/src/assets/img/img2.jpg"
            class="w-full lg:w-2/5 mt-8 lg:mt-0 rounded-lg"
          ></img>

          <div class="flex flex-col justify-left ml-0 lg:ml-12 mt-8 lg:mt-0">
            <span class="block text-left text-3xl font-bold text-gray-800 mb-4">
              Crafting Delicious <br class="hidden lg:inline" />
              Dining Moments
            </span>
            <span class="block text-left text-base text-gray-500 mb-4">
              We're experts in creating unforgettable dining experiences
              <br class="hidden lg:inline" />
              From our thoughtfully designed menus to our creative presentation
              <br class="hidden lg:inline" />
              we're dedicated to making every meal memorable Whether it's our
              flavorful dishe
              <br class="hidden lg:inline" />
              our goal is to delight your taste buds
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 mt-20">
        <img src={img} alt="img" />

        <div className=" space-y-4 lg:pt-14">
          <h1 className=" font-semibold text-4xl text-center md:text-start">
            Why Choose Us?
          </h1>
          <p className="text-gray-500 block">
            we believe that every meal should be an experience. Our passion for
            culinary excellence and commitment to quality have made us a
            favorite among food enthusiasts. Here’s why you should choose us.
            Our menu features a blend of traditional and contemporary dishes,
            crafted with the finest ingredients. From our signature dishes
          </p>
          <p className="text-gray-500 block">
            Our restaurant is designed to provide a cozy and welcoming
            environment where you can relax and enjoy your meal. Whether you’re
            dining with family, friends, or on a romantic date, you’ll feel
            right at home
          </p>
          <div className=" flex justify-center lg:justify-start">
            <Button title="Learn More" />
          </div>
        </div>
      </div>

      <div className="ml-4 md:ml-16 mr-4 md:mr-16 p-10 md:p-24 flex flex-col md:flex-row items-center bg-gradient-to-br from-gray-100 to-blue-50 shadow-lg rounded-2xl mt-6 md:mt-12 transform hover:scale-105 transition-transform duration-300 ">
        <span className="mr-8 md:w-3/5 md:mr-0 md:mt-0 text-center md:text-left ">
          <h2 className="text-2xl md:text-2xl font-extrabold text-gray-800 mb-6 leading-tight">
            Collaborons pour donner vie à vos idées
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            Bonjour ! C'est le meilleur moyen de nous contacter pour collaborer
            sur votre nouveau projet. Si vous avez des questions, n'hésitez pas
            à nous joindre via notre adresse e-mail officielle ou notre numéro
            de téléphone. Nous sommes également actifs sur divers réseaux
            sociaux, alors connectez-vous avec nous sur Facebook, Instagram ou
            LinkedIn. Nous avons hâte d'avoir de vos nouvelles et d'explorer
            ensemble de nouvelles opportunités passionnantes.
          </p>
        </span>
        <Link
          to="/contact"
          className="flex items-center justify-center mt-8 md:mt-0 md:ml-auto w-full md:w-2/5"
        >
          <button className="bg-brightColor text-white font-bold py-4 px-8 rounded-full shadow-md transform hover:scale-110 transition-transform duration-300 w-full md:w-auto">
            Contactez-nous
            <i className="fas fa-arrow-right ml-3"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
