import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import traite from "../assets/img/traite.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-black text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <div className="flex flex-row">
            <span>
              <img
                src={traite}
                alt="Restaurant Icon"
                className="w-16 h-8 inline-block align-text-bottom"
              />
            </span>
            <h1 className=" font-semibold text-xl pb-4">Traiteur joy</h1>
          </div>
          <p className=" text-sm">
            We are here to serve you your Delicious foods
            <br />
            with drink as well
          </p>
          <p className="mt-5">Subscribe to our newsletter </p>
          <form
            action="/subscribe"
            method="post"
            class="flex flex-col md:flex-row md:items-center"
          >
            <div class="mb-4 md:mb-0 md:mr-4">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                class="px-4 py-2 border border-brightColor rounded-md focus:outline-none focus:ring-2 "
              ></input>
            </div>
            <button
              type="submit"
              class="px-4 py-2 text-white bg-brightColor rounded-md focus:outline-none focus:ring-2 "
            >
              Subscribe
            </button>
          </form>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              className="hover:text-brightColor transition-all cursor-pointer"
              to="/dishes"
            >
              Dishes
            </Link>
            <Link
              className="hover:text-brightColor transition-all cursor-pointer"
              to="/about"
            >
              About
            </Link>
            <Link
              className="hover:text-brightColor transition-all cursor-pointer"
              to="/menu"
            >
              Menu
            </Link>
            <Link
              className="hover:text-brightColor transition-all cursor-pointer"
              to="/review"
            >
              General Menu
            </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              className="hover:text-brightColor transition-all cursor-pointer"
              to="/Dishes"
            >
              our Dishes
            </Link>
            <Link
              className="hover:text-brightColor transition-all cursor-pointer"
              to="/menu"
            >
              Menu
            </Link>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/rewiew"
            >
              Menu General
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <span className=" hover:text-brightColor transition-all cursor-pointer">
              traiteurjoy@email.com
            </span>
            <span className=" hover:text-brightColor transition-all cursor-pointer">
              +32 493 03 94 40
            </span>
            <span className=" hover:text-brightColor transition-all cursor-pointer">
              Address: Rue Joseph Stevens 28
              <br /> 1000 Bruxelles TVA 0744.562.496
            </span>
            {/* <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Social media
            </a> */}
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            @copyright developed in
            <span className=" text-brightColor">2024 </span> | All rights
            reserved
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
