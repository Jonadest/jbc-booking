import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import "./hero.css";
/* import BannerCarousel from "../ImageCarousel/BannerCarousel"; */
import { Link } from "react-router-dom";
import { InfiniteAnimation } from "../infinite/InfiniteAnimation";

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

        <div className="">
          <h1 className=" ">Janny Beauty Care</h1>
          <p className="subTitle text-center ">
            Streamline your experience with effortless client scheduling, secure
            payment processing, and automated workflow management. Your only
            focus is to arrive punctually, as the rest seamlessly falls into
            place.
          </p>
          <InfiniteAnimation />
          {/* <BannerCarousel /> */}
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
