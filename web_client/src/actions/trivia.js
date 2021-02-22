import { FETCH_TRIVIAS, CREATE_TRIVIA } from "./types";
import axios from "axios";

export const fetchAllTrivias = (userId) => async (dispatch) => {
	try {
		const res = await axios.get("http://localhost:5000/api/triv/all-trivs-by-user");
		dispatch({ type: FETCH_TRIVIAS, payload: res.data });
	} catch (err) {
		console.log(err.msg);
	}
};
