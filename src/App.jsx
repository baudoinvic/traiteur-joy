import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Dishes from "./components/Dishes";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { useTranslation } from "react-i18next";

const App = () => {

   const { t, i18n } = useTranslation();

     const changeLanguage = (lng) => {
       i18n.changeLanguage(lng);
     };

  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dishes" element={<Dishes />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/review" element={<Review />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
