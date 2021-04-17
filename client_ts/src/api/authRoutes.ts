import { createAxiosConfig } from "./axiosSetup";

export type authType = {
	email: string;
	password: string;
};

const authApi = {
	loadUserConfig: createAxiosConfig("get", "/auth", null),
	signInUserConfig: (data: authType) => createAxiosConfig("post", "/auth/signin", data),
	signUpUserConfig: (data: authType) => createAxiosConfig("post", "/auth/signup", data)
};

export default authApi;
