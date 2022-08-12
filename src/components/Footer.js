import React from "react";

const Footer = () => {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col">
          <h3>Food Delivery</h3>
        </div>
        <div className="col">
          <ul className="list-unstyled list-group list-group-horizontal">
            <li className="px-2">Support</li>
            <li className="px-2">about</li>
            <li className="px-2">privacy</li>
            <li className="px-2">contact</li>
          </ul>
        </div>
        <div className="col">
          <p>social link : FB, LINKEDIN, GOOGLE</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
