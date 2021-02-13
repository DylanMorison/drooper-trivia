import axios from "axios";
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT
} from "./types";
import setAuthToken from "../utils/setAuthToken";

// Load User
export const loadUser = () => async (dispatch) => {
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}

	try {
		const res = await axios.get("/api/auth");

		dispatch({
			type: USER_LOADED,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: AUTH_ERROR
		});
	}
};

// Login User
export const login = (email, password) => async (dispatch) => {
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	};

	const body = JSON.stringify({ email, password });

	try {
		const res = await axios.post("http://localhost:5000/api/auth/signin", body, config);

		dispatch({ type: LOGIN_SUCCESS, payload: res.data });
		dispatch(loadUser());
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
		}
		dispatch({
			type: LOGIN_FAIL
		});
	}
};
