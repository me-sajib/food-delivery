import React from "react";
import { Link } from "react-router-dom";

const BecameAPartner = () => {
	return (
		<div className=" py-5 ">
			<div className="card text-center ">
				<div className="card-body py-5 bg-warning">
					<h1 className="card-title">Become a our Member</h1>
					<p className="card-text">
						With supporting text below as a natural lead-in to
						additional content.
					</p>
					<Link className="btn btn-info" to="/register">
						Registration Now
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BecameAPartner;
