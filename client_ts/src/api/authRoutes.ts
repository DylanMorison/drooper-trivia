import { createAxiosConfig } from "./axiosSetup";

export interface authDataType {
	email: string;
	password: string;
}

const authApi = {
	loadUserConfig: createAxiosConfig("get", "/auth", null),
	signInUserConfig: (data: authDataType) =>
		createAxiosConfig("post", "/auth/signin", data),
	signUpUserConfig: (data: authDataType) =>
		createAxiosConfig("post", "/auth/signup", data)
};

export default authApi;
