import { SIGNUP, SIGNIN, LOGOUT } from "../components/actions/types";

const initialState = {
	//jwt_token: localStorage.getItem("token"),
	isAuthenticated: false,
	user_id: null
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case SIGNIN:
		case SIGNUP:
			const { token, user_id } = payload;
			return { ...state, token, user_id, isAuthenticated: true };

		default:
			return state;
	}
}
