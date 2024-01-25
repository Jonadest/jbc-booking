/* import { Link } from "react-router-dom"; */
import Logo from "./Logo";
import "./logo.css";

const NavBar = () => {
  return (
    <div className="nav-wrapper">
      <nav className="navbar navbar-expand-lg d-flex justify-content-center pt-1">
        <Logo />
      </nav>
    </div>
  );
};

export default NavBar;
