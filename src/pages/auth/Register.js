import { updateProfile } from "firebase/auth";
import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.config";
import { Link, useNavigate } from "react-router-dom";
import { FaStarOfLife } from "react-icons/fa";
import { BsFacebook, BsGoogle, BsTwitter } from "react-icons/bs";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigateToHome = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(email, password);
    updateProfile(auth, { displayName: firstName });
  };
  if (error) {
    console.log(error);
  }

  // useEffect(() => {
  //   navigateToHome("/");
  // }, [navigateToHome]);
  if (user) {
    navigateToHome("/");
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="py-5">
        <h1 className="text-warning text-center py-5">
          Become a our member? Register now
        </h1>
        {/* <form className="form-width" onSubmit={registerUser}>
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <input
                  type="text"
                  id="form3Example1"
                  placeholder="first name"
                  className="form-control"
                  name="firstName"
                />
                <label className="form-label" for="form3Example1">
                  First name
                </label>
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input
                  type="text"
                  placeholder="last name"
                  id="form3Example2"
                  className="form-control"
                  name="lastName"
                />
                <label className="form-label" for="form3Example2">
                  Last name
                </label>
              </div>
            </div>
          </div>

          <div className="form-outline mb-4">
            <input
              type="number"
              placeholder="example: 01XXXXXXXXX"
              id="form3Example33"
              className="form-control"
              name="phone"
            />
            <label className="form-label" for="form3Example33">
              Phone Number
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="email"
              placeholder="enter your email"
              id="form3Example3"
              className="form-control"
              name="email"
            />
            <label className="form-label" for="form3Example3">
              Email address
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="password"
              placeholder="enter your secure password"
              id="form3Example4"
              className="form-control"
              name="password"
            />
            <label className="form-label" for="form3Example4">
              Password
            </label>
          </div>

          <div className="form outline mb-4">
            <select
              name="role"
              id="user"
              className="form-select"
              aria-label="Default select"
            >
              <option selected>User</option>
            </select>{" "}
            <label className="form-label" for="user">
              Role
            </label>
          </div>

          <button type="submit" className="btn btn-primary btn-block mb-4">
            Sign up
          </button>

          <div className="text-center">
            <p>or sign up with:</p>
            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-facebook-f"></i>
            </button>

            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-google"></i>
            </button>

            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-twitter"></i>
            </button>

            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-github"></i>
            </button>
          </div>
        </form> */}

        <form action="" className="form-width">
          <div className="row  ">
            <div className="col container ">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control "
                  placeholder="name@example.com"
                  id="floatingInputGrid"
                />
                <label for="floatingInputGrid">
                  Full Name{" "}
                  <span>
                    <FaStarOfLife size={10} className="text-danger mb-2 " />
                  </span>
                </label>

                <div className="form-floating mt-2">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="name@example.com"
                    id="floatingInputGrid"
                  />
                  <label for="floatingInputGrid">
                    Mobile Number{" "}
                    <span>
                      <FaStarOfLife size={10} className="text-danger mb-2 " />
                    </span>
                  </label>
                </div>

                <div className="form-floating mt-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="name@example.com"
                    id="floatingInputGrid"
                  />
                  <label for="floatingInputGrid">
                    Address{" "}
                    <span>
                      <FaStarOfLife size={10} className="text-danger mb-2 " />
                    </span>
                  </label>
                </div>

                <div className="form-floating mt-2">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="name@example.com"
                    id="floatingInputGrid"
                  />
                  <label for="floatingInputGrid">
                    Email Address{" "}
                    <span>
                      <FaStarOfLife size={10} className="text-danger mb-2 " />
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="form-floating mt-2">
              <select className="form-select" id="floatingSelectGrid">
                <option selected>Select Your Role</option>
                <option value="user">User</option>
              </select>
              <label for="floatingInputGrid">
                Your Role
                <span>
                  <FaStarOfLife size={10} className="text-danger mb-2 " />
                </span>
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary  my-4">
            Register
          </button>
        </form>

        <div className="d-flex justify-content-center align-items-baseline">
          <p>Already have an Account? </p>
          <Link to="/login">Login</Link>
        </div>

        <div className="text-center mt-4">
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
