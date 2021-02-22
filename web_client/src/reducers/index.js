import { combineReducers } from "redux";
import authReducer from "./authReducer";
import triviaReducer from "./triviaReducer";

export default combineReducers({
	auth: authReducer,
	userTrivias: triviaReducer
});
