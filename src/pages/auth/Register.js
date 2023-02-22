import { updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { BsFacebook, BsGoogle, BsTwitter } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.config";
import registerImage from "../../images/banner-1.png";


const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [passwordError, setPasswordError] = useState('')
  const [passwordWarning, setPasswordWarning] = useState('')

  const passwordCheck = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const navigateToHome = useNavigate();



  const registerUser = (e) => {
    e.preventDefault();

    const form = e.target;

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const password = form.password.value;
    const role = form.role.value;


    if (!password.match(passwordCheck)) {
      return setPasswordError('The password must be at least 8 characters and contain lowercase, uppercase, number and special characters')
    }

    console.log(error)

    console.log(lastName, phone, role);

    if (password.match(passwordCheck)) {
      setPasswordError('')
      createUserWithEmailAndPassword(email, password);
      updateProfile(auth, { displayName: firstName });
    }
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

  const inputCommonStyle = "form-control border border-1 rounded-0 py-2";

  return (
    <div className="container mx-auto row py-5">
      <div className="col d-flex justify-content-center align-items-center">
        <img className="img-fluid" src={registerImage} alt="registerImage" />
      </div>
      <div className="col px-5">
        <div className="mb-5">
          <h1 className="mb-3 text">Get Started Now</h1>
          <h5 className="fw-bold text-secondary">
            Enter your credentials to access your account
          </h5>
        </div>
        <div className="d-flex gap-4 justify-content-center align-items-center mb-5">
          <button className="py-2 border border-2 w-100 d-flex justify-content-center align-items-center gap-1 h5 text-success bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-google text-success"
              viewBox="0 0 16 16"
            >
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
            </svg>{" "}
            Google
          </button>
          <button className="py-2 border border-2 w-100 d-flex justify-content-center align-items-center gap-1 h5 text-primary bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-facebook"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>{" "}
            Facebook
          </button>
        </div>
        {passwordError && <p className="text-danger fw-semibold text-center">{passwordError}</p>}
        {passwordWarning && <p className="text-warning text-center fw-semibold">{passwordWarning}</p>}
        <form onSubmit={registerUser}>
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <label
                  className="form-label fw-semibold text-secondary"
                  htmlFor="form3Example1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="form3Example1"
                  placeholder="John"
                  className={`${inputCommonStyle}`}
                  name="firstName"
                  required
                />
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <label
                  className="form-label fw-semibold text-secondary"
                  htmlFor="form3Example2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  id="form3Example2"
                  className={`${inputCommonStyle}`}
                  name="lastName"
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-outline mb-4">
            <label
              className="form-label fw-semibold text-secondary"
              htmlFor="form3Example33"
            >
              Phone
            </label>
            <input
              type="number"
              placeholder="01XXXXXXXXX"
              id="form3Example33"
              className={`${inputCommonStyle}`}
              name="phone"
              required
            />
          </div>

          <div className="form-outline mb-4">
            <label
              className="form-label fw-semibold text-secondary"
              htmlFor="form3Example3"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              id="form3Example3"
              className={`${inputCommonStyle}`}
              name="email"
              required
            />
          </div>

          <div className="form-outline mb-4">
            <label
              className="form-label fw-semibold text-secondary"
              htmlFor="form3Example4"
            >
              Password
            </label>
            <input
              onFocus={() => { !passwordError && setPasswordWarning('Password must be strong') }}
              onBlur={() => setPasswordWarning('')}
              type="password"
              placeholder="XXXXXXXX"
              id="form3Example4"
              className={`${inputCommonStyle}`}
              name="password"
              required
            />
          </div>

          <div className="form outline mb-4">
            <label
              className="form-label fw-semibold text-secondary"
              htmlFor="user"
            >
              Role
            </label>
            <select
              name="role"
              id="user"
              className={`${inputCommonStyle}`}
              aria-label="Default select"
              defaultValue={"user"}
              required
            >
              <option>User</option>
              <option>Seller</option>
            </select>
          </div>

          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-warning text-white rounded-0 fw-semibold btn-block mb-4">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
