import { FETCH_TRIVIAS, CREATE_TRIVIA, SET_CURRENT_TRIVIA, LAST_ACTION } from "./types";
import axios from "axios";
import { getConfigObj } from "../utils/configObject";

export const fetchAllTrivias = userId => async dispatch => {
	try {
		const config = getConfigObj("get", "/triv/all-trivs-by-user");
		const res = await axios(config);
		dispatch({ type: FETCH_TRIVIAS, payload: res.data });
	} catch (err) {
		console.log(err.msg);
	}
};

export const deleteTrivia = id => async dispatch => {
	try {
		const config = getConfigObj("delete", "/triv/delete", { id });
		const res = await axios(config);
		dispatch({ type: FETCH_TRIVIAS, payload: res.data });
	} catch (err) {
		console.log(err.msg);
	}
};

export const createTrivia = triviaTitle => async dispatch => {
	try {
		const config = getConfigObj("post", "/triv/create", { triviaTitle });
		const res = await axios(config);
		dispatch({ type: FETCH_TRIVIAS, payload: res.data });
	} catch (err) {
		console.log(err.msg);
	}
};

export const setTrivia = trivia => async dispatch => {
	dispatch({
		type: SET_CURRENT_TRIVIA,
		payload: {
			trivia
		}
	});
};
