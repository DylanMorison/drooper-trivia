import React from "react";
import AuthForm from "./authForm";

export const signup = (props) => {
	return (
		<AuthForm headerText="Sign Up" errorMessage="Error with Sign Up :(" isSignup={true} />
	);
};

const mapStateToProps = (state) => ({});

export default signup;
