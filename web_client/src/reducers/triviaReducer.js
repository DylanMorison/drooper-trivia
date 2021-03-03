import { FETCH_TRIVIAS, CREATE_TRIVIA } from "../actions/types";

export default function (state = [], action) {
	const { type, payload } = action;

	switch (type) {
		case FETCH_TRIVIAS:
			return payload;
		case CREATE_TRIVIA:
			return [payload, ...state];
		default:
			return state;
	}
}
