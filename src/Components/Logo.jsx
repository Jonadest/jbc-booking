import { Link } from "react-router-dom";
import logo from "../logos/logo2.png";
import "./logo.css";

const Logo = () => {
  return (
    <div>
      <div className="navbar navbar-expand-lg ">
        <Link className="navbar-brand" to="/">
          <img className="jbcLogo ro-logo" src={logo} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Logo;
