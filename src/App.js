import React from "react";

import "./App.css";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="appWrapper">
      <div className="main">
        <Hero />
      </div>

      <Footer />
    </div>
  );
};

export default App;
