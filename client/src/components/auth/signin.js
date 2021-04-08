import React from "react";
import AuthForm from "./authForm";

export const signin = (props) => {
	return (
		<div>
			<AuthForm
				headerText="Sign In"
				errorMessage="Error with Sign In :("
				isSignup={false}
			/>
		</div>
	);
};

export default signin;
