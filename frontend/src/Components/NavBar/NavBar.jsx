import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar bg-white p-4 text-black shadow-lg font-sans">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-black text-2xl font-bold">
          <img src="/images/keel-works-logo.png" alt="keelworks" className="keel-works-logo" />
        </a>
        <input
          type="text"
          placeholder="What do you want to know?"
          className="border rounded-full py-2 px-4 focus:outline-none focus:border-blue-500 search-bar"
        />
        <ul className="flex space-x-4">
          <li className="flex items-center">
          <a
              className="question-mark"
              href="#"
            >
              ?
            </a>
            
          </li>
          <li>
            <a
              className="inline-block text-center w-28 border border-black rounded-full py-2 px-4 bg-transparent text-black"
              href="#"
            >
              Log In
            </a>
          </li>
          <li>
            <a
              className="inline-block text-center w-28 border custom-blue rounded-full py-2 px-4 bg-blue-500 text-white"
              href="#"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
