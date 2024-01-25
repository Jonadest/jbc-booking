import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageCarousel.css";

const ImageCarousel = () => {
  const images = [
    "https://img.freepik.com/free-photo/african-red-haired-volunteer-woman-with-clipboard-park-africa-volunteering-charity-people-ecology-concept_627829-13849.jpg?w=740&t=st=1700431938~exp=1700432538~hmac=6d622f10fd93fb26ca69947fe6c52ce06ab17f7c6bd843c222efc7c8a4398b7a",
    "https://img.freepik.com/free-photo/black-woman-with-african-braids-natural-hair_633478-1394.jpg?size=626&ext=jpg&uid=R125247284&ga=GA1.1.1687573895.1699960979&semt=ais",
    "https://img.freepik.com/free-photo/creative-portrait-beautiful-woman_23-2149150331.jpg?size=626&ext=jpg&uid=R125247284&ga=GA1.1.1687573895.1699960979&semt=ais",
    "https://img.freepik.com/free-photo/elegant-black-girl-summer-city_1157-20778.jpg?size=626&ext=jpg&uid=R125247284&ga=GA1.1.1687573895.1699960979&semt=ais",
    "https://img.freepik.com/free-photo/portrait-attractive-asian-model-girl-with-braided-hairstyle_158595-3610.jpg?size=626&ext=jpg&uid=R125247284&ga=GA1.1.1687573895.1699960979&semt=ais",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="img-wrapper">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
