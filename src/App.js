import { Route, Routes } from "react-router-dom";
import Hero from "./Components/Hero/Hero";

import Footer from "./Components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="appWrapper">
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
