import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/UseThemeContext";
import auth from "../firebase.config";
import Spinner from "./Spinner/Spinner";

const Nav = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Spinner />;
  }

  console.log(user);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <a className="navbar-brand" href="#/">
          FD
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
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
          </ul>
          <div className="pe-4">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={toggleTheme}
              />
              <label
                className="form-check-label text-dark"
                htmlFor="flexSwitchCheckDefault"
              >
                {theme === "dark" ? "Dark" : "Light"}
              </label>
            </div>
          </div>
          {user?.email ? (
            <button className="btn btn-danger" onClick={() => signOut(auth)}>
              Sign Out
            </button>
          ) : (
            <>
              <Link to="/login" className="btn btn-info">
                Login
              </Link>
              <span className="mx-2"></span>
              <Link to="/register" className="btn btn-warning">
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
