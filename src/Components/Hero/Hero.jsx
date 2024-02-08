import React, { useState, useEffect } from "react";
import "./hero.css";
import { Link } from "react-router-dom";
import InfiniteAnimation from "../infinite/InfiniteAnimation";

const Hero = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString("en-US", { timeZone: "America/New_York" })
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "America/New_York",
        })
      );
    }, 1000); // Set the interval to 1000 milliseconds (1 second)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="heroBody text-center  ">
      <div id="section1">
        <div className="">
          <div className="time">
            <h2 className="text-center">{currentTime}</h2>
          </div>
          <p className="location">
            <i className="fa-solid fa-location-dot"></i> Newark, New Jersey.
          </p>
          <h1 className=" title-h1">Janny Beauty Care</h1>

          <div className="sub-title">
            <p className="subTitle text-center ">
              Indulge in a transformative experience! Book an appointment for
              expertly crafted braids that blend style and precision. Our
              skilled stylists are dedicated to enhancing your natural beauty
              with intricate braiding techniques. Elevate your look and embrace
              the artistry of braids with us!
            </p>
            <InfiniteAnimation />
            <div>
              <Link to="/services">
                <button className="" id="schule">
                  Pick Your Style
                </button>
              </Link>
            </div>
          </div>
          {/*  <InfiniteAnimation /> */}
        </div>
      </div>

      <br />
    </div>
  );
};

export default Hero;
