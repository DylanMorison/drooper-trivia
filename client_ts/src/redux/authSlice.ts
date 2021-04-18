import { createSlice } from "@reduxjs/toolkit";

const checkLocalStorage = () => {
	if (localStorage.getItem("authorization")) {
		return true;
	} else return false;
};

const authSlice = createSlice({
	name: "auth",
	initialState: {
		isAuthenticated: checkLocalStorage(),
		id: ""
	},
	reducers: {
		loadUser: (state) => {
			state.isAuthenticated = true;
			state.id = "1234";
			localStorage.setItem("authorization", "1234");
		},
		logout: function (state) {
			state.isAuthenticated = false;
			state.id = "";
			localStorage.removeItem("authorization");
		}
	}
});

const { actions, reducer } = authSlice;

// loadUser action has type "auth/loadUser"
export const { loadUser, logout } = actions;

export default reducer;
