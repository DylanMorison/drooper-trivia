import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
	<Route
		render={(props) =>
			!auth.isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
		}
	/>
);

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps)(PrivateRoute);
