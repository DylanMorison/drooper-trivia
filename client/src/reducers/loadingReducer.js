import { LOADING, NOT_LOADING } from "../actions/types";

export default function loadingReducer(state = false, action) {
	switch (action.type) {
		case LOADING:
			return true;
		case NOT_LOADING:
			return false;
		default:
			return state;
	}
}
