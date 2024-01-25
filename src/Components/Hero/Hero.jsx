import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import "./hero.css";
import BannerCarousel from "../ImageCarousel/BannerCarousel";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000); // Set the interval to 1000 milliseconds (1 second)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="heroBody text-center  ">
      <div id="section1">
        <NavBar />

        <div className="bg-dark">
          <BannerCarousel />
        </div>
      </div>

      <h3 className=" pt-5 ">OUR SERVICES</h3>

      <div className="carso">
        <div className="img-wrapper">
          <img
            src="https://img.freepik.com/free-photo/woman-with-dreadlocks_144627-35430.jpg?size=626&ext=jpg&uid=R125247284&ga=GA1.1.1687573895.1699960979&semt=ais"
            alt=""
          />
        </div>

        <div className="img-wrapper">
          <img
            src="https://img.freepik.com/free-photo/close-up-portrait-beautiful-woman_23-2149150981.jpg?size=626&ext=jpg&uid=R125247284&ga=GA1.1.1687573895.1699960979&semt=ais"
            alt=""
          />
        </div>

        <div className="img-wrapper">
          <img
            src="https://img.freepik.com/free-photo/portrait-beautiful-smiling-woman-city_1157-38012.jpg?size=626&ext=jpg&uid=R125247284&ga=GA1.1.1687573895.1699960979&semt=ais"
            alt=""
          />
        </div>

        <div className="img-wrapper">
          <img
            src="https://img.freepik.com/free-photo/african-red-haired-volunteer-woman-with-clipboard-park-africa-volunteering-charity-people-ecology-concept_627829-13849.jpg?w=740&t=st=1700431938~exp=1700432538~hmac=6d622f10fd93fb26ca69947fe6c52ce06ab17f7c6bd843c222efc7c8a4398b7a"
            alt=""
          />
        </div>

        <div className="img-wrapper">
          <img
            src="https://img.freepik.com/free-photo/black-woman-with-african-braids-natural-hair_633478-1394.jpg?size=626&ext=jpg&uid=R125247284&ga=GA1.1.1687573895.1699960979&semt=ais"
            alt=""
          />
        </div>

        <div className="img-wrapper">
          <img
            src="https://img.freepik.com/free-photo/creative-portrait-beautiful-woman_23-2149150331.jpg?size=626&ext=jpg&uid=R125247284&ga=GA1.1.1687573895.1699960979&semt=ais"
            alt=""
          />
        </div>

        <div className="img-wrapper">
          <img
            src="https://img.freepik.com/free-photo/elegant-black-girl-summer-city_1157-20778.jpg?size=626&ext=jpg&uid=R125247284&ga=GA1.1.1687573895.1699960979&semt=ais"
            alt=""
          />
        </div>

        <div className="img-wrapper">
          <img
            src="https://img.freepik.com/free-photo/portrait-attractive-asian-model-girl-with-braided-hairstyle_158595-3610.jpg?size=626&ext=jpg&uid=R125247284&ga=GA1.1.1687573895.1699960979&semt=ais"
            alt=""
          />
        </div>
      </div>

      <br />
      <div className="time">
        <h2 className="text-center">{currentTime}</h2>
      </div>
      <div className="linkSh">
        <Link to="https://Jbcbraiding.as.me/" target="_blank">
          <button className="custom " id="schule" type="submit">
            <i class="fa-regular fa-calendar-days"></i> Schedule Appointment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
