import { SET_CURRENT_TRIVIA } from "../actions/types";

export default function (state = null, action) {
	switch (action.type) {
		case SET_CURRENT_TRIVIA:
			return action.payload;
		default:
			return state;
	}
}
