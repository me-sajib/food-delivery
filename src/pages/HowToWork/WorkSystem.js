import React from "react";
import { Link } from "react-router-dom";
import partner from "../../images/how-works-.png";
import apps from "../../images/how-works-3.png";
import seller from "../../images/how-works.png";

const WorkSystem = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center pb-5">Let’s see how it works</h1>
      {/* 3 item show with 3 column by using grid */}
      <div className="row gx-5 text-center">
        <div className="col-lg-4 col-md-6 col-sm-12 ">
          <img src={seller} alt="" className="img-fluid" />
          <h3>Become a Delivery Man</h3>
          <p>
            As a delivery driver, you'll make reliable money—working anytime,
            anywhere.
          </p>
          <Link to="/became-a-delivery-man">Start Earning -</Link>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12">
          <img src={partner} alt="" className="img-fluid" />
          <h3>Become a Partner</h3>
          <p>
            Grow your business and reach new customers by partnering with us.
          </p>
          <a href="/#">Sign up your store</a>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12">
          <img src={apps} alt="" className="img-fluid" />
          <h3>Try Android/iOS App</h3>
          <p>Get the best DoorDash experience with live order tracking.</p>
          <a href="/#">Get the app</a>
        </div>
      </div>
    </div>
  );
};

export default WorkSystem;
