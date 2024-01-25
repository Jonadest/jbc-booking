import React from "react";
import logo from "../logos/logo2.png";
import "./logo.css";

const Logo = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <a className="navbar-brand" href="/">
        <img className="jbcLogo" src={logo} alt="" />
      </a>
    </nav>
  );
};

export default Logo;
