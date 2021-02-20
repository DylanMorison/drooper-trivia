export default function (email, password, callback, setError, confirmPassword = null) {
	const emailIsValid = (testEmail) => {
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

	callback(email, password);

	return;
}
