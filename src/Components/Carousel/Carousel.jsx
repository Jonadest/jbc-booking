import React from "react";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide mb-5 "
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <a href="https://Jbcbraiding.as.me/" target="_blank">
            <img
              src="https://img.freepik.com/free-photo/close-up-portrait-beautiful-woman_23-2149150982.jpg?w=740&t=st=1703893709~exp=1703894309~hmac=650a972b710aedb760c30d85df2c38f266d18850038b6a1db49744f87b6fdd36"
              className="d-block w-100"
              alt="..."
            />
          </a>

          <div className="carousel-caption d-none d-md-block">
            <h5>Box Braids</h5>
            <p>Braid experts creating beauty.</p>
          </div>
        </div>
        <div className="carousel-item">
          <a href="https://Jbcbraiding.as.me/" target="_blank">
            <img
              src="https://img.freepik.com/free-photo/back-view-woman-with-afro-hairstyle_23-2150908559.jpg?w=740&t=st=1703893806~exp=1703894406~hmac=349ad3b65ec05dd0049f4853cc5e5ee6ea2afba5b36eddbc4a330a7de50cd255"
              className="d-block w-100"
              alt="..."
            />
          </a>
          <div className="carousel-caption d-none d-md-block">
            <h5>Knotless Braids</h5>
            <p>Braid experts creating beauty.</p>
          </div>
        </div>
        <div className="carousel-item">
          <a href="https://Jbcbraiding.as.me/" target="_blank">
            <img
              src="https://img.freepik.com/free-photo/black-woman-s-profile-african-braids-false-hair-concept_633478-1400.jpg?w=740&t=st=1703893985~exp=1703894585~hmac=751d3dd2bd7e20ebd2de5f009e6256902020fd885cded16455586c31491db5df"
              className="d-block w-100"
              alt="..."
            />
          </a>
          <div className="carousel-caption d-none d-md-block">
            <h5>All Braids</h5>
            <p>Braid experts creating beauty.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
