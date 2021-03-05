import { SIGNUP, SIGNIN, LOGOUT, LOAD_USER } from "../actions/types";

const initialState = {
	isAuthenticated: false,
	userId: null,
	loading: true,
	isVerified: false
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case LOAD_USER:
			return {
				...state,
				isAuthenticated: true,
				userId: payload._id,
				loading: false
			};
		case SIGNIN:
		case SIGNUP:
			const { token, userId, isVerified } = payload;
			localStorage.setItem("Authorization", "Bearer " + token);
			return { ...state, userId, isAuthenticated: true, loading: false, isVerified };
		case LOGOUT:
			localStorage.removeItem("Authorization");
			return {
				...state,
				isAuthenticated: false,
				userId: null,
				loading: false
			};
		default:
			return state;
	}
}
