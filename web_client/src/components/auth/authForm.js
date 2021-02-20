import React, { useState } from "react";
import { Button } from "../Button";
import { connect } from "react-redux";
import { signin, signup } from "../actions/auth";
import submitForm from "./submitForm";
import "./authForm.css";

const AuthForm = ({ headerText, errorMessage, isSignup, signin, signup }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState(null);

	return (
		<div className="authform">
			<div className="container">
				<div>
					<h1>{headerText}</h1>
				</div>
				<form>
					<div>
						<input
							type="text"
							value={email}
							onChange={(e) => {
								setError(null);
								setEmail(e.target.value);
							}}
							placeholder="Email"
						/>
					</div>
					<div>
						<input
							type="password"
							value={password}
							onChange={(e) => {
								setError(null);
								setPassword(e.target.value);
							}}
							placeholder="Password"
						/>
					</div>
					{isSignup ? (
						<div>
							<input
								type="password"
								value={confirmPassword}
								onChange={(e) => {
									setError(null);
									setConfirmPassword(e.target.value);
								}}
								placeholder="Password"
							/>
						</div>
					) : null}
					{error ? (
						<p>
							{error}
							<i className="far fa-frown"></i>
						</p>
					) : null}

					<div>
						<Button
							onClick={(e) => {
								e.preventDefault();
								submitForm(email, password, signin, setError, confirmPassword);
							}}
						>
							Submit
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {};
};

export default connect(mapStateToProps, { signin, signup })(AuthForm);
