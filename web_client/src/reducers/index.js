import { combineReducers } from "redux";
import authReducer from "./authReducer";
import triviaReducer from "./triviaReducer";
import PasswordResetReducer from "./PasswordResetReducer";

export default combineReducers({
	auth: authReducer,
	userTrivias: triviaReducer,
	PasswordReset: PasswordResetReducer
});
