import React from "react";
import { Link } from "react-router-dom";
import orderBoy from "../../images/order-door.png";

const DoorOrder = () => {
  return (
    <div className="container py-5">
      <div className="d-flex align-items-center">
        <div className="details-order">
          <h1>Your order knocking on the door. Please receive</h1>
          <p>
            Pick one of our stock themes, or create your custom theme with the
            most advanced theme editor on any online.
          </p>
          <Link to="/all-food" className="btn btn-warning">
            order more
          </Link>
        </div>

        <div className="order-boy sm-none">
          <img src={orderBoy} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DoorOrder;
