import React from "react";
import "./Footer.css";
import facebook from "../social/facebook.png";
import instagram from "../social/instagram.png";
import tik from "../social/tik.png"; /*
import youtube from "../social/youtube.png"; */
import { Link } from "react-router-dom";
import ShareButtons from "../ShareButton";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <p className="text-center text-light ">Follow us on social media</p>
      <div className="social">
        <Link
          to="https://web.facebook.com/jannybeautycare03/?_rdc=1&_rdr"
          target="_blank"
        >
          <img src={facebook} alt="" />
        </Link>

        <Link to="https://www.instagram.com/jbcbraids/" target="_blank">
          <img src={instagram} alt="" />
        </Link>

        <Link to="https://www.tiktok.com/@janny_jbc?lang=en" target="_blank">
          <img src={tik} alt="" />
        </Link>

        {/*  <Link to="#" target="_blank">
          <img src={youtube} alt="" />
        </Link> */}
      </div>
      <hr className="hr-footer" />
      <p className="text-center text-light ">SHARE</p>
      <ShareButtons />
      <hr className="hr-footer" />
      <div className="footermenu">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/services">
          <p>Our Services</p>
        </Link>
        <Link to="/gallery">
          <p>Gallery</p>
        </Link>
        <Link to="/contact">
          <p>Contact</p>
        </Link>
      </div>

      <p className="text-center text-light copyright">
        &copy;{currentYear} JBC. All rights reserved.
        <p>
          Designed by{" "}
          <Link
            to="https://www.instagram.com/jonadestboss?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
          >
            <strong>Jonadest</strong>
          </Link>
        </p>
      </p>
    </div>
  );
};

export default Footer;
