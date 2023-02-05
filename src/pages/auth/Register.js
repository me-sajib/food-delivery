import { updateProfile } from "firebase/auth";
import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.config";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaStarOfLife } from "react-icons/fa";
import { BsFacebook, BsGoogle, BsTwitter } from "react-icons/bs";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigateToHome = useNavigate();

  const registerUser = (data) => {
    const { name, email, password } = data;

    createUserWithEmailAndPassword(email, password);
    updateProfile(auth, { displayName: name });
  };
  if (error) {
    console.error(error);
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
        <h1 className="text-warning text-center py-5">
          Become a our member? Register now
        </h1>

        <form onSubmit={handleSubmit(registerUser)} className="form-width">
          <div className="row  ">
            <div className="col form-input-lg">
              {/* user name  */}
              <div className="form-floating mt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  id="floatingInputGrid"
                  {...register("name", {
                    required: "Please Enter Your Name!",
                  })}
                />
                <label htmlFor="floatingInputGrid">
                  Full Name{" "}
                  <span>
                    <FaStarOfLife size={10} className="text-danger mb-2 " />
                  </span>
                </label>

                {errors.name && (
                  <p className="text-danger"> {errors.name?.message} </p>
                )}
              </div>

              {/* mobile number  */}
              <div className="form-floating mt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mobile Number"
                  id="floatingInputGrid"
                  {...register("mobile", {
                    required: "Please Enter Valid Mobile Number!",
                  })}
                />
                <label htmlFor="floatingInputGrid">
                  Mobile Number{" "}
                  <span>
                    <FaStarOfLife size={10} className="text-danger mb-2 " />
                  </span>
                </label>

                {errors.mobile && (
                  <p className="text-danger"> {errors.mobile?.message} </p>
                )}
              </div>

              {/* User address  */}
              <div className="form-floating mt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Address"
                  id="floatingInputGrid"
                  {...register("address", {
                    required: "Please Enter Your Full Address!",
                  })}
                />
                <label htmlFor="floatingInputGrid">
                  Full Address{" "}
                  <span>
                    <FaStarOfLife size={10} className="text-danger mb-2 " />
                  </span>
                </label>

                {errors.address && (
                  <p className="text-danger"> {errors.address?.message} </p>
                )}
              </div>

              {/* User email  */}
              <div className="form-floating mt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="name@example.com"
                  id="floatingInputGrid"
                  {...register("email", {
                    required: "Please Enter Vaild Email!",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format!",
                    },
                  })}
                />
                <label htmlFor="floatingInputGrid">
                  Email{" "}
                  <span>
                    <FaStarOfLife size={10} className="text-danger mb-2 " />
                  </span>
                </label>

                {errors.email && (
                  <p className="text-danger"> {errors.email?.message} </p>
                )}
              </div>

              {/* User password  */}
              <div className="form-floating  mt-2">
                <input
                  type="password"
                  className="form-control"
                  placeholder="********"
                  id="floatingInputGrid"
                  {...register("password", {
                    required: "Please Enter a Strong Password!",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters long",
                    },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                      message:
                        "Password must have uppercase, number and special characters",
                    },
                  })}
                />
                <label htmlFor="floatingInputGrid">
                  Password{" "}
                  <span>
                    <FaStarOfLife size={10} className="text-danger mb-2 " />
                  </span>
                </label>

                {errors.password && (
                  <p className="text-danger"> {errors.password?.message} </p>
                )}
              </div>
            </div>

            {/* user role  */}
            <div className=" mt-2">
              <select
                className="form-select form-select-lg mt-2"
                {...register("role", {
                  required: "Please Select Your Role!",
                })}
              >
                <option value="">Select Your Role</option>
                <option selected value="user">
                  User
                </option>
              </select>
              {errors.role && (
                <p className="text-danger"> {errors.role?.message} </p>
              )}
            </div>
          </div>

          {/* submit button  */}
          <button type="submit" className="btn btn-primary fs-3 fs-bold my-4">
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
