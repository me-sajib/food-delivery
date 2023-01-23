import React, { useState, useEffect } from "react";
import Food from "./Food";

export default function ShowProductByCategory({ type, id }) {
  const [foods, setFoods] = useState([]);
  const [allFood, setAllFood] = useState([]);
  useEffect(() => {
    fetch("food.json")
      .then((res) => res.json())
      .then((data) => {
        setAllFood(data);
      });
  }, [type]);

  useEffect(() => {
    const related = allFood.filter((fd) => fd?.type === type);
    setFoods(related);

    if (foods) {
      const sameItem = foods.filter((fd) => fd.id != id);
      setFoods(sameItem);
    }
  }, [type]);

  return (
    <div className="my-5">
      <h3>Related Item</h3>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {foods.map((fd) => (
          <Food food={fd} key={fd.id} />
        ))}
      </div>
    </div>
  );
}
