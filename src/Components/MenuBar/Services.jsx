import { Link } from "react-router-dom";
import Iframe from "../infinite/Iframe";

const Services = () => {
  return (
    <Link to="/services">
      <div>
        <Iframe />
      </div>
    </Link>
  );
};

export default Services;
