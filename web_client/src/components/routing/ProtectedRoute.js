import React from "react";
import { Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
	<Route
		{...rest}
		render={(props) => {
			return <Component {...rest} />;
		}}
	/>;
};

export default ProtectedRoute;
