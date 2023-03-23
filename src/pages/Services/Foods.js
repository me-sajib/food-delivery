import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Food from "./Food";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("food.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div className="container py-5">
      <h1 className="text-center py-3">Available Restaurant Nearby Area</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {foods.map((fd) => (
          <Food food={fd} key={fd.id} />
        ))}
      </div>
      <div className="text-center py-4">
        <Link to="/all-food" className="btn btn-primary">
          Discover more
        </Link>
      </div>
    </div>
  );
};

export default Foods;
