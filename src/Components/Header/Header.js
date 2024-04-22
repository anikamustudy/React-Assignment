import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-emerald-400 p-4">
      <h1 className="text-white text-xl font-bold">Your Website</h1>
      <nav className="space-x-4">
        <Link to="/" className="text-white hover:text-gray-300">
          Home
        </Link>
        <Link to="/about" className="text-white hover:text-gray-300">
          About
        </Link>
        <Link to="/contact" className="text-white hover:text-gray-300">
          Contact
        </Link>
        <Link to="/login" className="text-white hover:text-gray-300">
          Login
        </Link>
      </nav>
    </div>
  );
};

export default Header;
