import React from "react";
import { Link } from "react-router-dom";

const Food = (props) => {
  const { id, name, image, category } = props.food;
  return (
    <div class="col">
      <div class="card">
        <div className="card-img">
          <img src={image} class="card-img-top" alt="food" />
        </div>
        <div class="card-body">
          <h5 class="card-title">
            <Link to={`/${id}`}> {name}</Link>
          </h5>

          <ul>
            <li>{category}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Food;
