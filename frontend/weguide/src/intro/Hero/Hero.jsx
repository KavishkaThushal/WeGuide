import React from "react";
import "./hero.css";

function Hero({ img, title, des, sub }) {
  return (
    <div className="featured-hero">
      <img src={img} alt="" />
      <div className="featured-text">
        <h2 className="featured-title">{title}</h2>

        <p>
          {des}
          <br />
          <br />
          {sub}
        </p>
      </div>
    </div>
  );
}

export default Hero;
