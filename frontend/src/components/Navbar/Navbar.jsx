import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { state, dispatch } = useAuth();
  const location = useLocation();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="flex justify-between items-center p-8 bg-gray-200 fixed top-0 left-0 w-full h-12 sm:gap-10">
      <div className="flex w-1/3">
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.zN59XZkqlJjGp8P5-viNuwHaHa&pid=Api&P=0&h=180"
          alt=""
          className="w-12 h-12 rounded-full"
        />
      </div>
      <form className="flex bg-black justify-center border-2 border-black  items-center w-1/2 sm:rounded fixed top-16 w-full sm:static left-0">
        <input
          type="search"
          placeholder="Find cycles at your budget.."
          className="p-3 border-2 w-full border-none outline-none rounded-l"
        />
        <button
          type="submit"
          className="p-3 px-5 bg-black text-white outline-none border-none text-2xl"
        >
          <IoIosSearch />
        </button>
      </form>
      <div className="flex space-x-4 gap-5 items-center justify-end w-1/3">
        {state.isAuthenticated ? (
          <>
            <span className="text-lg">Hello, {state.user.userName}</span>
            <button
              onClick={handleLogout}
              className="text-lg border-b-2 border-black hover:border-none p-1"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="text-lg border-b-2 border-black hover:border-none p-1"
          >
            Login
          </Link>
        )}
        {location.pathname !== "/" && (
          <Link
            to="/"
            className="text-lg border-b-2 border-black hover:border-none p-1"
          >
            Home
          </Link>
        )}
        <Link
          to="/sell"
          className="flex items-center font-bold justify-center gap-2 bg-slate-800 p-2 px-3 rounded text-white"
        >
          <FaPlus />
          Sell
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
