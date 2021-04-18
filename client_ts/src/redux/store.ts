import { configureStore } from "@reduxjs/toolkit";
import authRedcer from "./authSlice";
import triviaRedcer from "./triviaSlice";

const store = configureStore({
	reducer: { auth: authRedcer, trivia: triviaRedcer }
});

export default store;
