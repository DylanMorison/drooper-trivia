import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadUser } from "../../actions/auth";
import Loading from "../Loading";

const ProtectedRoute = ({ component: Component, isAuth, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props => {
				if (isAuth) {
					return <Component {...rest} {...props} />;
				} else {
					return <Redirect to="/unauthorized" />;
				}
			}}
		/>
	);
};
export default ProtectedRoute;
