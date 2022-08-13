import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.config";

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
  if (error) {
    console.log(error);
  }
  if (user) {
    navigateToHome("/");
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      <div className="py-5">
        <h1 className="text-info text-center py-5"> Login Now</h1>
        <form className="form-width" onSubmit={signInUser}>
          <div class="form-outline mb-4">
            <input
              type="email"
              name="email"
              placeholder="enter your email"
              id="form2Example1"
              class="form-control"
            />
            <label class="form-label" for="form2Example1">
              Email address
            </label>
          </div>

          <div class="form-outline mb-4">
            <input
              name="password"
              type="password"
              placeholder="enter your password"
              id="form2Example2"
              class="form-control"
            />
            <label class="form-label" for="form2Example2">
              Password
            </label>
          </div>

          <div class="row mb-4">
            <div class="col d-flex justify-content-center">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example34"
                  checked
                />
                <label class="form-check-label" for="form2Example34">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div class="col">
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          <button type="submit" class="btn btn-primary btn-block mb-4">
            Sign in
          </button>

          <div class="text-center">
            <p>
              Not a member? <a href="/register">Register</a>
            </p>
            <p>or sign up with:</p>
            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-facebook-f"></i>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-google"></i>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-twitter"></i>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-github"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
