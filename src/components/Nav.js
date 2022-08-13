import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.config";

const Nav = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (user) {
    console.log(user);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
          </ul>
          {user?.email ? (
            <button className="btn btn-danger" onClick={() => signOut(auth)}>
              Sign Out
            </button>
          ) : (
            <>
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
              <span className="mx-2"></span>
              <Link to="/register" className="btn btn-success">
                {" "}
                Join now{" "}
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
