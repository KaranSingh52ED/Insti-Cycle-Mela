import React, { useState } from "react";
import Layout from "./../Layout/Layout";
import { FaFilter } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Home = () => {
  const [active, setActive] = useState(true);
  return (
    <Layout>
      <div className=" py-44 sm:py-20 flex items-center justify-center flex-wrap gap-10 w-5/6">
        {/* THIS IS THE FILTERS BOX */}
        {active && (
            <RxCross1 className="fixed h-7 w-7  top-20 right-8 hidden sm:block" onClick={()=>{setActive(!active)}}/>
        )}
        {!active && (
            <FaFilter className="fixed h-7 w-7  top-20 right-8 hidden sm:block" onClick={()=>{setActive(!active)}}/>
        )}
        
        <div
          className={`fixed bg-gray-300 sm:bg-gray-200 sm:top-28 sm:w-60 sm:right-5 sm:h-60 sm:rounded p-2 top-28 mt-1 w-full flex gap-5 overflow-auto sm:flex-col sm:scale-${
            active ? "100" : "0"
          } transition-all duration-500 `}
        >
          <div className="flex gap-4 text-sm w-full items:center justify-between">
            <span className="font-bold">Price:</span>
            <select className="rounded sm:bg-gray-100 sm:p-2">
              <option>Rs. 1000 - Rs. 2000</option>
              <option>Rs. 2000 - Rs. 3000</option>
              <option>Rs. 3000 - Rs. 4000</option>
              <option selected>All</option>
            </select>
          </div>
          <div className="flex gap-4 text-sm w-full items-center justify-between">
            <span className="font-bold">Age:</span>
            <select className="rounded sm:bg-gray-100 sm:p-2">
              <option>1 - 2 years</option>
              <option>2 - 3 years</option>
              <option>3 - 4 years</option>
              <option>Older</option>
              <option selected>All</option>
            </select>
          </div>
        </div>

        {/* THIS IS THE CARD */}
        <div className="border border-gray-400 p-2 rounded text-white h-72 w-72 flex flex-col gap-2 bg-white hover:border-black cursor-pointer">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.I8N6Q1Ghq9Uvoot_5jBT9gHaFj&pid=Api&P=0&h=180"
            alt=""
            className="w-full h-2/3 bg-blue-500 rounded object-streth"
          />
          <div className="h-1/3">
            <div className="font-bold text-black text-xl">Rs.9000</div>
            <div className="text-gray-800">This is the title for the card</div>
            <div className="text-gray-500">Currently At: Mandakini Hostel</div>
          </div>
        </div>
        <div className="border border-gray-400 p-2 rounded text-white h-72 w-72 flex flex-col gap-2 bg-white hover:border-black cursor-pointer">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.I8N6Q1Ghq9Uvoot_5jBT9gHaFj&pid=Api&P=0&h=180"
            alt=""
            className="w-full h-2/3 bg-blue-500 rounded object-streth"
          />
          <div className="h-1/3">
            <div className="font-bold text-black text-xl">Rs.9000</div>
            <div className="text-gray-800">This is the title for the card</div>
            <div className="text-gray-500">Currently At: Mandakini Hostel</div>
          </div>
        </div>
        <div className="border border-gray-400 p-2 rounded text-white h-72 w-72 flex flex-col gap-2 bg-white hover:border-black cursor-pointer">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.I8N6Q1Ghq9Uvoot_5jBT9gHaFj&pid=Api&P=0&h=180"
            alt=""
            className="w-full h-2/3 bg-blue-500 rounded object-streth"
          />
          <div className="h-1/3">
            <div className="font-bold text-black text-xl">Rs.9000</div>
            <div className="text-gray-800">This is the title for the card</div>
            <div className="text-gray-500">Currently At: Mandakini Hostel</div>
          </div>
        </div>
        <div className="border border-gray-400 p-2 rounded text-white h-72 w-72 flex flex-col gap-2 bg-white hover:border-black cursor-pointer">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.I8N6Q1Ghq9Uvoot_5jBT9gHaFj&pid=Api&P=0&h=180"
            alt=""
            className="w-full h-2/3 bg-blue-500 rounded object-streth"
          />
          <div className="h-1/3">
            <div className="font-bold text-black text-xl">Rs.9000</div>
            <div className="text-gray-800">This is the title for the card</div>
            <div className="text-gray-500">Currently At: Mandakini Hostel</div>
          </div>
        </div>
        <div className="border border-gray-400 p-2 rounded text-white h-72 w-72 flex flex-col gap-2 bg-white hover:border-black cursor-pointer">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.I8N6Q1Ghq9Uvoot_5jBT9gHaFj&pid=Api&P=0&h=180"
            alt=""
            className="w-full h-2/3 bg-blue-500 rounded object-streth"
          />
          <div className="h-1/3">
            <div className="font-bold text-black text-xl">Rs.9000</div>
            <div className="text-gray-800">This is the title for the card</div>
            <div className="text-gray-500">Currently At: Mandakini Hostel</div>
          </div>
        </div>
        <div className="border border-gray-400 p-2 rounded text-white h-72 w-72 flex flex-col gap-2 bg-white hover:border-black cursor-pointer">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.I8N6Q1Ghq9Uvoot_5jBT9gHaFj&pid=Api&P=0&h=180"
            alt=""
            className="w-full h-2/3 bg-blue-500 rounded object-streth"
          />
          <div className="h-1/3">
            <div className="font-bold text-black text-xl">Rs.9000</div>
            <div className="text-gray-800">This is the title for the card</div>
            <div className="text-gray-500">Currently At: Mandakini Hostel</div>
          </div>
        </div>
        <div className="border border-gray-400 p-2 rounded text-white h-72 w-72 flex flex-col gap-2 bg-white hover:border-black cursor-pointer">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.I8N6Q1Ghq9Uvoot_5jBT9gHaFj&pid=Api&P=0&h=180"
            alt=""
            className="w-full h-2/3 bg-blue-500 rounded object-streth"
          />
          <div className="h-1/3">
            <div className="font-bold text-black text-xl">Rs.9000</div>
            <div className="text-gray-800">This is the title for the card</div>
            <div className="text-gray-500">Currently At: Mandakini Hostel</div>
          </div>
        </div>
        <div className="border border-gray-400 p-2 rounded text-white h-72 w-72 flex flex-col gap-2 bg-white hover:border-black cursor-pointer">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.I8N6Q1Ghq9Uvoot_5jBT9gHaFj&pid=Api&P=0&h=180"
            alt=""
            className="w-full h-2/3 bg-blue-500 rounded object-streth"
          />
          <div className="h-1/3">
            <div className="font-bold text-black text-xl">Rs.9000</div>
            <div className="text-gray-800">This is the title for the card</div>
            <div className="text-gray-500">Currently At: Mandakini Hostel</div>
          </div>
        </div>
        <div className="border border-gray-400 p-2 rounded text-white h-72 w-72 flex flex-col gap-2 bg-white hover:border-black cursor-pointer">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.I8N6Q1Ghq9Uvoot_5jBT9gHaFj&pid=Api&P=0&h=180"
            alt=""
            className="w-full h-2/3 bg-blue-500 rounded object-streth"
          />
          <div className="h-1/3">
            <div className="font-bold text-black text-xl">Rs.9000</div>
            <div className="text-gray-800">This is the title for the card</div>
            <div className="text-gray-500">Currently At: Mandakini Hostel</div>
          </div>
        </div>
        <div className="border border-gray-400 p-2 rounded text-white h-72 w-72 flex flex-col gap-2 bg-white hover:border-black cursor-pointer">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.I8N6Q1Ghq9Uvoot_5jBT9gHaFj&pid=Api&P=0&h=180"
            alt=""
            className="w-full h-2/3 bg-blue-500 rounded object-streth"
          />
          <div className="h-1/3">
            <div className="font-bold text-black text-xl">Rs.9000</div>
            <div className="text-gray-800">This is the title for the card</div>
            <div className="text-gray-500">Currently At: Mandakini Hostel</div>
          </div>
        </div>
        <div className="border border-gray-400 p-2 rounded text-white h-72 w-72 flex flex-col gap-2 bg-white hover:border-black cursor-pointer">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.I8N6Q1Ghq9Uvoot_5jBT9gHaFj&pid=Api&P=0&h=180"
            alt=""
            className="w-full h-2/3 bg-blue-500 rounded object-streth"
          />
          <div className="h-1/3">
            <div className="font-bold text-black text-xl">Rs.9000</div>
            <div className="text-gray-800">This is the title for the card</div>
            <div className="text-gray-500">Currently At: Mandakini Hostel</div>
          </div>
        </div>
        <div className="border border-gray-400 p-2 rounded text-white h-72 w-72 flex flex-col gap-2 bg-white hover:border-black cursor-pointer">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.I8N6Q1Ghq9Uvoot_5jBT9gHaFj&pid=Api&P=0&h=180"
            alt=""
            className="w-full h-2/3 bg-blue-500 rounded object-streth"
          />
          <div className="h-1/3">
            <div className="font-bold text-black text-xl">Rs.9000</div>
            <div className="text-gray-800">This is the title for the card</div>
            <div className="text-gray-500">Currently At: Mandakini Hostel</div>
          </div>
        </div>
        <div className="border border-gray-400 p-2 rounded text-white h-72 w-72 flex flex-col gap-2 bg-white hover:border-black cursor-pointer">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.I8N6Q1Ghq9Uvoot_5jBT9gHaFj&pid=Api&P=0&h=180"
            alt=""
            className="w-full h-2/3 bg-blue-500 rounded object-streth"
          />
          <div className="h-1/3">
            <div className="font-bold text-black text-xl">Rs.9000</div>
            <div className="text-gray-800">This is the title for the card</div>
            <div className="text-gray-500">Currently At: Mandakini Hostel</div>
          </div>
        </div>
        <div className="border border-gray-400 p-2 rounded text-white h-72 w-72 flex flex-col gap-2 bg-white hover:border-black cursor-pointer">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.I8N6Q1Ghq9Uvoot_5jBT9gHaFj&pid=Api&P=0&h=180"
            alt=""
            className="w-full h-2/3 bg-blue-500 rounded object-streth"
          />
          <div className="h-1/3">
            <div className="font-bold text-black text-xl">Rs.9000</div>
            <div className="text-gray-800">This is the title for the card</div>
            <div className="text-gray-500">Currently At: Mandakini Hostel</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
