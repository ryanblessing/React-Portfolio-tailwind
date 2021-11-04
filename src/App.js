// src/App.js
import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Projects from "./components/Pages/Projects";

//landing page
export default function App() {
  return (
    <>
      <main>
        <Nav />
        <About/>
        <Projects />
        <Contact />      
      </main>
      <Footer />
    </>
  );
}
