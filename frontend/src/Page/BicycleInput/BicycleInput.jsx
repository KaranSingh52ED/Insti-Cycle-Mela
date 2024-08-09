import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../../config";
const BicycleForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [images, setImages] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("gender", gender);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("condition", condition);
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    axios
      .post(`${backendUrl}/api/bicycles`, formData, {
        headers: {
          "Content-Type": "ultipart/form-data",
        },
      })
      .then((response) => {
        setSubmitted(true);
        // Update state with response data, if needed
        console.log("response data ->>");
        console.log("this is the data : ", response.data);
        console.log("<<-");
      })
      .catch((error) => {
        console.error(error);
        // Handle error properly, e.g., display error message to user
      });
  };

  const handleReset = () => {
    // Reset form fields
    setName("");
    setEmail("");
    setPhoneNumber("");
    setGender("");
    setTitle("");
    setDescription("");
    setPrice("");
    setCondition("");
    setImages([]);
    setSubmitted(false);
  };

  return (
    <div className="container mx-auto py-12 flex flex-col md:flex-row items-start justify-center">
      {/* Left Column (Guidelines and Tips) */}
      <div className="w-full md:w-2/5 bg-white p-6 shadow-md rounded-md mb-6 md:mb-0 md:mr-6">
        <h2 className="text-xl font-bold mb-4 text-center text-gray-800">
          Guidelines and Tips
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li className="mb-2">
            <strong>Title:</strong> Keep it short and descriptive. Mention key
            features like brand, model, and condition.
          </li>
          <li className="mb-2">
            <strong>Description:</strong> Provide detailed information about the
            bicycle. Include its specifications, usage history, and any
            accessories that come with it.
          </li>
          <li className="mb-2">
            <strong>Price:</strong> Research similar listings to price your
            bicycle competitively. Be realistic about the value based on its
            condition.
          </li>
          <li className="mb-2">
            <strong>Condition:</strong> Be honest about the condition. Buyers
            appreciate transparency and it helps build trust.
          </li>
          <li className="mb-2">
            <strong>Photos:</strong> Take clear, well-lit photos from multiple
            angles. Highlight any special features or flaws. Clean your bicycle
            before taking pictures to make it look its best.
          </li>
        </ul>
      </div>

      {/* Right Column (Bicycle Listing Form or Confirmation) */}
      <div className="w-full md:w-3/5 bg-white shadow-md rounded-md overflow-hidden">
        {submitted ? (
          // Confirmation Message
          <div className="bg-blue-500 text-white text-center py-4" id="Bicycle">
            <h1 className="text-2xl font-bold">Thank You!</h1>
            <p className="text-gray-100 mb-4">
              Your bicycle has been listed successfully.
            </p>
            <button
              onClick={handleReset}
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
            >
              List Another Bicycle
            </button>
          </div>
        ) : (
          // Bicycle Listing Form
          <form onSubmit={handleSubmit} id="bicycle-form" className="px-6 py-8">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="number"
                className="block text-gray-700 font-bold mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                placeholder="Enter your phone number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="gender"
                className="block text-gray-700 font-bold mb-2"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
              >
                <option value="" disabled>
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 font-bold mb-2"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="Enter title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                required
                placeholder="Enter description"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-gray-700 font-bold mb-2"
              >
                Price (₹)
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                placeholder="Enter price"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="condition"
                className="block text-gray-700 font-bold mb-2"
              >
                Condition
              </label>
              <select
                id="condition"
                name="condition"
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
              >
                <option value="" disabled>
                  Select condition
                </option>
                <option value="new">New</option>
                <option value="like_new">Like New</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="images"
                className="block text-gray-700 font-bold mb-2"
              >
                Upload Images
              </label>
              <input
                type="file"
                id="images"
                name="images[]"
                accept="image/*"
                onChange={(e) => setImages(e.target.files)}
                multiple
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BicycleForm;
