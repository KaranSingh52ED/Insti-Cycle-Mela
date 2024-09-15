import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import Layout from "../Layout/Layout";

const ContactUs = () => {
  return (
    <main className="pt-28 p-8 w-full font-serif text-center  ">
      <h2 className="text-4xl my-6">Contact Us</h2>
      <div className="flex flex-col  items-center">
        <div className="mb-10 text-left w-full  ring-1 p-4 ring-black rounded-3xl shadow-black shadow-inner max-w-lg">
          <h3 className="text-xl mb-4">Contact Information:</h3>
          <p className="mb-2">Email: webops@smail.iitm.ac.in</p>
          <p className="mb-2">Phone: +91-8002860787</p>
          <p className="mb-2">
            Address: IIT Madras, Chennai, Tamil Nadu, (INDIA),600036
          </p>
        </div>
        <form className="w-full max-w-lg ring-1 ring-black shadow-black shadow-inner bg-white p-8 rounded-md">
          <div className="mb-4">
            <label
              className="block text-left text-gray-800 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-left text-gray-800 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-left text-gray-800 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="5"
              placeholder="Your message"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ContactUs;
