import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

export type ProtectedRouteProps = {
	auth: boolean;
	authenticationPath: string;
} & RouteProps;

const ProtectedRoute: React.ElementType = ({ component: Component, ...rest }) => {
	const auth = useAppSelector((state) => state.auth.isAuthenticated);
	return (
		<Route
			{...rest}
			render={(props) => {
				if (auth) {
					return <Component {...rest} {...props} />;
				} else {
					return <Redirect to="/" />;
				}
			}}
		/>
	);
};

export default ProtectedRoute;
