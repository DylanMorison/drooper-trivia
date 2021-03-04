import { SIGNIN, LOGOUT, SIGNUP, LOAD_USER, PASSWORD_RESET_CODE } from "./types";
import axios from "axios";
import setJwtToken from "../utils/setJwtToken";
import { urlSetter } from "../utils/urls";

const baseUrl = urlSetter();

const url = baseUrl.backEndURL + "/auth";

export const loadUser = () => async (dispatch) => {
	if (localStorage.jwt_token) {
		setJwtToken(localStorage.jwt_token);
	}

	try {
		const res = await axios.get(url);
		dispatch({ type: LOAD_USER, payload: res.data });
	} catch (err) {
		console.log(err.msg);
	}
};

export const signin = (email, password) => async (dispatch) => {
	debugger;

	const res = await axios.post(`${url}/signin`, {
		email,
		password
	});

	dispatch({ type: SIGNIN, payload: res.data });
};

export const signup = (email, password) => async (dispatch) => {
	debugger;

	const res = await axios.post(`${url}/signup`, {
		email,
		password
	});

	dispatch({ type: SIGNUP, payload: res.data });
};

export const logout = () => (dispatch) => {
	dispatch({
		type: LOGOUT
	});
};

export const getResetCode = (email) => async (dispatch) => {
	const res = await axios.post(`${url}/password-reset-code`, { email });
	debugger;
	dispatch({
		type: PASSWORD_RESET_CODE,
		payload: res.data
	});
};
