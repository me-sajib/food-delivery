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
	}, [type, id]);

	useEffect(() => {
		const relateds = allFood?.filter((fd) => fd?.type === type);
		setFoods(relateds);
	}, [type, allFood]);

	return (
		<div className="my-3">
			<h3 className="py-2">Related Item</h3>
			<div className="row row-cols-1 row-cols-md-3 g-4">
				{foods.map((fd) => (
					<Food food={fd} key={fd.id} />
				))}
			</div>
		</div>
	);
}
