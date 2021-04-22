import { AxiosRequestConfig, Method } from "axios";

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

type endpointType = "/auth/signin" | "/auth/signup" | "/auth" | "/triv";

export const createAxiosConfig = <PostDataType>(
	method: Method,
	endpoint: endpointType,
	data: PostDataType | null
) => {
	const backEndUrl = urlSetter().backEndURL;

	const config: AxiosRequestConfig = {
		method,
		url: backEndUrl + endpoint,
		headers: {
			"Content-Type": "application/json",
			authorization: localStorage.getItem("authorization")
		},
		data: JSON.stringify(data)
	};

	return config;
};
