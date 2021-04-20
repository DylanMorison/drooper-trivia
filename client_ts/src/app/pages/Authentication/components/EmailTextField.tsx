import { TextField } from "@material-ui/core";
import React from "react";

interface EmailFieldProps {
	email: string;
	setEmail: React.Dispatch<React.SetStateAction<string>>;
	emailError: boolean;
}

export const EmailTextField = ({ email, setEmail, emailError }: EmailFieldProps) => {
	return (
		<>
			<TextField
				variant="outlined"
				margin="normal"
				required
				fullWidth
				id="email"
				label="Email Address"
				name="email"
				autoComplete="email"
				autoFocus
				error={emailError ? true : false}
				helperText={emailError ? "invalid email" : ""}
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
		</>
	);
};

interface PasswordFieldProps {
	password: string;
	setPassword: React.Dispatch<React.SetStateAction<string>>;
}

export const PasswordTextField = ({ password, setPassword }: PasswordFieldProps) => {
	return (
		<>
			<TextField
				variant="outlined"
				margin="normal"
				required
				fullWidth
				name="password"
				label="Password"
				type="password"
				id="password"
				autoComplete="current-password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
		</>
	);
};
