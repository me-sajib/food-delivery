import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.config";
import loginImg from "../../images/login-page-pic.jpg"

const Login = () => {
	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);
	const navigateToHome = useNavigate();
	const signInUser = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
		signInWithEmailAndPassword(email, password);
	};
	let errMsg 
	if(error){
		errMsg=error.message;
	}
	if (user) {
		navigateToHome("/");
	}
	let load
	if (loading) {
	   load = <p>Loading...</p>;
	}
	return (
		<div className="container">
			

			<div class="card mb-3" style={{}}>
				<div class="row g-0">
					<div class="col-md-6">
						<img src={loginImg} class="img-fluid rounded-start" alt="food_image"/>
					</div>
					<div class="col-md-6">
						<div class="card-body">
							<div className="">
								<h1 className="text-info text-center " style={{fontFamily:"monospace" , fontWeight: 500}}> Login Now</h1>
								{load}
								<form className="form-width" onSubmit={signInUser}>
									<div className="form-outline mb-4">
										<level className="m-1">Email</level>
										<input
											type="email"
											name="email"
											placeholder="enter your email"
											id="form2Example1"
											className="form-control"
											required
										/>
									
									</div>

									<div className="form-outline mb-4">
										<level className="m-1">Password</level>
										<input
											name="password"
											type="password"
											placeholder="enter your password"
											id="form2Example2"
											className="form-control"
											required
										/>
										
									</div>
									<p className="text-danger">{errMsg}</p>	
									<div className="row mb-4">
										<div className="col d-flex align-items-start  justify-content-around">
											<div className="form-check">
												<input
													className="form-check-input"
													type="checkbox"
													value=""
													id="form2Example34"
													checked
												/>
												<label
													className="form-check-label"
													for="form2Example34"
												>
													{" "}
													Remember me{" "}
												</label>
											</div>
											
											<div >
												<button
													type="submit"
													className="btn btn-primary btn-block mb-4"
												>
													Sign in
												</button>
											</div>
										</div>

										<div className="d-flex justify-content-center">
											<a href="#!">Forgot password?</a>
										</div>
									</div>

									


								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="text-center">
				<p>
					Not a member? <a href="/register">Register</a>
				</p>
				<p>or sign up with:</p>
				<button
					type="button"
					className="btn btn-primary btn-floating mx-1"
				>
					<i className="fab fa-facebook-f"></i>
				</button>

				<button
					type="button"
					className="btn btn-primary btn-floating mx-1"
				>
					<i className="fab fa-google"></i>
				</button>

				<button
					type="button"
					className="btn btn-primary btn-floating mx-1"
				>
					<i className="fab fa-twitter"></i>
				</button>

				<button
					type="button"
					className="btn btn-primary btn-floating mx-1"
				>
					<i className="fab fa-github"></i>
				</button>
			</div>
		</div>
	);
};

export default Login;
