import { useEffect } from "react";
import { connect } from "react-redux";
import { logout } from "../actions/auth";

export const Logout = ({ logout }) => {
	useEffect(() => logout(), []);

	return null;
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { logout })(Logout);
