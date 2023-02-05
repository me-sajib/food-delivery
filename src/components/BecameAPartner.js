import React from "react";
import { Link } from "react-router-dom";

const BecameAPartner = () => {
  return (
    <div className="container py-5 ">
      <div className="card text-center ">
        <div style={{ background: "#F5AD28" }} className="card-body py-5">
          <h1 className="card-title">Became a Partner</h1>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <Link className="btn btn-primary" to="/">
            Registration Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BecameAPartner;
