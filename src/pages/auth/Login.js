import React, { useState } from "react";
// import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { BsFacebook, BsGoogle, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import Form from "../../components/Form";
import Spinner from "../../components/Spinner/Spinner";
import useAuth from "../../Hooks/useAuth";


const Login = () => {
  const [formData, setFormData] = useState([]);
  const { signInUser, authError, isLoading, googleSignIn } = useAuth();



  const handleSubmit = (event) => {
    const { email, password } = formData;
    signInUser(email, password)
    event.preventDefault();
  };

  const handleGoogle = () => {
    googleSignIn();
  }


  if (isLoading) {
    return <Spinner />;
  }


  const fields = [
    { type: "email", name: "email", value: "", required: true, id: "form2Example1", label: 'email address', class: 'form-control' },
    { type: "password", name: "password", value: "", required: true, id: "form2Example2", label: 'password', class: 'form-control' },
    { type: "checkbox", required: true, checked: "checked", label: 'Remember me', class: 'form-check-label' }
  ]

  return (
    <div className="container">
      <div className="">
        <h1 className="text-info text-center py-4"> Login Now</h1>
        <div>


          <Form fields={fields} setFormData={setFormData} handleSubmit={handleSubmit} formData={formData} />




        </div>
        <div className="text-center">
          <p className="text-danger">{authError}</p>

          <p>
            Not a member? <Link to="/register">Register</Link>
          </p>
          <p>or Login with:</p>
          <button onClick={handleGoogle} type="button" className="btn btn-primary btn-floating mx-1">
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

export default Login;
