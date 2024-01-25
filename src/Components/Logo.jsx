import React from "react";
import { Link } from "react-router-dom";
import logo from "../logos/logo1.ico";
import "./logo.css";

const Logo = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <Link className="navbar-brand" to="/">
        <img className="jbcLogo" src={logo} alt="" />
      </Link>
    </nav>
  );
};

export default Logo;
