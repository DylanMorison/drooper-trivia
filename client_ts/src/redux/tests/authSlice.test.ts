import store from "../store";
import { checkLocalStorage } from "../utils/checkLocalStorage";
import { actions, loginResponseData, loginUserThunk, iAuthSlice } from "../authSlice";
import { AsyncThunkAction, Dispatch } from "@reduxjs/toolkit";
import { authDataType } from "../../api/authRoutes";

describe("authSlice loginThunk + login", () => {
	let authState: iAuthSlice;

	beforeEach(() => {
		localStorage.removeItem("authorization");
		authState = store.getState().auth;

		expect(checkLocalStorage("authorization")).toBeFalsy();
		expect(authState.id).toBe(null);
		expect(authState.isAuthenticated).toBeFalsy();
	});

	test("loginUser behaves correctly", () => {
		const { loginUser } = actions;

		store.dispatch(loginUser({ id: "id", token: "token" }));

		authState = store.getState().auth;
		expect(checkLocalStorage("authorization")).toBeTruthy();
		expect(authState.id).toBe("id");
		expect(authState.isAuthenticated).toBeTruthy();
	});
});
