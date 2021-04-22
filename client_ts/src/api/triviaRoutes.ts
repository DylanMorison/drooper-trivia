import { createAxiosConfig } from "./axiosSetup";

const triviaApi = {
	fetchTrivias: createAxiosConfig("get", "/triv", null)
};

export default triviaApi;
