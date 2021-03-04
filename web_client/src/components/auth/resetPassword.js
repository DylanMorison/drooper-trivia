import React, { useState } from "react";
import { connect } from "react-redux";
import { Button } from "../Button";
import { Redirect, Link } from "react-router-dom";
import { emailVerification } from "./submitForm";

import "./authForm.css";

export const ResetPassword = (props) => {
	const [email, setEmail] = useState("");
	const [error, setError] = useState(null);

	if (error === "validEmail") return <Redirect to="/new-password" />;

	return (
		<div className="authform">
			<div className="container">
				<div>
					<h1>Password Reset</h1>
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

					{error ? (
						<p>
							{error}
							<i className="farfa-frown"></i>
						</p>
					) : null}

					<Button
						onClick={(e) => {
							e.preventDefault();
							emailVerification(email, setError);
						}}
					>
						Submit
					</Button>
				</form>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
