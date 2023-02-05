import React, { useState, useEffect } from "react";
import Food from "./Food";

export default function ShowProductByCategory({ type, id }) {
  const [foods, setFoods] = useState([]);
  const [allFood, setAllFood] = useState([]);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    fetch("food.json")
      .then((res) => res.json())
      .then((data) => {
        setAllFood(data);
      });
  }, [type, id]);

  useEffect(() => {
    const relateds = allFood?.filter((fd) => fd?.type === type);
    console.log(relateds);
    setRelated(relateds);
  }, [type]);

  useEffect(() => {
    if (related.length > 0) {
      const sameItem = related?.filter((fd) => fd.id != id);
      setFoods(sameItem);
      console.log("hello", sameItem);
    }
  }, [id, related]);

  return (
    <div className="my-5">
      <h3>Related Item</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {foods.map((fd) => (
          <Food food={fd} key={fd.id} />
        ))}
      </div>
    </div>
  );
}
