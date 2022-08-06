import React from "react";
import banner from "../images/banner-1.png";

const Banner = () => {
  return (
    <div className="container">
      <div className="row banner-container">
        <div className="col bg-color banner-heading">
          <h1 className="top-heading">
            Your Favorite Food,
            <br /> delivered your home
          </h1>
          <p>
            Food, drinks, groceries, and more available for delivery and pickup.
          </p>

          <div className="app-download">
            <p>Apps Available to download on </p>
            <div className="icon">icon apple</div>
            <div className="icon">icon android</div>
          </div>
        </div>
        <div className="col">
          <div className="banner-image">
            <div className="banner">
              <img src={banner} alt="" className="banner-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
