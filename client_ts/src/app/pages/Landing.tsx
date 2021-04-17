import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { Redirect } from "react-router-dom";
import Trivias from "../pages/Trivias";

const Landing = () => {
	const auth = useAppSelector((state) => state.auth.isAuthenticated);
	if (auth) {
		return <Redirect to="/trivias" />;
	}
	return (
		<div>
			<h1>Landing</h1>
		</div>
	);
};

export default Landing;
