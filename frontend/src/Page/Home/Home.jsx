import React, { useEffect, useState } from "react";

import { FaFilter } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";

const Home = () => {
  const [active, setActive] = useState(false);
  const [bicycles, setBicycles] = useState([]);
  const [filters, setFilters] = useState({ category: "", minPrice: "", maxPrice: "", condition: "", location: "" });
  const [sort, setSort] = useState("dateAdded:desc");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(8);

  useEffect(() => {
    fetchBicycles();
  }, [filters, sort, page]);

  const fetchBicycles = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/bicycles", {
        params: { ...filters, sortBy: sort, page, limit },
      });
      if (response.data && Array.isArray(response.data.bicycles)) {
        setBicycles(response.data.bicycles);
        setTotal(response.data.total);
        //console.log(response.data.bicycles);
      } else {
        console.error("Expected an array of bicycles in response");
      }
    } catch (error) {
      console.error("Error fetching bicycles:", error);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const totalPages = Math.ceil(total / limit);

  return (

    <div className="home-container py-[10rem]">
      {/* Navbar */}
      <nav className="fixed top-[4rem] left-0 w-full bg-gray-800 text-white z-10 flex justify-between items-center px-10 py-4">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-semibold">Cycle Mela</h1>

        </div>
        <FaFilter
          className="h-7 w-7 cursor-pointer"
          onClick={() => {
            setActive(!active);
          }}
        />
      </nav>

      {/* Filter */}
      {active && (
        <div className="bg-gray-200 p-4">
          <div className="flex gap-4 text-sm items-center justify-between">
            <span className="font-bold">Category:</span>
            <select
              name="category"
              className="rounded bg-gray-100 p-2"
              onChange={handleFilterChange}
              value={filters.category}
            >
              <option value="">All</option>
              <option value="Mountain">Mountain</option>
              <option value="Road">Road</option>
              <option value="Hybrid">Hybrid</option>

            </select>
          </div>
          <div className="flex gap-4 text-sm items-center justify-between">
            <span className="font-bold">Price Range:</span>
            <select
              name="minPrice"
              className="rounded bg-gray-100 p-2"
              onChange={handleFilterChange}
              value={filters.minPrice}
            >
              <option value="">Min Price</option>
              <option value="500">Rs. 500</option>
              <option value="1000">Rs. 1000</option>
              <option value="2000">Rs. 2000</option>
              <option value="3000">Rs. 3000</option>
              <option value="4000">Rs. 4000</option>
              <option value="5000">Rs. 5000</option>
              <option value="6000">Rs. 6000</option>

            </select>
            <span>to</span>
            <select
              name="maxPrice"
              className="rounded bg-gray-100 p-2"
              onChange={handleFilterChange}
              value={filters.maxPrice}
            >
              <option value="">Max Price</option>
              <option value="1000">Rs. 1000</option>
              <option value="2000">Rs. 2000</option>
              <option value="3000">Rs. 3000</option>
              <option value="4000">Rs. 4000</option>
              <option value="5000">Rs. 5000</option>
              <option value="6000">Rs. 6000</option>
              {/* Add more price options as needed */}
            </select>
          </div>
          <div className="flex gap-4 text-sm items-center justify-between">
            <span className="font-bold">Condition:</span>
            <select
              name="condition"
              className="rounded bg-gray-100 p-2"
              onChange={handleFilterChange}
              value={filters.condition}
            >
              <option value="">All</option>
              <option value="New">New</option>
              <option value="Used">Used</option>

            </select>
          </div>
          <div className="flex gap-4 text-sm items-center justify-between">
            <span className="font-bold">Location:</span>
            <select
              name="location"
              className="rounded bg-gray-100 p-2"
              onChange={handleFilterChange}
              value={filters.location}
            >
              <option value="">All</option>
              <option value="City A">City A</option>
              <option value="City B">City B</option>
              <option value="City C">City C</option>

            </select>
          </div>

        </div>
      )}

      {/* Sorting */}
      <div className="flex justify-center items-center p-4">
        <span className="font-bold mr-2">Sort By:</span>
        <select
          className
          ="rounded bg-gray-100 p-2"
          onChange={handleSortChange}
          value={sort}
        >
          <option value="dateAdded:desc">Date Added (Newest First)</option>
          <option value="dateAdded:asc">Date Added (Oldest First)</option>
          <option value="price:desc">Price (High to Low)</option>
          <option value="price:asc">Price (Low to High)</option>
        </select>
      </div>

      {/* Bicycles */}
      <div className="flex flex-wrap gap-8 justify-center mt-4">
        {bicycles.map((bicycle) => (
          <div
            key={bicycle._id}
            className="border border-gray-400 p-2 rounded text-black w-72 flex flex-col gap-2 bg-white hover:border-black cursor-pointer"
          >
            <img
              src={bicycle.images[0]}
              alt={bicycle.description}
              className="w-full h-40 bg-blue-500 rounded object-cover"
            />
            <div className="h-32">
              <div className="font-bold text-xl">{`Rs.${bicycle.price}`}</div>
              <div className="text-sm">{bicycle.description}</div>
              <div className="text-sm">{`Condition: ${bicycle.condition}`}</div>
              <div className="text-gray-500">{`Location: ${bicycle.location}`}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`mx-2 px-4 py-2 border rounded ${page === index + 1 ? "bg-gray-300" : "bg-white"
              }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>

  );
};

export default Home;
