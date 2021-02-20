import { SIGNUP, SIGNIN, LOGOUT, LOAD_USER } from "../actions/types";

const initialState = {
	isAuthenticated: false,
	userId: null
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case LOAD_USER:
			return { ...state, isAuthenticated: true, userId: payload._id };
		case SIGNIN:
		case SIGNUP:
			const { token, userId } = payload;
			localStorage.setItem("jwt_token", token);
			return { ...state, userId, isAuthenticated: true };
		case LOGOUT:
			localStorage.removeItem("jwt_token");
			return {
				...state,
				isAuthenticated: false,
				userId: null
			};
		default:
			return state;
	}
}
