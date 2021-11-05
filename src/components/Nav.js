// src/components/Navbar.js
import { HiArrowRight } from "react-icons/hi";
import React from "react";


//potential add testimony after Contact for people who have worked with me!
export default function Nav() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#About" className="ml-3 text-xl">
            Ryan Blessing
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	
        flex flex-wrap items-center text-base justify-center">
          <a href="#Projects" className="mr-5 text-white hover:text-red-500">
            Projects
          </a>
          <a href="#Contact" className="mr-5 text-white hover:text-red-500">
            Contact
          </a>
          <a href="#Skills" className="mr-5 text-white hover:text-red-500">
            Skills
          </a>
          
        </nav>
        <a
          href="Contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none
           hover:bg-gray-700 rounded text-white mt-4 md:mt-0">
          Hire Me
          <HiArrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}