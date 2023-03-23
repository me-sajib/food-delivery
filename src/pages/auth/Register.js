import React, { useState } from "react";
import { BsFacebook, BsGoogle, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import Form from "../../components/Form";
import Spinner from "../../components/Spinner/Spinner";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const [formData, setFormData] = useState([]);
  const { RegisterUser, authError, isLoading } = useAuth();


  const handleSubmit = (event) => {
    const { email, password, name } = formData;

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
    RegisterUser(email, password, name)
    event.preventDefault();
  };

  const [passwordError, setPasswordError] = useState("");

  const fields = [
    { type: "name", name: "name", value: "", required: true, id: "form2Example1", label: 'Name', class: 'form-control' },
    { type: "email", name: "email", value: "", required: true, id: "form2Example2", label: 'email address', class: 'form-control' },
    { type: "password", name: "password", value: "", required: true, id: "form2Example3", label: 'password', class: 'form-control' },
  ]

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container w-50">
      <div className="">
        <h1 className="text-warning text-center py-4">
          Become a our member? Register now
        </h1>

        <Form fields={fields} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />



        <div className="d-flex justify-content-center align-items-baseline py-3">
          <p>Already have an Account? </p>
          <p className="text-danger">{passwordError}</p>
          <p className="text-danger">{authError}</p>
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
