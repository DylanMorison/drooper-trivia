import React from "react";
import { connect } from "react-redux";
import AuthForm from "./authForm";

export const signup = (props) => {
	const handleSubmit = () => {};

	return (
		<AuthForm
			headerText="Sign Up"
			errorMessage="Error with Sign Up :("
			onSubmit={handleSubmit}
			signup={true}
		/>
	);
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(signup);
