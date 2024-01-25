import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="appWrapper">
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
