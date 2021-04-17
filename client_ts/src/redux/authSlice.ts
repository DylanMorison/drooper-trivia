import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		auth: false,
		id: ""
	},
	reducers: {
		loadUser: (state) => {
			state.auth = true;
			state.id = "1234";
		},
		logout: function (state) {
			state.auth = false;
			state.id = "";
		}
	}
});

const { actions, reducer } = authSlice;

// loadUser action has type "auth/loadUser"
export const { loadUser, logout } = actions;

export default reducer;
