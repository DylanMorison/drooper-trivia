import React from "react";
import { connect } from "react-redux";

import AuthForm from "./authForm";

export const signin = (props) => {
	const handleSubmit = () => {};

	return (
		<div>
			<AuthForm
				headerText="Sign In!"
				errorMessage="Error with Sign In :("
				onSubmit={handleSubmit}
				signup={false}
			/>
		</div>
	);
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(signin);
