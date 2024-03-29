import { SIGNIN, LOGOUT, SIGNUP, LOAD_USER, PASSWORD_RESET_CODE } from "./types";
import { LOADING, NOT_LOADING } from "../actions/types";

import axios from "axios";
// import setJwtToken from "../utils/setJwtToken";
import { urlSetter } from "../utils/urls";
import { getConfigObj } from "../utils/configObject";

const baseUrl = urlSetter();

const url = baseUrl.backEndURL + "/auth";

export const loadUser = () => async dispatch => {
	const config = getConfigObj("get", "/auth");
	try {
		const res = await axios(config);
		dispatch({ type: LOAD_USER, payload: res.data });
	} catch (err) {
		console.log(err.msg);
	}
};

export const signin = (email, password) => async dispatch => {
	const config = getConfigObj("post", "/auth/signin", { email, password });

	try {
		dispatch({ type: LOADING });
		const res = await axios(config);
		dispatch({ type: NOT_LOADING });

		dispatch({ type: SIGNIN, payload: res.data });
	} catch (err) {
		console.log(err);
	}
};

export const signup = (email, password) => async dispatch => {
	const config = getConfigObj("post", "/auth/signup", { email, password });

	try {
		dispatch({ type: LOADING });
		const res = await axios(config);
		dispatch({ type: NOT_LOADING });
		dispatch({ type: SIGNUP, payload: res.data });
	} catch (err) {
		console.log(err);
	}
};

export const logout = () => dispatch => {
	dispatch({
		type: LOGOUT
	});
};

export const getResetCode = email => async dispatch => {
	const res = await axios.post(`${url}/password-reset-code`, { email });
	dispatch({
		type: PASSWORD_RESET_CODE,
		payload: res.data
	});
};
