import React, { useState } from "react";

import Button from "../layouts/Button";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import traite from "../assets/img/traite.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className=" fixed w-full">
      <div>
        <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className=" flex flex-row items-center cursor-pointer">
            <span>
              <img
                src={traite}
                alt="Restaurant Icon"
                className="w-16 h-8 inline-block align-text-bottom"
              />
            </span>
            <h1 className=" text-xl font-semibold">Traiteur joy</h1>
          </div>

         
          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="/home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Accueil
            </Link>

            <div className="relative group">
              <div className="flex items-center gap-1">
                <Link
                  to="/dishes"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-brightColor transition-all cursor-pointer"
                >
                  Cours de cuisine
                </Link>
              </div>
            </div>

            <Link
              to="/about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              À propos de nous
            </Link>

            <Link
              to="/menu"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Notre Menu
            </Link>

            <Link
              to="/review"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Menu Général
            </Link>

            <Link
              to="/contact"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Contactez-nous
            </Link>
          </nav>

          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
