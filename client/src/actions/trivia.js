import { FETCH_TRIVIAS, CREATE_TRIVIA, SET_CURRENT_TRIVIA, LAST_ACTION } from "./types";
import { LOADING, NOT_LOADING } from "../actions/types";

import axios from "axios";
import { getConfigObj } from "../utils/configObject";

export const fetchAllTrivias = userId => async dispatch => {
	try {
		const config = getConfigObj("get", "/triv/all-trivs-by-user");
		dispatch({ type: LOADING });
		const res = await axios(config);
		dispatch({ type: NOT_LOADING });
		dispatch({ type: FETCH_TRIVIAS, payload: res.data });
	} catch (err) {
		console.log(err.msg);
	}
};

export const deleteTrivia = id => async dispatch => {
	try {
		const config = getConfigObj("delete", "/triv/delete", { id });
		dispatch({ type: LOADING });
		const res = await axios(config);
		dispatch({ type: NOT_LOADING });
		dispatch({ type: FETCH_TRIVIAS, payload: res.data });
	} catch (err) {
		console.log(err.msg);
	}
};

export const createTrivia = triviaTitle => async dispatch => {
	try {
		const config = getConfigObj("post", "/triv/create", { triviaTitle });
		dispatch({ type: LOADING });
		const res = await axios(config);
		dispatch({ type: NOT_LOADING });
		dispatch({ type: CREATE_TRIVIA, payload: res.data });
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
