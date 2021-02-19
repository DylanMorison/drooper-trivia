const initialState = {
	//jwt_token: localStorage.getItem("token"),
	isAuthenticated: false,
	user_id: null
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		default:
			return state;
	}
}
