import React, { useEffect } from "react";
import "./InfiniteCarousel.css";

export const InfiniteAnimation = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
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
    <div className="scroller" data-direction="left" data-speed="slow">
      <div className="img-wrapper">
        <div className="scroller__inner">
          <img
            src="https://img.freepik.com/free-photo/woman-with-dreadlocks_144627-35430.jpg?size=626&ext=jpg&uid=R125247284&ga=GA1.1.1687573895.1699960979&semt=ais"
            alt=""
          />

          <img
            src="https://img.freepik.com/free-photo/close-up-portrait-beautiful-woman_23-2149150981.jpg?size=626&ext=jpg&uid=R125247284&ga=GA1.1.1687573895.1699960979&semt=ais"
            alt=""
          />

          <img
            src="https://img.freepik.com/free-photo/portrait-beautiful-smiling-woman-city_1157-38012.jpg?size=626&ext=jpg&uid=R125247284&ga=GA1.1.1687573895.1699960979&semt=ais"
            alt=""
          />

          <img
            src="https://img.freepik.com/free-photo/african-red-haired-volunteer-woman-with-clipboard-park-africa-volunteering-charity-people-ecology-concept_627829-13849.jpg?w=740&t=st=1700431938~exp=1700432538~hmac=6d622f10fd93fb26ca69947fe6c52ce06ab17f7c6bd843c222efc7c8a4398b7a"
            alt=""
          />

          <img
            src="https://img.freepik.com/free-photo/black-woman-with-african-braids-natural-hair_633478-1394.jpg?size=626&ext=jpg&uid=R125247284&ga=GA1.1.1687573895.1699960979&semt=ais"
            alt=""
          />

          <img
            src="https://img.freepik.com/free-photo/creative-portrait-beautiful-woman_23-2149150331.jpg?size=626&ext=jpg&uid=R125247284&ga=GA1.1.1687573895.1699960979&semt=ais"
            alt=""
          />

          <img
            src="https://img.freepik.com/free-photo/elegant-black-girl-summer-city_1157-20778.jpg?size=626&ext=jpg&uid=R125247284&ga=GA1.1.1687573895.1699960979&semt=ais"
            alt=""
          />

          <img
            src="https://img.freepik.com/free-photo/portrait-attractive-asian-model-girl-with-braided-hairstyle_158595-3610.jpg?size=626&ext=jpg&uid=R125247284&ga=GA1.1.1687573895.1699960979&semt=ais"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
