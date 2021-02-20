import { SIGNIN, LOGOUT, SIGNUP } from "./types";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
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
