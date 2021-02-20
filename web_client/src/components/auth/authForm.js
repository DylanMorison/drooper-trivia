import React, { useState } from "react";
import { Button } from "../Button";
import "./authForm.css";

const AuthForm = ({ headerText, errorMessage, onSubmit, signup }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

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
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Email"
						/>
					</div>
					<div>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Password"
						/>
					</div>
					{signup ? (
						<div>
							<input
								type="password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								placeholder="Password"
							/>
						</div>
					) : null}
					<div>
						<Button onClick={onSubmit}>Submit</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AuthForm;
