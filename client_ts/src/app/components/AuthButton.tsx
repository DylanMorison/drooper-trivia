import React from "react";
import { useDispatch } from "react-redux";
import { loadUser, logout } from "../../redux/authSlice";

const AuthButton = () => {
	const dispatch = useDispatch();
	return (
		<>
			<button onClick={() => dispatch(loadUser())}>login user</button>
			<button onClick={() => dispatch(logout())}>logout user</button>
		</>
	);
};

export default AuthButton;
