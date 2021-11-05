//make sure to add skills in this page

// src/components/About.js

import React from "react";
import ryan from '../assets/ryan.png';

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Ryan 
          </h1>
            <div>
                <img 
                className="ryan" 
                alt="profile pic" 
                src={ryan} 
                />
            </div>
            <h2 
            className="lg:inline-block text-xl text-white font-style: italic"> 
            Software Engineer
            </h2>
                <h3 
                className="lg:inline-block text-xl text-white font-style: italic"
                >Full Stack Developer
                </h3>
            
          
          <p className="mb-8 leading-relaxed text-white font-style: italic">
            Vanderbilt Bootcamp 2021
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}