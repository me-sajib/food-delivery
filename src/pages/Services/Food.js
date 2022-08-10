import React from "react";

const Food = (props) => {
  const { name, image, details } = props.food;
  return (
    <div class="col">
      <div class="card">
        <img src={image} class="card-img-top" alt="frsdf" />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default Food;
