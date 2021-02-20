import { SIGNUP, SIGNIN, LOGOUT } from "../components/actions/types";

const initialState = {
	//jwt_token: localStorage.getItem("jwt_token"),
	isAuthenticated: false,
	user_id: null
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case SIGNIN:
		case SIGNUP:
			const { token, user_id } = payload;
			localStorage.setItem("jwt_token", token);
			return { ...state, token, user_id, isAuthenticated: true };
		case LOGOUT:
			localStorage.removeItem("jwt_token");
			return {
				...state,
				token: null,
				isAuthenticated: false,
				user_id: null
			};
		default:
			return state;
	}
}
