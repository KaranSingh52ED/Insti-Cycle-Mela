import React from 'react'
import Layout from './../Layout/Layout';

const AboutUs = () => {
  return (
    <Layout>
      <main className="pt-28 p-8 text-center mt-12">
        <h1 className="text-2xl font-bold mb-8">About Us</h1>
        <div className="w-full  bg-gray-100 p-8 rounded-lg shadow-md mb-8">
          <section className="flex items-center mb-8">
            <div className="flex-1 pr-6">
              <h2 className="text-2xl font-semibold mb-4">Cycle Mela</h2>
              <p className="text-gray-700 leading-relaxed">
                Cycles are an integral part of life at IIT Madras, facilitating
                quick and convenient commuting across our expansive campus.
                Unfortunately, as students graduate each year, many cycles are
                left abandoned across the campus.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This website aims to bridge the gap between sellers and buyers,
                providing a platform for students to sell their used cycles and
                for buyers to purchase second-hand cycles at reasonable prices.
                By connecting sellers and buyers, we hope to promote
                sustainability and ensure that more cycles find new homes
                instead of being left unused.
              </p>
            </div>
            <img
              src="https://via.placeholder.com/200"
              alt="some picture "
              className="w-48 h-auto rounded-lg"
            />
          </section>
        </div>
        <div className="w-full  bg-gray-100 p-8 rounded-lg shadow-md">
          <section className="flex items-center mb-8">
            <div className="flex-1 pr-6">
              <h2 className="text-2xl font-semibold mb-4">Our Club</h2>
              <p className="text-gray-700 leading-relaxed">
                Institute Web Operations Club, the vibrant hub where technology
                enthusiasts come together to explore, learn, and innovate in the
                ever-evolving world of web operations. We are a passionate
                community of students at IIT Madras who share a common
                fascination for the intricate workings behind seamless online
                experiences.
              </p>
            </div>
            <img
              src="https://via.placeholder.com/200"
              alt="some picture "
              className="w-48 h-auto rounded-lg"
            />
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default AboutUs;
