import { SIGNIN, LOGOUT, SIGNUP, LOAD_USER, PASSWORD_REST } from "./types";
import axios from "axios";
import setJwtToken from "../utils/setJwtToken";

const url = "http://localhost:5000/api/auth/";

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
	const res = await axios.post(`${url}signin`, {
		email,
		password
	});

	dispatch({ type: SIGNIN, payload: res.data });
};

export const signup = (email, password) => async (dispatch) => {
	const res = await axios.post(`${url}signup`, {
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

export const resetEmail = (email) => (dispatch) => {
	const res = axios.post(`${url}password-reset`, { email });

	dispatch({
		type: PASSWORD_REST,
		payload: res.data
	});
};
