import { FETCH_TRIVIAS, CREATE_TRIVIA } from "./types";
import axios from "axios";
import { urlSetter } from "../utils/urls";

const baseUrl = urlSetter();

const url = baseUrl.backEndURL + "/triv";

export const fetchAllTrivias = (userId) => async (dispatch) => {
	try {
		const res = await axios.get(`${url}/all-trivs-by-user`);
		dispatch({ type: FETCH_TRIVIAS, payload: res.data });
	} catch (err) {
		console.log(err.msg);
	}
};

export const createTrivia = () => async (dispatch) => {
	try {
		// const res = await axios.post(`${url}/create`, { title });
		// dispatch({ type: CREATE_TRIVIA, payload: res.data });

		dispatch({
			type: CREATE_TRIVIA,
			payload: {
				triviaTitle: "Untitled Trivia",
				author: "Dylan",
				rounds: [
					{ roundTitle: "roundTitle" },
					{ roundTitle: "roundTitle" },
					{ roundTitle: "roundTitle" },
					{ roundTitle: "roundTitle" },
					{ roundTitle: "roundTitle" },
					{ roundTitle: "roundTitle" },
					{ roundTitle: "roundTitle" },
					{ roundTitle: "roundTitle" }
				],
				competitors: [
					{ competitorName: "competitorName" },
					{ competitorName: "competitorName" },
					{ competitorName: "competitorName" },
					{ competitorName: "competitorName" },
					{ competitorName: "competitorName" },
					{ competitorName: "competitorName" },
					{ competitorName: "competitorName" },
					{ competitorName: "competitorName" }
				],
				createdAt: "2021-02-22T00:48:36.209+00:00",
				updatedAt: "2021-02-22T00:48:36.209+00:00"
			}
		});
	} catch (err) {
		console.log(err.msg);
	}
};
