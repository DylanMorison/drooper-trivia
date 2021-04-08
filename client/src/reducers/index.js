import { combineReducers } from "redux";
import authReducer from "./authReducer";
import triviaReducer from "./triviaReducer";
import PasswordResetReducer from "./PasswordResetReducer";
import currentTriviaReducer from "./currentTriviaReducer";
import loadingReducer from "./loadingReducer";

export default combineReducers({
	auth: authReducer,
	allTrivias: triviaReducer,
	PasswordReset: PasswordResetReducer,
	currentTriviaToEdit: currentTriviaReducer,
	isLoading: loadingReducer
});
