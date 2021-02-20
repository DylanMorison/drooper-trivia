import React, { useState } from "react";
import { Button } from "../Button";

const AuthForm = ({ headerText, errorMessage, onSubmit, signup }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	return (
		<div>
			<h1>{headerText}</h1>
			<form onSubmit={onSubmit}>
				<label>
					Email:
					<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
				</label>
				<label>
					Password:
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				{signup ? (
					<label>
						Confirm Password:
						<input
							type="password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
					</label>
				) : null}
				<Button>Submit</Button>
			</form>
		</div>
	);
};

export default AuthForm;

{
	/* <AuthForm
				headerText="Sign Up"
				errorMessage={state.errorMessage}
				onSubmit={signup}
			/> */
}
