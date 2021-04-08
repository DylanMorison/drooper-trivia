import { PASSWORD_RESET_CODE } from "../actions/types";

export default function (state = { email: null, code: null }, action) {
	switch (action.type) {
		case PASSWORD_RESET_CODE:
			return { ...state, email: action.payload.email, code: action.payload.code };
		default:
			return state;
	}
}
