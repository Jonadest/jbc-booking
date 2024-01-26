import React from "react";
import logo from "../logos/logo2.png";
import "./logo.css";

const Logo = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <a className="navbar-brand" href="/">
          <img className="jbcLogo ro-logo" src={logo} alt="" />
        </a>
      </nav>
    </div>
  );
};

export default Logo;
