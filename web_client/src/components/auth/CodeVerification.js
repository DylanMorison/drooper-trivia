import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

import { Button } from "../Button";

export const CodeVerification = ({ PasswordReset: { email, code } }) => {
	const [userCode, setUserCode] = useState("");
	const [error, setError] = useState(null);

	// if (!email) {
	// 	return <Redirect to="/signin" />;
	// }

	const compareCodes = () => {
		if (userCode === code.toString()) {
			return <Redirect to="/new-password-form" />;
		}
	};

	return (
		<div className="authform">
			<div className="container">
				<div>
					<h1>Enter Code</h1>
				</div>
				<form>
					<div>
						<input
							type="text"
							value={userCode}
							onChange={(e) => {
								setError(null);
								if (
									userCode.length <= 5 ||
									e.nativeEvent.inputType === "deleteContentBackward"
								) {
									setUserCode(e.target.value);
								}
							}}
							placeholder="Code Verification"
						/>
					</div>

					{error ? (
						<p>
							{error}
							<i className="farfa-frown"></i>
						</p>
					) : null}

					<Button
						onClick={(e) => {
							e.preventDefault();
						}}
					>
						Submit
					</Button>
				</form>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	PasswordReset: state.PasswordReset
});

export default connect(mapStateToProps)(CodeVerification);
