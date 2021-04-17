import React from "react";
import { useDispatch } from "react-redux";
import { loadUser, logout } from "../../redux/authSlice";
import { useAppDispatch } from "../../redux/hooks";

const AuthButton = () => {
	const dispatch = useAppDispatch();
	return (
		<>
			<button onClick={() => dispatch(loadUser())}>login user</button>
			<button onClick={() => dispatch(logout())}>logout user</button>
		</>
	);
};

export default AuthButton;
