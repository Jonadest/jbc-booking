import React, { useState, useEffect } from "react";
import "./hero.css";
import { Link } from "react-router-dom"; /* 
import { InfiniteAnimation } from "../infinite/InfiniteAnimation"; */
import Iframe from "../infinite/Iframe";
import ShareButton from "../ShareButton";

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
        <div className="">
          <p className="location">
            <i className="fa-solid fa-location-dot"></i> New Jersey
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
            <ShareButton />
          </div>
          {/*  <InfiniteAnimation /> */}
          <div className="text-center pt-5">
            <h2 className="services">SERVICES</h2>
          </div>
          <Iframe />
        </div>
      </div>

      <br />
      <div className="time">
        <h2 className="text-center">{currentTime}</h2>
      </div>
      <div className="linkSh">
        <Link
          to="https://app.acuityscheduling.com/schedule.php?owner=31344618"
          target="_blank"
        >
          <button
            className="custom acuity-embed-button"
            id="schule"
            type="submit"
          >
            <i class="fa-regular fa-calendar-days"></i> Schedule Now!!!
          </button>
        </Link>
        {/* <a
          href="https://app.acuityscheduling.com/schedule.php?owner=31344618"
          target="_blank"
          className="acuity-embed-button"
          style="background: #f4bf00; color: #fff; padding: 8px 12px; border: 0px; -webkit-box-shadow: 0 -2px 0 rgba(0,0,0,0.15) inset;-moz-box-shadow: 0 -2px 0 rgba(0,0,0,0.15) inset;box-shadow: 0 -2px 0 rgba(0,0,0,0.15) inset;border-radius: 4px; text-decoration: none; display: inline-block;"
        >
          Schedule Appointment
        </a> */}
      </div>
    </div>
  );
};

export default Hero;
