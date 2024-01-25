/* import { Link } from "react-router-dom"; */
import Logo from "./Logo";
import "./logo.css";

const NavBar = () => {
  return (
    <div className="nav-wrapper">
      <nav className="navbar navbar-expand-lg d-flex justify-content-center pt-1">
        <Logo />

        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/services"
              >
                <i class="fa-solid fa-hand-fist"></i> Services
              </Link>
            </li> 
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/contact"
              >
                <i class="fa-solid fa-address-card"></i> Contact
              </Link>
            </li>
          </ul>
        </div> */}

        {/* <form className="d-flex">
          <Link to="/login">
            <button className="btn btn-outline-dark mx-2">
              <i class="fa-solid fa-user"></i> Login
            </button>
          </Link>
        </form> */}
      </nav>
    </div>
  );
};

export default NavBar;
