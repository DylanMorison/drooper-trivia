import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import authApi, { authDataType } from "../api/authRoutes";
import axios, { AxiosResponse } from "axios";
import { checkLocalStorage } from "./utils/checkLocalStorage";

export interface loginResponseData {
	id: string;
	token: string;
}

export interface iAuthSlice {
	isAuthenticated: boolean;
	id: string | null;
}

const authSlice = createSlice({
	name: "auth",
	initialState: {
		isAuthenticated: checkLocalStorage("authorization"),
		id: null
	} as iAuthSlice,
	reducers: {
		loginUser: (state, { payload }: PayloadAction<loginResponseData>) => {
			if (!checkLocalStorage("authorization")) {
				localStorage.setItem("authorization", payload.token);
			}
			state.isAuthenticated = true;
			state.id = payload.id;
		},
		loadUser: (state) => {
			state.isAuthenticated = true;
			state.id = "1234";
			localStorage.setItem("authorization", "1234");
		},
		logout: function (state) {
			state.isAuthenticated = false;
			state.id = null;
			localStorage.removeItem("authorization");
			localStorage.removeItem("trivias");
		}
	}
	// extraReducers: (builder) => {
	// 	builder.addCase(loginUser.fulfilled, (state, { payload }) => {
	// 		const { id, token } = payload;
	// 		state.id = id;
	// 		state.isAuthenticated = true;
	// 		if (!checkLocalStorage("authorization")) {
	// 			localStorage.setItem("authorization", token);
	// 		}
	// 	});
	// }
});

const { actions, reducer } = authSlice;

const { loadUser, logout, loginUser } = actions;

export const loginUserThunk = createAsyncThunk(
	"trivia/fetchUserTrivias",
	async (postData: authDataType, { dispatch }) => {
		const config = authApi.signInUserConfig(postData);
		try {
			const results: AxiosResponse<loginResponseData> = await axios(config);
			const { id, token } = results.data;
			dispatch(loginUser({ id, token }));
		} catch (err) {
			console.error("Unable to login user", err);
		}
	}
);

export { actions };

export default reducer;
