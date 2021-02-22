import { SIGNIN, LOGOUT, SIGNUP, LOAD_USER } from "./types";
import axios from "axios";
import setJwtToken from "../utils/setJwtToken";

export const loadUser = () => async (dispatch) => {
	if (localStorage.jwt_token) {
		setJwtToken(localStorage.jwt_token);
	}

	try {
		const res = await axios.get("http://localhost:5000/api/auth/");
		dispatch({ type: LOAD_USER, payload: res.data });
	} catch (err) {
		console.log(err.msg);
	}
};

export const signin = (email, password) => async (dispatch) => {
	const res = await axios.post("http://localhost:5000/api/auth/signin", {
		email,
		password
	});

	dispatch({ type: SIGNIN, payload: res.data });
};

export const signup = (email, password) => async (dispatch) => {
	const res = await axios.post("http://localhost:5000/api/auth/signup", {
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
