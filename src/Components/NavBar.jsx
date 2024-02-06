import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import "./logo.css";

const NavBar = () => {
  const location = useLocation();

  return (
    <div className="nav-wrapper">
      <div className="navbar justify-content-center pt-1">
        <Logo />
      </div>
      <ul className="nav-li">
        <Link
          to="/"
          className={location.pathname === "/" ? "active-menu-item" : ""}
        >
          Home
        </Link>

        <Link
          to="/services"
          className={
            location.pathname === "/services" ? "active-menu-item nav-li" : ""
          }
        >
          Services
        </Link>

        <Link
          to="/gallery"
          className={
            location.pathname === "/gallery" ? "active-menu-item nav-li" : ""
          }
        >
          Gallery
        </Link>

        <Link
          to="/contact"
          className={
            location.pathname === "/contact" ? "active-menu-item nav-li" : ""
          }
        >
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
