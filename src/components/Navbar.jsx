
import React, { useState } from "react";
import { Link } from "react-router-dom";
import traite from "../assets/img/traite.png";
import { useTranslation } from "react-i18next"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { t, i18n } = useTranslation(); 
  

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change language function
  };


     const navItems = [
    { to: "/home", text: t("Accueil") },
    { to: "/dishes", text: t("Cours de cuisine") },
    { to: "/about", text: t("À propos de nous") },
    {
      text: t("Menu"),
      dropdown: [
        { to: "/menu", text: t("Notre Menu") },
        { to: "/review", text: t("Menu Général") },
        { to: "/gallery", text: t("Galerie") },
      ],
    },
    { to: "/contact", text: t("Contactez-nous") },
  ];

  const renderNavLinks = (isMobile = false) => (
    <>
      {navItems.map(({ to, text, dropdown }, index) => (
        <div key={to || text} className="relative">
          {dropdown ? (
            <div className="group inline-block w-full">
              <button
                className={`${
                  isMobile
                    ? "block w-full my-2 px-8 py-4 text-center text-lg font-medium text-white hover:bg-gray-700 transition-colors"
                    : "text-gray-600 hover:text-brightColor transition-colors py-2 px-4 rounded-md inline-flex items-center"
                }`}
                onClick={
                  isMobile
                    ? () => toggleDropdown(index)
                    : () =>
                        setActiveDropdown(
                          activeDropdown === index ? null : index
                        )
                }
              >
                <span>{text}</span>
                <svg
                  className={`ml-2 h-5 w-5 transition-transform ${
                    isMobile
                      ? "ml-2 h-5 w-5 transition-transform"
                      : "group-hover:rotate-180"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {((isMobile && activeDropdown === index) ||
                (!isMobile && activeDropdown === index)) && (
                <div
                  className={`${
                    isMobile
                      ? "block w-full"
                      : "absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  }`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <div className="py-1" role="none">
                    {dropdown.map(({ to, text }) => (
                      <Link
                        key={to}
                        to={to}
                        className={`${
                          isMobile
                            ? "block w-full my-2 px-8 py-4 text-center text-lg font-medium text-white hover:bg-gray-700 transition-colors"
                            : "text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-brightColor transition-colors"
                        }`}
                        role="menuitem"
                        onClick={isMobile ? toggleMenu : null}
                      >
                        {text}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              to={to}
              className={`${
                isMobile
                  ? "block w-full my-2 px-8 py-4 text-center text-lg font-medium text-white hover:bg-gray-700 transition-colors"
                  : "text-gray-600 hover:text-brightColor transition-colors py-2 px-4 rounded-md"
              }`}
              onClick={isMobile ? toggleMenu : null}
            >
              {text}
            </Link>
          )}
        </div>
      ))}

      {/* Language Switcher Buttons */}
      <div className="flex items-center space-x-2 mt-4 md:mt-0">
        <button
          onClick={() => changeLanguage("fr")}
          className="flex items-center space-x-1 bg-transparent border  px-2 py-1 rounded focus:outline-none"
        >
          <img
            src="https://www.countryflags.com/wp-content/uploads/france-flag-png-xl.png"
            alt="French Flag"
            className="w-4"
          />
          <span className="text-gray-500 text-sm">Fr</span>
        </button>
        <button
          onClick={() => changeLanguage("en")}
          className="flex items-center space-x-1 bg-transparent border border-gray-300 px-2 py-1 rounded focus:outline-none w-16"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCIEEb2cSAlgP4ZLCUL8r6Jgw0cvjAhXwiCtc1eXYGTA&s"
            alt="English Flag"
            className="w-6"
          />
          <span className="text-gray-500 text-sm">Eng</span>
        </button>
      </div>
    </>
  );

  return (
    <div className="fixed w-full z-50">
      <div className="bg-white shadow-lg">
        <div className="flex flex-row justify-between items-center p-4 md:px-8 lg:px-16 xl:px-32 transition-all duration-300">
          {/* Logo */}
          <Link to="/home">
            <div className="flex flex-row items-center cursor-pointer space-x-3">
              <img
                src={traite}
                alt="Restaurant Icon"
                className="w-10 h-10 md:w-16 md:h-10 object-contain"
              />
              <h1 className="text-lg md:text-xl font-bold text-gray-800 hover:text-brightColor transition-colors">
                Traiteur Joy
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-row items-center text-base lg:text-lg font-medium space-x-6 lg:space-x-8">
            {renderNavLinks()}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-brightColor transition-colors focus:outline-none"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-95 z-50">
           
            <div className="flex justify-end p-4">
              <button
                className="text-white hover:text-brightColor transition-colors focus:outline-none"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col items-center justify-center h-full pb-16">
              {renderNavLinks(true)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
