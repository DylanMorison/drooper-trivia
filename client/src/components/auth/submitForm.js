export const submitForm = (
	email,
	password,
	callback,
	setError,
	confirmPassword = null
) => {
	const emailIsValid = testEmail => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(testEmail);
	};

	if (!emailIsValid(email)) {
		setError("Invalid Email");
		return;
	}

	if (password.length <= 5) {
		setError("Password must be atleast 6 characters long");
		return;
	}

	if (confirmPassword && confirmPassword !== password) {
		setError("Passwords do not match");
		return;
	}

	debugger;

	callback(email, password);
};

export const emailVerification = (email, setError) => {
	const emailIsValid = testEmail => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(testEmail);
	};

	if (!emailIsValid(email)) {
		setError("Invalid Email");
		return;
	}

	setError("validEmail");
};
