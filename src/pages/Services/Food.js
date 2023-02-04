import React from "react";
import { Link } from "react-router-dom";

const Food = (props) => {
	const { id, name, image, category } = props.food;
	return (
		<div className="col">
			<div className="card">
				<div className="card-img">
					<img src={image} className="card-img-top" alt="food" />
				</div>
				<div className="card-body">
					<h5 className="card-title">
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
