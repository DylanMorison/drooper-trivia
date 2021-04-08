const urlSetter = () => {
	if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
		// dev
		return {
			frontEndURL: "http://localhost:3000",
			backEndURL: "http://localhost:5000/api"
		};
	} else {
		// prod
		return {
			frontEndURL: "https://drooper-trivia.morison.io",
			backEndURL: "https://drooper-trivia.morison.io/api"
		};
	}
};

export const getConfigObj = (method, endpoint, data = null) => {
	const backEndUrl = urlSetter().backEndURL;

	const config = {
		method,
		url: backEndUrl + endpoint,
		headers: {
			"Content-Type": "application/json",
			Authorization: localStorage.getItem("Authorization")
		},
		data: JSON.stringify(data)
	};

	return config;
};
