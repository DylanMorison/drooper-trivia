import { configureStore } from "@reduxjs/toolkit";
import authRedcer from "./authSlice";

const store = configureStore({
  reducer: { auth: authRedcer },
});

export default store;
