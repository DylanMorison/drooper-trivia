export default function (email, password, callback, confirmPassword = null) {
	const emailIsValid = (testEmail) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(testEmail);
	};

	if (!emailIsValid(email)) {
		return { error: "email invalid" };
	}
}
