import React from "react";
import Layout from "./../Layout/Layout";

const AboutUs = () => {
  return (
    <main className="pt-28 p-8 text-center mt-12 md:px-16 lg:px-24 xl:px-32">
      <h1 className="text-3xl font-bold mb-8">About Us</h1>
      <img
        src="../../../src/assets/cycle.jpg"
        alt="Buy & Sell"
        className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-auto rounded-lg mx-auto"
      />
      <div className="w-full bg-gray-100 p-8 rounded-lg shadow-md mb-8 md:mb-12 lg:mb-16 xl:mb-20">
        <section className="flex flex-col md:flex-row items-center mb-8">
          <div className="flex-1 pr-0 md:pr-6 mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">Buy & Sell Portal</h2>
            <p className="text-gray-700 text-lg md:text-base leading-relaxed">
              Cycles are an integral part of life at IIT Madras, facilitating
              quick and convenient commuting across our expansive campus.
              Unfortunately, as students graduate each year, many cycles are
              left abandoned across the campus.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This website aims to bridge the gap between sellers and buyers,
              providing a platform for students to sell their used cycles and
              for buyers to purchase second-hand cycles at reasonable prices. By
              connecting sellers and buyers, we hope to promote sustainability
              and ensure that more cycles find new homes instead of being left
              unused.
            </p>
          </div>
        </section>
      </div>
      <div className="w-full bg-gray-100 p-2 rounded-lg shadow-md mb-8 md:mb-12 lg:mb-16 xl:mb-20">
        <section className="flex flex-col-reverse md:flex-col items-center mb-8">
          <img
            src="../../../src/assets/instiWebops.jpeg"
            alt="Institute Web Operations Club"
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-auto rounded-lg mx-auto"
          />
          <div className="flex-1 pr-0 md:pr-6 mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">Our Club</h2>
            <p className="text-gray-700 leading-relaxed">
              Institute Web Operations Club, the vibrant hub where technology
              enthusiasts come together to explore, learn, and innovate in the
              ever-evolving world of web operations. We are a passionate
              community of students at IIT Madras who share a common fascination
              for the intricate workings behind seamless online experiences.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutUs;
