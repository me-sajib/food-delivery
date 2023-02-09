import React from "react";
import logo from "../../images/superDelivery.png";
const FastDelivery = () => {
	return (
		<div className="container py-5">
			<div className="row">
				<div className="col delivery-logos">
					<div className="delivery-logo">
						<img src={logo} alt="" className="img-fluid" />
					</div>
				</div>
				<div className="col">
					<div className="details">
						<h1>
							We deliver our products as fast as superman can do
						</h1>
						<p>
							Pick one of our stock themes, or create your custom
							theme with the most advanced theme editor on any
							online survey building tool.
						</p>

						<div className="step-follow pt-2">
							<div className="d-flex justify-content-center align-items-center">
								<h1>01</h1>
								<div className="info ps-3">
									<h2>Easy to use application</h2>
									<p>
										We’re driven beyond just finishing the
										projects. We want to find solutions
										using our website apps.
									</p>
								</div>
							</div>
							<div className="d-flex py-3 justify-content-center align-items-center">
								<h1>02</h1>
								<div className="info ps-3">
									<h2>Deliver Food within 30 min</h2>
									<p>
										We’re driven beyond just finishing the
										projects. We want to find solutions
										using our website apps.
									</p>
								</div>
							</div>
							<div className="d-flex justify-content-center align-items-center">
								<h1>03</h1>
								<div className="info ps-3">
									<h2>100% Reliable with Privacy</h2>
									<p>
										We’re driven beyond just finishing the
										projects. We want to find solutions
										using our website apps.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FastDelivery;
