import React from "react";
import "../CalendlyStyles.css";
import { Link } from "react-router-dom";
import stylesDetails from "./stylesDetails.js"; // Import the stylesDetails object

const HairStylesCard = () => {
  return (
    <div className="cardWrapper">
      {stylesDetails.map((style, index) => (
        <div className="card" key={index}>
          <img src={style.img} className="card-img-top" alt={style.title} />
          <div className="card-body">
            <h5 className="card-title title">{style.title}</h5>
            <h6>{style.price}</h6>
            <p className="card-text">{style.desc}</p>
            <Link to={style.url} className="btn btn-dark">
              Book
            </Link>
            <Link to={style.SHareUrl} className="btn ">
              <i className="fa-solid fa-square-share-nodes"></i>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HairStylesCard;
