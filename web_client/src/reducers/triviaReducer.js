import { FETCH_TRIVIAS, CREATE_TRIVIA } from "../actions/types";

export default function (state = [], action) {
	const { type, payload } = action;

	switch (type) {
		case FETCH_TRIVIAS:
			return payload;
		default:
			return state;
	}
}
