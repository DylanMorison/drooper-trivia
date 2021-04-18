import React from "react";
import { Redirect } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";

const Signup = () => {
	const auth = useAppSelector((state) => state.auth.isAuthenticated);
	if (auth) {
		return <Redirect to="/trivias" />;
	}
	return <div>Signup</div>;
};

export default Signup;
