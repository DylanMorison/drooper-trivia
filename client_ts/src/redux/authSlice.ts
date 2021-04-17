import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    id: "",
  },
  reducers: {
    loadUser: (state) => {
      state.isAuthenticated = true;
      state.id = "1234";
    },
    logout: function (state) {
      state.isAuthenticated = false;
      state.id = "";
    },
  },
});

const { actions, reducer } = authSlice;

// loadUser action has type "auth/loadUser"
export const { loadUser, logout } = actions;

export default reducer;
