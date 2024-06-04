import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import traite from "../assets/img/traite.png";
import { Link } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import {
  
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
 
    <div className="bg-gray-900 text-white rounded-t-3xl mt-8 md:mt-0 shadow-2xl">
      <div className="container mx-auto p-8 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <img
                src={traite}
                alt="Logo Traiteur Joy"
                className="w-16 h-auto rounded-full shadow-lg"
              />
              <h1 className="font-bold text-2xl text-brightColor">
                Traiteur Joy
              </h1>
            </div>
            <p className="text-gray-300">
              Nous sommes là pour vous servir des plats délicieux,
              <br />
              accompagnés de boissons raffinées.
            </p>
            <div>
              <p className="text-lg font-semibold mb-3">
                Suivez Notre Actualité
              </p>
              <form
                action="/abonnement"
                method="post"
                className="flex flex-col space-y-3"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Entrez votre email"
                  required
                  className="px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-brightColor"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-brightColor text-white rounded-lg font-semibold hover:bg-brightColor-dark transition duration-300 shadow-md"
                >
                  S'abonner
                </button>
              </form>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brightColor mb-6">
              Navigation
            </h2>
            <nav className="space-y-3">
              <Link
                to="/plats"
                className="block text-gray-300 hover:text-brightColor transition duration-300"
              >
                Nos Plats
              </Link>
              <Link
                to="/a-propos"
                className="block text-gray-300 hover:text-brightColor transition duration-300"
              >
                À Propos
              </Link>
              <Link
                to="/menu"
                className="block text-gray-300 hover:text-brightColor transition duration-300"
              >
                Menu
              </Link>
              <Link
                to="/carte-generale"
                className="block text-gray-300 hover:text-brightColor transition duration-300"
              >
                Carte Générale
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brightColor mb-6">
              Services
            </h2>
            <nav className="space-y-3">
              <Link
                to="/traiteur"
                className="block text-gray-300 hover:text-brightColor transition duration-300"
              >
                Services Traiteur
              </Link>
              <Link
                to="/cours-cuisine"
                className="block text-gray-300 hover:text-brightColor transition duration-300"
              >
                Cours de Cuisine
              </Link>
              <Link
                to="/evenements"
                className="block text-gray-300 hover:text-brightColor transition duration-300"
              >
                Événements Privés
              </Link>
              <Link
                to="/livraison"
                className="block text-gray-300 hover:text-brightColor transition duration-300"
              >
                Livraison à Domicile
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brightColor mb-6">
              Contact
            </h2>
            <nav className="space-y-4">
              <a
                href="mailto:traiteurjoy@gmail.com"
                className="block text-gray-300 hover:text-brightColor transition duration-300 flex items-center"
              >
                <MdOutlineMailOutline className="text-2xl mr-3" />
                traiteurjoy@gmail.com
              </a>
              <a
                href="tel:+32493039440"
                className="block text-gray-300 hover:text-brightColor transition duration-300 flex items-center"
              >
                <FaPhoneAlt className="text-xl mr-3" />
                +32 493 03 94 40
              </a>
              <a
                href="https://goo.gl/maps/yourAddress"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-brightColor transition duration-300 flex items-start"
              >
                <IoLocationOutline className="text-2xl mr-3 mt-1" />
                <span>
                  Rue Joseph Stevens 28
                  <br /> 1000 Bruxelles
                  <br /> TVA 0744.562.496
                </span>
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 Traiteur Joy. Tous droits réservés.
            </p>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
