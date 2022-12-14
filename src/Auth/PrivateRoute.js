import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.config";
// import Spinner from "../Pages/Shared/Spinner";

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return <h1>loading......</h1>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }
  return children;
};

export default PrivateRoute;
