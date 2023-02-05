import React from "react";
import { Link } from "react-router-dom";

const Food = (props) => {
	const { id, name, image, category, location } = props.food;
	return (
		<div data-aos="zoom-in" data-aos-duration="2000" className="col">
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
					<p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
						<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
					</svg>{location}</p>
				</div>
			</div>
		</div>
	);
};

export default Food;
