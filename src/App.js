import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar";
import Gallery from "./Components/Gallery/Gallery";
import Contact from "./Components/MenuBar/Contact";
import Services from "./Components/MenuBar/Services";
import BohoBob from "./Components/Calendly/HairStyles/BohoBob";
import FulaniBohoBraids from "./Components/Calendly/HairStyles/FulaniBohoBraids";
import BoxBob from "./Components/Calendly/HairStyles/BoxBob";
import MBohemianKnotless from "./Components/Calendly/HairStyles/MBohemianKnotless";
import SMBohemian from "./Components/Calendly/HairStyles/SMBohemian";
import JBC3 from "./Components/Calendly/HairStyles/JBC3";
import JBC4 from "./Components/Calendly/HairStyles/JBC4";
import JBC5 from "./Components/Calendly/HairStyles/JBC5";
import JBC6 from "./Components/Calendly/HairStyles/JBC6";
import JBC7 from "./Components/Calendly/HairStyles/JBC8";
import JBC8 from "./Components/Calendly/HairStyles/JBC8";
import JBC9 from "./Components/Calendly/HairStyles/JBC9";
import JBC10 from "./Components/Calendly/HairStyles/JBC10";
import JBC11 from "./Components/Calendly/HairStyles/JBC11";
import JBC12 from "./Components/Calendly/HairStyles/JBC12";
import JBC13 from "./Components/Calendly/HairStyles/JBC13";
import JBC14 from "./Components/Calendly/HairStyles/JBC14";
import JBC15 from "./Components/Calendly/HairStyles/JBC15";
import JBC16 from "./Components/Calendly/HairStyles/JBC16";

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
            <Route path="/boho-bob" element={<BohoBob />} />
            <Route path="/fulani-boho-braids" element={<FulaniBohoBraids />} />
            <Route path="/back-length-box-bob" element={<BoxBob />} />
            <Route path="/jbc-1" element={<MBohemianKnotless />} />

            <Route path="/jbc-2" element={<SMBohemian />} />

            <Route path="/jbc-3" element={<JBC3 />} />
            <Route path="/jbc-4" element={<JBC4 />} />
            <Route path="/jbc-5" element={<JBC5 />} />
            <Route path="/jbc-6" element={<JBC6 />} />
            <Route path="/jbc-7" element={<JBC7 />} />
            <Route path="/jbc-8" element={<JBC8 />} />
            <Route path="/jbc-9" element={<JBC9 />} />
            <Route path="/jbc-10" element={<JBC10 />} />
            <Route path="/jbc-11" element={<JBC11 />} />
            <Route path="/jbc-12" element={<JBC12 />} />
            <Route path="/jbc-13" element={<JBC13 />} />
            <Route path="/jbc-14" element={<JBC14 />} />
            <Route path="/jbc-15" element={<JBC15 />} />
            <Route path="/jbc-16" element={<JBC16 />} />

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
