import { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logout } from "../../actions/auth";

export const Logout = ({ logout, isAuthenticated }) => {
	useEffect(() => logout(), []);

	if (!isAuthenticated) {
		return <Redirect to="/signin" />;
	} else return null;
};

const mapStateToProps = (state) => ({ isAuthenticated: state.auth.isAuthenticated });

export default connect(mapStateToProps, { logout })(Logout);
