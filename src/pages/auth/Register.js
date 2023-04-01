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
    // useEffect(() => {
    //   navigateToHome("/");
    // }, [navigateToHome]);

    if (user) {
        navigateToHome("/");
    }

    if (loading) {
        return <div>Loading...</div>;
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
                    <div>
                        <button type="submit" className="btn btn-warning text-white rounded-0 fw-semibold btn-block mb-4">
                            Sign up
                        </button>
                        <p>already you have an account? <Link to="/login">login</Link> now.</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
