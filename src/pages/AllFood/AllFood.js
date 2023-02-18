import React, { useEffect, useState } from "react";
import Food from "../Services/Food";

const AllFood = () => {
  const [foods, setFoods] = useState([]);
  console.log(foods);
  useEffect(() => {
    fetch("food.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div className="container py-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {foods.map((fd) => (
          <Food food={fd} key={fd.id} />
        ))}
      </div>
    </div>
  );
};

export default AllFood;
