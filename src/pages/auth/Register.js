import { updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { BsFacebook, BsGoogle, BsTwitter } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.config";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigateToHome = useNavigate();

  const [passwordError, setPasswordError] = useState("");
  const registerUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    if (password.length < 6) {
      setPasswordError("Password should be at least 6 characters");
      return;
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      setPasswordError("Please Provide at least one uppercase");
      return;
    }
    if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setPasswordError("Please Provide at least one special Character");
      return;
    }

    createUserWithEmailAndPassword(email, password);
    updateProfile(auth, { displayName: name });
    form.reset();
  };
  if (error) {
    console.error(error);
  }

  if (user) {
    navigateToHome("/");
  }

  return (
    <div className="container w-50">
      <div className="">
        <h1 className="text-warning text-center py-4">
          Become a our member? Register now
        </h1>
        <form className="w-50 mx-auto" onSubmit={registerUser}>
          <div className="form-outline mb-3">
            <label className="form-label" for="form2Example1">
              Username
            </label>
            <input
              type="name"
              name="name"
              placeholder="enter your username"
              id="form2Example1"
              className="form-control"
            />
          </div>
          <div className="form-outline mb-3">
            <label className="form-label" for="form2Example1">
              Email address
            </label>
            <input
              type="email"
              name="email"
              placeholder="enter your email"
              id="form2Example1"
              className="form-control"
            />
          </div>
          <div className="form-outline mb-3">
            <label className="form-label" for="form2Example2">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="enter your password"
              id="form2Example2"
              className="form-control"
            />
          </div>
          <p className="text-danger">{passwordError}</p>
          <div className="mx-auto">
            <button className="btn btn-primary ps-5 pe-5" type="submit">
              Submit
            </button>
          </div>
        </form>

        <div className="d-flex justify-content-center align-items-baseline py-3">
          <p>Already have an Account? </p>
          <Link to="/login">Login</Link>
        </div>

        <div className="text-center">
          <p className=" ">Or Register with</p>
          <button type="button" className="btn btn-primary btn-floating mx-1">
            <BsGoogle size={20} />
          </button>

          <button type="button" className="btn btn-primary btn-floating mx-1">
            <BsFacebook size={20} />
          </button>
          <button type="button" className="btn btn-primary btn-floating mx-1">
            <BsTwitter size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
