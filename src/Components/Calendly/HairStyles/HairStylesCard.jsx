import React from "react";
import "../CalendlyStyles.css";
import { Link } from "react-router-dom";
import stylesDetails from "./stylesDetails.js"; // Import the stylesDetails object

const HairStylesCard = () => {
  const handleShare = (url) => {
    if (navigator.share) {
      navigator
        .share({
          url: url,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    } else {
      console.log("Web Share API not supported");
      // Handle sharing using a different method if needed
    }
  };

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
            <button onClick={() => handleShare(style.ShareUrl)} className="btn">
              Share
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HairStylesCard;
