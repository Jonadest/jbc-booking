import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar";
import Gallery from "./Components/Gallery1/Gallery";
import Contact from "./Components/MenuBar/Contact";
import Services from "./Components/MenuBar/Services";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="appWrapper">
          <NavBar />

          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            {/* Add more routes as needed */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
