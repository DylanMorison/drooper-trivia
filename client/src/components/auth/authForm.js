import React, { useState } from "react";
import { Button } from "../Button";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { signin, signup } from "../../actions/auth";
import { submitForm } from "./submitForm";
import "./authForm.css";

const AuthForm = ({ headerText, isSignup, signin, isAuthenticated, signup }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState(null);

	if (isAuthenticated) {
		return <Redirect to="/trivia/view" />;
	}

	const callback = (email, password) => {
		if (isSignup) {
			signup(email, password);
		} else {
			signin(email, password);
		}
	};

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
							onChange={e => {
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
							onChange={e => {
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
								onChange={e => {
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
							onClick={e => {
								e.preventDefault();
								submitForm(email, password, callback, setError, confirmPassword);
							}}
						>
							Submit
						</Button>
					</div>

					{isSignup ? (
						<Link to="/signin">
							<a href="#">Already signed up?</a>
						</Link>
					) : (
						<Link to="/reset-password">
							<a href="#">Forot Password?</a>
						</Link>
					)}
				</form>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({ isAuthenticated: state.auth.isAuthenticated });

export default connect(mapStateToProps, { signin, signup })(AuthForm);
