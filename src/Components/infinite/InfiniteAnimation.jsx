import React, { useEffect } from "react";
import "./InfiniteCarousel.css";
import Sample1 from "../Gallery1/31.jpg";
import Sample2 from "../Gallery1/4.jpg";
import Sample3 from "../Gallery1/21.jpg";
import Sample4 from "../Gallery1/3.jpg";
import Sample5 from "../Gallery1/26.jpg";
import Sample6 from "../Gallery1/23.jpg";
import { Link } from "react-router-dom";

const InfiniteAnimation = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scrollerI");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);
  return (
    <Link to="/services">
      <div className="scroller" data-direction="left" data-speed="slow">
        <div className="scrollerI">
          <img src={Sample1} alt="sample images" />
          <img src={Sample2} alt="sample images" />
          <img src={Sample3} alt="sample images" />
          <img src={Sample4} alt="sample images" />
          <img src={Sample5} alt="sample images" />
          <img src={Sample6} alt="sample images" />
        </div>
      </div>
    </Link>
  );
};

export default InfiniteAnimation;
