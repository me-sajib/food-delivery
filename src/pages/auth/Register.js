import React from "react";

const Register = () => {
  return (
    <div className="container">
      <div className="py-5">
        <h1 className="text-warning text-center py-5">
          Become a our member? Register now
        </h1>
        <form className="form-width">
          <div class="row mb-4">
            <div class="col">
              <div class="form-outline">
                <input
                  type="text"
                  id="form3Example1"
                  placeholder="first name"
                  class="form-control"
                />
                <label class="form-label" for="form3Example1">
                  First name
                </label>
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <input
                  type="text"
                  placeholder="last name"
                  id="form3Example2"
                  class="form-control"
                />
                <label class="form-label" for="form3Example2">
                  Last name
                </label>
              </div>
            </div>
          </div>

          <div class="form-outline mb-4">
            <input
              type="number"
              placeholder="example: 01XXXXXXXXX"
              id="form3Example33"
              class="form-control"
            />
            <label class="form-label" for="form3Example33">
              Phone Number
            </label>
          </div>

          <div class="form-outline mb-4">
            <input
              type="email"
              placeholder="enter your email"
              id="form3Example3"
              class="form-control"
            />
            <label class="form-label" for="form3Example3">
              Email address
            </label>
          </div>

          <div class="form-outline mb-4">
            <input
              type="password"
              placeholder="enter your secure password"
              id="form3Example4"
              class="form-control"
            />
            <label class="form-label" for="form3Example4">
              Password
            </label>
          </div>

          <div class="form outline mb-4">
            <select
              name="role"
              id="user"
              className="form-select"
              aria-label="Default select"
            >
              <option selected>User</option>
            </select>{" "}
            <label class="form-label" for="user">
              Role
            </label>
          </div>

          <button type="submit" class="btn btn-primary btn-block mb-4">
            Sign up
          </button>

          <div class="text-center">
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

export default Register;
