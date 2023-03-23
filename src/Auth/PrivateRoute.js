import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
	const { isLoading, user } = useAuth();
	const location = useLocation();
	if (isLoading) {
		return <Spinner />;
	}
	if (!user) {
		return (
			<Navigate to="/login" state={{ from: location }} replace={true} />
		);
	}
	return children;
};

export default PrivateRoute;
