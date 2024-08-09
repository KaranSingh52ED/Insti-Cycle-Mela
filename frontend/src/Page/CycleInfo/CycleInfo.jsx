import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { backendUrl } from "../../config";
const CycleInfo = () => {
  const { _id } = useParams();
  const [bicycle, setBicycle] = useState(null);
  const [activeImg, setActiveImage] = useState("");
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/bicycles/${_id}`);
        const data = await response.json();
        setBicycle(data);
        setActiveImage(`${backendUrl}/uploads/${data.images[0]}`);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [_id]);

  if (!bicycle) return <div>Loading...</div>;

  return (
    <div className="flex flex-col lg:mt-24 md:mt-48 font-serif justify-between p-5 bg-green-50 ring-1 ring-blue-500 m-5 shadow-inner shadow-black rounded-3xl lg:flex-row gap-16 lg:items-center">
      <div className="flex flex-col gap-2 lg:w-2/5">
        <img
          src={activeImg}
          alt={bicycle.title}
          className="w-full h-full  object-cover rounded-xl"
        />
        <div className="flex flex-row justify-between overflow-x-auto overflow-y-hidden mb-1">
          {bicycle.images.map((image, index) => (
            <img
              key={index}
              src={`${backendUrl}/uploads/${bicycle.images[index]}`}
              alt={`bicycle ${index + 1}`}
              className="w-24 h-24 rounded-md  ring-1 ring-slate-700 hover:shadow-md m-4 transform transition-shadow  hover:shadow-black duration-500 ease-in-out shadow-xl  cursor-pointer "
              onClick={() => setActiveImage(`${backendUrl}/uploads/${image}`)}
            />
          ))}
        </div>
      </div>
      {/* ABOUT */}
      <div className="flex flex-col  gap-4 lg:w-2/4 md:w-full">
        <div className="flex  justify-center ">
          <h1 className="lg:text-4xl md:text-3xl p-2  font-bold border-2 rounded-lg w-72 my-10  shadow-lg shadow-black hover:translate-x-2  font-serif hover:rotate-3 hover:shadow-blue-500 text-center ">
            {" "}
            Product Info
          </h1>
        </div>
        <div className=" flex justify-start items-center space-x-8">
          <span>
            Condition:-{" "}
            <b className=" text-violet-600 font-semibold">
              {bicycle.condition}
            </b>
          </span>
          <span>
            Gender:-{" "}
            <b className=" text-slate-600 font-semibold">{bicycle.gender}</b>
          </span>
        </div>
        <div className="flex flex-row space-x-10">
          <h1 className="text-3xl font-bold">{bicycle.title}</h1>
          <h6 className="text-2xl font-semibold">
            Price: <b className="text-red-600"> ₹{bicycle.price} </b>
          </h6>
        </div>
        <hr />
        <div>
          <h1 className="text-lg text-center font-semibold">
            Contact details:
          </h1>
          <p className="text-gray-700">
            <span className=" font-semibold">Name:</span> {bicycle.name}
          </p>
          <p className="text-gray-700">
            <span className=" font-semibold">Email:</span> {bicycle.email}
          </p>
          <p className="text-gray-700">
            <span className=" font-semibold">Phone:</span> {bicycle.phoneNumber}
          </p>
        </div>
        <hr />
        <p className="text-gray-700">
          <span className=" font-semibold">Description:</span>{" "}
          {bicycle.description}
        </p>
      </div>
    </div>
  );
};

export default CycleInfo;
