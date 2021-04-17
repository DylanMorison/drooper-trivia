import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

export type ProtectedRouteProps = {
	auth: boolean;
	authenticationPath: string;
} & RouteProps;

const ProtectedRoute: React.ElementType = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				if (auth) {
					return <Component {...rest} {...props} />;
				} else {
					return <Redirect to="/unauthorized" />;
				}
			}}
		/>
	);
};

export default ProtectedRoute;

//unauthorized
