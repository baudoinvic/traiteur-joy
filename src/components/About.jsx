import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <section class=" py-16">
        <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-8 md:mb-0">
              <img
                src="http://localhost:5173/src/assets/img/img2.jpg"
                alt="Restaurant Image"
                class="rounded-lg shadow-lg"
              ></img>
            </div>
            <div class="md:w-1/2 md:pl-8">
              <h2 class="text-3xl font-bold mb-4">About Traiteur Joy</h2>
              <p class="text-gray-700 mb-6">
                Welcome to Traiteur Joy, where we celebrate the art of fine
                dining and exceptional culinary experiences. Our restaurant is a
                labor of love, born from a passion for creating unforgettable
                moments through exquisite flavors and impeccable service.
              </p>
              <p class="text-gray-700 mb-8">
                At Traiteur Joy, we believe that dining is not just about
                satisfying hunger, but about indulging in a sensory journey that
                tantalizes the palate and delights the senses. Our talented
                chefs meticulously craft each dish, using only the finest and
                freshest ingredients, ensuring that every bite is a masterpiece
                of flavor and presentation.
              </p>
              {/* <a
                href="#"
                class="inline-block bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300"
              >
                Read More about our General menu
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
