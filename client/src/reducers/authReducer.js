import { SIGNUP, SIGNIN, LOGOUT, LOAD_USER } from "../actions/types";

const authCheck = () => {
	if (localStorage.getItem("Authorization")) {
		return true;
	} else {
		return false;
	}
};

const initialState = {
	isAuthenticated: authCheck(),
	userId: null,
	isVerified: false,
	token: localStorage.getItem("Authorization")
};

export default function authReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case LOAD_USER:
			return {
				...state,
				isAuthenticated: true,
				userId: payload._id
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
				userId: null
			};
		default:
			return state;
	}
}
