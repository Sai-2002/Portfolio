import React, { useState } from "react";

function Navbar() {

  return (
    <>
      <nav className=" p-4 fixed w-full top-0 z-10 bg-white shadow-md">
        <div className="container mx-auto flex justify-center items-center">
          <div className="hidden md:flex space-x-4">
            <a
              href="#"
              className="hover:bg-gray-300 px-3 py-2 rounded-md transition-all ease-in duration-500"
            >
              Home
            </a>
            <a
              href="#About"
              className="hover:bg-gray-300 px-3 py-2 rounded-md transition-all ease-in duration-500"
            >
              About
            </a>
            <a
              href="#"
              className="hover:bg-gray-300 px-3 py-2 rounded-md transition-all ease-in duration-500"
            >
              Projects
            </a>
            <a
              href="#"
              className="hover:bg-gray-300 px-3 py-2 rounded-md transition-all ease-in duration-500"
            >
              Contact
            </a>
          </div>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
